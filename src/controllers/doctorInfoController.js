import {
  handleCreateDoctorInfo,
  handleGetAllDoctorInfo,
  handleGetDoctorInfoById,
} from "../services/doctorInfo.js";

const createDoctorInfo = async (req, res) => {
  try {
    const data = req.body;
    const doctor = await handleCreateDoctorInfo(data);
    res.status(200).json(doctor);
  } catch (error) {
    console.log("loi controller khi tao info doctor", error);
    res.status(500).json({
      EM: "Lỗi hệ thống",
      EC: -1,
      DT: "",
    });
  }
};
const getAllDoctorInfo = async (req, res) => {
  try {
    const doctors = await handleGetAllDoctorInfo();
    res.status(200).json(doctors);
  } catch (error) {
    console.log("loi controller khi tao info doctor", error);
    res.status(500).json({
      EM: "Lỗi hệ thống",
      EC: -1,
      DT: "",
    });
  }
};
const getDoctorInfoById = async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await handleGetDoctorInfoById(id);
    res.status(200).json(doctor);
  } catch (error) {
    console.log("loi controller khi tao info doctor", error);
    res.status(500).json({
      EM: "Lỗi hệ thống",
      EC: -1,
      DT: "",
    });
  }
};

export { createDoctorInfo, getDoctorInfoById, getAllDoctorInfo };
