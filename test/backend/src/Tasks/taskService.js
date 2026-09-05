const taskRepository = require("./taskRepository");

// 1. Mengambil semua task
const getAllTasks = async (search, status) => {
    return await taskRepository.findAllTasks(search, status);
};

// 2. Mengambil detail task berdasarkan ID
const getTaskById = async (id) => {
    if (!id) {
        throw new Error("Task ID is required");
    }

    try {
        return await taskRepository.findTaskById(id);
    } catch (error) {
        // Jika Supabase tidak menemukan data (.single()), error code 'PGRST116'
        if (error.code === "PGRST116") {
            return null;
        }
        throw error;
    }
};

// 3. Menambahkan task (business logic & validasi data input)
const createTask = async (taskData) => {
    // Validasi 1: Title wajib diisi dan tidak boleh hanya berisi spasi
    if (!taskData.title || !taskData.title.trim()) {
        throw new Error("Title is required");
    }

    // Status default jika tidak dikirim adalah 'pending'
    const status = taskData.status || "pending";

    // Validasi 2: Status hanya boleh 'pending' atau 'completed'
    if (!["pending", "completed"].includes(status)) {
        throw new Error("Invalid task status");
    }

    const payload = {
        title: taskData.title.trim(),
        description: taskData.description ? taskData.description.trim() : null,
        status: status
    };

    return await taskRepository.createTask(payload);
};

// 4. Mengubah task berdasarkan ID (business logic & validasi)
const updateTask = async (id, taskData) => {
    if (!id) {
        throw new Error("Task ID is required");
    }

    // Validasi 1: Title wajib diisi
    if (!taskData.title || !taskData.title.trim()) {
        throw new Error("Title is required");
    }

    // Validasi 2: Status hanya boleh 'pending' atau 'completed'
    if (taskData.status && !["pending", "completed"].includes(taskData.status)) {
        throw new Error("Invalid task status");
    }

    // Cek keberadaan data sebelum update
    const existingTask = await getTaskById(id);
    if (!existingTask) {
        return null;
    }

    const payload = {
        title: taskData.title.trim(),
        description: taskData.description !== undefined ? (taskData.description ? taskData.description.trim() : null) : existingTask.description,
        status: taskData.status || existingTask.status
    };

    return await taskRepository.updateTask(id, payload);
};

// 5. Menghapus task berdasarkan ID
const deleteTask = async (id) => {
    if (!id) {
        throw new Error("Task ID is required");
    }

    const existingTask = await getTaskById(id);
    if (!existingTask) {
        return null;
    }

    return await taskRepository.deleteTask(id);
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
