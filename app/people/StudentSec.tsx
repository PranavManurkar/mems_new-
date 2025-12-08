// components/StudentsSection.tsx
"use client"
import React, { useMemo, useState } from "react"
import { studentsData } from "../../data/student" // path matches your PeopleGrid imports (adjust if needed)
import StudentsTable from "./StudentTable"
import PhDCards from "./PHDCard"
import type { Person } from "./type"

export default function StudentsSection({ searchQuery, onMore }: { searchQuery: string; onMore: (p: Person) => void }) {
  const [tab, setTab] = useState<"UG" | "PG" | "PhD">("UG")

  const ugYears = useMemo(() => Object.keys(studentsData.ug).sort((a, b) => Number(b) - Number(a)), [])
  const pgYears = useMemo(() => Object.keys(studentsData.pg).sort((a, b) => Number(b) - Number(a)), [])
  const phdList = studentsData.phd

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {(["UG", "PG", "PhD"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full font-semibold ${tab === t ? "bg-primary text-white shadow" : "bg-white text-primary border border-primary"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "UG" && (
        <div className="space-y-4">
          {ugYears.map((year) => (
            <StudentsTable key={year} year={year} rows={studentsData.ug[year as keyof typeof studentsData.ug]} searchQuery={searchQuery} />
          ))}
        </div>
      )}

      {tab === "PG" && (
        <div className="space-y-4">
          {pgYears.length === 0 ? <div className="text-gray-600 py-8">No PG data available</div> :
          pgYears.map((year) => <StudentsTable key={year} year={year} rows={studentsData.pg[year as keyof typeof studentsData.pg]} searchQuery={searchQuery} />)}
        </div>
      )}

      {tab === "PhD" && (
        <div className="pt-2">
          <PhDCards phdList={phdList} onMore={onMore} searchQuery={searchQuery} />
        </div>
      )}
    </div>
  )
}
