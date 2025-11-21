"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payment", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      amount: {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false,
      },
      method: {
        type: Sequelize.ENUM("cash", "credit_card", "banking"),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("pending", "success", "failed"),
        allowNull: false,
        defaultValue: "pending",
      },
      transactionCode: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      note: {
        type: Sequelize.TEXT,
      },
      bookingId: {
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
    await queryInterface.dropTable("Payment");
  },
};
