import express from "express";
import { UpdateProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleWare.js";

const router = express.Router();

router.put("/update", Protect, UpdateProfile);

export default router;
