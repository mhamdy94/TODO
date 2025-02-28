import React, { useEffect, useState } from 'react'
import useStore from './store'

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('')
  const [editTodo, setEditTodo] = useState(null)
  const [editText, setEditText] = useState('')
  const todos = useStore((state) => state.todos)
  const addTodo = useStore((state) => state.addTodo)
  const removeTodo = useStore((state) => state.removeTodo)
  const updateTodo = useStore((state) => state.updateTask)
  const fetchTodos = useStore((state) => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleAddTodo = () => {
    addTodo(newTodo)
    setNewTodo('')
  }

  const handleEditTodo = (todo) => {
    setEditTodo(todo)
    setEditText(todo)
  }

  const handleUpdateTodo = () => {
    updateTodo({
      ...editTodo,
      text: editText,
    })
    setEditTodo(null)
    setEditText('')
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {editTodo && (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdateTodo}>Update Todo</button>
        </div>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
