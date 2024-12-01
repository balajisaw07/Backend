import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/admins", adminRoutes);

mongoose.connect("mongodb://localhost:27017/assignment_portal")
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));

export default app;
