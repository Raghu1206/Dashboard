'use client'

import { useEffect, useState } from 'react'
import { generateMetrics, generateChartData } from '@/lib/data'
import { MetricCard } from '@/components/ui/MetricCard'
import { UsersLineChart } from '@/components/charts/LineChart'
import { RevenueBarChart } from '@/components/charts/BarChart'
import { DevicePieChart } from '@/components/charts/PieChart'
import { User, TrendingUp, BarChart3 } from 'lucide-react'

export default function Dashboard() {
  const [metrics, setMetrics] = useState(generateMetrics())
  const [charts, setCharts] = useState(generateChartData())

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(generateMetrics())
      setCharts(generateChartData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Revenue" value={metrics.revenue} icon={<BarChart3 />} change="+5.3%" />
        <MetricCard title="Users" value={metrics.users} icon={<User />} change="+2.1%" />
        <MetricCard title="Conversion Rate" value={metrics.conversion} icon={<TrendingUp />} change="+1.5%" />
        <MetricCard title="Growth" value={metrics.growth} icon={<TrendingUp />} change="+3.4%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UsersLineChart data={charts.usersOverTime} />
        <RevenueBarChart data={charts.revenueChannels} />
        <DevicePieChart data={charts.devices} />
      </div>
    </main>
  )
}
