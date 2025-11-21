"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Thêm các cuộc hẹn (booking)
     */
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    await queryInterface.bulkInsert(
      "Booking",
      [
        // Booking 1: Bệnh nhân C đặt Bác sĩ A (qua scheduleId: 1)
        {
          dateBooking: tomorrow,
          status: "confirmed",
          description: "Tôi muốn cạo vôi răng và trám 1 răng sâu.",
          timeStart: "09:00",
          timeEnd: "09:30",
          patientId: 4, // Bệnh Nhân C (ID: 4)
          scheduleId: 1, // Ca sáng Bác Sĩ A (ID: 1)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Booking 2: Bệnh nhân D đặt Bác sĩ B (qua scheduleId: 3)
        {
          dateBooking: tomorrow,
          status: "pending",
          description: "Tư vấn niềng răng.",
          timeStart: "10:00",
          timeEnd: "10:30",
          patientId: 5, // Bệnh Nhân D (ID: 5)
          scheduleId: 3, // Ca cả ngày Bác Sĩ B (ID: 3)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Booking 3: Bệnh nhân C đặt Bác sĩ B (qua scheduleId: 3)
        {
          dateBooking: tomorrow,
          status: "pending",
          description: "Nhổ răng khôn",
          timeStart: "14:00",
          timeEnd: "14:30",
          patientId: 4, // Bệnh Nhân C (ID: 4)
          scheduleId: 3, // Ca cả ngày Bác Sĩ B (ID: 3)
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
