import jwt from "jsonwebtoken";

export const genAuthToken = async (user, res) => {
  try {
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("LoginKey", token, {
      maxAge: 1000 * 60 * 60 * 24,
      strict: false,
      sameSite: "lax",
      httpOnly: true,
    });
    return true;
  } catch (error) {
    console.log("Error in Token Creation", error);
    return false;
  }
};
