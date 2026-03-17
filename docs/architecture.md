# System Architecture

## 1. Architecture Overview

The application uses a simple client-side architecture:

Browser
   |
React UI Components
   |
State Management
   |
LocalStorage Persistence

There is no backend service.

---

## 2. Technology Stack

Frontend Framework:
React

Language:
JavaScript (ES6+)

Build Tool:
Vite

Styling:
CSS or TailwindCSS (optional)

Storage:
Browser LocalStorage

---

## 3. Project Folder Structure

The project should follow a modular structure.

src/
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

  App.jsx
  main.jsx

---

## 4. Module Responsibilities

App.jsx
Main application container.

components/
Reusable UI components.

hooks/
Custom hooks managing state logic.

services/
Persistent storage logic.

utils/
Pure helper functions.

---

## 5. Engineering Principles

Code must follow:

- Separation of concerns
- Single responsibility principle
- Modular components
- Reusable hooks
