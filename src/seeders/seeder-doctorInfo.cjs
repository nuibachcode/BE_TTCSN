"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Thêm thông tin chi tiết cho 2 bác sĩ
     */
    await queryInterface.bulkInsert(
      "DoctorInfo",
      [
        {
          avatar: "https://example.com/images/avatar_doctor_a.png",
          bio: "Bác sĩ Nguyễn Văn A có 10 năm kinh nghiệm trong lĩnh vực nha khoa tổng quát. Tốt nghiệp Đại học Y Hà Nội.",
          lever: "Thạc sĩ, Bác sĩ",
          doctorId: 2, // <-- ID của Bác Sĩ Nguyễn Văn A
          specialtyId: 1, // <-- ID của 'Nha Khoa Tổng Quát'
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: "https://example.com/images/avatar_doctor_b.png",
          bio: "Bác sĩ Trần Thị B là chuyên gia hàng đầu về phục hình răng sứ thẩm mỹ, đã hoàn thành nhiều khóa tu nghiệp tại Hàn Quốc.",
          lever: "Chuyên khoa I",
          doctorId: 3, // <-- ID của Bác Sĩ Trần Thị B
          specialtyId: 2, // <-- ID của 'Phục Hình Răng Sứ'
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DoctorInfo", null, {});
  },
};
