import { Task, TaskStatus } from "./types.js";
declare function loadData(): Promise<void>;
declare function appendTasksToBoard(tasks: Task[]): void;
declare function addTask(taskData: Omit<Task, "id">): void;
declare function moveTask(taskId: number, newStatus: TaskStatus): void;
export { addTask, moveTask, loadData, appendTasksToBoard };
//# sourceMappingURL=kanban.d.ts.map