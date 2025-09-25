import jwt from "jsonwebtoken";

export const genAuthToken = async (user, res) => {
  try {
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("hide&seek", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {
    console.log("Error is cookie Creation", error);
  }
};
