import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskList from './TaskList'

describe('TaskList', () => {
  const tasks = [
    { id: '1', text: 'Task 1', completed: false, deleted: false },
    { id: '2', text: 'Task 2', completed: true, deleted: false },
  ]

  const defaultProps = {
    tasks,
    toggleCompletion: jest.fn(),
    deleteTask: jest.fn(),
    editTask: jest.fn(),
  }

  it('renders TaskList component', () => {
    render(<TaskList {...defaultProps} />)
    const task1 = screen.getByText('Task 1')
    const task2 = screen.getByText('Task 2')
    expect(task1).toBeInTheDocument()
    expect(task2).toBeInTheDocument()
  })

  it('displays no tasks message when task list is empty', () => {
    render(<TaskList {...defaultProps} tasks={[]} />)
    const noTasksMessage = screen.getByText('No tasks available')
    expect(noTasksMessage).toBeInTheDocument()
  })

  it('calls toggleCompletion handler when task is toggled', () => {
    const handleToggleCompletion = jest.fn()
    render(
      <TaskList {...defaultProps} toggleCompletion={handleToggleCompletion} />,
    )
    const task1 = screen.getByText('Task 1')
    fireEvent.click(task1)
    expect(handleToggleCompletion).toHaveBeenCalledTimes(1)
  })

  it('calls deleteTask handler when delete button is clicked', () => {
    const handleDeleteTask = jest.fn()
    render(<TaskList {...defaultProps} deleteTask={handleDeleteTask} />)
    const deleteButton = screen.getByLabelText('Delete task: Task 1')
    fireEvent.click(deleteButton)
    expect(handleDeleteTask).toHaveBeenCalledTimes(1)
  })

  it('calls editTask handler when edit button is clicked', () => {
    const handleEditTask = jest.fn()
    render(<TaskList {...defaultProps} editTask={handleEditTask} />)
    const editButton = screen.getByLabelText('Edit task: Task 1')
    fireEvent.click(editButton)
    expect(handleEditTask).toHaveBeenCalledTimes(1)
  })
})
