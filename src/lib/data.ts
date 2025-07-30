import { faker } from '@faker-js/faker'

export const generateMetrics = () => ({
  revenue: `$${faker.finance.amount(10000, 20000, 0)}`,
  users: faker.number.int({ min: 5000, max: 10000 }).toString(),
  conversion: `${faker.number.float({ min: 1.0, max: 10.0 }).toFixed(2)}%`,
  growth: `${faker.number.float({ min: 1.0, max: 5.0 }).toFixed(2)}%`,
})

export const generateChartData = () => ({
  usersOverTime: Array.from({ length: 7 }).map((_, i) => ({
    date: `Day ${i + 1}`,
    users: faker.number.int({ min: 500, max: 1500 }),
  })),
  revenueChannels: [
    { channel: 'Google Ads', revenue: faker.number.int({ min: 2000, max: 8000 }) },
    { channel: 'Facebook', revenue: faker.number.int({ min: 1000, max: 7000 }) },
    { channel: 'Instagram', revenue: faker.number.int({ min: 1500, max: 6000 }) },
  ],
  devices: [
    { device: 'Mobile', value: 400 },
    { device: 'Desktop', value: 300 },
    { device: 'Tablet', value: 200 },
  ]
})
