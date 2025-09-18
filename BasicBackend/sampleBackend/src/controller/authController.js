export const Register = (req, res) => {
  res.status(201).json({ message: "User Registration Successfull" });
};

export const Login = (req, res) => {
  res.status(200).json({ message: "User Login Successfull" });
};

export const Logout = (req, res) => {
  res.status(200).json({ message: "User Logout Successfull" });
};
