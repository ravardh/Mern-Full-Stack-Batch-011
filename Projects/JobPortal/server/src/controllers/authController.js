import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/token.js";
import OTP from "../models/otpModel.js";
import { sendForgetPasswordOTP } from "../utils/sendEmail.js";

export const Register = async (req, res, next) => {
  try {
    const { email, phone, fullName, password, role } = req.body;

    if (!fullName || !email || !password || !phone || !role) {
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
      role,
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
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not Registred");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Invalid Password");
      error.statusCode = 401;
      return next(error);
    }

    genAuthToken(existingUser, res);

    res.status(200).json({
      message: `Welcome Back ${existingUser.fullName}`,
      data: existingUser,
    });
  } catch (error) {
    next(error);
  }
};

export const Logout = async (req, res, next) => {
  try {
    res.clearCookie("LoginKey");
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    next(error);
  }
};

export const SendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not Registred");
      error.statusCode = 401;
      return next(error);
    }

    const otp = Math.floor(Math.random() * 900000 + 100000).toString();
    const hashedOTP = await bcrypt.hash(otp, 10);
    await OTP.create({ email, otp: hashedOTP });

    if (!sendForgetPasswordOTP(email, otp)) {
      const error = new Error("Error Sending OTP");
      error.statusCode = 400;
      return next(error);
    }

    res.status(200).json({ message: "OTP sent Sucessfull" });
  } catch (error) {
    next(error);
  }
};

export const VerifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingOTP = await OTP.findOne({ email });
    if (!existingOTP) {
      const error = new Error("OTP Expired");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = await bcrypt.compare(otp, existingOTP.otp);
    if (!isVerified) {
      const error = new Error("Wrong OTP");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({ message: "OTP Verified" });
  } catch (error) {
    next(error);
  }
};

export const ForgetPassword = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not Registred");
      error.statusCode = 401;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    existingUser.password = hashedPassword;

    await existingUser.save();

    res.status(200).json({ message: "Password Reset Successfull" });
  } catch (error) {
    next(error);
  }
};
