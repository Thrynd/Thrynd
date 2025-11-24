import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Thrynd CSS - Modern CSS Framework for the AI Age',
    template: '%s | Thrynd CSS'
  },
  description: 'Beautiful pre-configured components, theme presets, and LLM-friendly documentation. Built for developers and AI assistants.',
  keywords: ['CSS framework', 'UI components', 'themes', 'LLM-friendly', 'AI-optimized', 'web development', 'design system'],
  authors: [{ name: 'Thrynd' }],
  creator: 'Thrynd',
  publisher: 'Thrynd',
  metadataBase: new URL('https://thrynd.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thrynd.dev',
    siteName: 'Thrynd CSS',
    title: 'Thrynd CSS - Modern CSS Framework for the AI Age',
    description: 'Beautiful pre-configured components, theme presets, and LLM-friendly documentation.',
    images: [{ url: '/assets/thrynd.png', width: 512, height: 512, alt: 'Thrynd CSS Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thrynd CSS - Modern CSS Framework for the AI Age',
    description: 'Beautiful pre-configured components, theme presets, and LLM-friendly documentation.',
    images: ['/assets/thrynd.png'],
  },
  icons: {
    icon: [
      { url: '/assets/thrynd.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/thrynd.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/thrynd.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
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
