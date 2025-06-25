# Vanilla JS Kanban Board with TypeScript

A modern Kanban board application built with vanilla JavaScript and TypeScript.

## 🚀 Features

- **TypeScript Support**: Type-safe development with modern ES2020 features
- **Drag & Drop**: Move tasks between columns (coming soon)
- **Task Management**: Add, edit, and delete tasks
- **Responsive Design**: Built with Tailwind CSS
- **No Framework Dependencies**: Pure vanilla JavaScript/TypeScript

## 📁 Project Structure

```
vanilla-js-kanban-board/
├── src/                    # TypeScript source files
│   ├── types.ts           # Type definitions
│   └── kanban.ts          # Main kanban implementation
├── assets/
│   ├── css/
│   │   └── style.css      # Custom styles
│   └── js/
│       ├── dist/          # Compiled JavaScript output
│       └── dummy.json     # Sample data
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:

- TypeScript compiler
- Live server for development
- Type definitions for Node.js

### 2. Compile TypeScript

```bash
# One-time compilation
npm run build

# Watch mode (automatically recompiles on changes)
npm run watch
```

### 3. Start Development Server

```bash
# Start live server
npm start

# Or start with auto-compilation
npm run dev
```

### 4. View the Application

Open your browser and navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch TypeScript files and auto-compile on changes
- `npm run dev` - Start watch mode and live server simultaneously
- `npm start` - Start live server only

## 📝 TypeScript Features Added

### Type Safety

- **Task Interface**: Strongly typed task objects
- **Status Types**: Union types for task status and priority
- **Error Handling**: Proper error handling with TypeScript

### Modern Features

- **ES Modules**: Uses ES2020 module system
- **Async/Await**: Modern async JavaScript patterns
- **Class-based Architecture**: Object-oriented approach
- **Type Guards**: Runtime type checking

### Code Examples

#### Task Type Definition

```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
}

type TaskStatus = "todo" | "inprogress" | "review" | "done";
type TaskPriority = "low" | "medium" | "high";
```

#### Adding a New Task

```typescript
const newTask: Omit<Task, "id"> = {
  title: "New Task",
  description: "Task description",
  status: "todo",
  priority: "medium",
};

kanbanBoard.addTask(newTask);
```

## 🎯 Next Steps

1. **Install Dependencies**: Run `npm install`
2. **Compile TypeScript**: Run `npm run build`
3. **Start Development**: Run `npm run dev`
4. **Add Features**: Implement drag & drop, task editing, etc.

## 🚨 Important Notes

- The HTML file now loads the compiled JavaScript from `assets/js/dist/`
- Make sure to compile TypeScript before running the application
- Use `npm run watch` during development for automatic compilation
- The original `custom.js` file can be removed once TypeScript is working

## 🔄 Migration from JavaScript

Your original JavaScript code has been:

1. **Converted to TypeScript** with proper type annotations
2. **Organized into classes** for better structure
3. **Enhanced with error handling** and type safety
4. **Made more maintainable** with interfaces and type definitions

The functionality remains the same but with improved developer experience and code quality!
