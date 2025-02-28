import React, { useEffect, useMemo, useCallback } from 'react'
import Button from '@/app/components/atoms/Button'

type CustomPaginationProps = {
  current: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

const PaginationButton: React.FC<{
  onClick: () => void
  disabled: boolean
  children: React.ReactNode
  label: string
}> = ({ onClick, disabled, children, label }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary-grey-200 ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-gray-500'
      }`}
      aria-label={label}
    >
      {children}
    </Button>
  )
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  totalPages,
  onPrev,
  onNext,
}) => {
  const isFirstPage = useMemo(() => current === 0, [current])
  const isLastPage = useMemo(
    () => current === totalPages - 1,
    [current, totalPages],
  )
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && !isFirstPage) {
        onPrev()
      } else if (event.key === 'ArrowRight' && !isLastPage) {
        onNext()
      }
    },
    [isFirstPage, isLastPage, onPrev, onNext],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-between items-center w-full p-4">
      <PaginationButton
        onClick={onPrev}
        disabled={isFirstPage}
        label="Previous page"
      >
        Prev
      </PaginationButton>

      <span className="text-lg font-semibold" aria-live="polite">
        Page {current + 1} of {totalPages}
      </span>

      <PaginationButton
        onClick={onNext}
        disabled={isLastPage}
        label="Next page"
      >
        Next
      </PaginationButton>
    </div>
  )
}

export default CustomPagination
