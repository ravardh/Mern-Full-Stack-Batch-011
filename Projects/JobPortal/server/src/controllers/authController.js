import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const Register = async (req, res, next) => {
  try {
    const { email, phone, fullName, password } = req.body;

    if (!fullName || !email || !password || !phone) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User Already Registred");
      error.statusCode = 409;
      return next(error);
    }

    const photo = `https://placehold.co/600x400?text=${fullName
      .charAt(0)
      .toUpperCase()}`;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      phone,
      photo,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: `Welcome to JobPortal ${newUser.fullName}` });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    next(error);
  }
};

export const Logout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    next(error);
  }
};
