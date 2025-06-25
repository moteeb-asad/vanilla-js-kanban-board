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
export { escapeHtml };
//# sourceMappingURL=htmlUtils.js.map