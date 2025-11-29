"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BookingService",
      [
        // Booking 1 dùng dịch vụ 1 (Khám) và 2 (Cạo vôi)
        {
          bookingId: 1,
          serviceId: 1,
          priceAtBooking: 150000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookingId: 1,
          serviceId: 2,
          priceAtBooking: 300000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Booking 2 dùng dịch vụ 4 (Niềng răng - ví dụ)
        {
          bookingId: 2,
          serviceId: 4,
          priceAtBooking: 30000000,
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
