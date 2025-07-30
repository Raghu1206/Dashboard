import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ADmyBRAND Insights',
  description: 'AI-powered marketing analytics dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-background text-foreground min-h-screen', inter.className)}>
        {children}
      </body>
    </html>
  )
}
