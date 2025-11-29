"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tạo ngày mai và ngày kia để test
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    await queryInterface.bulkInsert(
      "Schedule",
      [
        // Lịch Bác sĩ A (ID: 2) - Ngày mai
        {
          dateWork: tomorrow,
          timeStart: "08:00",
          timeEnd: "17:00",
          maxPatient: 10,
          description: "Khám hành chính",
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Lịch Bác sĩ A (ID: 2) - Ngày kia
        {
          dateWork: dayAfter,
          timeStart: "08:00",
          timeEnd: "12:00",
          maxPatient: 5,
          description: "Chỉ khám sáng",
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Lịch Bác sĩ B (ID: 3) - Ngày mai
        {
          dateWork: tomorrow,
          timeStart: "13:00",
          timeEnd: "20:00",
          maxPatient: 8,
          description: "Trực tối",
          doctorId: 3,
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
