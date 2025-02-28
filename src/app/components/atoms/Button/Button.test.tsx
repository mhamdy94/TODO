import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders Button component label', () => {
    render(<Button label="Search:" />)
    screen.getByText('Search:')
  })

  it('renders default variant', () => {
    render(<Button label="Default" />)
    const button = screen.getByText('Default')
    expect(button).toHaveClass('bg-blue-500 hover:bg-blue-600')
  })

  it('renders destructive variant', () => {
    render(<Button label="Destructive" variant="destructive" />)
    const button = screen.getByText('Destructive')
    expect(button).toHaveClass('bg-red-500 hover:bg-red-600')
  })
  it('renders small size', () => {
    render(<Button label="Small" size="sm" />)
    const button = screen.getByText('Small')
    expect(button).toHaveClass('text-sm')
  })

  it('renders medium size', () => {
    render(<Button label="Medium" size="md" />)
    const button = screen.getByText('Medium')
    expect(button).toHaveClass('text-md')
  })

  it('renders large size', () => {
    render(<Button label="Large" size="lg" />)
    const button = screen.getByText('Large')
    expect(button).toHaveClass('text-lg')
  })

  it('renders with custom background color', () => {
    render(<Button label="Custom Color" backgroundColor="bg-green-500" />)
    const button = screen.getByText('Custom Color')
    expect(button).toHaveClass('bg-green-500')
  })

  it('renders with children', () => {
    render(<Button>Children</Button>)
    const button = screen.getByText('Children')
    expect(button).toBeInTheDocument()
  })
})
