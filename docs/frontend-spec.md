# Frontend Component Specification

## 1. App Component

Responsibilities:

- Hold top-level layout
- Coordinate components
- Provide task state

Children:

TaskInput
FilterBar
TaskList

---

## 2. TaskInput Component

Purpose:
Allow the user to create new tasks.

Features:

- Text input
- Submit button
- Enter key support

Props:

onAddTask(taskText)

---

## 3. TaskList Component

Purpose:
Display tasks.

Responsibilities:

- Render list of TaskItem components
- Apply filtering logic

Props:

tasks
filter
onToggle
onDelete
onEdit

---

## 4. TaskItem Component

Represents a single task.

Features:

- Checkbox for completion
- Task text
- Edit button
- Delete button

Props:

task
onToggle
onDelete
onEdit

---

## 5. FilterBar Component

Provides task filtering.

Filters:

- All
- Active
- Completed

Props:

currentFilter
onFilterChange
