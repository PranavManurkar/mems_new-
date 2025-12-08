// components/PersonModal.tsx
"use client"
import React from "react"
import { Person } from "@/app/people/type"

export default function PersonModal({ person, onClose }: { person: Person | null; onClose: () => void }) {
  if (!person) return null

  const hasContact = person.office || person.phone || person.email
  const hasProfiles = person.profiles && person.profiles.length > 0

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-4 p-6 items-start">
          <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-md p-1">
            <img src={person.image} alt={person.name} className="max-h-full max-w-full object-contain rounded-md" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary">{person.name}</h3>
            <p className="text-gray-700">{person.title}</p>
            {person.specialization ? <p className="mt-2 text-gray-600">{person.specialization}</p> : null}

            {hasContact && (
              <div className="mt-4 space-y-2">
                {person.office && (
                  <div>
                    <span className="block text-xs text-gray-500">Office</span>
                    <div className="font-medium text-gray-800">{person.office}</div>
                  </div>
                )}

                {person.phone && (
                  <div>
                    <span className="block text-xs text-gray-500">Phone</span>
                    <div className="font-medium text-gray-800">{person.phone}</div>
                  </div>
                )}

                {person.email && (
                  <div>
                    <span className="block text-xs text-gray-500">Email</span>
                    <div className="font-medium text-gray-800">
                      <a href={`mailto:${person.email}`} className="underline">{person.email}</a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {(hasProfiles || person.email) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {hasProfiles ? (
                  person.profiles!.map((p) => (
                    <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-primary text-white rounded-lg font-semibold text-sm">
                      {p.label}
                    </a>
                  ))
                ) : null}

                {person.email && (
                  <a href={`mailto:${person.email}`} className="px-4 py-2 border border-primary text-primary rounded-lg font-semibold">
                    Email
                  </a>
                )}

                <button onClick={onClose} className="px-4 py-2 ml-auto text-sm text-gray-600 hover:underline">Close</button>
              </div>
            )}

            {/* if neither contact nor profiles, still show close button */}
            {!hasContact && !hasProfiles && (
              <div className="mt-4">
                <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600 hover:underline">Close</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
