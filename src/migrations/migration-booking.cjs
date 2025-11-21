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
        defaultValue: "pending", // Tự động đặt là 'pending' khi mới tạo
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
      patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      scheduleId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Booking");
  },
};
