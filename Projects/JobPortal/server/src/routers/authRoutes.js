import express from "express";
import { Login, Logout, Register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);

// router.post("/sendOTP",SendOTP)
// router.post("/verifyOTP",VerifyOTP)
// router.post("/ForgetPassword",ForgetPassword)


export default router;
