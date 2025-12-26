// components/PeopleGrid.tsx
"use client"
import React, { useEffect, useMemo, useState } from "react"
import { people as PEOPLE } from "../../data/people"
import { Person } from "./type"
import PersonCard from "./PersonCard"
import PersonModal from "./PersonModal"
import StudentsSection from "./StudentSec"

export default function PeopleGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<"all" | "faculty" | "staff" | "students">("all")
  const [selectedField, setSelectedField] =
    useState<"all" | "metallurgy" | "materials">("all")
  const [modalPerson, setModalPerson] = useState<Person | null>(null)

  const [searchQuery, setSearchQuery] = useState("")

  // decide if field filter should show for the current selection:
  const showFieldFilter = useMemo(() => {
    return PEOPLE.some(
      (p) =>
        (selectedCategory === "all" || p.category === selectedCategory) &&
        !!p.field
    )
  }, [selectedCategory])

  const filteredPeople = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()

    // IMPORTANT: if field filter is not shown (e.g. staff),
    // completely ignore selectedField and treat as "all"
    const effectiveField = showFieldFilter ? selectedField : "all"

    return PEOPLE.filter((person) => {
      // For "all" category, only show faculty and PhD students
      let categoryMatch: boolean
      if (selectedCategory === "all") {
        categoryMatch = person.category === "faculty" || 
                        (person.category === "students" && person.title?.toLowerCase().includes("phd"))
      } else {
        categoryMatch = person.category === selectedCategory
      }

      const fieldMatch =
        effectiveField === "all" ? true : person.field === effectiveField

      const searchMatch =
        !q ||
        person.name.toLowerCase().includes(q) ||
        person.title.toLowerCase().includes(q) ||
        (person.specialization ?? "").toLowerCase().includes(q)

      return categoryMatch && fieldMatch && searchMatch
    })
  }, [selectedCategory, selectedField, searchQuery, showFieldFilter])

  const total = filteredPeople.length

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">Our People</h2>
            <p className="text-sm text-blue-100">
              Meet our dedicated faculty, staff, and students
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-96">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, title or specialization..."
                className="w-full rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/70 caret-white bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category + Field filters */}
      <section className="py-6 bg-gradient-to-r from-primary/5 to-blue-50 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 flex-wrap">
            {["all", "faculty", "staff", "students"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow"
                    : "bg-white text-primary border border-primary"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Field filter only shows when relevant */}
          {showFieldFilter ? (
            <div className="flex gap-3 flex-wrap">
              {["all", "metallurgy", "materials"].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedField(f as any)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedField === f
                      ? "bg-primary text-white shadow"
                      : "bg-white text-primary border border-primary"
                  }`}
                >
                  {f === "all"
                    ? "All Fields"
                    : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          ) : (
            <div /> // keeps layout spacing
          )}

          <div className="text-sm text-primary hidden md:block">
            Showing{" "}
            <span className="font-semibold">
              {total === 0 ? 0 : 1}
            </span>
            –
            <span className="font-semibold"> {total}</span> of{" "}
            <span className="font-semibold">{total}</span> results
          </div>
        </div>
      </section>

      {/* Main content: cards OR students section */}
      <section className="py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {selectedCategory === "students" ? (
            // special students UI with UG/PG tables + PhD cards
            <StudentsSection
              searchQuery={searchQuery}
              onMore={setModalPerson}
            />
          ) : (
            // faculty & staff stay with card grid + pagination
            <>
              <div className="grid md:grid-cols-4 gap-6">
                {filteredPeople.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={person}
                    onMore={setModalPerson}
                  />
                ))}
              </div>
            </>
          )}

          {filteredPeople.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No people found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {modalPerson && (
        <PersonModal person={modalPerson} onClose={() => setModalPerson(null)} />
      )}
    </div>
  )
}
