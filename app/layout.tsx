import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AOSInit from '@/components/AOSInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GK Pvt Industries - Steel, Scrap, Iron & Transportation Services',
  description: 'GK Pvt Industries provides raw steel, scrap, iron, truck rental, loading/unloading, and godown services in Ludhiana. Serving Faridkot, Jalandhar, and Delhi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
