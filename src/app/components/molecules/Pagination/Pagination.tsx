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
    <div className="flex justify-between w-full p-4">
      <Button
        onClick={onPrev}
        disabled={current === 0}
        className={`bg-primary-grey-200 ${current === 0 ? 'bg-gray-400 hover:bg-gray-400' : ''}`}
      >
        Prev
      </Button>
      <Button
        onClick={onNext}
        disabled={current === totalPages - 1}
        className={`bg-primary-grey-200 ${current === totalPages - 1 ? 'bg-gray-400 hover:bg-gray-400' : ''}`}
      >
        Next
      </Button>
    </div>
  )
}

export default CustomPagination
