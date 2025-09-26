import jwt from "jsonwebtoken";

export const genAuthToken = async (user, res) => {
  try {
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("HideAndSeek", token, {
      maxAge: 1000 * 60 * 60 * 24, // 1 day (in ms)
      httpOnly: true, // Can't be accessed via JS (prevents XSS stealing)
      sameSite: "lax", // Limits cross-site sending (good for CSRF protection)
      secure: false, // Cookie can be sent over HTTP as well (not HTTPS only)
    });
  } catch (error) {
    console.log("Error is cookie Creation", error);
  }
};
