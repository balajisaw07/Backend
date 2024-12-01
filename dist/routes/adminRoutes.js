"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const router = express_1.default.Router();
router.get("/assignments", adminController_1.viewAssignments);
router.post("/assignments/:id/accept", adminController_1.acceptAssignment);
router.post("/assignments/:id/reject", adminController_1.rejectAssignment);
exports.default = router;
