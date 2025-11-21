import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../services/serviceService.js";

const handleCreateService = async (req, res) => {
  try {
    const data = await createService(req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ EM: "Lỗi server", EC: -1, DT: "" });
  }
};

const handleGetAllServices = async (req, res) => {
  try {
    const data = await getAllServices();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ EM: "Lỗi server", EC: -1, DT: "" });
  }
};

const handleGetServiceById = async (req, res) => {
  try {
    const data = await getServiceById(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ EM: "Lỗi server", EC: -1, DT: "" });
  }
};

const handleUpdateService = async (req, res) => {
  try {
    const data = await updateService(req.params.id, req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ EM: "Lỗi server", EC: -1, DT: "" });
  }
};

const handleDeleteService = async (req, res) => {
  try {
    const data = await deleteService(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ EM: "Lỗi server", EC: -1, DT: "" });
  }
};

export {
  handleCreateService,
  handleGetAllServices,
  handleGetServiceById,
  handleUpdateService,
  handleDeleteService,
};
