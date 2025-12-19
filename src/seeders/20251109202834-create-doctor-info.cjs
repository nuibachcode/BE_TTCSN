"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DoctorInfo",
      [
        // ===== DOCTOR ID = 2 (Khổng Văn Quân) =====
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2023/03/Bsi-Thinh.jpg",
          bio: "Bác sĩ Khổng Văn Quân được đào tạo chuyên sâu về cấy ghép Implant, phục hồi toàn hàm và phẫu thuật hàm mặt cơ bản. Bác sĩ sở hữu nhiều chứng chỉ quốc tế uy tín từ Biotech Dental Academy (Pháp), THL Academy và là thành viên của International Team for Implantology (ITI). Với nền tảng chuyên môn vững chắc và kinh nghiệm lâm sàng phong phú, bác sĩ luôn mang đến giải pháp điều trị an toàn và hiệu quả cho bệnh nhân.",
          lever: "Bác sĩ chính",
          doctorId: 2,
          specialtyId: 1, // Implant – Phẫu thuật
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== DOCTOR ID = 3 (Văn Thanh Nga) =====
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2021/12/doctor-3.jpg",
          bio: "Bác sĩ Văn Thanh Nga tốt nghiệp từ trường đại học y khoa danh tiếng tại Cộng hòa Belarus. Có nhiều năm kinh nghiệm trong điều trị nha khoa tổng quát, chăm sóc răng miệng toàn diện. Bác sĩ sử dụng thành thạo tiếng Việt, tiếng Anh và tiếng Nga, giúp giao tiếp hiệu quả với bệnh nhân quốc tế.",
          lever: "Bác sĩ",
          doctorId: 3,
          specialtyId: 2, // Nha khoa tổng quát
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== DOCTOR ID = 4 (Châu Hưng Thịnh) =====
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2021/12/Bs-Quan-1024x1024.jpg",
          bio: "Bác sĩ Châu Hưng Thịnh được đào tạo chuyên sâu về phục hình răng thẩm mỹ, Veneer và phục hồi toàn miệng theo hướng xâm lấn tối thiểu. Bác sĩ thường xuyên tham gia các khóa đào tạo trong và ngoài nước, ứng dụng kỹ thuật số hiện đại vào điều trị, mang lại trải nghiệm tối ưu cho bệnh nhân.",
          lever: "Bác sĩ",
          doctorId: 4,
          specialtyId: 3, // Phục hình – Thẩm mỹ
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ===== DOCTOR ID = 5 (Lê Minh Đức) =====
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2025/06/bac-si-An-1024x1024.jpg",
          bio: "Bác sĩ Lê Minh Đức có kinh nghiệm trong lĩnh vực chỉnh nha và điều trị răng trẻ em. Với phong cách làm việc nhẹ nhàng, tận tâm, bác sĩ luôn tạo cảm giác thoải mái cho bệnh nhân, đặc biệt là trẻ nhỏ.",
          lever: "Bác sĩ",
          doctorId: 5,
          specialtyId: 4, // Chỉnh nha
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // ===== DOCTOR INFO ID = 11 → 20 =====
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2021/12/Bac-si-Huy-1024x1024.jpg",
          bio: "Bác sĩ Vũ Quốc Huy có kinh nghiệm trong lĩnh vực nha khoa tổng quát và điều trị phục hồi răng mất.",
          lever: "Bác sĩ",
          doctorId: 11,
          specialtyId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2025/09/Bac-si-Trang-1024x1024.jpg",
          bio: "Bác sĩ Nguyễn Thị Mai Anh chuyên điều trị nha khoa thẩm mỹ, dán sứ Veneer và phục hình răng sứ.",
          lever: "Bác sĩ",
          doctorId: 12,
          specialtyId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2024/05/bac-si-Tinh-1024x1024.jpg",
          bio: "Bác sĩ Lê Quang Khải có nhiều năm kinh nghiệm trong cấy ghép Implant và phẫu thuật nha khoa.",
          lever: "Bác sĩ chính",
          doctorId: 13,
          specialtyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2025/06/Bac-si-Duc-1024x1024.jpg",
          bio: "Bác sĩ Đặng Minh Tâm chuyên chỉnh nha, niềng răng cho thanh thiếu niên và người trưởng thành.",
          lever: "Bác sĩ",
          doctorId: 14,
          specialtyId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: "https://nhakhoaviethan.vn/wp-content/uploads/2023/03/Bsi-Thinh.jpg",
          bio: "Bác sĩ Hoàng Quốc Việt có thế mạnh trong nha khoa trẻ em và điều trị dự phòng.",
          lever: "Bác sĩ",
          doctorId: 15,
          specialtyId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2025/09/bac-si-Ai-1024x1024.jpg",
          bio: "Bác sĩ Phan Thị Hồng chuyên điều trị viêm nướu, viêm nha chu và bảo tồn răng thật.",
          lever: "Bác sĩ",
          doctorId: 16,
          specialtyId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: "https://nhakhoaviethan.vn/wp-content/uploads/2021/12/Bs-Quan-1024x1024.jpg",
          bio: "Bác sĩ Trịnh Văn Phúc chuyên tư vấn, lập phác đồ điều trị và chăm sóc răng miệng tổng quát.",
          lever: "Bác sĩ",
          doctorId: 17,
          specialtyId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2023/10/bac-si-Nga-1024x1024.jpg",
          bio: "Bác sĩ Bùi Thị Lan có kinh nghiệm trong phục hình răng sứ và phục hồi chức năng ăn nhai.",
          lever: "Bác sĩ",
          doctorId: 18,
          specialtyId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: "https://nhakhoaviethan.vn/wp-content/uploads/2021/12/Bac-si-Huy-1024x1024.jpg",
          bio: "Bác sĩ Ngô Minh Tuấn chuyên nhổ răng khôn và các tiểu phẫu nha khoa.",
          lever: "Bác sĩ",
          doctorId: 19,
          specialtyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar:
            "https://nhakhoaviethan.vn/wp-content/uploads/2021/12/bac-si-Ngan-1024x1024.jpg",
          bio: "Bác sĩ Đỗ Thị Thu Hà chuyên khám tổng quát và chăm sóc răng miệng định kỳ.",
          lever: "Bác sĩ",
          doctorId: 20,
          specialtyId: 2,
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
