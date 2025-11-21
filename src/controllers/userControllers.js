import {
  handleCreateNewUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUser,
  handleDeleteUser,
} from "../services/userServices.js";

const createNewUser = async (req, res) => {
  try {
    const data = await handleCreateNewUser(req.body);

    return res.status(200).json({
      EM: data.EM, // message
      EC: data.EC, // error code
      DT: data.DT || null, // data nếu có (optional)
    });
  } catch (error) {
    console.error("Lỗi user controller tạo người dùng:", error);

    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: null,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await handleGetAllUsers();

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: [],
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await handleGetUserById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: null,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    const data = await handleUpdateUser(id, newData);

    return res.status(200).json(data);
  } catch (error) {
    console.log("Lỗi user controller update:", error);
    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: null,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await handleDeleteUser(id);
    return res.status(200).json(data);
  } catch (error) {
    console.log("Lỗi user controller delete:", error);
    return res.status(500).json({
      EM: "Lỗi server",
      EC: -1,
      DT: null,
    });
  }
};

export { createNewUser, getAllUsers, getUserById, updateUser, deleteUser };
