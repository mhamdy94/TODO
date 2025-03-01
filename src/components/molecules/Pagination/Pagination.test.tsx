import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomPagination from './Pagination'

describe('CustomPagination', () => {
  it('renders Pagination component', () => {
    render(
      <CustomPagination
        current={0}
        totalPages={5}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    )
    const pagination = screen.getByText('Page 1 of 5')
    expect(pagination).toBeInTheDocument()
  })

  it('disables Prev button on first page', () => {
    render(
      <CustomPagination
        current={0}
        totalPages={5}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    )
    const prevButton = screen.getByLabelText('Previous page')
    expect(prevButton).toBeDisabled()
  })

  it('disables Next button on last page', () => {
    render(
      <CustomPagination
        current={4}
        totalPages={5}
        onPrev={() => {}}
        onNext={() => {}}
      />,
    )
    const nextButton = screen.getByLabelText('Next page')
    expect(nextButton).toBeDisabled()
  })

  it('calls onPrev handler when Prev button is clicked', () => {
    const handlePrev = jest.fn()
    render(
      <CustomPagination
        current={1}
        totalPages={5}
        onPrev={handlePrev}
        onNext={() => {}}
      />,
    )
    const prevButton = screen.getByLabelText('Previous page')
    fireEvent.click(prevButton)
    expect(handlePrev).toHaveBeenCalledTimes(1)
  })

  it('calls onNext handler when Next button is clicked', () => {
    const handleNext = jest.fn()
    render(
      <CustomPagination
        current={1}
        totalPages={5}
        onPrev={() => {}}
        onNext={handleNext}
      />,
    )
    const nextButton = screen.getByLabelText('Next page')
    fireEvent.click(nextButton)
    expect(handleNext).toHaveBeenCalledTimes(1)
  })

  it('updates page number when Next button is clicked', () => {
    const TestComponent = () => {
      const [current, setCurrent] = React.useState(0)
      return (
        <CustomPagination
          current={current}
          totalPages={5}
          onPrev={() => setCurrent(current - 1)}
          onNext={() => setCurrent(current + 1)}
        />
      )
    }
    render(<TestComponent />)
    const nextButton = screen.getByLabelText('Next page')
    fireEvent.click(nextButton)
    const pagination = screen.getByText('Page 2 of 5')
    expect(pagination).toBeInTheDocument()
  })
})
