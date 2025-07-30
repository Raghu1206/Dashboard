import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  change: string
}

export function MetricCard({ title, value, icon, change }: MetricCardProps) {
  return (
    <Card className="shadow-md">
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="text-2xl font-bold">{value}</h2>
          <p className="text-xs text-green-500">{change}</p>
        </div>
        <div className="text-primary text-3xl">{icon}</div>
      </CardContent>
    </Card>
  )
}
