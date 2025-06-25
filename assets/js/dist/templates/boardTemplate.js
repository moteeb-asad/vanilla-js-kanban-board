import { isDataIntentionallyCleared, hasDummyData, } from "../utils/persistence.js";
const columns = [
    {
        status: "todo",
        title: "To-Do",
    },
    {
        status: "inprogress",
        title: "In Progress",
    },
    {
        status: "review",
        title: "Review",
    },
    {
        status: "done",
        title: "Done",
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
        <!-- Tasks will be dynamically added here -->
      </div>
    </div>
  `;
}
function createClearDataButton() {
    // Don't show button if data was intentionally cleared
    if (isDataIntentionallyCleared()) {
        return "";
    }
    // Only show button if there's actual dummy data present
    if (!hasDummyData()) {
        return "";
    }
    return `
    <div id="clear-data-section" class="mb-6">
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center justify-between">
        <div class="flex items-center">
          <svg class="w-5 h-5 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          <div>
            <h3 class="text-sm font-medium text-yellow-800">Sample Data Loaded</h3>
            <p class="text-sm text-yellow-700">Clear the demo data to start with a fresh board for your own tasks.</p>
          </div>
        </div>
        <button 
          id="clear-dummy-data-btn" 
          class="ml-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Clear Demo Data
        </button>
      </div>
    </div>
  `;
}
export function createBoardTemplate() {
    return `
    ${createClearDataButton()}
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