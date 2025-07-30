'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface UserData {
  date: string
  users: number
}

export function UsersLineChart({ data }: { data: UserData[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#4f46e5" />
      </LineChart>
    </ResponsiveContainer>
  )
}
