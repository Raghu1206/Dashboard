import { PieChart as PChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 300 },
]

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

export function PieChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PChart>
    </ResponsiveContainer>
  )
}
