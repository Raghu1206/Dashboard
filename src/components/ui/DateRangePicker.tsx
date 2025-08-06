'use client'

import { useState } from 'react'

export function DateRangePicker() {
  const [range, setRange] = useState('Last 30 days')

  return (
    <select value={range} onChange={(e) => setRange(e.target.value)} className="border p-2 rounded">
      <option>Today</option>
      <option>Last 7 days</option>
      <option>Last 30 days</option>
      <option>Last 90 days</option>
    </select>
  )
}
