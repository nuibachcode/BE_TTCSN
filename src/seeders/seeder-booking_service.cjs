"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Thêm các dịch vụ đã được chọn cho booking
     */
    await queryInterface.bulkInsert(
      "BookingService",
      [
        // Booking 1 (ID: 1) dùng 2 dịch vụ
        {
          bookingId: 1,
          serviceId: 2, // Cạo Vôi Răng
          priceAtBooking: 300000, // Giá tại thời điểm đặt
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // (Bỏ qua dịch vụ trám răng vì chưa seed)

        // Booking 2 (ID: 2) dùng 1 dịch vụ
        {
          bookingId: 2,
          serviceId: 5, // Tư Vấn Chỉnh Nha
          priceAtBooking: 500000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Booking 3 (ID: 3) dùng 1 dịch vụ
        {
          bookingId: 3,
          serviceId: 6, // Nhổ Răng Khôn
          priceAtBooking: 1000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BookingService", null, {});
  },
};
