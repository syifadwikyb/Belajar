const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const supabase = require("./config/supabase");
const taskRoutes = require("./Tasks/taskRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health Check Endpoints
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Task API is running"
    });
});

app.get("/health/database", async (req, res) => {
    try {
        const { error } = await supabase
            .from("tasks")
            .select("id")
            .limit(1);

        if (error) {
            console.error("[DATABASE ERROR]", error.message);
            return res.status(500).json({
                success: false,
                message: "Database connection failed"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Database connection is working"
        });
    } catch (err) {
        console.error("[DATABASE ERROR]", err.message);
        return res.status(500).json({
            success: false,
            message: "Database connection failed"
        });
    }
});

// Task REST API Routes
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Task API running on port ${PORT}`);
});
