const mongoose = require("mongoose");

const penalmemberSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "A user must have a first name"],
  },
  lastName: {
    type: String,
    required: [true, "A user must have a last name"],
  },
  address: {
    type: String,
    required: [true, "A user must have an address"],
  },
  city: {
    type: String,
    required: [true, "A user must have a city"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "A user must have a  phoneNumber"],
  },
  email: {
    type: String,
    required: [true, "A user must have an email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
  type: {
    type: String,
    default: "penalmember",
  },
});

module.exports = mongoose.model("Penalmembers", penalmemberSchema);
