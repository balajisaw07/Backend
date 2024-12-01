import express from "express";
import { viewAssignments, acceptAssignment, rejectAssignment } from "../controllers/adminController";

const router = express.Router();

router.get("/assignments", viewAssignments);
router.post("/assignments/:id/accept", acceptAssignment);
router.post("/assignments/:id/reject", rejectAssignment);

export default router;
