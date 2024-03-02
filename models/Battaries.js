import mongoose from "mongoose";

const BatterySchema = new mongoose.Schema({
  date: { type: Date, default: new Date() },
  userId: { type: String },
  full_range: { type: Number },
  current_range: { type: Number },
  current_battery_health: { type: Number },
  lost_miles: { type: Number },
  lost_percentage: { type: Number },
});
const BatteryModel = mongoose.model("battaries", BatterySchema);

export default BatteryModel;
