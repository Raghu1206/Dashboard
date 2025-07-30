import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-md p-4 bg-white ${className}`}>
      {children}
    </div>
  )
}
