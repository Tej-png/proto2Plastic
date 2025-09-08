import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Import Inter font for modern typography
const inter = Inter({ subsets: ['latin'] })

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'Proto2Plastic - Professional 3D Printing Services',
  description: 'Transform your wildest ideas into reality with cutting-edge 3D printing technology. Fast, precise, and absolutely mind-blowing results.',
  keywords: '3D printing, prototyping, custom design, production scale, additive manufacturing',
  authors: [{ name: 'Proto2Plastic' }],
  icons: {
    icon: "/images/p2p.png",
  },
  openGraph: {
    title: 'Proto2Plastic - Professional 3D Printing Services',
    description: 'Transform your wildest ideas into reality with cutting-edge 3D printing technology.',
    type: 'website',
    locale: 'en_US',
  },
}

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Main content wrapper */}
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}

