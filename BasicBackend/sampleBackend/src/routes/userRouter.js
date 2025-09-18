import express from "express";
import { ChangePass, Delete, Update } from "../controller/userController.js";
import { LoginCheck } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.put("/update", LoginCheck, Update);

router.patch("/changepass", ChangePass);

router.delete("/delete", Delete);

export default router;
