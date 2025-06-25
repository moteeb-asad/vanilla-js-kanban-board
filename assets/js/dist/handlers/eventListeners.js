import { moveTask, addTask, updateTask, deleteTask, getBoardTasks, } from "../components/boardManager.js";
import { createDialogTemplate } from "../templates/dialogTemplate.js";
// Current task being edited
let currentEditingTaskId = null;
// --- Setup event listeners ---
function setupEventListeners() {
    const addTaskButtons = document.querySelectorAll(".add-task-button");
    addTaskButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const target = e.target;
            const column = target.getAttribute("data-column");
            if (column) {
                console.log(`Add task to column: ${column}`);
                openTaskDialog(false, getStatusFromColumn(column));
            }
        });
    });
    // Setup drag and drop listeners
    setupDragAndDropListeners();
    // Setup task editing listeners
    setupTaskEditingListeners();
    // Setup dialog listeners
    setupDialogListeners();
}
// --- Convert column name to TaskStatus ---
function getStatusFromColumn(columnName) {
    const columnMap = {
        todo: "todo",
        "in-progress": "inprogress",
        review: "review",
        done: "done",
    };
    return columnMap[columnName] || "todo";
}
// --- Convert TaskStatus to column name ---
function getColumnFromStatus(status) {
    const statusMap = {
        todo: "todo",
        inprogress: "in-progress",
        review: "review",
        done: "done",
    };
    return statusMap[status] || "todo";
}
// --- Setup drag and drop listeners ---
function setupDragAndDropListeners() {
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);
    document.addEventListener("dragend", handleDragEnd);
    document.addEventListener("dragleave", handleDragLeave);
}
// --- Handle drag start ---
function handleDragStart(e) {
    const target = e.target;
    if (target.classList.contains("task-card")) {
        const taskId = target.getAttribute("data-task-id");
        if (taskId && e.dataTransfer) {
            e.dataTransfer.setData("text/plain", taskId);
            target.classList.add("opacity-50");
        }
    }
}
// --- Handle drag over ---
function handleDragOver(e) {
    e.preventDefault();
    // First, remove highlighting from all columns
    document.querySelectorAll(".task-list").forEach((list) => {
        list.classList.remove("bg-gray-100", "ring-2", "ring-indigo-300");
    });
    // Then add highlighting to the current column being hovered
    const target = e.target;
    const column = target.closest("[data-column]");
    if (column) {
        const taskList = column.querySelector(".task-list");
        if (taskList) {
            taskList.classList.add("bg-gray-100", "ring-2", "ring-indigo-300");
        }
    }
}
// --- Handle drop ---
function handleDrop(e) {
    e.preventDefault();
    // Immediately remove all visual feedback
    document.querySelectorAll(".task-list").forEach((list) => {
        list.classList.remove("bg-gray-100", "ring-2", "ring-indigo-300");
    });
    const target = e.target;
    const column = target.closest("[data-column]");
    if (column && e.dataTransfer) {
        const taskId = parseInt(e.dataTransfer.getData("text/plain"));
        const columnName = column.getAttribute("data-column");
        if (columnName && taskId) {
            const newStatus = getStatusFromColumn(columnName);
            moveTask(taskId, newStatus);
        }
    }
}
// --- Handle drag end ---
function handleDragEnd(e) {
    const target = e.target;
    if (target.classList.contains("task-card")) {
        target.classList.remove("opacity-50");
    }
    // Remove all drop visual feedback
    document.querySelectorAll(".task-list").forEach((list) => {
        list.classList.remove("bg-gray-100", "ring-2", "ring-indigo-300");
    });
}
// --- Handle drag leave ---
function handleDragLeave(e) {
    // Only remove highlighting if we're leaving the entire board area
    const target = e.target;
    const relatedTarget = e.relatedTarget;
    // If we're not moving to another element within the board, clear highlighting
    if (!relatedTarget ||
        !target.closest(".kanban-board")?.contains(relatedTarget)) {
        document.querySelectorAll(".task-list").forEach((list) => {
            list.classList.remove("bg-gray-100", "ring-2", "ring-indigo-300");
        });
    }
}
// --- Setup task editing listeners ---
function setupTaskEditingListeners() {
    document.addEventListener("click", (e) => {
        const target = e.target;
        // Edit task button
        if (target.classList.contains("edit-task-btn")) {
            const taskCard = target.closest(".task-card");
            if (taskCard) {
                const taskId = parseInt(taskCard.getAttribute("data-task-id") || "0");
                if (taskId) {
                    openTaskDialog(true, undefined, taskId);
                }
            }
        }
        // Delete task button
        if (target.classList.contains("delete-task-btn")) {
            const taskCard = target.closest(".task-card");
            if (taskCard) {
                const taskId = parseInt(taskCard.getAttribute("data-task-id") || "0");
                if (taskId && confirm("Are you sure you want to delete this task?")) {
                    deleteTask(taskId);
                }
            }
        }
    });
}
// --- Setup dialog listeners ---
function setupDialogListeners() {
    document.addEventListener("click", (e) => {
        const target = e.target;
        // Save task button
        if (target.id === "save-task-btn") {
            handleSaveTask();
        }
        // Cancel dialog button
        if (target.id === "cancel-dialog-btn") {
            closeTaskDialog();
        }
        // Close dialog when clicking backdrop
        if (target.classList.contains("bg-gray-500/75")) {
            closeTaskDialog();
        }
    });
    // Close dialog on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeTaskDialog();
        }
    });
}
// --- Open task dialog ---
function openTaskDialog(isEdit = false, defaultStatus, taskId) {
    const dialogContainer = document.getElementById("dialog-container");
    if (!dialogContainer)
        return;
    // Create and show dialog
    dialogContainer.innerHTML = createDialogTemplate(isEdit);
    const dialog = document.getElementById("task-dialog");
    if (dialog) {
        dialog.classList.remove("hidden");
    }
    // If editing, populate form with existing task data
    if (isEdit && taskId) {
        currentEditingTaskId = taskId;
        const tasks = getBoardTasks();
        const task = tasks.find((t) => t.id === taskId);
        if (task) {
            populateTaskForm(task);
        }
    }
    else {
        currentEditingTaskId = null;
        // Set default status if provided
        if (defaultStatus) {
            const statusSelect = document.getElementById("task-status");
            if (statusSelect) {
                statusSelect.value = defaultStatus;
            }
        }
    }
    // Focus on title input
    const titleInput = document.getElementById("task-title");
    if (titleInput) {
        titleInput.focus();
    }
}
// --- Close task dialog ---
function closeTaskDialog() {
    const dialog = document.getElementById("task-dialog");
    if (dialog) {
        dialog.classList.add("hidden");
    }
    currentEditingTaskId = null;
}
// --- Populate task form for editing ---
function populateTaskForm(task) {
    const titleInput = document.getElementById("task-title");
    const descriptionInput = document.getElementById("task-description");
    const prioritySelect = document.getElementById("task-priority");
    const statusSelect = document.getElementById("task-status");
    if (titleInput)
        titleInput.value = task.title;
    if (descriptionInput)
        descriptionInput.value = task.description;
    if (prioritySelect)
        prioritySelect.value = task.priority;
    if (statusSelect)
        statusSelect.value = task.status;
}
// --- Handle save task ---
function handleSaveTask() {
    const titleInput = document.getElementById("task-title");
    const descriptionInput = document.getElementById("task-description");
    const prioritySelect = document.getElementById("task-priority");
    const statusSelect = document.getElementById("task-status");
    if (!titleInput || !descriptionInput || !prioritySelect || !statusSelect) {
        return;
    }
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const priority = prioritySelect.value;
    const status = statusSelect.value;
    if (!title) {
        alert("Please enter a task title");
        titleInput.focus();
        return;
    }
    const taskData = {
        title,
        description,
        priority,
        status,
    };
    if (currentEditingTaskId) {
        // Update existing task
        updateTask(currentEditingTaskId, taskData);
    }
    else {
        // Add new task
        addTask(taskData);
    }
    closeTaskDialog();
}
export { setupEventListeners };
//# sourceMappingURL=eventListeners.js.map