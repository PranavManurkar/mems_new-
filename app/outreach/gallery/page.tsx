"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const logos = [
    "/mainpageimages/accenture.png",
    "/mainpageimages/Goldman_Sachs.png",
    "/mainpageimages/Razorpay.jpg",
    "/mainpageimages/BjxmtD.webp",
    "/mainpageimages/axxela.png",
    "/mainpageimages/deolitte.png",
    "/mainpageimages/dolot.jpeg",
    "/mainpageimages/faxoc.png",
    "/mainpageimages/groww.png",
    "/mainpageimages/media.jpeg",
    "/mainpageimages/sahaj.png",
    "/mainpageimages/tredence.png",
  ]

  const cardVariants = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }
  const logoVariants = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link href="/outreach" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Outreach
            </Link>
          </div>
        </div>
         <div>
            <h1 className="text-3xl font-bold text-primary">Gallery</h1>
            <p className="text-gray-600 mt-1">Photos and highlights from outreach and community events.</p>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {logos.map((src, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-3 bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <motion.img variants={logoVariants} src={src} alt={`gallery-${i}`} className="max-h-40 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
