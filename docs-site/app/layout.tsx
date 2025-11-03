import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thrynd CSS - Modern CSS Framework for the AI Age',
  description: 'Beautiful pre-configured components, theme presets, and LLM-friendly documentation. Built for developers and AI assistants.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/thrynd.css" />
      </head>
      <body className="theme-modern">
        {children}
      </body>
    </html>
  )
}
