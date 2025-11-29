"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BookingService", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // 👇👇👇 CẬP NHẬT bookingId 👇👇👇
      bookingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Booking", // Trỏ tới bảng Booking
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // Xóa Booking thì xóa luôn dòng này trong bảng trung gian
        // unique: 'booking_service_pair' // (Optional) Mở lại nếu muốn chống trùng lặp
      },
      // 👇👇👇 CẬP NHẬT serviceId 👇👇👇
      serviceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Service", // Trỏ tới bảng Service
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        // unique: 'booking_service_pair' // (Optional) Mở lại nếu muốn chống trùng lặp
      },
      // 👆👆👆 HẾT PHẦN CẬP NHẬT 👆👆👆
      priceAtBooking: {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BookingService");
  },
};
