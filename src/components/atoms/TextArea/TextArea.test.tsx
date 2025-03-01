import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TextArea from './TextArea'

describe('TextArea', () => {
  it('renders TextArea component', () => {
    render(<TextArea placeholder="Enter text" />)
    const textarea = screen.getByPlaceholderText('Enter text')
    expect(textarea).toBeInTheDocument()
  })

  it('displays the correct value', () => {
    render(<TextArea defaultValue="Test value" />)
    const textarea = screen.getByDisplayValue('Test value')
    expect(textarea).toBeInTheDocument()
  })

  it('calls onChange handler when value changes', () => {
    const handleChange = jest.fn()
    render(<TextArea defaultValue="" onChange={handleChange} />)
    const textarea = screen.getByRole('textbox')
    fireEvent.change(textarea, { target: { value: 'New value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('updates value when typed into', () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState('')
      return (
        <TextArea
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )
    }
    render(<TestComponent />)
    const textarea = screen.getByRole('textbox')
    fireEvent.change(textarea, { target: { value: 'New value' } })
    expect(textarea).toHaveValue('New value')
  })

  it('renders with custom background color', () => {
    render(<TextArea defaultValue="Test value" bgColor="secondary" />)
    const textarea = screen.getByDisplayValue('Test value')
    expect(textarea).toHaveClass('bg-secondary-white')
  })

  it('renders with disabled state', () => {
    render(<TextArea defaultValue="Test value" disabled />)
    const textarea = screen.getByDisplayValue('Test value')
    expect(textarea).toBeDisabled()
  })
})
