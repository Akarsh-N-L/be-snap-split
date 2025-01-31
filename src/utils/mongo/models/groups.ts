import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Group creator
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users in the group
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expense" }], // Expenses in the group
  },
  {
    timestamps: true,
  }
);

const GroupDb = mongoose.model("Group", groupSchema);

export default GroupDb;
