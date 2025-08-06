'use client'

import { Download } from 'lucide-react'

export default function ExportCSV({ data }: { data: any[] }) {
  const exportCSV = () => {
    if (!data || data.length === 0) return

    const escapeCSV = (value: any) => {
      if (value == null) return ''
      const str = String(value)
      // Escape double quotes and wrap in quotes if necessary
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`
      }
      return str
    }

    const header = Object.keys(data[0])
    const csv = [
      header.join(','), // header row
      ...data.map(row =>
        header.map(fieldName => escapeCSV(row[fieldName])).join(',')
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'report.csv'
    a.click()
    URL.revokeObjectURL(url)
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
