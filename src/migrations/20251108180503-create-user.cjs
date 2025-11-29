"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      account: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      passWord: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
      },
      // 👇👇👇 CẬP NHẬT PHẦN NÀY 👇👇👇
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Role", // Tên bảng mà khóa này trỏ tới (Phải chính xác tên bảng trong DB)
          key: "id", // Tên cột khóa chính của bảng Role
        },
        onUpdate: "CASCADE", // Khi Role.id thay đổi (hiếm), User.roleId đổi theo
        onDelete: "CASCADE", // Khi Role bị xóa, User thuộc Role đó cũng bị xóa (Hoặc để 'SET NULL' tùy logic)
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
    await queryInterface.dropTable("User");
  },
};
