import './globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import TheNav from '@/components/TheNav'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased container mx-auto',
          fontSans.variable
        )}
      >
        <nav>
          <TheNav />
        </nav>
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  )
}
