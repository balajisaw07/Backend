import express from "express";
import { registerUser, loginUser, uploadAssignment, getAdmins } from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/upload", uploadAssignment);
router.get("/admins", getAdmins);

export default router;
