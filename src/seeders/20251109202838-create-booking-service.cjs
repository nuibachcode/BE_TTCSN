"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BookingService",
      [
        // ===== BOOKING 1: Đau răng hàm dưới =====
        {
          bookingId: 1,
          serviceId: 4, // Khám răng & tư vấn tổng quát
          priceAtBooking: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookingId: 1,
          serviceId: 3, // Nhổ răng khôn không đau
          priceAtBooking: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== BOOKING 2: Tư vấn bọc răng sứ =====
        {
          bookingId: 2,
          serviceId: 4, // Khám răng & tư vấn tổng quát (Miễn phí)
          priceAtBooking: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== BOOKING 3: Nhổ răng khôn (đã hẹn) =====
        {
          bookingId: 3,
          serviceId: 3, // Nhổ răng khôn không đau
          priceAtBooking: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== BOOKING 4: Tái khám (Đã hủy) =====
        {
          bookingId: 4,
          serviceId: 4, // Khám răng & tư vấn tổng quát
          priceAtBooking: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== BOOKING 5: Lấy cao răng =====
        {
          bookingId: 5,
          serviceId: 5, // Lấy cao răng & đánh bóng
          priceAtBooking: 300000,
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
