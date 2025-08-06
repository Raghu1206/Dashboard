'use client'

import { useState } from 'react'
import { MetricCard } from '@/components/ui/MetricCard'
import { LineChart } from '@/components/charts/LineChart'
import { BarChart } from '@/components/charts/BarChart'
import { PieChart } from '@/components/charts/PieChart'
import { DataTable } from '@/components/DataTable'
import { mockMetrics, mockTableData } from '@/lib/data'
import { DateRangePicker } from '@/components/ui/DateRangePicker'
import { ExportCSV } from '@/components/ui/ExportCSV'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

export default function DashboardPage() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="flex flex-wrap gap-4 items-center justify-between">
        <DateRangePicker />
        <ExportCSV data={mockTableData} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">User Growth</h2>
          <LineChart />
        </div>
        <div className="bg-card p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Revenue by Channel</h2>
          <BarChart />
        </div>
        <div className="bg-card p-4 rounded-2xl shadow md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Audience Distribution</h2>
          <PieChart />
        </div>
      </div>

      <div className="bg-card p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Campaign Metrics</h2>
        {loading ? <LoadingSkeleton /> : <DataTable />}
      </div>
    </div>
  )
}
