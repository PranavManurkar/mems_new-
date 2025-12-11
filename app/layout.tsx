import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist_Mono, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { LoadingSpinner } from "@/components/LoadingSpinner"

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "MEMS - IIT Indore",
  description: "Department of Metallurgical Engineering and Materials Science, IIT Indore",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <ErrorBoundary>
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="flex-grow">
              {children}
            </main>
          </Suspense>
          <Footer />
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
