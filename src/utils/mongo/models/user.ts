import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }], // Groups the user belongs to
    balances: [{ type: mongoose.Schema.Types.ObjectId, ref: "Balance" }], // Balances with other users
  },
  {
    timestamps: true,
  }
);

const UserDb = mongoose.model("User", userSchema);

export default UserDb;
