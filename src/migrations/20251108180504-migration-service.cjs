"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Service", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameService: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      // 👇👇👇 CẬP NHẬT PHẦN NÀY 👇👇👇
      specialtyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Specialty", // Trỏ tới bảng Specialty
          key: "id", // Trỏ tới cột id
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // Nếu xóa Chuyên khoa, các Dịch vụ thuộc nó cũng bị xóa
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
    await queryInterface.dropTable("Service");
  },
};
