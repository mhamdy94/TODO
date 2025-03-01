import * as React from 'react'
import { cn } from '@/lib/cn'

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  bgColor?: 'white' | 'secondary'
  label?: string
  rows?: number
  disabled?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      bgColor = 'white',
      disabled = false,
      rows = 3,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const backgroundClass =
      bgColor === 'secondary' ? 'bg-secondary-white' : 'bg-white'

    return (
      <textarea
        disabled={disabled}
        data-testid="TextArea-element"
        autoComplete="on"
        rows={rows}
        className={cn(
          'focus:border-primary-grey-200 font-medium w-full rounded-[10px] border border-primary-grey px-3 py-2 text-md text-secondary-black outline-none placeholder:text-secondary-black',
          backgroundClass,
          className,
        )}
        ref={ref}
        defaultValue={defaultValue}
        {...props}
      />
    )
  },
)

TextArea.displayName = 'TextArea'
export default TextArea
