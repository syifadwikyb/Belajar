"use client";

import { useState, useEffect, FormEvent } from "react";
import { Task, TaskStatus } from "@/types/task";

interface TaskFormProps {
    editingTask: Task | null;
    onSubmit: (formData: { title: string; description: string; status: TaskStatus }) => Promise<void>;
    onCancelEdit: () => void;
    isSaving: boolean;
}

export default function TaskForm({ editingTask, onSubmit, onCancelEdit, isSaving }: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>("pending");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || "");
            setStatus(editingTask.status);
            setErrorMsg("");
        } else {
            setTitle("");
            setDescription("");
            setStatus("pending");
            setErrorMsg("");
        }
    }, [editingTask]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMsg("");

        if (!title.trim()) {
            setErrorMsg("Title is required");
            return;
        }

        try {
            await onSubmit({ title, description, status });
            if (!editingTask) {
                setTitle("");
                setDescription("");
                setStatus("pending");
            }
        } catch (err: any) {
            setErrorMsg(err.message || "Failed to save task");
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {editingTask ? "Edit Task" : "Add New Task"}
            </h2>

            {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md">
                    {errorMsg}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title..."
                        disabled={isSaving}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-800"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description..."
                        disabled={isSaving}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-800"
                    />
                </div>

                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                    </label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as TaskStatus)}
                        disabled={isSaving}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-800 bg-white"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div className="flex items-center gap-3 pt-2">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors disabled:opacity-50"
                    >
                        {isSaving ? "Saving..." : editingTask ? "Update Task" : "Add Task"}
                    </button>

                    {editingTask && (
                        <button
                            type="button"
                            onClick={onCancelEdit}
                            disabled={isSaving}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
