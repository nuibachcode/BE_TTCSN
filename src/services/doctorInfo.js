import db from "../models/index.cjs";

const handleCreateDoctorInfo = async (data) => {
  try {
    const { avatar, bio, lever, doctorId, specialtyId } = data;
    // Validate cơ bản
    if (!doctorId || !specialtyId || !bio) {
      return {
        EM: "Thiếu thông tin bắt buộc (doctorId, specialtyId, bio...)",
        EC: 1,
        DT: "",
      };
    }

    // Check xem bác sĩ này đã có info chưa (Vì quan hệ 1-1)
    // Một bác sĩ không thể có 2 dòng trong bảng DoctorInfo
    const checkExist = await db.DoctorInfo.findOne({
      where: { doctorId },
    });

    if (checkExist) {
      return {
        EM: "Bác sĩ này đã có thông tin chi tiết rồi, vui lòng dùng chức năng Sửa (Edit)",
        EC: 2,
        DT: "",
      };
    }

    const newInfo = await db.DoctorInfo.create({
      avatar,
      bio,
      lever,
      doctorId,
      specialtyId,
    });

    return {
      EM: "Tạo thông tin bác sĩ thành công",
      EC: 0,
      DT: newInfo,
    };
  } catch (error) {
    return {
      EM: "Thêm thông tin bác sĩ thất bại",
      EC: 1,
      DT: "",
    };
  }
};

const handleGetAllDoctorInfo = async () => {
  try {
    const doctors = await db.DoctorInfo.findAll({
      include: [
        {
          model: db.User, // Lấy tên, sđt từ bảng User
          attributes: { exclude: ["passWord"] }, // Quan trọng: Không lấy mật khẩu
        },
        {
          model: db.Specialty, // Lấy tên chuyên khoa
          attributes: ["nameSpecialty", "description"],
        },
      ],
      raw: false, // Để raw: false để cấu trúc JSON trả về lồng nhau đẹp hơn (nhờ nest: true mặc định của include)
      nest: true,
    });

    return {
      EM: "Lấy danh sách bác sĩ thành công",
      EC: 0,
      DT: doctors,
    };
  } catch (error) {
    return {
      EM: "Lấy không thành công danh sách bác sĩ ",
      EC: 1,
      DT: "",
    };
  }
};

const handleGetDoctorInfoById = async (id) => {
  try {
    const doctor = await db.DoctorInfo.findOne({
      where: { doctorId: id }, // Tìm theo doctorId (User ID) cho tiện
      include: [
        {
          model: db.User,
          attributes: { exclude: ["passWord"] },
        },
        {
          model: db.Specialty,
          attributes: ["nameSpecialty"],
        },
      ],
      nest: true,
    });

    if (!doctor) {
      return {
        EM: "Không tìm thấy thông tin bác sĩ",
        EC: 2,
        DT: "",
      };
    }

    return {
      EM: "Lấy thông tin bác sĩ thành công",
      EC: 0,
      DT: doctor,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Lỗi hệ thống",
      EC: -1,
      DT: "",
    };
  }
};

export {
  handleCreateDoctorInfo,
  handleGetAllDoctorInfo,
  handleGetDoctorInfoById,
};
