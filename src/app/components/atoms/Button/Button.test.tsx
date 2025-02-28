import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders Button component label', () => {
    render(<Button label="Search:" />)
    screen.getByText('Search:')
  })
  it('renders Button component with Icon', () => {
    render(
      <Button>
        <span data-testid="button-icon">Search:</span>
      </Button>,
    )
    screen.getByTestId('button-icon')
  })
})
