// components/PhDCards.tsx
"use client"
import React from "react"
import PersonCard from "./PersonCard"
import type { Person } from "./type"

export default function PhDCards({ phdList, onMore, searchQuery }: { phdList: Person[]; onMore: (p: Person) => void; searchQuery: string }) {
  const q = searchQuery.trim().toLowerCase()

  const filtered = q
    ? phdList.filter((p) => p.name.toLowerCase().includes(q) || (p.title ?? "").toLowerCase().includes(q) || (p.specialization ?? "").toLowerCase().includes(q))
    : phdList

  if (filtered.length === 0) return <div className="text-center py-8 text-gray-600">No PhD students found.</div>

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {filtered.map((p) => (
        <PersonCard key={p.id} person={p} onMore={onMore} />
      ))}
    </div>
  )
}
