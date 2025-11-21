import express from "express";
import { login, logout } from "../controllers/authController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";
// user
import {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
// right
import {
  adminOnly,
  doctorOnly,
  patientOnly,
} from "../middleware/rightMiddleware.js";
// booking
import {
  createBooking,
  getAllBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";
// doctor info
import {
  createDoctorInfo,
  getAllDoctorInfo,
  getDoctorInfoById,
} from "../controllers/doctorInfoController.js";
// service
import {
  handleCreateService,
  handleGetAllServices,
  handleGetServiceById,
  handleUpdateService,
  handleDeleteService,
} from "../controllers/serviceController.js";
// schedule
import {
  handleCreateSchedule,
  handleGetAllSchedules,
  handleGetScheduleByDate,
  handleDeleteSchedule,
} from "../controllers/scheduleController.js";

const router = express.Router();

/**
 *
 * @param {*} app express app
 */
const initApiRoutes = (app) => {
  // ==============================
  // 1. API AUTH (Xác thực)
  // ==============================
  router.post("/login", login);
  router.post("/logout", protectedRoute, logout);

  // ==============================
  // 2. API USER (Người dùng)
  // ==============================
  // Register: Cho phép public (Bệnh nhân tự đăng ký)
  router.post("/users", createNewUser);
  // Quản lý User: Chỉ Admin được xem/sửa/xóa
  router.get("/users/:id", protectedRoute, adminOnly, getUserById);
  router.get("/users", protectedRoute, adminOnly, getAllUsers);
  router.put("/users/:id", protectedRoute, adminOnly, updateUser);
  router.delete("/users/:id", protectedRoute, adminOnly, deleteUser);

  // ==============================
  // 3. API BOOKING (Đặt lịch)
  // ==============================
  // Tạo lịch: Chỉ cần đăng nhập (protectedRoute) là đặt được
  router.post("/bookings", protectedRoute, createBooking);

  // Quản lý lịch: Tạm thời để AdminOnly (Demo).
  // Thực tế: Bác sĩ cần quyền xem/sửa status lịch của mình.
  router.get("/bookings", protectedRoute, adminOnly, getAllBooking);
  router.get("/bookings/:id", protectedRoute, adminOnly, getBookingById);
  router.put("/bookings/:id", protectedRoute, adminOnly, updateBooking); // Admin/BS xác nhận
  router.delete("/bookings/:id", protectedRoute, adminOnly, deleteBooking); // Chỉ Admin xóa

  // ==============================
  // 4. API DOCTOR INFO (Thông tin Bác sĩ)
  // ==============================
  // Xem danh sách/chi tiết: PUBLIC (Để khách chưa login cũng xem được bác sĩ)
  router.get("/doctor-info", getAllDoctorInfo);
  router.get("/doctor-info/:id", getDoctorInfoById);

  // Tạo/Sửa info: CHỈ ADMIN (Tránh user thường tự phong làm bác sĩ)
  // 👇👇👇 ĐÃ SỬA: Thêm quyền Admin 👇👇👇
  router.post("/doctor-info", protectedRoute, adminOnly, createDoctorInfo);

  // ==============================
  // 5. API SERVICE (Dịch vụ)
  // ==============================
  // Xem dịch vụ: PUBLIC (Để khách xem bảng giá)
  router.get("/services", handleGetAllServices);
  router.get("/services/:id", handleGetServiceById);

  // Quản lý dịch vụ (Thêm/Sửa/Xóa): CHỈ ADMIN
  router.post("/services", protectedRoute, adminOnly, handleCreateService);
  router.put("/services/:id", protectedRoute, adminOnly, handleUpdateService);
  router.delete(
    "/services/:id",
    protectedRoute,
    adminOnly,
    handleDeleteService
  );

  // ==============================
  // 6. API SCHEDULE (Lịch làm việc)
  // ==============================
  // Lấy lịch theo ngày: PUBLIC (Để hiển thị lên web cho khách chọn)
  router.get("/schedule-by-date", handleGetScheduleByDate);

  // Tạo/Xóa lịch: ADMIN hoặc DOCTOR
  // (Ở đây mình để adminOnly cho an toàn demo, nếu muốn bác sĩ tự tạo thì đổi thành doctorOnly hoặc bỏ adminOnly)
  router.post("/schedules", protectedRoute, adminOnly, handleCreateSchedule);
  router.delete(
    "/schedules/:id",
    protectedRoute,
    adminOnly,
    handleDeleteSchedule
  );

  // Xem tất cả lịch: Admin
  router.get("/schedules", protectedRoute, adminOnly, handleGetAllSchedules);

  return app.use("/api", router);
};

export default initApiRoutes;
