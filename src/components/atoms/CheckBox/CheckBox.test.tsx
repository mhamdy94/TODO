import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './CheckBox'

describe('Checkbox', () => {
  it('renders Checkbox component', () => {
    render(<Checkbox checked={false} onChange={() => {}} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('renders checked state', () => {
    render(<Checkbox checked={true} onChange={() => {}} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('renders unchecked state', () => {
    render(<Checkbox checked={false} onChange={() => {}} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox checked={false} onChange={handleChange} />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('toggles checked state when clicked', () => {
    const TestComponent = () => {
      const [checked, setChecked] = React.useState(false)
      return (
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      )
    }
    render(<TestComponent />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})
