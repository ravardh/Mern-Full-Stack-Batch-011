import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/token.js";

export const Register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: `Welcome ${newUser.fullName}` });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User Not Registered");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Invalid Password");
      error.statusCode = 401;
      return next(error);
    }

    await genAuthToken(existingUser, res);

    res.status(200).json({ message: "User Login Successfull" });
  } catch (error) {
    next(error);
  }
};

export const Logout = (req, res) => {
  res.status(200).json({ message: "User Logout Successfull" });
};

export const ForgetPassword = (req, res) => {
  res.status(200).json({ message: "Password Change Successfull" });
};
