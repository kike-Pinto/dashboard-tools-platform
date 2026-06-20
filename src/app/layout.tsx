import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dashboard-tools-platform.vercel.app'),

  title: {
    default: 'Dashboard Tools Platform',
    template: '%s | Dashboard Tools Platform',
  },

  description: 'Generate KPI dashboards from Excel and CSV files.',

  openGraph: {
    siteName: 'Dashboard Tools Platform',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
  },

  verification: {
    google: 'rgBAbn7ULYgjI7L7ilydOVae5q7XBGyJGOCt5dOKE8w',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
