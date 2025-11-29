"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Payment",
      [
        // Thanh toán cho Booking 1
        {
          amount: 450000, // Tổng 150k + 300k
          method: "cash",
          status: "success",
          transactionCode: null,
          note: "Thu tiền mặt tại quầy",
          bookingId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Thanh toán (cọc) cho Booking 2
        {
          amount: 5000000,
          method: "banking",
          status: "success",
          transactionCode: "VCB123456789",
          note: "Đặt cọc niềng răng",
          bookingId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Payment", null, {});
  },
};
