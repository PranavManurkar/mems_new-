// components/PeopleGrid.tsx
"use client"
import React, { useEffect, useMemo, useState } from "react"
import { people as PEOPLE } from "../../data/people"
import { Person } from "./type"
import PersonCard from "./PersonCard"
import PersonModal from "./PersonModal"
import StudentsSection from "./StudentSec"

const PAGE_SIZE = 6

export default function PeopleGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<"all" | "faculty" | "staff" | "students">("all")
  const [selectedField, setSelectedField] =
    useState<"all" | "metallurgy" | "materials">("all")
  const [modalPerson, setModalPerson] = useState<Person | null>(null)

  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)

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
      const categoryMatch =
        selectedCategory === "all" ? true : person.category === selectedCategory

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

  useEffect(
    () => setPage(1),
    [selectedCategory, selectedField, searchQuery]
  )

  const total = filteredPeople.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const startIndex = (page - 1) * PAGE_SIZE
  const endIndex = Math.min(total, page * PAGE_SIZE)
  const pageSlice = filteredPeople.slice(startIndex, endIndex)

  const goToPage = (p: number) => {
    const clamped = Math.max(1, Math.min(totalPages, p))
    setPage(clamped)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 200, behavior: "smooth" })
    }
  }

  // build pagination items with single ellipses for large page counts
  const pageItems: Array<number | "ellipsis"> = (() => {
    const items: Array<number | "ellipsis"> = []
    for (let p = 1; p <= totalPages; p++) {
      const show =
        totalPages <= 7 ||
        p === 1 ||
        p === totalPages ||
        (p >= page - 1 && p <= page + 1) ||
        (page <= 2 && p <= 4) ||
        (page >= totalPages - 1 && p >= totalPages - 3)

      if (show) {
        items.push(p)
      } else {
        if (items[items.length - 1] !== "ellipsis") {
          items.push("ellipsis")
        }
      }
    }
    return items
  })()

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
              {total === 0 ? 0 : startIndex + 1}
            </span>
            –
            <span className="font-semibold"> {endIndex}</span> of{" "}
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
              <div className="grid md:grid-cols-3 gap-8">
                {pageSlice.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={person}
                    onMore={setModalPerson}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-3">
                  <button
                    onClick={() => goToPage(1)}
                    disabled={page === 1}
                    className="px-3 py-1 rounded border border-primary text-primary disabled:opacity-50"
                  >
                    « First
                  </button>
                  <button
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                    className="px-3 py-1 rounded border border-primary text-primary disabled:opacity-50"
                  >
                    ‹ Prev
                  </button>

                  <div className="flex gap-2">
                    {pageItems.map((it, i) =>
                      it === "ellipsis" ? (
                        <span key={`ell-${i}`} className="px-3 py-1 text-sm text-gray-500">
                          …
                        </span>
                      ) : (
                        <button
                          key={it}
                          onClick={() => goToPage(it as number)}
                          className={`px-3 py-1 rounded text-sm font-medium ${
                            it === page
                              ? "bg-primary text-white"
                              : "border border-primary text-primary"
                          }`}
                        >
                          {it}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                    className="px-3 py-1 rounded border border-primary text-primary disabled:opacity-50"
                  >
                    Next ›
                  </button>
                  <button
                    onClick={() => goToPage(totalPages)}
                    disabled={page === totalPages}
                    className="px-3 py-1 rounded border border-primary text-primary disabled:opacity-50"
                  >
                    Last »
                  </button>
                </div>
              )}
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
