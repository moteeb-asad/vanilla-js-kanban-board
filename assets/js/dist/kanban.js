// Global state
let boardTasks = [];
// --- Load data from JSON file ---
async function loadData() {
    try {
        const response = await fetch("assets/js/dummy.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        boardTasks = data;
        console.log("Loaded tasks:", boardTasks);
        appendTasksToBoard(boardTasks);
    }
    catch (error) {
        console.error("Error loading data:", error);
        showErrorMessage("Failed to load tasks. Please try again.");
    }
}
// --- Append tasks to the board ---
function appendTasksToBoard(tasks) {
    clearBoard();
    tasks.forEach((task) => {
        createTaskElement(task);
    });
}
// --- Create a task element and append it to the appropriate column ---
function createTaskElement(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card", "draggable", "bg-blue-100", "p-2", "rounded");
    taskCard.setAttribute("data-task-id", task.id.toString());
    taskCard.innerHTML = `
    <div class="font-semibold">${escapeHtml(task.title)}</div>
    <div class="text-sm text-gray-600">${escapeHtml(task.description)}</div>
    <div class="text-xs mt-1">
      <span class="priority-${task.priority}">${task.priority.toUpperCase()}</span>
    </div>
  `;
    const column = getColumnByStatus(task.status);
    if (column) {
        const taskContainer = column.querySelector(".space-y-2");
        taskContainer?.appendChild(taskCard);
    }
}
// --- Get column element by status ---
function getColumnByStatus(status) {
    const columnMap = {
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
function clearBoard() {
    const taskContainers = document.querySelectorAll("[data-column] .space-y-2");
    taskContainers.forEach((container) => {
        const taskCards = container.querySelectorAll(".task-card");
        taskCards.forEach((card) => card.remove());
    });
}
// --- Add a new task ---
function addTask(taskData) {
    const newTask = {
        id: Date.now(),
        ...taskData,
    };
    boardTasks.push(newTask);
    createTaskElement(newTask);
}
// --- Move a task to a different status ---
function moveTask(taskId, newStatus) {
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
function escapeHtml(text) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m] || m);
}
// --- Show error message to user ---
function showErrorMessage(message) {
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
function setupEventListeners() {
    const addTaskButtons = document.querySelectorAll(".add-task-button");
    addTaskButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const target = e.target;
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
async function initializeKanbanBoard() {
    await loadData();
    setupEventListeners();
}
// --- Initialize when DOM is loaded ---
document.addEventListener("DOMContentLoaded", () => {
    initializeKanbanBoard();
});
// --- Export functions for potential external use ---
export { addTask, moveTask, loadData, appendTasksToBoard };
//# sourceMappingURL=kanban.js.map