import express from "express";
import { UpdateProfile, ChangePhoto, ApplyJob,AppliedJobs } from "../controllers/userController.js";
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

router.post("/apply-job", Protect, ApplyJob);

router.get("/applied-jobs", Protect, AppliedJobs);

export default router;
