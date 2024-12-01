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
exports.rejectAssignment = exports.acceptAssignment = exports.viewAssignments = void 0;
// Get all assignments for the admin
const viewAssignments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin } = req.query; // Admin username from query params
    try {
        const assignments = yield assignment_1.default.find({ admin });
        res.status(200).json(assignments);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.viewAssignments = viewAssignments;
// Accept an assignment
const acceptAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield assignment_1.default.findByIdAndUpdate(id, { status: "accepted" });
        res.status(200).json({ message: "Assignment accepted" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.acceptAssignment = acceptAssignment;
// Reject an assignment
const rejectAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield assignment_1.default.findByIdAndUpdate(id, { status: "rejected" });
        res.status(200).json({ message: "Assignment rejected" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.rejectAssignment = rejectAssignment;
const assignment_1 = __importDefault(require("../models/assignment"));
// Get all assignments for the admin
const viewAssignments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin } = req.query; // Admin username from query params
    try {
        const assignments = yield assignment_1.default.find({ admin });
        res.status(200).json(assignments);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.viewAssignments = viewAssignments;
// Accept an assignment
const acceptAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield assignment_1.default.findByIdAndUpdate(id, { status: "accepted" });
        res.status(200).json({ message: "Assignment accepted" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.acceptAssignment = acceptAssignment;
const rejectAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield assignment_1.default.findByIdAndUpdate(id, { status: "rejected" });
        res.status(200).json({ message: "Assignment rejected" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.rejectAssignment = rejectAssignment;
