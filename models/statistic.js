import mongoose from "mongoose";

const StatisticSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  currentNumber: Number,
  maxNumber: Number,
  breakpoints: [{ name: String, value: Number }],
  section: String
});

export default mongoose.models.Statistic || mongoose.model("Statistic", StatisticSchema);
