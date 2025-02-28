import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskItem from './TaskItem'

describe('TaskItem', () => {
  const task = {
    id: '1',
    text: 'Test Task',
    completed: false,
    deleted: false,
  }

  it('renders TaskItem component', () => {
    render(
      <TaskItem
        task={task}
        toggleCompletion={() => {}}
        deleteTask={() => {}}
        openEditModal={() => {}}
      />,
    )
    const taskText = screen.getByText('Test Task')
    expect(taskText).toBeInTheDocument()
  })

  it('calls toggleCompletion handler when checkbox is clicked', () => {
    const handleToggleCompletion = jest.fn()
    render(
      <TaskItem
        task={task}
        toggleCompletion={handleToggleCompletion}
        deleteTask={() => {}}
        openEditModal={() => {}}
      />,
    )
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(handleToggleCompletion).toHaveBeenCalledTimes(1)
  })

  it('calls deleteTask handler when delete button is clicked', () => {
    const handleDeleteTask = jest.fn()
    render(
      <TaskItem
        task={task}
        toggleCompletion={() => {}}
        deleteTask={handleDeleteTask}
        openEditModal={() => {}}
      />,
    )
    const deleteButton = screen.getByLabelText('Delete task: Test Task')
    fireEvent.click(deleteButton)
    expect(handleDeleteTask).toHaveBeenCalledTimes(1)
  })

  it('calls openEditModal handler when edit button is clicked', () => {
    const handleOpenEditModal = jest.fn()
    render(
      <TaskItem
        task={task}
        toggleCompletion={() => {}}
        deleteTask={() => {}}
        openEditModal={handleOpenEditModal}
      />,
    )
    const editButton = screen.getByLabelText('Edit task: Test Task')
    fireEvent.click(editButton)
    expect(handleOpenEditModal).toHaveBeenCalledTimes(1)
  })

  it('toggles task completion state when text is clicked', () => {
    const TestComponent = () => {
      const [completed, setCompleted] = React.useState(false)
      return (
        <TaskItem
          task={{ ...task, completed }}
          toggleCompletion={() => setCompleted(!completed)}
          deleteTask={() => {}}
          openEditModal={() => {}}
        />
      )
    }
    render(<TestComponent />)
    const taskText = screen.getByText('Test Task')
    fireEvent.click(taskText)
    expect(taskText).toHaveClass('line-through text-gray-500')
    fireEvent.click(taskText)
    expect(taskText).not.toHaveClass('line-through text-gray-500')
  })
})
