"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import EventArchive from "../Event"

export default function EventArchivePage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-6">
          <Link href="/outreach" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Outreach
          </Link>
        </div>

        <EventArchive />
      </div>
    </main>
  )
}
