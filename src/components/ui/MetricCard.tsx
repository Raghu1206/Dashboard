'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  title: string
  value: string
  growth: number
}

export function MetricCard({ title, value, growth }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}
      className="p-5 rounded-2xl bg-card flex flex-col gap-2 transition-all duration-300 cursor-pointer"
    >
      <h3 className="text-sm text-muted-foreground tracking-wide">{title}</h3>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className={`text-sm font-medium ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {growth >= 0 ? '+' : ''}
        {growth}%
      </div>
    </motion.div>
  )
}
