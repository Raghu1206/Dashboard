export function LoadingSkeleton() {
  return (
    <div className="w-full space-y-4 p-4 bg-muted/30 rounded-xl shadow animate-pulse">
      {/* Title Placeholder */}
      <div className="h-6 bg-muted rounded w-1/3" />

      {/* Chart or content block */}
      <div className="h-48 bg-muted rounded" />

      {/* Footer controls */}
      <div className="flex gap-4 mt-4">
        <div className="h-4 w-1/4 bg-muted rounded" />
        <div className="h-4 w-1/4 bg-muted rounded" />
        <div className="h-4 w-1/4 bg-muted rounded" />
      </div>
    </div>
  )
}
