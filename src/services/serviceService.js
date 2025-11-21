import db from "../models/index.cjs";

// 1. Tạo dịch vụ mới
const createService = async (data) => {
  try {
    // Validate: Kiểm tra các trường bắt buộc
    if (
      !data.nameService ||
      !data.price ||
      !data.duration ||
      !data.description ||
      !data.specialtyId
    ) {
      return {
        EM: "Vui lòng nhập đủ thông tin (Tên, Giá, Thời lượng, Mô tả, Chuyên khoa)",
        EC: 1,
        DT: "",
      };
    }

    // Tạo mới
    const newService = await db.Service.create({
      nameService: data.nameService,
      price: data.price,
      duration: data.duration,
      description: data.description,
      specialtyId: data.specialtyId,
    });

    return {
      EM: "Tạo dịch vụ thành công",
      EC: 0,
      DT: newService,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Lỗi hệ thống service",
      EC: -1,
      DT: "",
    };
  }
};

// 2. Lấy danh sách tất cả dịch vụ
const getAllServices = async () => {
  try {
    const services = await db.Service.findAll({
      // Kết nối bảng Specialty để lấy tên chuyên khoa
      include: [
        {
          model: db.Specialty,
          attributes: ["id", "nameSpecialty"], // Chỉ lấy tên và ID
        },
      ],
      nest: true,
      raw: false, // Để raw false để cấu trúc JSON lồng nhau đẹp hơn
    });

    return {
      EM: "Lấy danh sách dịch vụ thành công",
      EC: 0,
      DT: services,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Lỗi hệ thống service",
      EC: -1,
      DT: "",
    };
  }
};

// 3. Lấy chi tiết 1 dịch vụ theo ID
const getServiceById = async (id) => {
  try {
    const service = await db.Service.findOne({
      where: { id: id },
      include: [
        {
          model: db.Specialty,
          attributes: ["id", "nameSpecialty"],
        },
      ],
      nest: true,
    });

    if (!service) {
      return {
        EM: "Dịch vụ không tồn tại",
        EC: 2,
        DT: "",
      };
    }

    return {
      EM: "Lấy thông tin dịch vụ thành công",
      EC: 0,
      DT: service,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Lỗi hệ thống service",
      EC: -1,
      DT: "",
    };
  }
};

// 4. Cập nhật dịch vụ
const updateService = async (id, data) => {
  try {
    const service = await db.Service.findOne({
      where: { id: id },
    });

    if (!service) {
      return {
        EM: "Dịch vụ không tồn tại",
        EC: 2,
        DT: "",
      };
    }

    // Cập nhật
    await service.update({
      nameService: data.nameService,
      price: data.price,
      duration: data.duration,
      description: data.description,
      specialtyId: data.specialtyId,
    });

    return {
      EM: "Cập nhật dịch vụ thành công",
      EC: 0,
      DT: service,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Lỗi hệ thống service",
      EC: -1,
      DT: "",
    };
  }
};

// 5. Xóa dịch vụ
const deleteService = async (id) => {
  try {
    const service = await db.Service.findOne({
      where: { id: id },
    });

    if (!service) {
      return {
        EM: "Dịch vụ không tồn tại",
        EC: 2,
        DT: "",
      };
    }

    await db.Service.destroy({
      where: { id: id },
    });

    return {
      EM: "Xóa dịch vụ thành công",
      EC: 0,
      DT: "",
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Lỗi hệ thống service",
      EC: -1,
      DT: "",
    };
  }
};

export {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
