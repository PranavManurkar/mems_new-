"use client"

import Navbar from "@/components/navbar"
import { useState } from "react"

interface Person {
  id: number
  name: string
  title: string
  specialization: string
  category: "faculty" | "staff" | "students"
  field: "metallurgy" | "materials"
  image: string
  email?: string
}

const people: Person[] = [
  {
    id: 1,
    name: "Prof. Ajay Kumar Kushwaha",
    title: "Head of Department & Associate Professor",
    specialization: "Materials Processing",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/prof20.3a347569c4cf457ecb44.jpeg",
    email: "hodmems@iiti.ac.in",
  },
  {
    id: 2,
    name: "Prof. Rupesh Devan",
    title: "Associate Professor",
    specialization: "Metallurgical Engineering",
    category: "faculty",
    field: "metallurgy",
    image:
      "https://mems.iiti.ac.in/static/media/Graphical%20Abstract%20%20_%20Prof.%20Rupesh%20Devan.266ffaeeb62c55684dfc.jpg",
  },
  {
    id: 3,
    name: "Dr. Khushubo Devi",
    title: "Assistant Professor",
    specialization: "Materials Science",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/kusenter.20d89cfec7c959d3e9b8.jpg",
  },
  {
    id: 4,
    name: "Dr. Ram Sajeevan Maurya",
    title: "Assistant Professor",
    specialization: "Metallurgical Engineering",
    category: "faculty",
    field: "metallurgy",
    image:
      "https://mems.iiti.ac.in/static/media/Graphical%20Abstract%20%20MEMS%20faculty%20group%20-%20Dr%20Ram%20Sajeevan%20Maurya.cb37efd32be60d24f68d.jpg",
  },
  {
    id: 5,
    name: "Prof. N.K. Mukhopadhyay",
    title: "Professor",
    specialization: "Materials Science",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/nk.b144a5102d3ec6c392f7.jpg",
  },
  {
    id: 6,
    name: "Prof. Irina Alexandrovna Kurzina",
    title: "Visiting Professor",
    specialization: "Metallurgical Engineering",
    category: "faculty",
    field: "metallurgy",
    image: "https://mems.iiti.ac.in/static/media/irina.e22ce2072124bbf4f57a.jpg",
  },
]

export default function People() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "faculty" | "staff" | "students">("all")
  const [selectedField, setSelectedField] = useState<"all" | "metallurgy" | "materials">("all")

  const filteredPeople = people.filter((person) => {
    const categoryMatch = selectedCategory === "all" || person.category === selectedCategory
    const fieldMatch = selectedField === "all" || person.field === selectedField
    return categoryMatch && fieldMatch
  })

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our People</h1>
          <p className="text-xl text-blue-100">Meet our dedicated faculty, staff, and students</p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary/5 to-blue-50 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {["all", "faculty", "staff", "students"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-primary border-2 border-primary hover:bg-blue-50"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Field Filter */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Filter by Field</h3>
              <div className="flex flex-wrap gap-3">
                {["all", "metallurgy", "materials"].map((field) => (
                  <button
                    key={field}
                    onClick={() => setSelectedField(field as any)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedField === field
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-primary border-2 border-primary hover:bg-blue-50"
                    }`}
                  >
                    {field === "all" ? "All Fields" : field.charAt(0).toUpperCase() + field.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPeople.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-4 border-primary hover:border-accent group"
              >
                <div className="h-72 overflow-hidden bg-gray-200 relative">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{person.name}</h3>
                  <p className="text-gray-600 font-semibold mb-2 text-sm">{person.title}</p>
                  <p className="text-gray-700 mb-4">{person.specialization}</p>

                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="text-xs bg-blue-100 text-primary px-3 py-1 rounded-full font-semibold">
                      {person.category}
                    </span>
                    <span className="text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-semibold">
                      {person.field}
                    </span>
                  </div>

                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      className="w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-all duration-300 font-semibold inline-block"
                    >
                      Contact
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredPeople.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No people found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Department Office</h3>
              <p className="text-gray-300">Metallurgical Engineering and Materials Science</p>
              <p className="text-gray-300">Indian Institute of Technology Indore</p>
              <p className="text-gray-300">Khandwa Road, Simrol-453552</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Contact</h3>
              <p className="text-gray-300">Phone: +91-7324-306-819</p>
              <p className="text-gray-300">Email: memsoffice@iiti.ac.in</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/" className="hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/research" className="hover:text-accent transition-colors">
                    Research
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Department of MEMS, IIT Indore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
