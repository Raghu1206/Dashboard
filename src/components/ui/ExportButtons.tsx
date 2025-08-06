
'use client'

import { Download } from 'lucide-react'

export default function ExportCSV({ data }: { data: any[] }) {
  const exportCSV = () => {
    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(',')),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'report.csv'
    a.click()
  }

  return (
    <button
      onClick={exportCSV}
      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:opacity-80 transition"
    >
      <Download className="w-4 h-4" /> Export CSV
    </button>
  )
}
