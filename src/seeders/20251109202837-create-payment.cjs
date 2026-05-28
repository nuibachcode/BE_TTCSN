"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Payment", // 🛑 ĐÃ SỬA: Tên bảng là "Payment" (chữ hoa)
      [
        // ===== THANH TOÁN CHO BOOKING 1 (Nhổ răng khôn) =====
        {
          amount: 2000000, // Khám (0đ) + Nhổ răng (2tr)
          method: "banking",
          status: "success",
          transactionCode: "VCB99887766",
          note: "Chuyển khoản VCB - Nhổ răng khôn",
          bookingId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== THANH TOÁN CHO BOOKING 3 (Nhổ răng khôn - Tiền mặt) =====
        {
          amount: 2000000,
          method: "cash",
          status: "success",
          transactionCode: null,
          note: "Thu tiền mặt tại quầy lễ tân",
          bookingId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== THANH TOÁN CHO BOOKING 5 (Lấy cao răng) =====
        {
          amount: 300000,
          method: "banking", // 🛑 ĐÃ SỬA: Enum chỉ cho phép 'cash', 'credit_card', 'banking'
          status: "success",
          transactionCode: "MOMO123456",
          note: "Thanh toán qua QR Momo",
          bookingId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payment", null, {}); // 🛑 ĐÃ SỬA TÊN BẢNG
  },
};
