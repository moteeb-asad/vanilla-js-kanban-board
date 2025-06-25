// Footer Template Function

export function createFooterTemplate(): string {
  return `
    <footer class="bg-white border-t border-gray-200 py-4 sm:py-4">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p class="text-sm text-gray-600">
            © 2025 Kanban Board. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `;
}

export function renderFooter(): void {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = createFooterTemplate();
  }
}
