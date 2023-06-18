const mongoose = require("mongoose");

const addUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  library: {
    type: String,
  },
});

const User = mongoose.model("User", addUserSchema);

module.exports = User;
