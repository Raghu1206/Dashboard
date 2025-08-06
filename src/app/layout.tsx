'use client'

import './globals.css'
import { ThemeProviderWrapper } from '@/components/theme-provider-wrapper'
import { Inter } from 'next/font/google'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {ThemeToggle} from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="absolute top-4 right-4 p-2 border rounded-lg text-sm bg-background text-foreground hover:shadow transition"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
