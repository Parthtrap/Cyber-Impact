//extracting mongoose module
const mongoose = require("mongoose");

//Schema for users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
    unique: true,
    maxlength: 25,
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
  },
  favourites: [
    {
      type: String,
    },
  ],
  markets: [
    {
      type: String,
    },
  ],
});

//exporting User modal
module.exports = mongoose.model("User", userSchema);
