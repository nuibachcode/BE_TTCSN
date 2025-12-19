"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Service",
      [
        // ===== SPECIALTY 1: IMPLANT & PHẪU THUẬT =====
        {
          nameService: "Cấy ghép Implant Hàn Quốc",
          price: 16000000,
          duration: 90,
          description:
            "Cấy ghép Implant xuất xứ Hàn Quốc, phục hồi răng mất, đảm bảo chức năng ăn nhai và thẩm mỹ.",
          specialtyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Cấy ghép Implant Thụy Sĩ",
          price: 28000000,
          duration: 120,
          description:
            "Implant Thụy Sĩ cao cấp, độ tích hợp xương cao, độ bền lâu dài, phù hợp phục hình toàn hàm.",
          specialtyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Nhổ răng khôn không đau",
          price: 2000000,
          duration: 45,
          description:
            "Tiểu phẫu nhổ răng khôn với công nghệ hiện đại, giảm đau, nhanh lành.",
          specialtyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== SPECIALTY 2: NHA KHOA TỔNG QUÁT =====
        {
          nameService: "Khám răng & tư vấn tổng quát",
          price: 0,
          duration: 30,
          description:
            "Khám tổng quát, tư vấn tình trạng răng miệng và phác đồ điều trị phù hợp.",
          specialtyId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Lấy cao răng & đánh bóng",
          price: 300000,
          duration: 30,
          description:
            "Loại bỏ mảng bám, cao răng, giúp răng sạch và ngăn ngừa viêm nướu.",
          specialtyId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Trám răng thẩm mỹ",
          price: 500000,
          duration: 45,
          description:
            "Trám răng sâu, mẻ bằng vật liệu composite, đảm bảo thẩm mỹ và chức năng nhai.",
          specialtyId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== SPECIALTY 3: PHỤC HÌNH & THẨM MỸ =====
        {
          nameService: "Răng sứ Titan (1 răng)",
          price: 2500000,
          duration: 60,
          description:
            "Bọc răng sứ Titan có độ bền cao, chi phí hợp lý, phù hợp phục hình răng hàm.",
          specialtyId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Răng toàn sứ Zirconia cao cấp",
          price: 4500000,
          duration: 60,
          description:
            "Răng sứ Zirconia thẩm mỹ tự nhiên, không đen viền nướu, độ bền vượt trội.",
          specialtyId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Dán sứ Veneer",
          price: 6000000,
          duration: 90,
          description:
            "Dán sứ Veneer siêu mỏng, cải thiện màu sắc và hình dáng răng, bảo tồn răng thật.",
          specialtyId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== SPECIALTY 4: CHỈNH NHA =====
        {
          nameService: "Niềng răng mắc cài kim loại",
          price: 30000000,
          duration: 60,
          description:
            "Chỉnh nha bằng mắc cài kim loại truyền thống, hiệu quả cao, chi phí hợp lý.",
          specialtyId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Niềng răng mắc cài sứ",
          price: 40000000,
          duration: 60,
          description: "Mắc cài sứ thẩm mỹ, ít lộ, phù hợp người trưởng thành.",
          specialtyId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Niềng răng trong suốt Invisalign",
          price: 80000000,
          duration: 60,
          description:
            "Chỉnh nha bằng khay trong suốt Invisalign, tháo lắp dễ dàng, thẩm mỹ cao.",
          specialtyId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== SPECIALTY 5: NHA KHOA TRẺ EM =====
        {
          nameService: "Khám răng trẻ em định kỳ",
          price: 200000,
          duration: 30,
          description:
            "Khám răng định kỳ cho trẻ em, phát hiện sớm các bệnh lý răng miệng.",
          specialtyId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameService: "Trám răng sữa",
          price: 300000,
          duration: 30,
          description:
            "Trám răng sữa cho trẻ, bảo vệ răng và phòng ngừa sâu răng.",
          specialtyId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== SPECIALTY 6: NHA CHU =====
        {
          nameService: "Điều trị viêm nướu – nha chu",
          price: 800000,
          duration: 45,
          description:
            "Điều trị viêm nướu, viêm nha chu giúp bảo tồn răng thật.",
          specialtyId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== SPECIALTY 7: TƯ VẤN =====
        {
          nameService: "Tư vấn & lập phác đồ điều trị",
          price: 0,
          duration: 30,
          description:
            "Tư vấn chuyên sâu, lập phác đồ điều trị phù hợp với từng khách hàng.",
          specialtyId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Service", null, {});
  },
};
