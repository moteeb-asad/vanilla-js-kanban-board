// Debug version to test data loading
console.log("🚀 Debug script loaded");
// --- Load data from JSON file ---
async function loadData() {
    console.log("📡 Starting loadData function");
    try {
        console.log("📡 Fetching src/data/dummy.json");
        const response = await fetch("src/data/dummy.json");
        console.log("📡 Response status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ Loaded tasks:", data);
        console.log("✅ Number of tasks:", data.length);
    }
    catch (error) {
        console.error("❌ Error loading data:", error);
    }
}
// --- Initialize when DOM is loaded ---
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎯 DOM loaded, initializing...");
    loadData();
});
export {};
//# sourceMappingURL=kanban-debug.js.map