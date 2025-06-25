import { Task } from "./types.js";
import { setupEventListeners } from "./handlers/eventListeners.js";
import { appendTasksToBoard } from "./components/boardManager.js";
import { showErrorMessage } from "./components/errorHandler.js";
import { TemplateManager } from "./templates/templateManager.js";
import {
  loadTasksFromStorage,
  saveTasks,
  isStorageAvailable,
  isDataIntentionallyCleared,
} from "./utils/persistence.js";
import { initializeTaskNumbering } from "./utils/idGenerator.js";
import { migrateTasks, needsMigration } from "./utils/migration.js";

// --- Load data with persistence support ---
async function loadData(): Promise<void> {
  try {
    // Check if user has intentionally cleared data
    if (isDataIntentionallyCleared()) {
      console.log(
        "User has intentionally cleared data, starting with empty board"
      );
      initializeTaskNumbering([]);
      appendTasksToBoard([]);
      return;
    }

    // First try to load from localStorage
    if (isStorageAvailable()) {
      const storedTasks = loadTasksFromStorage();
      if (storedTasks && storedTasks.length > 0) {
        console.log("Loaded tasks from localStorage:", storedTasks);

        // Migrate tasks if needed
        let migratedTasks = storedTasks;
        if (needsMigration(storedTasks)) {
          console.log("Migrating tasks to include displayId...");
          migratedTasks = migrateTasks(storedTasks);
          saveTasks(migratedTasks); // Save migrated tasks
        }

        initializeTaskNumbering(migratedTasks);
        appendTasksToBoard(migratedTasks);
        return;
      }
    }

    // If no stored tasks, load from JSON file
    const response = await fetch("/src/data/dummy.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Task[] = await response.json();
    console.log("Loaded tasks from dummy.json:", data);
    initializeTaskNumbering(data);
    appendTasksToBoard(data);

    // Save to localStorage for future use
    if (isStorageAvailable()) {
      saveTasks(data);
    }
  } catch (error) {
    console.error("Error loading data:", error);
    showErrorMessage("Failed to load tasks. Please try again.");
  }
}

// --- Initialize the kanban board ---
async function initializeKanbanBoard(): Promise<void> {
  // Ensure templates are rendered first
  TemplateManager.renderAll();

  // Wait a bit for DOM to update
  await new Promise((resolve) => setTimeout(resolve, 100));

  await loadData();
  setupEventListeners();
}

// --- Initialize when DOM is loaded ---
document.addEventListener("DOMContentLoaded", () => {
  initializeKanbanBoard();
});

// --- Export functions for potential external use ---
export { loadData };
