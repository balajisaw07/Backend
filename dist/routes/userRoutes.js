"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post("/register", userController_1.registerUser);
router.post("/login", userController_1.loginUser);
router.post("/upload", userController_1.uploadAssignment);
router.get("/admins", userController_1.getAdmins);
exports.default = router;
