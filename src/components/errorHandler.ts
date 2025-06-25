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

export { showErrorMessage };
