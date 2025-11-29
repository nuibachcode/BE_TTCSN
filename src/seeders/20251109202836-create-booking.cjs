"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    await queryInterface.bulkInsert(
      "Booking",
      [
        // Booking 1: Bệnh nhân C (ID 4) đặt Bác sĩ A (Schedule ID 1)
        {
          dateBooking: tomorrow,
          status: "confirmed",
          description: "Đau răng hàm dưới",
          timeStart: "09:00",
          timeEnd: "09:30",
          patientId: 4,
          scheduleId: 1, // Giả định Schedule ID 1 là của BS A
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Booking 2: Bệnh nhân D (ID 5) đặt Bác sĩ B (Schedule ID 3)
        {
          dateBooking: tomorrow,
          status: "pending",
          description: "Tư vấn niềng răng",
          timeStart: "14:00",
          timeEnd: "14:30",
          patientId: 5,
          scheduleId: 3, // Giả định Schedule ID 3 là của BS B
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Booking", null, {});
  },
};
