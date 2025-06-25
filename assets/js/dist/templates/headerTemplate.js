// Header Template Function
export function createHeaderTemplate() {
    return `
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="container mx-auto px-4 py-4 sm:py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3 header-brand">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center header-logo">
              <i class="fas fa-tasks text-white text-lg"></i>
            </div>
            <div>
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900 header-title">Kanban Board</h1>
              <p class="text-sm text-gray-500 hidden sm:block">Project Management Tool</p>
            </div>
          </div>
          <nav class="flex items-center space-x-4">
            <a href="project-details.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="hidden sm:inline">Project Details</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  `;
}
export function renderHeader() {
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        headerContainer.innerHTML = createHeaderTemplate();
    }
}
//# sourceMappingURL=headerTemplate.js.map