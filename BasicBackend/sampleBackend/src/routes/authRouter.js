import express from "express";
import { Login, Logout, Register,ForgetPassword } from "../controller/authController.js";

const router = express.Router();

router.post("/register", Register);

router.post("/login", Login);

router.get("/logout", Logout);

router.patch("/frgtpass",ForgetPassword);

export default router;
