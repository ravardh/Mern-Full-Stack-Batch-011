import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const token = req.cookies.LoginKey;
    if (!token) {
      const error = new Error("Not Authorized, No Token Found");
      error.statusCode = 401;
      return next(error);
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      const error = new Error("Token Expired, Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(decode.id);
    if (!verifiedUser) {
      const error = new Error("User Not Found, Invalid Token");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};
