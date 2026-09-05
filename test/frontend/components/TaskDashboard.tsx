"use client";

import { useState, useEffect, useCallback } from "react";
import { Task, TaskStatus } from "@/types/task";
import { getTasks, createTask, updateTask, deleteTask } from "@/lib/api";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskDashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const fetchTasks = useCallback(async (search: string, statusFilter: string) => {
        setIsLoading(true);
        setErrorMessage("");
        try {
            const response = await getTasks(search, statusFilter);
            setTasks(response.data || []);
        } catch (error: any) {
            console.error(error);
            setErrorMessage("Failed to load tasks.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchTasks(searchQuery, activeFilter);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery, activeFilter, fetchTasks]);

    const handleFormSubmit = async (formData: { title: string; description: string; status: TaskStatus }) => {
        setIsSaving(true);
        setErrorMessage("");
        try {
            if (editingTask) {
                await updateTask(editingTask.id, formData);
                setEditingTask(null);
            } else {
                await createTask(formData);
            }
            await fetchTasks(searchQuery, activeFilter);
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "Failed to save task.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteTask = async (id: number) => {
        setDeletingId(id);
        setErrorMessage("");
        try {
            await deleteTask(id);
            if (editingTask?.id === id) {
                setEditingTask(null);
            }
            await fetchTasks(searchQuery, activeFilter);
        } catch (error: any) {
            console.error(error);
            setErrorMessage("Failed to delete task.");
        } finally {
            setDeletingId(null);
        }
    };

    const handleEditTask = (task: Task) => {
        setEditingTask(task);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 pb-12">
            {/* Header section */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-3xl mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">FINORA</h1>
                    <p className="text-sm text-gray-500 font-medium">Simple Task Manager</p>
                </div>
            </header>

            {/* Main content container */}
            <main className="max-w-3xl mx-auto px-4 pt-8 space-y-8">
                {/* Error Banner */}
                {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center justify-between">
                        <span>{errorMessage}</span>
                        <button
                            onClick={() => setErrorMessage("")}
                            className="text-red-500 hover:text-red-700 font-bold ml-4"
                        >
                            ✕
                        </button>
                    </div>
                )}

                {/* Form section (Create & Edit) */}
                <TaskForm
                    editingTask={editingTask}
                    onSubmit={handleFormSubmit}
                    onCancelEdit={handleCancelEdit}
                    isSaving={isSaving}
                />

                {/* List & Filtering Section */}
                <section className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
                    </div>

                    {/* Search Input and Filter Controls */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search tasks..."
                                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex items-center bg-gray-200/70 p-1 rounded-lg self-start sm:self-auto">
                            {["all", "pending", "completed"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${
                                        activeFilter === filter
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Task List */}
                    <TaskList
                        tasks={tasks}
                        isLoading={isLoading}
                        deletingId={deletingId}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
                    />
                </section>
            </main>
        </div>
    );
}
