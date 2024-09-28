import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

const model = mongoose.model("Users", userSchema);

export { model as UserModel };
