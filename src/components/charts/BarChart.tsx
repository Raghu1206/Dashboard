'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface RevenueData {
  channel: string
  revenue: number
}

export function RevenueBarChart({ data }: { data: RevenueData[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="channel" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#6366f1" />
      </BarChart>
    </ResponsiveContainer>
  )
}
