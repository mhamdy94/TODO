import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline'
  label?: string
  size?: 'sm' | 'md' | 'lg'
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  variant = 'default',
  size = 'md',
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded text-white transition-all 
        ${variant === 'destructive' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} 
        ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-md'}
        ${backgroundColor ? backgroundColor : ''} ${className}`}
      {...props}
    >
      {label || children}
    </button>
  )
}

export default Button
