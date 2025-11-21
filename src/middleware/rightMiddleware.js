// rightMiddleware.js
export const adminOnly = (req, res, next) => {
  if (req.user.roleId !== 1) {
    return res.status(403).json({ message: "Bạn không có quyền" });
  }
  next();
};

export const doctorOnly = (req, res, next) => {
  if (req.user.roleId !== 2) {
    return res.status(403).json({ message: "Bạn không có quyền" });
  }
  next();
};

export const patientOnly = (req, res, next) => {
  if (req.user.roleId !== 3) {
    return res.status(403).json({ message: "Bạn không có quyền" });
  }
  next();
};
