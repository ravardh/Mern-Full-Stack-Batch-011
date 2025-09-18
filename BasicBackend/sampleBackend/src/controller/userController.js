export const Update = (req, res) => {
  res.status(200).json({ message: "User Update Successfull" });
};

export const ChangePass = (req, res) => {
  res.status(200).json({ message: "User password change Successfull" });
};

export const Delete = (req, res) => {
  res.status(204).json({ message: "User delete Successfull" });
};
