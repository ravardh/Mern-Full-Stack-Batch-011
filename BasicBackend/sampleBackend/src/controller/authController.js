import User from "../models/userModel.js";

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      console.log("Eorror 400 : All Feilds Required");
      return;
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
    });

    res.status(201).json({ message: `Welcome ${newUser.fullName}` });
  } catch (error) {
    console.log(error);
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
