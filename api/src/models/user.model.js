// import { Schema, model } from "mongoose";

// const  userSchema = new Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//  });

//  export const User = model("user", userSchema)

const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  userEmail: String,
  password: String,
});

module.exports = {
  User,
};
