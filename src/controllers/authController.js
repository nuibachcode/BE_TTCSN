import { handleLogin, handleLogout } from "../services/authServices.js";

const REFRESH_TOKEN_TTL = 14 * 24 * 60 * 60 * 1000; // 14 ngày

const login = async (req, res) => {
  try {
    const data = req.body;
    const result = await handleLogin(data.account, data.password);
    if (result.EC !== 0) {
      return res.status(400).json(result);
    }
    res.cookie("refreshToken", result.DT.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: REFRESH_TOKEN_TTL,
    });

    return res.status(200).json({
      EM: result.EM,
      EC: result.EC,
      DT: {
        user: result.DT.user,
        accessToken: result.DT.accessToken,
      },
    });
  } catch (error) {
    console.log("Lỗi login controller:", error);
    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: null,
    });
  }
};

const logout = async (req, res) => {
  try {
    const ok = await handleLogout(req, res);
    if (!ok) {
      return res.status(500).json({
        EM: "Lỗi server khi logout",
        EC: -1,
        DT: null,
      });
    }

    return res.status(204).end(); // No Content
  } catch (error) {
    console.log("Lỗi logout controller:", error);
    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: null,
    });
  }
};

export { login, logout };
