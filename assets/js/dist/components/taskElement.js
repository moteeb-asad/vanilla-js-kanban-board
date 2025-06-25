import { escapeHtml } from "../utils/htmlUtils.js";
// --- Create a task element and append it to the appropriate column ---
function createTaskElement(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card", "draggable", "bg-white", "p-3", "rounded", "shadow-sm", "border", "hover:shadow-md", "transition-shadow", "cursor-move");
    taskCard.setAttribute("data-task-id", task.id.toString());
    taskCard.setAttribute("data-priority", task.priority);
    taskCard.setAttribute("draggable", "true");
    taskCard.innerHTML = `
    <div class="flex justify-between items-start mb-2">
      <div class="font-semibold text-gray-800 flex-1">${escapeHtml(task.title)}</div>
      <div class="flex gap-1 ml-2">
        <button class="edit-task-btn text-gray-400 hover:text-blue-500 text-sm" title="Edit task">
          ✏️
        </button>
        <button class="delete-task-btn text-gray-400 hover:text-red-500 text-sm" title="Delete task">
          🗑️
        </button>
      </div>
    </div>
    <div class="text-sm text-gray-600 mb-3">${escapeHtml(task.description)}</div>
    <div class="flex justify-between items-center">
      <span class="priority-${task.priority}">${task.priority.toUpperCase()}</span>
      <div class="text-xs text-gray-400">${task.displayId}</div>
    </div>
  `;
    const column = getColumnByStatus(task.status);
    if (column) {
        const taskContainer = column.querySelector(".task-list");
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
export { createTaskElement, getColumnByStatus };
//# sourceMappingURL=taskElement.js.map