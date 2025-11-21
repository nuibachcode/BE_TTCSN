import db from "../models/index.cjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import { where } from "sequelize";
dotenv.config();

const ACCESS_TOKEN_TTL = "30m"; // thường dưới 15m
const REFRESH_TOKEN_TTL = 14 * 24 * 60 * 60 * 1000; // 14 ngày

const handleLogin = async (account, password) => {
  try {
    // account = email hoặc account

    // 1. Tìm user theo account hoặc email
    const user = await db.User.findOne({
      where: {
        [db.Sequelize.Op.or]: [{ account: account }, { email: account }],
      },
    });

    if (!user) {
      return {
        EM: "Tài khoản hoặc email không tồn tại",
        EC: 1,
        DT: null,
      };
    }

    // 2. So sánh mật khẩu
    const isMatch = await bcrypt.compare(password, user.passWord);
    if (!isMatch) {
      return {
        EM: "Mật khẩu không chính xác",
        EC: 1,
        DT: null,
      };
    }

    // tạo accessToken với JWT
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: ACCESS_TOKEN_TTL,
      }
    );
    // tạo refresh token
    const refreshToken = crypto.randomBytes(64).toString("hex");

    // tạo session mới để lưu vào refreshToken
    await db.Token.create({
      refreshToken,
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL),
      userId: user.id,
    });
    // trả refreshToken trong cookie
    return {
      EM: "Đăng nhập thành công",
      EC: 0,
      DT: {
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          account: user.account,
          role: user.role,
        },
        accessToken, // JWT
        refreshToken, // chỉ giá trị string, controller sẽ set cookie
      },
    };
  } catch (error) {
    console.log("Lỗi login:", error);
    return {
      EM: "Lỗi server khi đăng nhập",
      EC: 1,
      DT: null,
    };
  }
};

const handleLogout = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;

    // Nếu có token trong cookie → xoá trong DB
    if (token) {
      await db.Token.destroy({
        where: { refreshToken: token },
      });
    }

    // Xóa cookie dù token có hay không
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return true;
  } catch (error) {
    console.log("Lỗi logout service:", error);
    return false;
  }
};
export { handleLogin, handleLogout };
