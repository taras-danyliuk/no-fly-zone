import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  name: String,
  currentNumber: Number,
});

export default mongoose.models.Info || mongoose.model("Info", InfoSchema);
