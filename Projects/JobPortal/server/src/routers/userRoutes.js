import express from "express";
import { UpdateProfile, ChangePhoto } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleWare.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.put("/update", Protect, UpdateProfile);
router.patch(
  "/changePhoto",
  Protect,
  upload.single("profilePicture"),
  ChangePhoto
);

export default router;
