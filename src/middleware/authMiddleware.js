import jwt from "jsonwebtoken";
import db from "../models/index.cjs";

export const protectedRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({ message: "Thiếu Authorization header" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Không có Access Token" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Token không hợp lệ hoặc hết hạn" });
      }

      console.log("Decoded token:", decoded);

      const user = await db.User.findOne({
        where: { id: decoded.id },
        attributes: { exclude: ["passWord"] },
      });

      if (!user) {
        return res.status(404).json({
          message: "Không tìm thấy người dùng",
        });
      }

      // chuyển log xuống sau khi gán
      req.user = user;
      console.log("Middleware chạy OK, user:", req.body);

      next();
    });
  } catch (error) {
    console.log("Lỗi authMiddleware:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
