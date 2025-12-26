"use client"
import React, { useState } from "react"
import { Person } from "./type"

export default function PersonCard({ person, onMore }: { person: Person; onMore: (p: Person) => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-300 hover:border-primary group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Overlay */}
      <div className="relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Image */}
        <img
          src={person.image || "/placeholder.svg"}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay - Research Interests */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-green-800 via-green-700 to-green-900 flex flex-col items-center justify-between p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Research Interests Section */}
          <div className="text-center flex-1 flex flex-col justify-center">
            <h4 className="text-white font-bold text-xs mb-2">Research Interests:</h4>
            <p className="text-white text-xs leading-relaxed font-semibold">
              {person.specialization}
            </p>
          </div>

          {/* Visit Webpage Button */}
          {person.profiles && person.profiles.length > 0 ? (
            <a
              href={person.profiles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-3 rounded text-center transition-all duration-300 text-sm"
            >
              Visit Webpage
            </a>
          ) : (
            <button
              onClick={() => onMore(person)}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-3 rounded text-center transition-all duration-300 text-sm"
            >
              View Profile
            </button>
          )}
        </div>
      </div>

      {/* Card Content - Always Visible */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-center">
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-800 mb-1">{person.name}</h3>
          
          {/* Title */}
          <p className="text-xs text-gray-600 font-semibold mb-3">{person.title}</p>

          {/* Contact Info */}
          <div className="space-y-1 text-xs text-gray-700">
            {person.email && (
              <p>
                <span className="font-semibold">Email:</span> <br />
                <span className="font-mono text-xs text-gray-600 break-all">{person.email}</span>
              </p>
            )}
            {person.phone && (
              <p>
                <span className="font-semibold">Phone:</span> <br />
                <span className="font-mono text-xs text-gray-600">{person.phone}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}