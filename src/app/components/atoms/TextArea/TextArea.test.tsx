import React from 'react'
import { render, screen } from '@testing-library/react'
import TextArea from './TextArea'

describe('TextArea component', () => {
  it('renders with default props', () => {
    render(<TextArea data-testid="textarea-element" />)
    const textAreaElement = screen.getByTestId('textarea-element')
    expect(textAreaElement).not.toBeNull()
    expect(textAreaElement?.getAttribute('class')).toContain('bg-white')
    expect(textAreaElement?.getAttribute('type')).toContain('text')
    expect(textAreaElement?.getAttribute('class')).toContain(
      'focus:border-primary-grey-200',
    )
  })

  it('applies the secondary background color class', () => {
    render(<TextArea bgColor="secondary" data-testid="textarea-element" />)
    const textAreaElement = screen.getByTestId('textarea-element')
    expect(textAreaElement).not.toBeNull()
    expect(textAreaElement?.getAttribute('class')).toContain(
      'bg-secondary-white',
    )
  })

  it('renders with a custom type', () => {
    render(<TextArea type="password" data-testid="textarea-element" />)
    const textAreaElement = screen.getByTestId('textarea-element')
    expect(textAreaElement).not.toBeNull()
    expect(textAreaElement?.getAttribute('type')).toContain('password')
  })

  it('applies additional class names', () => {
    render(
      <TextArea className="additional-class" data-testid="textarea-element" />,
    )
    const textAreaElement = screen.getByTestId('textarea-element')
    expect(textAreaElement).not.toBeNull()
    expect(textAreaElement?.getAttribute('class')).toContain('additional-class')
  })

  it('passes additional props to the textarea element', () => {
    render(
      <TextArea aria-label="textarea-field" data-testid="textarea-element" />,
    )
    const textAreaElement = screen.getByTestId('textarea-element')
    expect(textAreaElement).not.toBeNull()
    expect(textAreaElement?.getAttribute('aria-label')).toContain(
      'textarea-field',
    )
  })
})
