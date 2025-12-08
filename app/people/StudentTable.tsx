// components/StudentsTable.tsx
"use client"
import React from "react"

type Row = { sn: number; name: string; roll: string }

export default function StudentsTable({ year, rows, searchQuery }: { year: string; rows: Row[]; searchQuery: string }) {
  const q = searchQuery.trim().toLowerCase()
  const filtered = q
    ? rows.filter((r) => r.name.toLowerCase().includes(q) || r.roll.toLowerCase().includes(q) || String(r.sn).includes(q))
    : rows

  return (
    <details className="bg-white rounded-lg shadow-sm overflow-hidden">
      <summary className="cursor-pointer px-4 py-3 bg-primary text-white font-semibold">Batch {year} — {filtered.length}</summary>

      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-3 py-2 border-b text-sm font-medium">Sr. No.</th>
                <th className="px-3 py-2 border-b text-sm font-medium">Name</th>
                <th className="px-3 py-2 border-b text-sm font-medium">Roll No.</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.roll} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 text-sm">{s.sn}</td>
                  <td className="px-3 py-2 text-sm">{s.name}</td>
                  <td className="px-3 py-2 text-sm">{s.roll}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-3 py-4 text-center text-sm text-gray-500">No matching students</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  )
}
