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
import { ThemeToggle } from '@/components/ThemeToggle'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent opacity-20 blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        className="p-6 space-y-10 transition-colors"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Top bar with toggle */}
        <motion.div className="flex items-center justify-between" variants={fadeInUp} custom={0}>
          <h1 className="text-3xl font-bold tracking-tight">📊 AdMyBrand Dashboard</h1>
          <ThemeToggle />
        </motion.div>

        <motion.section
          className="flex flex-wrap gap-4 items-center justify-between"
          variants={fadeInUp}
          custom={1}
        >
          <DateRangePicker />
          <ExportCSV data={mockTableData} />
        </motion.section>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={fadeInUp}
          custom={2}
        >
          {mockMetrics.map((metric, index) => (
            <motion.div key={metric.title} variants={fadeInUp} custom={2 + index}>
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
          custom={3}
        >
          <motion.div
            className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.01 }}
            variants={fadeInUp}
            custom={4}
          >
            <h2 className="text-xl font-semibold mb-4">📈 User Growth</h2>
            <LineChart />
          </motion.div>

          <motion.div
            className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.01 }}
            variants={fadeInUp}
            custom={5}
          >
            <h2 className="text-xl font-semibold mb-4">💰 Revenue by Channel</h2>
            <BarChart />
          </motion.div>

          <motion.div
            className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow md:col-span-2"
            whileHover={{ scale: 1.01 }}
            variants={fadeInUp}
            custom={6}
          >
            <h2 className="text-xl font-semibold mb-4">🌍 Audience Distribution</h2>
            <PieChart />
          </motion.div>
        </motion.section>

        <motion.section
          className="bg-card p-5 rounded-2xl shadow hover:shadow-lg transition-shadow"
          variants={fadeInUp}
          custom={7}
        >
          <h2 className="text-xl font-semibold mb-4">📋 Campaign Metrics</h2>
          {loading ? <LoadingSkeleton /> : <DataTable />}
        </motion.section>
      </motion.div>
    </div>
  )
}
