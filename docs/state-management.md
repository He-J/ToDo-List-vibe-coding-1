# State Management Design

## 1. State Location

Task state should be stored in a custom React hook:

useTasks()

This hook manages all task operations.

---

## 2. Task Data Model

Task structure:

{
  id: string,
  text: string,
  completed: boolean,
  createdAt: timestamp
}

---

## 3. Task Operations

The hook must expose:

addTask(text)

toggleTask(id)

deleteTask(id)

editTask(id, text)

filterTasks(filterType)

---

## 4. State Flow

User Action
   |
Component Event
   |
Custom Hook Function
   |
State Update
   |
LocalStorage Sync
   |
UI Re-render
