"use client"

import Navbar from "@/components/navbar"

export default function Academics() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100">
            Comprehensive programs in Metallurgical Engineering and Materials Science
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Academic Programs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "B.Tech in Metallurgical Engineering",
                duration: "4 Years",
                description:
                  "Comprehensive undergraduate program covering fundamentals of metallurgical engineering, materials processing, and characterization.",
                highlights: ["Core Metallurgy Courses", "Laboratory Work", "Industry Internships", "Project Work"],
              },
              {
                title: "M.Tech in Materials Science & Engineering",
                duration: "2 Years",
                description:
                  "Advanced postgraduate program focusing on advanced materials, characterization techniques, and research methodologies.",
                highlights: ["Advanced Courses", "Research Projects", "Thesis Work", "Industry Collaboration"],
              },
              {
                title: "PhD in Metallurgical Engineering",
                duration: "3-5 Years",
                description:
                  "Doctoral program emphasizing original research contributions in materials science and metallurgical engineering.",
                highlights: ["Research Focus", "Publications", "Seminars", "Thesis Defense"],
              },
              {
                title: "PhD in Materials Science",
                duration: "3-5 Years",
                description:
                  "Doctoral program dedicated to cutting-edge research in advanced materials and their applications.",
                highlights: ["Cutting-Edge Research", "International Collaboration", "Publications", "Innovation"],
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-8 border-2 border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-gray-600 font-semibold mb-4">Duration: {program.duration}</p>
                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Features:</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Core Courses</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Metallurgical Engineering</h3>
              <ul className="space-y-3">
                {[
                  "Extractive Metallurgy",
                  "Physical Metallurgy",
                  "Mechanical Metallurgy",
                  "Steelmaking & Casting",
                  "Non-Ferrous Metallurgy",
                  "Corrosion & Protection",
                ].map((course, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-lg">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Materials Science</h3>
              <ul className="space-y-3">
                {[
                  "Materials Characterization",
                  "Nanomaterials",
                  "Composite Materials",
                  "Biomaterials",
                  "Functional Materials",
                  "Materials Sustainability",
                ].map((course, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-lg">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p>&copy; 2025 Department of MEMS, IIT Indore. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
