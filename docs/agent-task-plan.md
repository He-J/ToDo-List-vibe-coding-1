# AI Agent Implementation Plan
Project: ToDo List App

This document defines the exact step-by-step workflow the AI coding agent must follow when implementing the application.

The goal is to ensure:
- Modular code generation
- Clear architecture
- Maintainable code
- No monolithic file generation

The agent must strictly follow the phases described below.

---

# Phase 0 — Read Project Documentation

Before generating any code, read the following documents in order:

1. PRD-overview.md
2. architecture.md
3. frontend-spec.md
4. state-management.md
5. storage.md
6. ui-ux.md
7. development-rules.md

The agent must understand:

- product goals
- system architecture
- module boundaries
- development rules

Do not generate code until all documents are processed.

---

# Phase 1 — Initialize Project

Create the project using:

Vite + React

Commands:

npm create vite@latest todo-app -- --template react  
cd todo-app  
npm install  

After installation confirm the project runs with:

npm run dev

Do not modify application logic yet.

---

# Phase 2 — Create Folder Structure

Inside /src, create the following structure:

src/
  components/
  hooks/
  services/
  utils/
  styles/

Then create placeholder files:

components/
  TaskInput.jsx
  TaskItem.jsx
  TaskList.jsx
  FilterBar.jsx

hooks/
  useTasks.js

services/
  storageService.js

utils/
  taskUtils.js

styles/
  global.css

Do not implement full logic yet.

---

# Phase 3 — Implement Data Model

Create task data structure inside taskUtils.js.

Task format:

{
  id: string
  text: string
  completed: boolean
  createdAt: number
}

Provide helper functions:

generateTaskId()

createTask(text)

validateTask(task)

These functions must be pure utilities.

---

# Phase 4 — Implement Storage Layer

File:

services/storageService.js

Responsibilities:

Load tasks from LocalStorage  
Save tasks to LocalStorage  

Functions required:

loadTasks()

saveTasks(tasks)

clearTasks()

Implementation rules:

- Use JSON serialization
- Handle missing or corrupted storage
- Never access LocalStorage directly from UI components

---

# Phase 5 — Implement State Management

File:

hooks/useTasks.js

This custom hook manages all task state.

Internal state:

tasks

Functions exposed:

addTask(text)

toggleTask(id)

deleteTask(id)

editTask(id, text)

filterTasks(filterType)

Requirements:

- Load initial tasks from storage
- Persist updates automatically
- Use React hooks only
- Avoid global state

---

# Phase 6 — Implement UI Components

Follow component specification in frontend-spec.md.

Components must remain small and focused.

## TaskInput.jsx

Responsibilities:

- Accept task text input
- Trigger addTask()

Features:

- Enter key support
- Basic validation

---

## TaskItem.jsx

Represents a single task.

Features:

- Checkbox toggle
- Editable text
- Delete button

---

## TaskList.jsx

Responsibilities:

- Render list of tasks
- Apply current filter

Use TaskItem component.

---

## FilterBar.jsx

Responsibilities:

Allow user to switch between:

All  
Active  
Completed

---

# Phase 7 — Implement App Container

File:

App.jsx

Responsibilities:

- Layout composition
- Use useTasks hook
- Pass state and handlers to components

Structure:

TaskInput  
FilterBar  
TaskList  

App.jsx must not contain business logic.

---

# Phase 8 — Styling

Create styling in:

styles/global.css

Design goals:

Minimal  
Clean  
Fast

Layout guidelines:

Centered container  
Clear task list  
Subtle completed state styling

Avoid complex UI frameworks unless necessary.

---

# Phase 9 — Quality Checks

Before finishing implementation ensure:

1. Tasks persist after page refresh
2. Adding tasks works with Enter key
3. Filtering behaves correctly
4. No component exceeds recommended size
5. Code is modular

Component size guideline:

<200 lines per component.

---

# Phase 10 — Final Deliverables

The final output must include:

Project folder structure  
All source code files  
Run instructions  

Run instructions:

npm install  
npm run dev

---

# Agent Behavior Rules

The AI agent must:

- Generate files incrementally
- Avoid large single responses
- Follow modular boundaries
- Respect the architecture document

If a requirement is unclear, consult the PRD documents before generating code.
