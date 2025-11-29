"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Booking", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dateBooking: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("pending", "confirmed", "cancelled", "completed"),
        allowNull: false,
        defaultValue: "pending",
      },
      description: {
        type: Sequelize.TEXT,
      },
      timeStart: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      timeEnd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 👇👇👇 CẬP NHẬT patientId 👇👇👇
      patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User", // Trỏ tới bảng User (Bệnh nhân)
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      // 👇👇👇 CẬP NHẬT scheduleId 👇👇👇
      scheduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Schedule", // Trỏ tới bảng Schedule
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      // 👆👆👆 HẾT PHẦN CẬP NHẬT 👆👆👆
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
    await queryInterface.dropTable("Booking");
  },
};
