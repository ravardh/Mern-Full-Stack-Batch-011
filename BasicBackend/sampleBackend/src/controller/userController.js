import bcrypt from "bcrypt";
export const Update = async (req, res, next) => {
  try {
    const { fullName } = req.body;
    if (!fullName) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const currentUser = req.user;

    currentUser.fullName = fullName;

    await currentUser.save();

    res.status(200).json({ message: "User Update Sucessfull" });
  } catch (error) {
    next(error);
  }
};

export const ChangePass = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const currentUser = req.user;

    const hashedPassword = await bcrypt.hash(password, 10);

    currentUser.password = hashedPassword;

    await currentUser.save();

    res.status(200).json({ message: "User password change Successfull" });
  } catch (error) {
    next(error);
  }
};

export const Delete = async (req, res, next) => {
  try {
    res.clearCookie("HideAndSeek", { maxAge: 0 });
    const currentUser = req.user;

    await currentUser.deleteOne({ email: currentUser.email });

    res.status(200).json({ message: "User delete Successfull" });
  } catch (error) {
    next(error);
  }
};
