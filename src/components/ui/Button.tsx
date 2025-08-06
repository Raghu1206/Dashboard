'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost'
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        variant === 'default' && 'bg-primary text-white hover:bg-primary/90',
        variant === 'ghost' && 'bg-transparent hover:bg-accent hover:text-accent-foreground',
        className
      )}
      {...props}
    />
  )
}
