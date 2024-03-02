import UserModel from "../models/Users.js";
import bcrypt from "bcrypt";

const Signup = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword, full_range } = req.body;
    const existingUser = await UserModel.findOne({ email, userName });
    if (existingUser) {
      return res.status(401).json({ message: `User already exists` });
    }
    if (password !== confirmPassword) {
      return res.status(401).json({ messsage: `Passwords don't match!` });
    }
    if (full_range < 100) {
      return res.status(401).json({ message: `No such Range in the market!` });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel({
      userName,
      email,
      password: hashedPassword,
      full_range,
    });

    await newUser.save();

    res.status(201).json({ message: `User created successfully!` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Signup;
