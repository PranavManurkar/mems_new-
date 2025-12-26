"use client"

import Link from "next/link"
import Image from "next/image"

// Former HODs data
const formerHODs = [
  {
    id: 1,
    name: "Prof. Surender Singh",
    tenure: "2016 - 2021",
    image: "/faculty/prof_placeholder.jpg",
    bio: "Prof. Surender Singh served as the Head of Department during the initial establishment phase of the department. He played a crucial role in building the foundational infrastructure and establishing the academic programs for the department.",
    specialization: "Materials Science",
  },
  {
    id: 2,
    name: "Prof. Rajesh Kumar",
    tenure: "2012 - 2016",
    image: "/faculty/prof_placeholder.jpg",
    bio: "Prof. Rajesh Kumar was instrumental in laying down the academic framework and establishing research collaborations. His contributions helped establish the department's identity in materials science and metallurgical engineering.",
    specialization: "Metallurgical Engineering",
  },
  {
    id: 3,
    name: "Prof. Vikram Sharma",
    tenure: "2008 - 2012",
    image: "/faculty/prof_placeholder.jpg",
    bio: "Prof. Vikram Sharma contributed significantly to the development of laboratory facilities and curriculum design. Under his leadership, several advanced characterization techniques were introduced to the department.",
    specialization: "Materials Characterization",
  },
]

export default function FormerHODsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-4"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Former Heads of Department</h1>
          <p className="text-lg text-blue-100">Legacy and Contributions of Previous HODs</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-16">
              {formerHODs.map((hod, index) => (
                <div key={hod.id} className={`grid md:grid-cols-2 gap-8 items-center`}>
                  {/* Image and Tenure - Alternating sides on desktop */}
                  <div
                    className={`flex justify-center ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="relative w-56 h-72 rounded-lg overflow-hidden border-4 border-primary shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={hod.image}
                        alt={hod.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex justify-center ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative w-full md:w-96">
                      {/* Timeline dot - hidden on mobile, shown on desktop */}
                      <div className="hidden md:block absolute right-0 top-8 transform translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full z-20"></div>

                      {/* Card */}
                      <div className="bg-gradient-to-br from-blue-50 to-accent/10 border-2 border-primary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                        {/* Tenure badge */}
                        <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                          {hod.tenure}
                        </div>

                        {/* Name and title */}
                        <h3 className="text-2xl font-bold text-primary mb-1">{hod.name}</h3>
                        <p className="text-accent font-semibold mb-4">{hod.specialization}</p>

                        {/* Bio */}
                        <p className="text-gray-700 leading-relaxed text-justify">
                          {hod.bio}
                        </p>

                        {/* Decorative bottom accent */}
                        <div className="mt-6 pt-6 border-t-2 border-primary/20">
                          <div className="flex gap-2">
                            <div className="w-1 h-6 bg-primary rounded"></div>
                            <div className="w-1 h-6 bg-accent rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Department Growth</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">
                {formerHODs.length}
              </div>
              <p className="text-gray-600 font-semibold">Former HODs</p>
              <p className="text-sm text-gray-500 mt-2">Contributing to departmental legacy</p>
            </div>

            <div className="bg-white border-l-4 border-accent rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent mb-2">
                {Math.max(...formerHODs.map((h) => parseInt(h.tenure.split("-")[1]))) -
                  Math.min(...formerHODs.map((h) => parseInt(h.tenure.split("-")[0])))}
                +
              </div>
              <p className="text-gray-600 font-semibold">Years of Leadership</p>
              <p className="text-sm text-gray-500 mt-2">Building institutional excellence</p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">1998</div>
              <p className="text-gray-600 font-semibold">Department Founded</p>
              <p className="text-sm text-gray-500 mt-2">IIT Indore, Simrol</p>
            </div>
          </div>
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
                  <Link href="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="hover:text-accent transition-colors">
                    People
                  </Link>
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
