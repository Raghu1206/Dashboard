import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', users: 200 },
  { month: 'Feb', users: 300 },
  { month: 'Mar', users: 500 },
  { month: 'Apr', users: 700 },
  { month: 'May', users: 600 },
]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
      </LChart>
    </ResponsiveContainer>
  )
}
