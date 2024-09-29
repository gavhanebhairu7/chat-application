import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Group name
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }], // Array of User references
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // User who created the group
  createdAt: { type: Date, default: Date.now },
});

const model = mongoose.model("Groups", groupSchema);

export { model as groupModel };
