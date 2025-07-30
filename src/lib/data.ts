const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const generateMetrics = () => ({
  revenue: `$${getRandom(10000, 20000)}`,
  users: getRandom(5000, 10000).toString(),
  conversion: `${(Math.random() * (10 - 1) + 1).toFixed(2)}%`,
  growth: `${(Math.random() * (5 - 1) + 1).toFixed(2)}%`,
})

export const generateChartData = () => ({
  usersOverTime: Array.from({ length: 7 }).map((_, i) => ({
    date: `Day ${i + 1}`,
    users: getRandom(500, 1500),
  })),
  revenueChannels: [
    { channel: 'Google Ads', revenue: getRandom(2000, 8000) },
    { channel: 'Facebook', revenue: getRandom(1000, 7000) },
    { channel: 'Instagram', revenue: getRandom(1500, 6000) },
  ],
  devices: [
    { device: 'Mobile', value: getRandom(200, 500) },
    { device: 'Desktop', value: getRandom(100, 400) },
    { device: 'Tablet', value: getRandom(50, 300) },
  ],
})
