import { Task } from "../types.js";

const STORAGE_KEY = "kanban_tasks";
const CLEARED_FLAG_KEY = "kanban_data_cleared";

// Known dummy data task IDs (from dummy.json)
const DUMMY_TASK_IDS = [1, 2, 3, 4, 5];

// --- Save tasks to localStorage ---
export function saveTasks(tasks: Task[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    // Clear the cleared flag when saving new tasks
    localStorage.removeItem(CLEARED_FLAG_KEY);
    console.log("Tasks saved to localStorage");
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
}

// --- Load tasks from localStorage ---
export function loadTasksFromStorage(): Task[] | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const tasks = JSON.parse(stored) as Task[];
      console.log("Tasks loaded from localStorage:", tasks);
      return tasks;
    }
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
  }
  return null;
}

// --- Clear tasks from localStorage ---
export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log("Tasks cleared from localStorage");
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
}

// --- Mark that user has intentionally cleared data ---
export function markDataAsCleared(): void {
  try {
    localStorage.setItem(CLEARED_FLAG_KEY, "true");
    localStorage.removeItem(STORAGE_KEY);
    console.log("Data marked as intentionally cleared");
  } catch (error) {
    console.error("Error marking data as cleared:", error);
  }
}

// --- Check if user has intentionally cleared data ---
export function isDataIntentionallyCleared(): boolean {
  try {
    return localStorage.getItem(CLEARED_FLAG_KEY) === "true";
  } catch (error) {
    console.error("Error checking cleared flag:", error);
    return false;
  }
}

// --- Check if current data contains dummy data ---
export function hasDummyData(): boolean {
  try {
    const tasks = loadTasksFromStorage();
    if (!tasks || tasks.length === 0) {
      return false;
    }

    // Check if any of the current tasks have dummy data IDs
    return tasks.some((task) => DUMMY_TASK_IDS.includes(task.id));
  } catch (error) {
    console.error("Error checking for dummy data:", error);
    return false;
  }
}

// --- Check if localStorage is available ---
export function isStorageAvailable(): boolean {
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
