import db from "../models/index.cjs";
import bcrypt from "bcrypt";

const saltRounds = 10;

const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

const checkFieldExist = async (field, value) => {
  const user = await db.User.findOne({
    where: { [field]: value },
  });
  return !!user;
};

const handleCreateNewUser = async (data) => {
  try {
    const { fullName, account, email, phone, password, address } = data;

    // Kiểm tra email đã tồn tại
    if (await checkFieldExist("email", email)) {
      return { EM: "Email đã tồn tại", EC: 1, DT: null };
    }

    // Kiểm tra phone đã tồn tại
    if (await checkFieldExist("phone", phone)) {
      return { EM: "Số điện thoại đã tồn tại", EC: 1, DT: null };
    }

    console.log(data);

    const hashedPass = await hashPassword(password);

    const newUser = await db.User.create({
      fullName,
      account,
      email,
      phone,
      passWord: hashedPass,
      address,
      roleId: 3, // mặc định user bình thường
    });

    // Trả về thông tin user vừa tạo, có thể loại passWord
    const { passWord: _, ...userData } = newUser.dataValues;

    return { EM: "Tạo người dùng thành công", EC: 0, DT: userData };
  } catch (error) {
    console.log("Lỗi tạo người dùng:", error);
    return { EM: "Lỗi khi tạo người dùng", EC: 1, DT: null };
  }
};

const handleGetAllUsers = async () => {
  try {
    const users = await db.User.findAll({
      attributes: { exclude: ["passWord"] },
    });

    return {
      EM: "Lấy danh sách người dùng thành công",
      EC: 0,
      DT: users,
    };
  } catch (error) {
    console.log("Lỗi khi lấy người dùng: ", error);
    return {
      EM: "Lỗi khi lấy người dùng",
      EC: 1,
      DT: [],
    };
  }
};

const handleGetUserById = async (id) => {
  try {
    const user = await db.User.findOne({
      where: { id },
      attributes: { exclude: ["passWord"] },
    });

    if (!user) {
      return {
        EM: "Không tìm thấy người dùng",
        EC: 1,
        DT: null,
      };
    }

    return {
      EM: "Lấy người dùng thành công",
      EC: 0,
      DT: user,
    };
  } catch (error) {
    console.log("Lỗi khi lấy người dùng: ", error);
    return {
      EM: "Lỗi khi lấy người dùng",
      EC: 1,
      DT: null,
    };
  }
};

const handleUpdateUser = async (id, newData) => {
  try {
    // Update user
    const [affectedRows] = await db.User.update(newData, {
      where: { id },
    });

    if (affectedRows === 0) {
      return {
        EM: "Không tìm thấy người dùng",
        EC: 1,
        DT: null,
      };
    }

    // Lấy lại thông tin user sau khi update
    const updatedUser = await db.User.findOne({
      where: { id },
      attributes: { exclude: ["passWord"] },
    });

    return {
      EM: "Cập nhật người dùng thành công",
      EC: 0,
      DT: updatedUser,
    };
  } catch (error) {
    console.log("Lỗi update user:", error);
    return {
      EM: "Lỗi khi cập nhật người dùng",
      EC: 1,
      DT: null,
    };
  }
};

const handleDeleteUser = async (id) => {
  try {
    const affectedRows = await db.User.destroy({
      where: { id },
    });

    // trả về 0 nếu không tồn tại
    if (affectedRows === 0) {
      return {
        EM: "Không tìm thấy người dùng",
        EC: 1,
        DT: null,
      };
    }

    return {
      EM: "Xóa người dùng thành công",
      EC: 0,
      DT: null,
    };
  } catch (error) {
    console.log("Lỗi delete user:", error);
    return {
      EM: "Lỗi khi xóa người dùng",
      EC: 1,
      DT: null,
    };
  }
};
export {
  handleCreateNewUser,
  handleGetUserById,
  handleGetAllUsers,
  handleUpdateUser,
  handleDeleteUser,
};
