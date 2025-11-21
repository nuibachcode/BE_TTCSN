"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Thêm các giao dịch thanh toán
     */
    await queryInterface.bulkInsert(
      "Payment",
      [
        // Thanh toán cho Booking 1 (ID: 1)
        {
          amount: 300000, // Giá của Cạo Vôi Răng
          method: "credit_card",
          status: "success",
          transactionCode: "SKR_110_PM_001", // Mã giao dịch (unique)
          note: "Thanh toán thẻ Visa cho booking 1",
          bookingId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Thanh toán cho Booking 2 (ID: 2)
        {
          amount: 500000, // Giá của Tư Vấn
          method: "banking",
          status: "pending", // Giao dịch đang chờ (ví dụ: chờ ck)
          transactionCode: "VCB_110_PM_002", // Mã giao dịch (unique)
          note: "Chuyển khoản VCB, đang chờ xác nhận",
          bookingId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Thanh toán cho Booking 3 (ID: 3)
        {
          amount: 1000000, // Giá của Nhổ Răng Khôn
          method: "cash",
          status: "success",
          transactionCode: null, // <-- Quan trọng: Thanh toán tiền mặt nên KHÔNG có mã (null)
          note: "Bệnh nhân thanh toán tiền mặt tại quầy",
          bookingId: 3,
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
