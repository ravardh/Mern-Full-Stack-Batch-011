import express from "express";
import {
  Login,
  Logout,
  Register,
  SendOTP,
  VerifyOTP,
  ForgetPassword
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);

router.post("/fp/sendOTP", SendOTP);
router.post("/fp/verifyOTP",VerifyOTP)
router.post("/forgetPassword",ForgetPassword)

export default router;
