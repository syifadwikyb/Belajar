"use client";

import { Task } from "@/types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    isLoading: boolean;
    deletingId: number | null;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

export default function TaskList({ tasks, isLoading, deletingId, onEdit, onDelete }: TaskListProps) {
    if (isLoading) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
                <p className="text-gray-500 font-medium animate-pulse">Loading tasks...</p>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
                <p className="text-gray-600 font-medium text-base mb-1">No tasks yet.</p>
                <p className="text-gray-400 text-sm">Create your first task.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    isDeleting={deletingId === task.id}
                />
            ))}
        </div>
    );
}
