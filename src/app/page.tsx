'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link href="/dashboard" className="text-blue-600 text-xl underline">
        Go to Dashboard
      </Link>
    </main>
  )
}
