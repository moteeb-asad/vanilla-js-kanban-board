const columns = [
    {
        status: "todo",
        title: "To-Do",
        sampleTaskColor: "bg-blue-100",
        sampleTaskText: "Task 1",
    },
    {
        status: "inprogress",
        title: "In Progress",
        sampleTaskColor: "bg-yellow-100",
        sampleTaskText: "Task 4",
    },
    {
        status: "review",
        title: "Review",
        sampleTaskColor: "bg-purple-100",
        sampleTaskText: "Task 2",
    },
    {
        status: "done",
        title: "Done",
        sampleTaskColor: "bg-green-100",
        sampleTaskText: "Task 3",
    },
];
function createColumnTemplate(column) {
    const dataColumn = column.status === "inprogress" ? "in-progress" : column.status;
    return `
    <div class="w-full bg-white rounded shadow p-3 sm:p-4 min-h-[200px]" data-column="${dataColumn}">
      <div class="flex justify-between items-center mb-3 sm:mb-4">
        <h2 class="text-lg sm:text-xl font-bold">${column.title}</h2>
        <i class="fas fa-plus cursor-pointer text-blue-500 add-task-button" data-column="${dataColumn}"></i>
      </div>
      <div class="space-y-2 task-list">
        <div class="${column.sampleTaskColor} p-2 rounded task-card draggable">
          ${column.sampleTaskText}
        </div>
      </div>
    </div>
  `;
}
export function createBoardTemplate() {
    return `
    <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0">
      ${columns.map((column) => createColumnTemplate(column)).join("")}
    </div>
  `;
}
export function renderBoard() {
    const boardContainer = document.getElementById("board-container");
    if (boardContainer) {
        boardContainer.innerHTML = createBoardTemplate();
    }
}
//# sourceMappingURL=boardTemplate.js.map