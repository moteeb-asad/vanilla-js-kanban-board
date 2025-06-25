const STORAGE_KEY = "kanban_tasks";
// --- Save tasks to localStorage ---
export function saveTasks(tasks) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        console.log("Tasks saved to localStorage");
    }
    catch (error) {
        console.error("Error saving tasks to localStorage:", error);
    }
}
// --- Load tasks from localStorage ---
export function loadTasksFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const tasks = JSON.parse(stored);
            console.log("Tasks loaded from localStorage:", tasks);
            return tasks;
        }
    }
    catch (error) {
        console.error("Error loading tasks from localStorage:", error);
    }
    return null;
}
// --- Clear tasks from localStorage ---
export function clearStorage() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log("Tasks cleared from localStorage");
    }
    catch (error) {
        console.error("Error clearing localStorage:", error);
    }
}
// --- Check if localStorage is available ---
export function isStorageAvailable() {
    try {
        const test = "__test__";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=persistence.js.map