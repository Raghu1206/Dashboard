import { BarChart as BChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { channel: 'Facebook', revenue: 4000 },
  { channel: 'Google', revenue: 3000 },
  { channel: 'Instagram', revenue: 2000 },
]

export function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BChart data={data}>
        <XAxis dataKey="channel" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BChart>
    </ResponsiveContainer>
  )
}
