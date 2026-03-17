# Development Rules for AI Agent

## 1. Code Organization

Do NOT generate a single large file.

Instead:

- Create components individually
- Create separate hooks
- Create service modules

---

## 2. File Size Limits

Target:

Component file < 200 lines

Utility file < 150 lines

---

## 3. Coding Standards

Use:

- Functional React components
- React hooks
- Descriptive variable names

Avoid:

- Global mutable state
- Deep component nesting

---

## 4. Development Order

The AI agent should implement code in this order:

1. Project setup (Vite + React)
2. Folder structure
3. Data model
4. Storage service
5. State management hook
6. UI components
7. Application container
8. Styling
