import React from 'react'
import Button from '@/app/components/atoms/Button'

type CustomPaginationProps = {
  current: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  totalPages,
  onPrev,
  onNext,
}) => {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-between w-full">
      <Button
        onClick={onPrev}
        disabled={current === 0}
        className="bg-primary-light-green"
      >
        Prev
      </Button>
      <Button
        onClick={onNext}
        disabled={current === totalPages - 1}
        className="bg-primary-light-green"
      >
        Next
      </Button>
    </div>
  )
}

export default CustomPagination
