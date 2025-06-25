// Template Manager - Coordinates all template rendering

import { renderHeader } from "./headerTemplate.js";
import { renderFooter } from "./footerTemplate.js";
import { renderDialog } from "./dialogTemplate.js";
import { renderBoard } from "./boardTemplate.js";

export class TemplateManager {
  static renderAll(): void {
    this.renderHeader();
    this.renderBoard();
    this.renderFooter();
    this.renderDialog();
  }

  static renderHeader(): void {
    renderHeader();
  }

  static renderFooter(): void {
    renderFooter();
  }

  static renderDialog(): void {
    renderDialog();
  }

  static renderBoard(): void {
    renderBoard();
  }

  static init(): void {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.renderAll();
      });
    } else {
      this.renderAll();
    }
  }
}
