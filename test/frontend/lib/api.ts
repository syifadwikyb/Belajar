import { Task, CreateTaskInput, UpdateTaskInput } from "@/types/task";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 1. Fetch semua task dengan opsional query search & status
export async function getTasks(search?: string, status?: string): Promise<{ success: boolean; data: Task[] }> {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (status && status !== "all") params.append("status", status);

    const queryString = params.toString() ? `?${params.toString()}` : "";
    const response = await fetch(`${API_URL}/tasks${queryString}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
}

// 2. Fetch single task by ID
export async function getTaskById(id: number): Promise<{ success: boolean; data: Task }> {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch task");
    }

    return response.json();
}

// 3. Tambah task baru (POST /tasks)
export async function createTask(data: CreateTaskInput): Promise<{ success: boolean; message: string; data: Task }> {
    const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Failed to create task");
    }

    return result;
}

// 4. Update task (PUT /tasks/:id)
export async function updateTask(id: number, data: UpdateTaskInput): Promise<{ success: boolean; message: string; data: Task }> {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Failed to update task");
    }

    return result;
}

// 5. Hapus task (DELETE /tasks/:id)
export async function deleteTask(id: number): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Failed to delete task");
    }

    return result;
}
