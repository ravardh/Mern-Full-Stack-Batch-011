import jwt from "jsonwebtoken";

export const genAuthToken = (user, res) => {
  try {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("LoginKey", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {
    console.log("Error in Token Creation", error);
  }
};
