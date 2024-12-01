import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import Assignment from "../models/assignment";

// Secret for JWT
const JWT_SECRET = "balaji";

// Register a new user
export const registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        if (!username || !password || !role) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login a user
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Upload an assignment
export const uploadAssignment = async (req, res) => {
    const { userId, task, admin } = req.body;
    try {
        const newAssignment = new Assignment({ userId, task, admin });
        await newAssignment.save();
        res.status(201).json({ message: "Assignment uploaded successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all admins
export const getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: "admin" }, { username: 1 });
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
