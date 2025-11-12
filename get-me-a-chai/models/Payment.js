import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    supporterEmail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
