// Modal Dialog Template Function
export function createDialogTemplate(isEdit = false) {
    const title = isEdit ? "Edit Task" : "Add Task";
    const buttonText = isEdit ? "Update Task" : "Add Task";
    const iconColor = isEdit ? "blue" : "green";
    return `
    <div id="task-dialog" class="relative z-10 hidden" aria-labelledby="dialog-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-4">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-sm sm:my-8 sm:max-w-lg mx-2">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-${iconColor}-100 sm:mx-0 sm:size-10">
                  <svg class="size-6 text-${iconColor}-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="text-base font-semibold text-gray-900 mb-4" id="dialog-title">${title}</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <label for="task-title" class="block text-sm font-medium text-gray-900">Title</label>
                      <input type="text" id="task-title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border" />
                    </div>
                    
                    <div>
                      <label for="task-description" class="block text-sm font-medium text-gray-900">Description</label>
                      <textarea id="task-description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"></textarea>
                    </div>
                    
                    <div>
                      <label for="task-priority" class="block text-sm font-medium text-gray-900">Priority</label>
                      <select id="task-priority" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border">
                        <option value="low">Low</option>
                        <option value="medium" selected>Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    
                    <div>
                      <label for="task-status" class="block text-sm font-medium text-gray-900">Status</label>
                      <select id="task-status" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border">
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" id="save-task-btn" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 sm:ml-3 sm:w-auto">
                ${buttonText}
              </button>
              <button type="button" id="cancel-dialog-btn" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
export function renderDialog() {
    const dialogContainer = document.getElementById("dialog-container");
    if (dialogContainer) {
        dialogContainer.innerHTML = createDialogTemplate();
    }
}
//# sourceMappingURL=dialogTemplate.js.map