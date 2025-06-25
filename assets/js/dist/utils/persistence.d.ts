import { Task } from "../types.js";
export declare function saveTasks(tasks: Task[]): void;
export declare function loadTasksFromStorage(): Task[] | null;
export declare function clearStorage(): void;
export declare function markDataAsCleared(): void;
export declare function isDataIntentionallyCleared(): boolean;
export declare function hasDummyData(): boolean;
export declare function isStorageAvailable(): boolean;
//# sourceMappingURL=persistence.d.ts.map