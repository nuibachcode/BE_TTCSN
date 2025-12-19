"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Tính toán ngày
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    await queryInterface.bulkInsert(
      "Booking",
      [
        // --- BOOKING CHO NGÀY MAI ---
        {
          dateBooking: tomorrow,
          status: "confirmed", // Đã xác nhận
          description: "Đau răng hàm dưới, cần chụp X-quang",
          timeStart: "08:30",
          timeEnd: "09:30",
          patientId: 21, // Bùi Văn Tùng
          scheduleId: 1, // Giả định: Lịch của BS đầu tiên
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dateBooking: tomorrow,
          status: "pending", // Đang chờ duyệt
          description: "Tư vấn bọc răng sứ thẩm mỹ",
          timeStart: "09:30",
          timeEnd: "10:30",
          patientId: 22, // Đinh Thị Tuyết
          scheduleId: 2, // Giả định: Lịch của BS thứ 2
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dateBooking: tomorrow,
          status: "confirmed",
          description: "Nhổ răng khôn (đã hẹn trước)",
          timeStart: "14:00",
          timeEnd: "15:00",
          patientId: 23, // Vương Văn Quyết
          scheduleId: 3, // Giả định: Lịch của BS thứ 3
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // --- BOOKING CHO NGÀY KIA ---
        {
          dateBooking: dayAfter,
          status: "cancelled", // Đã hủy
          description: "Tái khám định kỳ (Khách bận đột xuất)",
          timeStart: "08:00",
          timeEnd: "08:30",
          patientId: 24, // Lý Thị Mộng
          scheduleId: 4, // Giả định: Lịch của BS thứ 4
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dateBooking: dayAfter,
          status: "completed", // Đã khám xong
          description: "Lấy cao răng và đánh bóng",
          timeStart: "10:00",
          timeEnd: "10:45",
          patientId: 25, // Trương Văn Ba
          scheduleId: 5, // Giả định: Lịch của BS thứ 5
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Booking", null, {});
  },
};
