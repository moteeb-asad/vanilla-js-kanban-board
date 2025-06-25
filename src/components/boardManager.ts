import { Task, TaskStatus } from "../types.js";
import { createTaskElement, getColumnByStatus } from "./taskElement.js";
import { saveTasks } from "../utils/persistence.js";
import { generateDisplayId } from "../utils/idGenerator.js";

// Global state for tasks
let boardTasks: Task[] = [];

// --- Set the global tasks array ---
function setBoardTasks(tasks: Task[]): void {
  boardTasks = tasks;
}

// --- Get the global tasks array ---
function getBoardTasks(): Task[] {
  return boardTasks;
}

// --- Append tasks to the board ---
function appendTasksToBoard(tasks: Task[]): void {
  setBoardTasks(tasks);
  clearBoard();
  tasks.forEach((task) => {
    createTaskElement(task);
  });
}

// --- Clear all tasks from the board ---
function clearBoard(): void {
  const taskContainers = document.querySelectorAll("[data-column] .task-list");
  taskContainers.forEach((container) => {
    const taskCards = container.querySelectorAll(".task-card");
    taskCards.forEach((card) => card.remove());
  });
}

// --- Move a task to a new status/column ---
function moveTask(taskId: number, newStatus: TaskStatus): void {
  const taskIndex = boardTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const task = boardTasks[taskIndex];
    if (task) {
      task.status = newStatus;
      saveTasks(boardTasks);
      console.log(`Task ${taskId} moved to ${newStatus}`);

      // Re-render the task in the new column
      const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
      if (taskElement) {
        taskElement.remove();
        createTaskElement(task);
      }
    }
  }
}

// --- Add a new task ---
function addTask(taskData: Omit<Task, "id" | "displayId">): void {
  const newTask: Task = {
    id: Date.now(),
    displayId: generateDisplayId(),
    ...taskData,
  };

  boardTasks.push(newTask);
  saveTasks(boardTasks);
  createTaskElement(newTask);
}

// --- Update an existing task ---
function updateTask(
  taskId: number,
  updates: Partial<Omit<Task, "id" | "displayId">>
): void {
  const taskIndex = boardTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const existingTask = boardTasks[taskIndex];
    if (existingTask) {
      boardTasks[taskIndex] = { ...existingTask, ...updates };
      saveTasks(boardTasks);

      // Re-render the updated task
      const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
      if (taskElement) {
        taskElement.remove();
        createTaskElement(boardTasks[taskIndex]!);
      }
    }
  }
}

// --- Delete a task ---
function deleteTask(taskId: number): void {
  const taskIndex = boardTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    boardTasks.splice(taskIndex, 1);
    saveTasks(boardTasks);

    // Remove the task element from DOM
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
      taskElement.remove();
    }
  }
}

export {
  appendTasksToBoard,
  clearBoard,
  moveTask,
  addTask,
  updateTask,
  deleteTask,
  setBoardTasks,
  getBoardTasks,
};
