"use strict";
const bcrypt = require("bcrypt"); // <-- Sửa thành 'bcrypt'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Tạo user mẫu.
     * Mật khẩu cho tất cả đều là: 123456
     */
    // Băm mật khẩu một lần
    const hashedPassword = await bcrypt.hash("123456", 10);

    await queryInterface.bulkInsert(
      "User",
      [
        // === 1. ADMIN ===
        {
          fullName: "Admin System",
          account: "admin",
          email: "admin@gmail.com",
          phone: "0900000001",
          passWord: hashedPassword,
          address: "123 Admin St, Hanoi",
          roleId: 1, // Giả định ID 1 là 'Admin' (từ file seed-role)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // === 2. DOCTORS ===
        {
          fullName: "Bác Sĩ Nguyễn Văn A",
          account: "doctor.a",
          email: "doctor.a@gmail.com",
          phone: "0900000002",
          passWord: hashedPassword,
          address: "456 Doctor St, Hanoi",
          roleId: 2, // Giả định ID 2 là 'Doctor' (từ file seed-role)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Bác Sĩ Trần Thị B",
          account: "doctor.b",
          email: "doctor.b@gmail.com",
          phone: "0900000003",
          passWord: hashedPassword,
          address: "789 Doctor St, Hanoi",
          roleId: 2, // Giả định ID 2 là 'Doctor' (từ file seed-role)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // === 3. PATIENTS ===
        {
          fullName: "Bệnh Nhân Lê Văn C",
          account: "patient.c",
          email: "patient.c@gmail.com",
          phone: "0900000004",
          passWord: hashedPassword,
          address: "111 Patient St, Hanoi",
          roleId: 3, // Giả định ID 3 là 'Patient' (từ file seed-role)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Bệnh Nhân Phạm Thị D",
          account: "patient.d",
          email: "patient.d@gmail.com",
          phone: "0900000005",
          passWord: hashedPassword,
          address: "222 Patient St, Hanoi",
          roleId: 3, // Giả định ID 3 là 'Patient' (từ file seed-role)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Chạy khi undo
     */
    await queryInterface.bulkDelete("User", null, {});
  },
};
