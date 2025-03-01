import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  const defaultProps = {
    addTask: jest.fn(),
    uncompletedCount: 5,
    completedCount: 3,
    deletedCount: 2,
  }

  it('renders Header component', () => {
    render(<Header {...defaultProps} />)
    const headerTitle = screen.getByText('Todo List')
    expect(headerTitle).toBeInTheDocument()
  })

  it('displays task stats correctly', () => {
    render(<Header {...defaultProps} />)
    const uncompletedStat = screen.getByLabelText('5 Uncompleted')
    const completedStat = screen.getByLabelText('3 Completed')
    const deletedStat = screen.getByLabelText('2 Deleted')
    expect(uncompletedStat).toBeInTheDocument()
    expect(completedStat).toBeInTheDocument()
    expect(deletedStat).toBeInTheDocument()
  })

  it('calls addTask handler when Add Task button is clicked', () => {
    const handleAddTask = jest.fn()
    render(<Header {...defaultProps} addTask={handleAddTask} />)
    const addButton = screen.getByText('Add Task')
    fireEvent.click(addButton)
    expect(handleAddTask).toHaveBeenCalledTimes(1)
  })
})
