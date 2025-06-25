import { Task, TaskStatus } from "./types.js";

// Global state
let boardTasks: Task[] = [];

// --- Load data from JSON file ---
async function loadData(): Promise<void> {
  try {
    const response = await fetch("assets/js/dummy.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Task[] = await response.json();
    boardTasks = data;
    console.log("Loaded tasks:", boardTasks);
    appendTasksToBoard(boardTasks);
  } catch (error) {
    console.error("Error loading data:", error);
    showErrorMessage("Failed to load tasks. Please try again.");
  }
}

// --- Append tasks to the board ---
function appendTasksToBoard(tasks: Task[]): void {
  clearBoard();
  tasks.forEach((task) => {
    createTaskElement(task);
  });
}

// --- Create a task element and append it to the appropriate column ---
function createTaskElement(task: Task): void {
  const taskCard = document.createElement("div");
  taskCard.classList.add(
    "task-card",
    "draggable",
    "bg-white",
    "p-3",
    "rounded",
    "shadow-sm",
    "border",
    "hover:shadow-md",
    "transition-shadow"
  );
  taskCard.setAttribute("data-task-id", task.id.toString());
  taskCard.setAttribute("data-priority", task.priority);
  taskCard.innerHTML = `
    <div class="font-semibold text-gray-800 mb-2">${escapeHtml(
      task.title
    )}</div>
    <div class="text-sm text-gray-600 mb-3">${escapeHtml(
      task.description
    )}</div>
    <div class="flex justify-between items-center">
      <span class="priority-${
        task.priority
      }">${task.priority.toUpperCase()}</span>
      <div class="text-xs text-gray-400">#${task.id}</div>
    </div>
  `;

  const column = getColumnByStatus(task.status);
  if (column) {
    const taskContainer = column.querySelector(".space-y-2");
    taskContainer?.appendChild(taskCard);
  }
}

// --- Get column element by status ---
function getColumnByStatus(status: TaskStatus): Element | null {
  const columnMap: Record<TaskStatus, string> = {
    todo: "todo",
    inprogress: "in-progress",
    review: "review",
    done: "done",
  };

  const columnName = columnMap[status];
  return columnName
    ? document.querySelector(`[data-column="${columnName}"]`)
    : null;
}

// --- Clear all tasks from the board ---
function clearBoard(): void {
  const taskContainers = document.querySelectorAll("[data-column] .space-y-2");
  taskContainers.forEach((container) => {
    const taskCards = container.querySelectorAll(".task-card");
    taskCards.forEach((card) => card.remove());
  });
}

// --- Add a new task ---
function addTask(taskData: Omit<Task, "id">): void {
  const newTask: Task = {
    id: Date.now(),
    ...taskData,
  };

  boardTasks.push(newTask);
  createTaskElement(newTask);
}

// --- Move a task to a different status ---
function moveTask(taskId: number, newStatus: TaskStatus): void {
  const taskIndex = boardTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const task = boardTasks[taskIndex];
    if (task) {
      task.status = newStatus;
      appendTasksToBoard(boardTasks);
    }
  }
}

// --- Escape HTML to prevent XSS ---
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m] || m);
}

// --- Show error message to user ---
function showErrorMessage(message: string): void {
  const errorDiv = document.createElement("div");
  errorDiv.className =
    "fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg z-50";
  errorDiv.textContent = message;

  document.body.appendChild(errorDiv);

  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.parentNode.removeChild(errorDiv);
    }
  }, 5000);
}

// --- Setup event listeners ---
function setupEventListeners(): void {
  const addTaskButtons = document.querySelectorAll(".add-task-button");

  addTaskButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target as Element;
      const column = target.getAttribute("data-column");
      if (column) {
        console.log(`Add task to column: ${column}`);
        // TODO: Implement add task dialog
      }
    });
  });

  // TODO: Add drag and drop listeners
  // TODO: Add task editing listeners
}

// --- Initialize the kanban board ---
async function initializeKanbanBoard(): Promise<void> {
  await loadData();
  setupEventListeners();
}

// --- Initialize when DOM is loaded ---
document.addEventListener("DOMContentLoaded", () => {
  initializeKanbanBoard();
});

// --- Export functions for potential external use ---
export { addTask, moveTask, loadData, appendTasksToBoard };
