// Migration utility for adding displayId to existing tasks
// --- Migrate tasks to include displayId ---
export function migrateTasks(tasks) {
    return tasks.map((task, index) => {
        // If task already has displayId, keep it
        if (task.displayId) {
            return task;
        }
        // Otherwise, generate a new displayId
        const displayId = `TASK-${(index + 1).toString().padStart(3, "0")}`;
        return {
            ...task,
            displayId,
        };
    });
}
// --- Check if tasks need migration ---
export function needsMigration(tasks) {
    return tasks.some((task) => !task.displayId);
}
//# sourceMappingURL=migration.js.map