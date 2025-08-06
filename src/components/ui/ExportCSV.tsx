export function ExportCSV({ data }: { data: any[] }) {
  const downloadCSV = () => {
    const csv = [Object.keys(data[0]).join(','), ...data.map(row => Object.values(row).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'data.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return <button onClick={downloadCSV} className="p-2 bg-blue-600 text-white rounded">Export CSV</button>
}
