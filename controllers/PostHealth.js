import BatteryModel from "../models/Battaries.js";

const PostHealth = async (req, res) => {
  try {
    const {
      userId,
      full_range,
      current_range,
      current_battery_health,
      lost_miles,
      lost_percentage,
    } = req.body;

    const newHealth = await BatteryModel({
      userId,
      full_range,
      current_range,
      current_battery_health,
      lost_miles,
      lost_percentage,
    });

    await newHealth.save();

    res.status(201).json({ message: `Data submitted successfully` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostHealth;
