"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Specialty",
      [
        // ===== ID = 1 =====
        {
          nameSpecialty: "Cấy ghép Implant & Phẫu thuật răng hàm mặt",
          description:
            "Chuyên cấy ghép Implant, phục hồi toàn hàm, tiểu phẫu răng khôn và các phẫu thuật nha khoa chuyên sâu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== ID = 2 =====
        {
          nameSpecialty: "Nha khoa tổng quát",
          description:
            "Khám răng định kỳ, điều trị sâu răng, viêm nướu, lấy cao răng và chăm sóc răng miệng toàn diện.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== ID = 3 =====
        {
          nameSpecialty: "Phục hình răng & Thẩm mỹ nha khoa",
          description:
            "Bọc răng sứ, dán sứ Veneer, phục hình răng mất, cải thiện thẩm mỹ nụ cười và chức năng ăn nhai.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== ID = 4 =====
        {
          nameSpecialty: "Chỉnh nha – Niềng răng",
          description:
            "Điều trị răng hô, móm, lệch khớp cắn bằng mắc cài kim loại, sứ hoặc khay niềng trong suốt Invisalign.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== BỔ SUNG CHUYÊN KHOA (5–7) =====
        {
          nameSpecialty: "Nha khoa trẻ em",
          description:
            "Khám và điều trị răng miệng cho trẻ em, phòng ngừa sâu răng, hướng dẫn chăm sóc răng đúng cách.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameSpecialty: "Điều trị nha chu",
          description:
            "Điều trị viêm nướu, viêm nha chu, tụt lợi và các bệnh lý quanh răng nhằm bảo tồn răng thật.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameSpecialty: "Tư vấn & Chăm sóc răng miệng",
          description:
            "Tư vấn phác đồ điều trị, hướng dẫn vệ sinh răng miệng, chăm sóc răng sau điều trị và phòng ngừa tái phát.",
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
