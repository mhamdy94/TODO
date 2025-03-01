import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskModal from './TaskModal'

describe('TaskModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    initialTaskText: '',
    onSave: jest.fn(),
    isEditing: false,
  }

  it('renders TaskModal component', () => {
    render(<TaskModal {...defaultProps} />)
    const modalTitle = screen.getByText('Add Task')
    expect(modalTitle).toBeInTheDocument()
  })

  it('renders with initial task text', () => {
    render(<TaskModal {...defaultProps} initialTaskText="Test Task" />)
    const textarea = screen.getByDisplayValue('Test Task')
    expect(textarea).toBeInTheDocument()
  })

  //   it('calls onSave handler when Save button is clicked', () => {
  //     const handleSave = jest.fn()
  //     render(<TaskModal {...defaultProps} onSave={handleSave} />)
  //     const saveButton = screen.getByText('Save')
  //     fireEvent.click(saveButton)
  //     expect(handleSave).toHaveBeenCalledTimes(1)
  //   })

  it('calls onClose handler when Cancel button is clicked', () => {
    const handleClose = jest.fn()
    render(<TaskModal {...defaultProps} onClose={handleClose} />)
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('displays validation error when task text is empty', async () => {
    render(<TaskModal {...defaultProps} />)
    const saveButton = screen.getByText('Save')
    fireEvent.click(saveButton)
    const errorMessage = await screen.findByText('Task text is required')
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders Edit Task title when isEditing is true', () => {
    render(<TaskModal {...defaultProps} isEditing={true} />)
    const modalTitle = screen.getByText('Edit Task')
    expect(modalTitle).toBeInTheDocument()
  })
})
