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
import { motion } from 'framer-motion'
import {ThemeToggle} from '@/components/ThemeToggle'
import { ThemeProviderWrapper } from '@/components/theme-provider-wrapper'

export default function DashboardPage() {
  const [loading, setLoading] = useState(false)

  return (
    <motion.div
      className="p-6 space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">📊 Dashboard Overview</h1>
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <DateRangePicker />
          <ExportCSV data={mockTableData} />
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold mb-4">📈 User Growth</h2>
          <LineChart />
        </motion.div>

        <motion.div
          className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold mb-4">💰 Revenue by Channel</h2>
          <BarChart />
        </motion.div>

        <motion.div
          className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow md:col-span-2"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold mb-4">🌍 Audience Distribution</h2>
          <PieChart />
        </motion.div>
      </section>

      <section className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4">📋 Campaign Metrics</h2>
        {loading ? <LoadingSkeleton /> : <DataTable />}
      </section>
    </motion.div>
  )
}
