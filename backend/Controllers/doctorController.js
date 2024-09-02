const Doctor = require("../Modals/DoctorSchema");

const updateDoctor = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $set: req.body },
      {
        new: true,
      }
    );

    res.status(200).json({
      succes: "true",
      msg: "Succesfully Updated",
      data: updatedDoctor,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getallDoctor = async (req, res) => {
  try {
    const query = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          {
            name: { $regex: query, $options: "i" },
          },
          {
            specialization: { $regex: query, $options: "i" },
          },
        ],
      });
    } else {
      doctors = await Doctor.find();
    }

    res.status(200).json({
      succes: "true",
      msg: "Succesfully Updated",
      data: doctors,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getDoctorById = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      succes: "true",
      msg: "Succesfully Updated",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

const deleteDoctor = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const deleteDoctor = await Doctor.findByIdAndDelete(doctorId);

    if (!deleteDoctor) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      succes: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

module.exports = { updateDoctor, getallDoctor, getDoctorById, deleteDoctor };
