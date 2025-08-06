
interface MetricCardProps {
  title: string
  value: string
  growth: number
}

export function MetricCard({ title, value, growth }: MetricCardProps) {
  return (
    <div className="p-4 rounded-2xl shadow bg-card flex flex-col gap-2">
      <h3 className="text-sm text-muted-foreground">{title}</h3>
      <div className="text-xl font-semibold">{value}</div>
      <div className={`text-sm ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {growth >= 0 ? '+' : ''}
        {growth}%
      </div>
    </div>
  )
}
