"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Thêm lịch làm việc.
     * SỬA ĐỔI: Mỗi bác sĩ chỉ tạo 1 dòng cho 1 ngày để tránh lỗi Unique Key.
     */

    // Tạo ngày mai và ngày kia
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    await queryInterface.bulkInsert(
      "Schedule",
      [
        // ==================================================
        // BÁC SĨ A (ID: 2) - Lịch làm việc
        // ==================================================
        {
          // Ngày mai: Làm cả ngày
          dateWork: tomorrow,
          timeStart: "08:00",
          timeEnd: "17:00",
          maxPatient: 20,
          description: "Khám cả ngày hành chính",
          doctorId: 2, // ID Bác sĩ Nguyễn Văn A
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Ngày kia: Chỉ làm buổi sáng
          dateWork: dayAfterTomorrow,
          timeStart: "08:00",
          timeEnd: "12:00",
          maxPatient: 10,
          description: "Chỉ khám buổi sáng",
          doctorId: 2, // ID Bác sĩ Nguyễn Văn A
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ==================================================
        // BÁC SĨ B (ID: 3) - Lịch làm việc
        // ==================================================
        {
          // Ngày mai: Chỉ làm buổi chiều
          dateWork: tomorrow,
          timeStart: "13:30",
          timeEnd: "17:30",
          maxPatient: 10,
          description: "Khám buổi chiều",
          doctorId: 3, // ID Bác sĩ Trần Thị B
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Ngày kia: Làm cả ngày
          dateWork: dayAfterTomorrow,
          timeStart: "08:00",
          timeEnd: "17:00",
          maxPatient: 20,
          description: "Trực cả ngày",
          doctorId: 3, // ID Bác sĩ Trần Thị B
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Schedule", null, {});
  },
};
