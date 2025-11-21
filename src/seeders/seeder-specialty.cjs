"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Thêm các chuyên khoa (Specialty)
     * Dữ liệu này sẽ khớp với ID 1, 2, 3, 4 mà bảng Service cần.
     */
    await queryInterface.bulkInsert(
      "Specialty",
      [
        {
          // ID sẽ tự động là 1
          nameSpecialty: "Nha Khoa Tổng Quát",
          description:
            "Khám và điều trị các vấn đề răng miệng cơ bản như sâu răng, viêm nướu, lấy cao răng.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // ID sẽ tự động là 2
          nameSpecialty: "Phục Hình Răng Sứ",
          description:
            "Chuyên sâu về bọc răng sứ, dán sứ Veneer, phục hồi chức năng nhai và thẩm mỹ.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // ID sẽ tự động là 3
          nameSpecialty: "Niềng Răng - Chỉnh Nha",
          description:
            "Điều trị các sai lệch về khớp cắn, răng hô, móm, khấp khểnh bằng mắc cài hoặc khay trong suốt.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // ID sẽ tự động là 4
          nameSpecialty: "Tiểu Phẫu & Nhổ Răng",
          description:
            "Thực hiện các ca nhổ răng khôn (răng số 8), phẫu thuật cắt chóp, phẫu thuật nha chu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Specialty", null, {});
  },
};
