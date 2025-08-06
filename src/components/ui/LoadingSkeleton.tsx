import React from 'react'

export default function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-muted ${className}`} />
  )
}
