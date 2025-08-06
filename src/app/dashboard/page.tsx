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
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Gradient Animated Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] animate-gradient-move">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:30px_30px] opacity-5" />
      </div>

      {/* Main Content */}
      <motion.div
        className="p-6 space-y-10 transition-colors backdrop-blur-xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Header */}
        <motion.div className="flex items-center justify-between" variants={fadeInUp} custom={0}>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600">
            📊 AdMyBrand Dashboard
          </h1>
          <ThemeToggle />
        </motion.div>

        {/* Controls */}
        <motion.section
          className="flex flex-wrap gap-4 items-center justify-between"
          variants={fadeInUp}
          custom={1}
        >
          <DateRangePicker />
          <ExportCSV data={mockTableData} />
        </motion.section>

        {/* Metric Cards */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={fadeInUp}
          custom={2}
        >
          {mockMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              variants={fadeInUp}
              custom={2 + index}
              className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-md border border-white/10 transition hover:shadow-lg"
            >
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </motion.section>

        {/* Charts */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
          custom={3}
        >
          <motion.div
            className="bg-white/10 p-5 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl border border-white/10"
            whileHover={{ scale: 1.01 }}
            variants={fadeInUp}
            custom={4}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">📈 User Growth</h2>
            <LineChart />
          </motion.div>

          <motion.div
            className="bg-white/10 p-5 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl border border-white/10"
            whileHover={{ scale: 1.01 }}
            variants={fadeInUp}
            custom={5}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">💰 Revenue by Channel</h2>
            <BarChart />
          </motion.div>

          <motion.div
            className="bg-white/10 p-5 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl border border-white/10 md:col-span-2"
            whileHover={{ scale: 1.01 }}
            variants={fadeInUp}
            custom={6}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">🌍 Audience Distribution</h2>
            <PieChart />
          </motion.div>
        </motion.section>

        {/* Table */}
        <motion.section
          className="bg-white/10 p-5 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl border border-white/10"
          variants={fadeInUp}
          custom={7}
        >
          <h2 className="text-xl font-semibold mb-4 text-white">📋 Campaign Metrics</h2>
          {loading ? <LoadingSkeleton /> : <DataTable />}
        </motion.section>
      </motion.div>
    </div>
  )
}
