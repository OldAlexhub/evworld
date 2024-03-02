import UserModel from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await UserModel.findOne({ userName });
    if (!user) {
      return res.status(401).json({ message: `Invalid Credentials!` });
    }
    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: `Invalid Credentials!` });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const username = user.userName;
    const fullRange = user.full_range;
    const userId = user._id;
    res
      .status(200)
      .json({
        message: `Login Successfull`,
        username,
        fullRange,
        token,
        userId,
      });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Login;
