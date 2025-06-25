import { Task, TaskStatus } from "../types.js";
declare function setBoardTasks(tasks: Task[]): void;
declare function getBoardTasks(): Task[];
declare function appendTasksToBoard(tasks: Task[]): void;
declare function clearBoard(): void;
declare function moveTask(taskId: number, newStatus: TaskStatus): void;
declare function addTask(taskData: Omit<Task, "id" | "displayId">): void;
declare function updateTask(taskId: number, updates: Partial<Omit<Task, "id" | "displayId">>): void;
declare function deleteTask(taskId: number): void;
export { appendTasksToBoard, clearBoard, moveTask, addTask, updateTask, deleteTask, setBoardTasks, getBoardTasks, };
//# sourceMappingURL=boardManager.d.ts.map