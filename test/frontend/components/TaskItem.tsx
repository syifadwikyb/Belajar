"use client";

import { Task } from "@/types/task";

interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
    isDeleting?: boolean;
}

export default function TaskItem({ task, onEdit, onDelete, isDeleting }: TaskItemProps) {
    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    const handleDeleteClick = () => {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            onDelete(task.id);
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 break-words">{task.title}</h3>
                    {task.description && (
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap break-words">
                            {task.description}
                        </p>
                    )}
                    <div className="flex items-center gap-3 pt-1">
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                task.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-amber-100 text-amber-800"
                            }`}
                        >
                            {task.status === "completed" ? "Completed" : "Pending"}
                        </span>
                        <span className="text-xs text-gray-400">
                            {formatDate(task.created_at)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-start pt-2 sm:pt-0">
                    <button
                        onClick={() => onEdit(task)}
                        disabled={isDeleting}
                        className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors disabled:opacity-50"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDeleteClick}
                        disabled={isDeleting}
                        className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 transition-colors disabled:opacity-50"
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}
