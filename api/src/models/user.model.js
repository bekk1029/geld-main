// import { Schema, model } from "mongoose";

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// export const UserModel = model("user", userSchema);

const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

module.exports = {
  User,
};

// module.exports = {
//   User,
// };
