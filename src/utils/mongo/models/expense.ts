import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    paidBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // User who paid
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }, // Group the expense belongs to
    splitType: {
      type: String,
      enum: ["EQUAL", "PERCENTAGE", "CUSTOM"],
      required: true,
    }, // How the expense is split
    splits: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User involved in the split
        amount: { type: Number, required: true }, // Amount owed by the user
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ExpenseDb = mongoose.model("Expense", expenseSchema);

export default ExpenseDb;
