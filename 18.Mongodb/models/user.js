const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    ip_address: {
      type: String,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

module.exports = User;