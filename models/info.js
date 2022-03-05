import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  type: String
});

export default mongoose.models.Info || mongoose.model("Info", InfoSchema);
