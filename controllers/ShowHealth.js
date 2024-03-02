import BatteryModel from "../models/Battaries.js";

const ShowHealth = async (req, res) => {
  try {
    const { userId } = req.params;

    const show = await BatteryModel.find({ userId });

    res.status(200).json({ message: `Data fetched!`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowHealth;
