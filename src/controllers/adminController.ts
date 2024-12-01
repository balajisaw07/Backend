import { Request, Response } from 'express';
import Assignment from "../models/assignment";

// Get all assignments for the admin
export const viewAssignments = async (req: Request, res: Response): Promise<void> => {
    const { admin } = req.query; // Admin username from query params
    try {
        const assignments = await Assignment.find({ admin });
        res.status(200).json(assignments);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Accept an assignment
export const acceptAssignment = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await Assignment.findByIdAndUpdate(id, { status: "accepted" });
        res.status(200).json({ message: "Assignment accepted" });
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Reject an assignment
export const rejectAssignment = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await Assignment.findByIdAndUpdate(id, { status: "rejected" });
        res.status(200).json({ message: "Assignment rejected" });
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
