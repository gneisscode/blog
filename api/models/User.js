const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default:
        "https://res.cloudinary.com/dosj9cjie/image/upload/v1682109097/default_lvpsoy.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);

