import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders Input component', () => {
    render(<Input value="" onChange={() => {}} placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
  })

  it('displays the correct value', () => {
    render(<Input value="Test value" onChange={() => {}} />)
    const input = screen.getByDisplayValue('Test value')
    expect(input).toBeInTheDocument()
  })

  it('calls onChange handler when value changes', () => {
    const handleChange = jest.fn()
    render(<Input value="" onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'New value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('updates value when typed into', () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState('')
      return <Input value={value} onChange={(e) => setValue(e.target.value)} />
    }
    render(<TestComponent />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'New value' } })
    expect(input).toHaveValue('New value')
  })
})
