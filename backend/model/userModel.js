import mongoose, { Mongoose } from "mongoose";
import isEmail from "validator/lib/isEmail.js";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: [isEmail, "enter valid email"],
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Users", userSchema);

export { model as UserModel };
