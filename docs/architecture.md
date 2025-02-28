# Todo App Documentation

## Project Overview

This Todo application is built using **Next.js (App Router)**, **TypeScript**, **Zustand** (for state management), **Tailwind CSS**, and **ShadCN UI** (for UI components). The project follows the **Atomic Design pattern**, ensuring modular, reusable, and scalable UI components.

---

## Architecture

The project is structured using the **Atomic Design** methodology:

### **1. Components Folder (`/src/app/components/`)**

- **Atoms:** Small UI elements (e.g., `Button.tsx`, `Input.tsx`).
- **Molecules:** Combinations of atoms (e.g., `TaskItem.tsx`, `TaskModal.tsx`).
- **Organisms:** Larger UI sections (e.g., `TaskList.tsx`, `Header.tsx`).
- **Templates:** Layout structures (e.g., `TaskPage.tsx`).

### **2. Store (`/src/store/store.ts`)**

State management is handled using **Zustand**, which provides a lightweight global store without the complexity of Redux.

- **State Structure:**

  ```typescript
  type Task = {
    id: string
    text: string
    completed: boolean
    deleted: boolean
  }
  ```

- **Actions:**
  - `addTask(text: string)`: Adds a new task.
  - `editTask(id: string, text: string)`: Updates an existing task.
  - `toggleTaskCompletion(id: string)`: Toggles task completion.
  - `deleteTask(id: string)`: Soft deletes a task.
  - `getPaginatedTasks(page: number, perPage: number)`: Returns paginated tasks.

### **3. State Management Decisions**

- **Why Zustand?**
  - Minimal boilerplate.
  - Easy state updates.
  - No reducers or extra dependencies.
- **Alternative Considerations:** Redux was considered but deemed unnecessary for a simple task manager.

### **4. UI & Styling**

- **Tailwind CSS** provides utility-based styling.
- **ShadCN UI** is used for consistent UI components (buttons, modals, etc.).
- **Accessibility:** All components use proper keyboard navigation and labels.

### **5. Pagination**

- Implemented in `CustomPagination.tsx`.
- Uses simple array slicing to return paginated tasks.
- Controls for previous/next page navigation.

---

## Features

✅ Add new tasks.
✅ Edit tasks via modal.
✅ Soft delete tasks.
✅ Mark tasks as completed.
✅ View task counts (completed, uncompleted, deleted).
✅ Pagination support.
✅ Jest unit tests for critical components.
✅ Storybook for UI component documentation.

---

## Testing

- **Jest** is used for unit testing.
- **Tested Components:** `TaskItem`, `TaskManager`, and `TaskList`.
- Run tests using:
  npm test

---

## Running the Project

1. Install dependencies:
   npm install

2. Run the development server:
   npm run dev

3. Start Storybook for UI testing:

   npm run storybook

---

## Future Enhancements

🚀 Drag-and-drop task reordering.
🚀 Due dates & task priorities.
🚀 Local storage or database integration.

This structured approach ensures a **scalable, maintainable, and efficient** task management system.
