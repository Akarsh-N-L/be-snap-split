import mongoose from "mongoose";

const balanceSchema = new mongoose.Schema(
  {
    user1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // User 1
    user2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // User 2
    amount: { type: Number, required: true }, // Positive if user1 owes user2, negative if user2 owes user1
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }, // Group the balance belongs to (if applicable)
  },
  {
    timestamps: true,
  }
);

const BalanceDb = mongoose.model("Balance", balanceSchema);

export default BalanceDb;
