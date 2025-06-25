// Template Manager - Coordinates all template rendering
import { renderHeader } from "./headerTemplate.js";
import { renderFooter } from "./footerTemplate.js";
import { renderDialog } from "./dialogTemplate.js";
import { renderBoard } from "./boardTemplate.js";
export class TemplateManager {
    static renderAll() {
        this.renderHeader();
        this.renderBoard();
        this.renderFooter();
        this.renderDialog();
    }
    static renderHeader() {
        renderHeader();
    }
    static renderFooter() {
        renderFooter();
    }
    static renderDialog() {
        renderDialog();
    }
    static renderBoard() {
        renderBoard();
    }
    static init() {
        // Wait for DOM to be ready
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                this.renderAll();
            });
        }
        else {
            this.renderAll();
        }
    }
}
//# sourceMappingURL=templateManager.js.map