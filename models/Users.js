import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  date: { type: Date, default: new Date() },
  userName: { type: String, unique: true, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: `Email is formatted incorrectly`,
    },
  },
  password: { type: String, minlength: 8, required: true },
  confirmPassword: {
    type: String,
    select: false,
    default: undefined,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: `Passwords don't match!`,
    },
  },
  full_range: { type: Number, required: true },
});
const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
