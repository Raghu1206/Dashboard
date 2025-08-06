
'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateRangePicker({
  onChange,
}: {
  onChange: (start: Date, end: Date) => void
}) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const handleChange = (dates: [Date, Date]) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    if (start && end) onChange(start, end)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  )
}
