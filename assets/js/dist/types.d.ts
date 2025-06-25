export interface Task {
    id: number;
    displayId: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
}
export type TaskStatus = "todo" | "inprogress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high";
export interface BoardData {
    tasks: Task[];
}
export interface KanbanBoard {
    loadData(): Promise<void>;
    appendTasksToBoard(tasks: Task[]): void;
    addTask(task: Omit<Task, "id">): void;
    moveTask(taskId: number, newStatus: TaskStatus): void;
}
//# sourceMappingURL=types.d.ts.map