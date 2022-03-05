import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  status: String,
  date: String,
});

export default mongoose.models.Country || mongoose.model("Country", CountrySchema);
