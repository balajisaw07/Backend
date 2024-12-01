"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmins = exports.uploadAssignment = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const assignment_1 = __importDefault(require("../models/assignment"));
// Secret for JWT
const JWT_SECRET = "balaji";
// Register a new user
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, role } = req.body;
    try {
        if (!username || !password || !role) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = new user_1.default({ username, password: hashedPassword, role });
        yield newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.registerUser = registerUser;
// Login a user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield user_1.default.findOne({ username });
        if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.loginUser = loginUser;
// Upload an assignment
const uploadAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, task, admin } = req.body;
    try {
        const newAssignment = new assignment_1.default({ userId, task, admin });
        yield newAssignment.save();
        res.status(201).json({ message: "Assignment uploaded successfully" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.uploadAssignment = uploadAssignment;
// Get all admins
const getAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admins = yield user_1.default.find({ role: "admin" }, { username: 1 });
        res.status(200).json(admins);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAdmins = getAdmins;
