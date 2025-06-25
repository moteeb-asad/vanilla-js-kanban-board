# Kanban Board

A modern task management application built with TypeScript and vanilla JavaScript.

## Tech Stack

- **TypeScript** - Type-safe development
- **Vanilla JavaScript** - No framework dependencies
- **HTML5** - Semantic markup
- **CSS3** - Custom styling
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Data persistence

## Features

- Drag and drop task management
- Add, edit, and delete tasks
- Task priority system (High, Medium, Low)
- Responsive design for all devices
- Persistent data storage
- Readable task IDs (TASK-001, TASK-002, etc.)

## Project Structure

```
vanilla-js-kanban-board/
├── src/
│   ├── components/
│   │   ├── boardManager.ts
│   │   ├── taskElement.ts
│   │   └── errorHandler.ts
│   ├── handlers/
│   │   └── eventListeners.ts
│   ├── templates/
│   │   ├── headerTemplate.ts
│   │   ├── footerTemplate.ts
│   │   ├── boardTemplate.ts
│   │   ├── dialogTemplate.ts
│   │   └── templateManager.ts
│   ├── utils/
│   │   ├── htmlUtils.ts
│   │   ├── persistence.ts
│   │   ├── idGenerator.ts
│   │   └── migration.ts
│   ├── data/
│   │   └── dummy.json
│   ├── types.ts
│   └── kanban.ts
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── colors.css
│   │   ├── responsive.css
│   │   └── header-footer.css
│   └── js/dist/          # Compiled JavaScript
├── index.html
├── project-details.html
├── package.json
└── tsconfig.json
```

## Setup and Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Project

```bash
npm run build
```

### 3. Start Development Server

```bash
npm start
```

### 4. Access the Application

Open your browser to `http://localhost:3000`

## Available Commands

```bash
npm run build    # Compile TypeScript
npm run watch    # Watch for changes and auto-compile
npm run dev      # Development mode with auto-compilation
npm start        # Start live server
```

## Usage

1. **Add Tasks**: Click the "+" button in any column
2. **Edit Tasks**: Click the edit (✏️) button on any task
3. **Delete Tasks**: Click the delete (🗑️) button on any task
4. **Move Tasks**: Drag and drop tasks between columns
5. **View Details**: Click "Project Details" in the header
