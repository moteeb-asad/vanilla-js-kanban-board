// Migration utility for adding displayId to existing tasks

import { Task } from "../types.js";
import { generateDisplayId } from "./idGenerator.js";

// --- Migrate tasks to include displayId ---
export function migrateTasks(tasks: any[]): Task[] {
  return tasks.map((task, index) => {
    // If task already has displayId, keep it
    if (task.displayId) {
      return task as Task;
    }

    // Otherwise, generate a new displayId
    const displayId = `TASK-${(index + 1).toString().padStart(3, "0")}`;

    return {
      ...task,
      displayId,
    } as Task;
  });
}

// --- Check if tasks need migration ---
export function needsMigration(tasks: any[]): boolean {
  return tasks.some((task) => !task.displayId);
}
