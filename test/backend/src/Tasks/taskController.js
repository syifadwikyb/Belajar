const taskService = require("./taskService");

// 1. Controller untuk mengambil semua tasks (GET /tasks)
const getTasks = async (req, res) => {
    try {
        const { search, status } = req.query;
        const tasks = await taskService.getAllTasks(search, status);

        res.status(200).json({
            success: true,
            data: tasks
        });
    } catch (error) {
        console.error("[ERROR]", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch tasks"
        });
    }
};

// 2. Controller untuk mengambil task berdasarkan ID (GET /tasks/:id)
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        console.error("[ERROR]", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch task"
        });
    }
};

// 3. Controller untuk membuat task baru (POST /tasks)
const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task
        });
    } catch (error) {
        console.error("[ERROR]", error.message);

        if (error.message === "Title is required" || error.message === "Invalid task status") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to create task"
        });
    }
};

// 4. Controller untuk memperbarui task (PUT /tasks/:id)
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.updateTask(id, req.body);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task
        });
    } catch (error) {
        console.error("[ERROR]", error.message);

        if (error.message === "Title is required" || error.message === "Invalid task status") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to update task"
        });
    }
};

// 5. Controller untuk menghapus task (DELETE /tasks/:id)
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.deleteTask(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch (error) {
        console.error("[ERROR]", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete task"
        });
    }
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};
