import { create } from 'zustand'
import { fetchTasks } from '../app/api/tasks'

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
  fetchTodos: async () => {
    const tasks = await fetchTasks()
    set({ todos: tasks })
  },
  addTask: (task) =>
    set((state) => ({
      todos: [...state.todos, task],
    })),
  updateTask: (updatedTask) =>
    set((state) => ({
      todos: state.todos.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      todos: state.todos.filter((task) => task.id !== id),
    })),
  toggleTaskCompletion: (id) =>
    set((state) => ({
      todos: state.todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    })),
}))

export default useStore
