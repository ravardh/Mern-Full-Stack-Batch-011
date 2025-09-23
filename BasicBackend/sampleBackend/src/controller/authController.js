import User from "../models/userModel.js";

export const Register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
    });

    res.status(201).json({ message: `Welcome ${newUser.fullName}` });
  } catch (error) {
    next(error);
  }
};

export const Login = (req, res) => {
  res.status(200).json({ message: "User Login Successfull" });
};

export const Logout = (req, res) => {
  res.status(200).json({ message: "User Logout Successfull" });
};

export const ForgetPassword = (req, res) => {
  res.status(200).json({ message: "Password Change Successfull" });
};
