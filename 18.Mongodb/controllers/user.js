const { model } = require("mongoose");
const User = require("../models/user")

const getAllUsers = async (req, res) => {
  const allDbUsers = await User.find();
  res.json(allDbUsers);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ response: "User not exist!" });
  }
  return res.json(user);
};

const updateUserById = async (req, res) => {
  async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "Success" });
  };
};

const deleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ response: "Success" });
};

const addNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.ip_address
  ) {
    return res.status(400).json({ respose: "All fields are mandatory!" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.ip_address,
  });

  console.log("result", result);
  return res.status(201).json({ status: 200, id: result._id });
};

module.exports = {
  getUserById,
  updateUserById,
  deleteUserById,
  addNewUser,
  getAllUsers
};
