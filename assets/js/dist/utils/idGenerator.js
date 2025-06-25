// Utility for generating readable task IDs
const ID_PREFIX = "TASK";
const ID_STORAGE_KEY = "kanban_last_task_number";
// --- Get the next task number ---
function getNextTaskNumber() {
    try {
        const stored = localStorage.getItem(ID_STORAGE_KEY);
        const lastNumber = stored ? parseInt(stored, 10) : 0;
        const nextNumber = lastNumber + 1;
        localStorage.setItem(ID_STORAGE_KEY, nextNumber.toString());
        return nextNumber;
    }
    catch (error) {
        console.error("Error accessing localStorage for task number:", error);
        // Fallback to timestamp-based approach
        return Date.now() % 10000;
    }
}
// --- Generate a readable display ID ---
export function generateDisplayId() {
    const taskNumber = getNextTaskNumber();
    return `${ID_PREFIX}-${taskNumber.toString().padStart(3, "0")}`;
}
// --- Initialize task numbering from existing tasks ---
export function initializeTaskNumbering(existingTasks) {
    try {
        let maxNumber = 0;
        existingTasks.forEach((task) => {
            if (task.displayId && task.displayId.startsWith(ID_PREFIX)) {
                const numberPart = task.displayId.replace(`${ID_PREFIX}-`, "");
                const taskNumber = parseInt(numberPart, 10);
                if (!isNaN(taskNumber) && taskNumber > maxNumber) {
                    maxNumber = taskNumber;
                }
            }
        });
        localStorage.setItem(ID_STORAGE_KEY, maxNumber.toString());
        console.log(`Initialized task numbering at ${maxNumber}`);
    }
    catch (error) {
        console.error("Error initializing task numbering:", error);
    }
}
//# sourceMappingURL=idGenerator.js.map