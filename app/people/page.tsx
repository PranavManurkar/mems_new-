"use client"

import Navbar from "@/components/navbar"
import { useState } from "react"
type ProfileLink = { label: string; url: string }

interface Person {
  id: number
  name: string
  title: string
  specialization: string
  category: "faculty" | "staff" | "students"
  field: "metallurgy" | "materials"
  image: string
  email?: string
  office?: string
  phone?: string
  profiles?: ProfileLink[] // multiple authoritative profile links
}

const people: Person[] = [
  {
    id: 1,
    name: "Prof. Ajay Kumar Kushwaha",
    title: "Head of Department & Associate Professor",
    specialization: "Materials Processing / Nanomaterials",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/AKKsir.3a347569c4cf457ecb44.jpeg",
    email: "akk@iiti.ac.in",
    office: "1D-610",
    phone: "+91-731-6603250", // source: mems / directory
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=1ck-NV0AAAAJ" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Dr-Ajay-Kushwaha-2" }
    ],
  },

  {
    id: 2,
    name: "Prof. Rupesh S. Devan",
    title: "Professor",
    specialization: "Metallurgical Engineering / Energy Materials",
    category: "faculty",
    field: "metallurgy",
    image: "https://mems.iiti.ac.in/static/media/prof2.cbfdfc33a3ed16137e7e.jpg",
    email: "rupesh@iiti.ac.in",
    office: "1D-414",
    phone: "+91-731-6603244",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=UF9U1IkAAAAJ" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Rupesh-Devan" },
      { label: "IRINS", url: "https://iiti.irins.org/profile/60142" }
    ],
  },

  {
    id: 3,
    name: "Prof. Parasharam M. Shirage",
    title: "Professor",
    specialization: "Advanced Functional & Energy Materials",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/shirage.28c6d64e2592ac42abd4.jpg",
    email: "pmshirage@iiti.ac.in",
    office: "Not listed", // public profile didn't show a room number
    phone: "+91-731-6603330", // institute directory ext -> 3330
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=hf2x04QAAAAJ" },
      { label: "Personal page", url: "https://people.iiti.ac.in/~pmshirage/" },
      { label: "IRINS", url: "https://iiti.irins.org/profile/62178" }
    ],
  },

  {
    id: 4,
    name: "Prof. Mrigendra Dubey",
    title: "Associate Professor",
    specialization: "Soft Materials / Nanomaterials",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/prof11.84d0e36c42a0c5b93c4f.jpg",
    email: "mdubey@iiti.ac.in",
    office: "1D-412",
    phone: "+91-731-6603258",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=9P83G5AAAAAJ" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Mrigendra-Dubey" },
      { label: "ORCID", url: "https://orcid.org/0000-0001-7949-782X" },
      { label: "Personal / Group", url: "https://drdubey.wixsite.com/iiti" }
    ],
  },

  {
    id: 5,
    name: "Prof. Vinod Kumar",
    title: "Associate Professor",
    specialization: "Phase equilibria / Diffusion",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/vinod.939ea6761099f991735b.jpg",
    email: "vkt@iiti.ac.in",
    office: "1D-412",
    phone: "+91-731-6603251",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=n782qToAAAAJ" },
      { label: "People page", url: "https://people.iiti.ac.in/~vkt/" }
    ],
  },

  {
    id: 6,
    name: "Prof. Sunil Kumar",
    title: "Associate Professor",
    specialization: "Surface engineering / Corrosion",
    category: "faculty",
    field: "materials",
    image: "https://mems.iiti.ac.in/static/media/prof13.0075da85f9c65c7fa2b2.jpg",
    email: "sunil@iiti.ac.in",
    office: "1D-416 (POD-1D)",
    phone: "+91-731-6603281",
    profiles: [
      { label: "People page", url: "https://people.iiti.ac.in/~sunil/" },
      { label: "Group / Lab", url: "https://people.iiti.ac.in/~sunil/group.php" }
    ],
  },

  {
    id: 7,
    name: "Prof. K. V. Vamsi",
    title: "Assistant / Associate Professor",
    specialization: "Computational Materials / Alloy Design",
    category: "faculty",
    field: "materials",
    image: "/images/prof/kv-vamsi.jpg",
    email: "kvvamsi@iiti.ac.in",
    office: "FC 504, Learning Resource Center",
    phone: "+91-731-6603333",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=ducGUjAAAAAJ" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/K-V-Vamsi" },
      { label: "Personal", url: "https://kvvamsi20.wixsite.com/vamsi" }
    ],
  },

  {
    id: 8,
    name: "Prof. Eswara Prasad Korimilli",
    title: "Associate Professor",
    specialization: "Mechanics of Materials / Deformation",
    category: "faculty",
    field: "materials",
    image: "/images/prof/eswara-prasad-korimilli.jpg",
    email: "eswar@iiti.ac.in",
    office: "POD1D-612",
    phone: "+91-731-6603280",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=LiDYSBQAAAAJ" },
      { label: "MoM group", url: "https://sites.google.com/view/eswarprasad/home" },
      { label: "IRINS", url: "https://iiti.irins.org/profile/93803" }
    ],
  },

  {
    id: 9,
    name: "Dr. Khushubo Devi (Tiwari)",
    title: "Assistant Professor",
    specialization: "Materials Science / Soft materials",
    category: "faculty",
    field: "materials",
    image: "/images/prof/khushubo-devi.jpg",
    email: "khushubo@iiti.ac.in",
    office: "Not listed",
    phone: "+91-731-6605162",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=sCL9Zl4AAAAJ" },
      { label: "IRINS", url: "https://iiti.irins.org/profile/491337" },
      { label: "Personal / Lab", url: "https://sites.google.com/view/khushubodevi?usp=sharing" }
    ],
  },

  {
    id: 10,
    name: "Prof. Vivek Verma",
    title: "Assistant Professor",
    specialization: "Diffusion / Phase transformations",
    category: "faculty",
    field: "materials",
    image: "/images/prof/vivek-verma.jpg",
    email: "vivekv@iiti.ac.in",
    office: "Not listed",
    phone: undefined, // not publicly listed on mems page / directory snapshot
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=ElT_W2YAAAAJ" }
    ],
  },

  {
    id: 11,
    name: "Dr. Nisheeth Kumar Prasad",
    title: "Assistant Professor",
    specialization: "Advanced functional materials / Energy",
    category: "faculty",
    field: "materials",
    image: "/images/prof/nisheeth-k-prasad.jpg",
    email: "nisheeth@iiti.ac.in",
    office: "211(h), Hub Building (CITC)",
    phone: "+91-731-6603175",
    profiles: [
      { label: "Personal page", url: "https://sites.google.com/iiti.ac.in/nisheeth/about-me?pli=1" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=vjypzxYAAAAJ&hl=en" }
    ],
  },

  {
    id: 12,
    name: "Dr. Ram Sajeevan Maurya",
    title: "Assistant Professor",
    specialization: "Coatings / Thin films / Metallic glasses",
    category: "faculty",
    field: "materials",
    image: "/images/prof/ram-sajeevan-maurya.jpg",
    email: "ramsajeevan@iiti.ac.in",
    office: "Not listed",
    phone: "+91-731-6603202",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=6f8zrTcAAAAJ" },
      { label: "Lab page", url: "https://ramsajeevan.wixsite.com/amorphous-metals-lab" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Ram-Maurya-7" }
    ],
  },

  {
    id: 13,
    name: "Prof. Sumanta Samal",
    title: "Associate Professor",
    specialization: "Microstructure modelling / Alloys",
    category: "faculty",
    field: "materials",
    image: "/images/prof/sumanta-samal.jpg",
    email: "sumanta@iiti.ac.in",
    office: "Chromium Building, Room 411",
    phone: "+91-731-6603252",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=_ovvQcQAAAAJ" },
      { label: "People page", url: "https://iiti.ac.in/people/~sumanta/index.html" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Sumanta-Samal" }
    ],
  },

  {
    id: 14,
    name: "Dr. Dhirendra K. Rai",
    title: "Associate Professor",
    specialization: "Energy & environmental materials",
    category: "faculty",
    field: "materials",
    image: "/images/prof/dhirendra-k-rai.jpg",
    email: "dkrai@iiti.ac.in",
    office: "Not listed",
    phone: "+91-731-6603278",
    profiles: [
      { label: "People page", url: "http://people.iiti.ac.in/~dkr/" },
      { label: "IRINS", url: "https://iiti.irins.org/profile/93795" }
    ],
  },

  {
    id: 15,
    name: "Dr. Ranjith Kumar Poobalan",
    title: "Assistant Professor",
    specialization: "MXenes / 2D materials / Energy",
    category: "faculty",
    field: "materials",
    image: "/images/prof/ranjith-kumar-poobalan.jpg",
    email: "ranjith@iiti.ac.in",
    office: "Not listed",
    phone: "+91-731-6605597",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?user=iTe5x74AAAAJ&hl=en" },
      { label: "People page", url: "https://iiti.ac.in/people/~rkp/" }
    ],
  },

  {
    id: 16,
    name: "Dr. Hemant Borkar",
    title: "Assistant Professor",
    specialization: "Lightweight alloys / Deformation",
    category: "faculty",
    field: "materials",
    image: "/images/prof/hemant-borkar.jpg",
    email: "h.borkar@iiti.ac.in",
    office: "Not listed",
    phone: "+91-731-6603295",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=siZP-XoAAAAJ" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Hemant-Borkar" },
      { label: "IRINS", url: "https://iiti.irins.org/profile/93801" }
    ],
  },
]

export default function People() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "faculty" | "staff" | "students">("all")
  const [selectedField, setSelectedField] = useState<"all" | "metallurgy" | "materials">("all")
  const [modalPerson, setModalPerson] = useState<Person | null>(null)

  const filteredPeople = people.filter((person) => {
    const categoryMatch = selectedCategory === "all" || person.category === selectedCategory
    const fieldMatch = selectedField === "all" || person.field === selectedField
    return categoryMatch && fieldMatch
  })

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our People</h2>
          <p className="text-xl text-blue-100">Meet our dedicated faculty, staff, and students</p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary/5 to-blue-50 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
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

                  <div className="flex gap-2">
                    {/* <button
                      onClick={() => setModalPerson(person)}
                      className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-all duration-300 font-semibold"
                    >
                      Contact
                    </button> */}

                    <button
                      onClick={() => setModalPerson(person)}
                      //className="flex-1 text-center px-4 py-2 border-2 border-primary rounded-lg hover:bg-blue-900 transition-all duration-300 font-semibold"
                      className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-all duration-300 font-semibold"
                    >
                      More info
                    </button>
                  </div>
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

      {/* Modal */}
      {modalPerson && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setModalPerson(null)}
        >
          <div
            className="bg-white rounded-xl max-w-xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-4 p-6">
              <img
                src={modalPerson.image}
                alt={modalPerson.name}
                className="w-28 h-28 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">{modalPerson.name}</h3>
                <p className="text-gray-700">{modalPerson.title}</p>
                <p className="mt-2 text-gray-600">{modalPerson.specialization}</p>

                {/* Contact info */}
                <div className="mt-4 space-y-2">
                  <div>
                    <span className="block text-xs text-gray-500">Office</span>
                    <div className="font-medium text-gray-800">{modalPerson.office ?? "Not listed"}</div>
                  </div>

                  <div>
                    <span className="block text-xs text-gray-500">Phone</span>
                    <div className="font-medium text-gray-800">{modalPerson.phone ?? "Not listed"}</div>
                  </div>

                  <div>
                    <span className="block text-xs text-gray-500">Email</span>
                    <div className="font-medium text-gray-800">
                      {modalPerson.email ? (
                        <a href={`mailto:${modalPerson.email}`} className="underline">
                          {modalPerson.email}
                        </a>
                      ) : (
                        "Not listed"
                      )}
                    </div>
                  </div>
                </div>

                {/* Profiles / actions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {modalPerson.profiles && modalPerson.profiles.length > 0 ? (
                    modalPerson.profiles.map((p) => (
                      <a
                        key={p.url}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-primary text-white rounded-lg font-semibold text-sm"
                      >
                        {p.label}
                      </a>
                    ))
                  ) : (
                    <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">No website</span>
                  )}

                  {modalPerson.email && (
                    <a
                      href={`mailto:${modalPerson.email}`}
                      className="px-4 py-2 border border-primary text-primary rounded-lg font-semibold"
                    >
                      Email
                    </a>
                  )}

                  <button
                    onClick={() => setModalPerson(null)}
                    className="px-4 py-2 ml-auto text-sm text-gray-600 hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
