import db from "../models/index.cjs";

const handleCreateBooking = async (data) => {
  // Bắt đầu transaction
  const t = await db.sequelize.transaction();

  try {
    const {
      dateBooking,
      description,
      timeStart,
      timeEnd,
      patientId,
      scheduleId,
      services, // Mảng các serviceId: [1, 2, 5]
    } = data;

    // 1. Kiểm tra xem có chọn dịch vụ không
    if (!services || services.length === 0) {
      await t.rollback(); // Hủy luôn nếu không có dịch vụ
      return {
        EM: "Vui lòng chọn ít nhất một dịch vụ",
        EC: 1,
        DT: null,
      };
    }

    // 2. Tạo Booking (Kèm transaction: t)
    const newBooking = await db.Booking.create(
      {
        dateBooking,
        status: "pending",
        timeStart,
        timeEnd,
        description,
        patientId,
        scheduleId,
      },
      { transaction: t } // <--- QUAN TRỌNG
    );

    // 3. Tìm thông tin dịch vụ để lấy GIÁ (price)
    const serviceList = await db.Service.findAll({
      where: { id: services },
      raw: true, // Lấy dữ liệu dạng JSON thuần cho nhẹ
    });

    if (serviceList.length === 0) {
      await t.rollback();
      return { EM: "Dịch vụ không tồn tại", EC: 2, DT: null };
    }

    // 4. Tạo payload cho bảng trung gian BookingService
    // Map giá từ bảng Service sang bảng BookingService
    const payload = serviceList.map((s) => ({
      bookingId: newBooking.id,
      serviceId: s.id,
      priceAtBooking: s.price, // Lưu giá tại thời điểm đặt
    }));

    // 5. Lưu vào bảng trung gian (Kèm transaction: t)
    await db.BookingService.bulkCreate(payload, { transaction: t }); // <--- QUAN TRỌNG

    // 6. Nếu mọi thứ OK thì Commit (Lưu chính thức)
    await t.commit();

    return {
      EM: "Tạo lịch thành công",
      EC: 0,
      DT: newBooking,
    };
  } catch (error) {
    // 7. Nếu có lỗi bất kỳ đâu -> Rollback (Hủy hết)
    await t.rollback();
    console.log("Lỗi khi đặt lịch:", error);
    return { EM: "Lỗi hệ thống khi đặt lịch", EC: -1, DT: null };
  }
};

const handleGetAllBooking = async () => {
  try {
    const bookings = await db.Booking.findAll({
      // 👇 THÊM PHẦN INCLUDE NÀY 👇
      include: [
        {
          model: db.User, // Lấy thông tin Bệnh nhân
          attributes: ["id", "fullName", "phone", "address", "email"], // Chỉ lấy trường cần thiết
        },
        {
          model: db.Schedule, // Lấy thông tin Lịch/Bác sĩ
          include: [
            {
              model: db.User, // Lấy tên Bác sĩ từ bảng Schedule
              attributes: ["id", "fullName"],
            },
          ],
        },
        {
          model: db.Service, // Lấy danh sách Dịch vụ đã đặt
          as: "services", // Quan trọng: Phải khớp với alias trong model Booking
          attributes: ["id", "nameService", "price"],
          through: {
            attributes: ["priceAtBooking"], // Lấy thêm giá tại thời điểm đặt từ bảng trung gian
          },
        },
      ],
      order: [["createdAt", "DESC"]], // Sắp xếp mới nhất lên đầu
      nest: true, // Gộp data lại cho gọn gàng
      // raw: true, // ⚠️ Lưu ý: Nếu dùng include nhiều cấp, hạn chế dùng raw: true vì nó sẽ làm phẳng (flatten) dữ liệu, khó xử lý ở FE
    });

    return {
      EM: "Lấy thành công danh sách đặt lịch",
      EC: 0,
      DT: bookings,
    };
  } catch (error) {
    console.log("Lỗi khi lấy lịch hẹn: ", error);
    return {
      EM: "Lỗi khi lấy lịch hẹn",
      EC: 1,
      DT: [],
    };
  }
};

const handleGetBookingById = async (id) => {
  try {
    const booking = await db.Booking.findOne({
      where: { id },
      // 👇 CŨNG THÊM INCLUDE TƯƠNG TỰ 👇
      include: [
        {
          model: db.User,
          attributes: ["id", "fullName", "phone", "email"],
        },
        {
          model: db.Schedule,
          include: [
            { model: db.User, attributes: ["fullName"] }, // Tên bác sĩ
          ],
        },
        {
          model: db.Service,
          as: "services",
          attributes: ["id", "nameService", "price"],
          through: {
            attributes: ["priceAtBooking"],
          },
        },
      ],
      nest: true,
    });

    if (!booking) {
      return {
        EM: "Không tìm thấy lịch hẹn",
        EC: 2,
        DT: null,
      };
    }

    return {
      EM: "Lấy thành công lịch đặt",
      EC: 0,
      DT: booking,
    };
  } catch (error) {
    console.log("Lỗi khi lấy lịch hẹn: ", error);
    return {
      EM: "Lỗi khi lấy lịch hẹn",
      EC: 1,
      DT: null,
    };
  }
};

const handleUpdateBooking = async (id, newData) => {
  try {
    // Update booking
    const [affectedRows] = await db.Booking.update(newData, {
      where: { id },
    });

    if (affectedRows === 0) {
      return {
        EM: "Không tìm thấy booking",
        EC: 1,
        DT: null,
      };
    }

    const updatedBooking = await db.Booking.findOne({
      where: { id },
    });

    return {
      EM: "Cập nhật người lịch đặt công",
      EC: 0,
      DT: updatedBooking,
    };
  } catch (error) {
    console.log("Lỗi update booking:", error);
    return {
      EM: "Lỗi khi cập nhật đặt lịch",
      EC: 1,
      DT: null,
    };
  }
};

const handleDeleteBooking = async (id) => {
  try {
    const affectedRows = await db.Booking.destroy({
      where: { id },
    });

    // trả về 0 nếu không tồn tại
    if (affectedRows === 0) {
      return {
        EM: "Không tìm thấy Booking",
        EC: 1,
        DT: null,
      };
    }

    return {
      EM: "Xóa booking thành công",
      EC: 0,
      DT: null,
    };
  } catch (error) {
    console.log("Lỗi delete booking:", error);
    return {
      EM: "Lỗi khi xóa booking",
      EC: 1,
      DT: null,
    };
  }
};

export {
  handleCreateBooking,
  handleGetAllBooking,
  handleGetBookingById,
  handleDeleteBooking,
  handleUpdateBooking,
};
