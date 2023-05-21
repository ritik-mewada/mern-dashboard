import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      mix: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      mix: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", useSchema);
export default User;
