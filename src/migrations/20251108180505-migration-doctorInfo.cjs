"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DoctorInfo", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      lever: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 👇👇👇 CẬP NHẬT doctorId 👇👇👇
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // unique: true, // Bạn có thể thêm dòng này nếu muốn đảm bảo 1 Bác sĩ chỉ có 1 Info (Quan hệ 1-1)
        references: {
          model: "User", // Trỏ tới bảng User
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // Xóa User thì xóa luôn Info bác sĩ
      },
      // 👇👇👇 CẬP NHẬT specialtyId 👇👇👇
      specialtyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Specialty", // Trỏ tới bảng Specialty
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
    await queryInterface.dropTable("DoctorInfo");
  },
};
