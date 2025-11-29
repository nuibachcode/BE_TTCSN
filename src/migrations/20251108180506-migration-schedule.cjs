"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schedule", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dateWork: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      timeStart: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      timeEnd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maxPatient: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      // 👇👇👇 CẬP NHẬT doctorId 👇👇👇
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User", // Trỏ tới bảng User (Bác sĩ)
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
    await queryInterface.dropTable("Schedule");
  },
};
