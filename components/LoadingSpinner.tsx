import React from "react"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
      </div>
    </div>
  )
}

export function SectionLoader() {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse" />
      <div className="space-y-3">
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded animate-pulse" />
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded animate-pulse w-5/6" />
      </div>
    </div>
  )
}

export function CardLoader() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="bg-gray-100 p-6 rounded-xl animate-pulse h-48" />
      ))}
    </div>
  )
}
