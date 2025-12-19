"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schedules = [];

    // Danh sách ID của tất cả các bác sĩ (dựa trên dữ liệu User đã seed)
    const doctorIds = [2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    // Xác định ngày hôm nay và ngày cuối tháng
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // Tháng chạy từ 0-11

    // Lấy ngày cuối cùng của tháng hiện tại (tham số thứ 3 là 0 sẽ lấy ngày cuối tháng trước đó của month + 1)
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const currentDay = today.getDate();

    // VÒNG LẶP 1: Chạy từ ngày hôm nay đến hết tháng
    for (let day = currentDay; day <= lastDayOfMonth; day++) {
      // Tạo đối tượng ngày cho từng vòng lặp
      const dateWork = new Date(currentYear, currentMonth, day);

      // VÒNG LẶP 2: Chạy qua từng bác sĩ để gán lịch
      doctorIds.forEach((docId) => {
        schedules.push({
          dateWork: dateWork,
          timeStart: "08:00",
          timeEnd: "17:00",
          maxPatient: 10,
          description: "Khám hành chính (Tự động tạo)",
          doctorId: docId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    }

    // Insert toàn bộ mảng dữ liệu đã tạo vào DB
    if (schedules.length > 0) {
      await queryInterface.bulkInsert("Schedule", schedules, {});
    }
  },

  async down(queryInterface, Sequelize) {
    // Xóa tất cả dữ liệu trong bảng Schedule khi rollback
    await queryInterface.bulkDelete("Schedule", null, {});
  },
};
