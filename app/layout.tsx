import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KNX Social Hub - Non-Profit Network',
  description: 'A social hub and network for non-profit organization members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
