import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  isGroup: {
    type: Boolean,
    default: false,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Groups",
  },
  message: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Messages", messageSchema);

export { model as MessageModel };
