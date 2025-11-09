"use client"

import Navbar from "@/components/navbar"

export default function Research() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
          <p className="text-xl text-blue-100">Cutting-edge research advancing materials science and engineering</p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Research Areas</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Materials Processing",
                description:
                  "Development of novel processing techniques for advanced materials including powder metallurgy, casting, and forming processes.",
                icon: "⚙️",
              },
              {
                title: "Materials Characterization",
                description:
                  "Comprehensive characterization of materials using advanced techniques including microscopy, spectroscopy, and mechanical testing.",
                icon: "🔬",
              },
              {
                title: "Nanomaterials & Nanostructures",
                description:
                  "Synthesis and characterization of nanomaterials with applications in electronics, energy, and biomedical fields.",
                icon: "🔭",
              },
              {
                title: "Composite Materials",
                description:
                  "Development of advanced composite materials for aerospace, automotive, and structural applications.",
                icon: "🏗️",
              },
              {
                title: "Sustainable Materials",
                description:
                  "Research on environmentally friendly materials and green processing techniques for sustainable development.",
                icon: "🌱",
              },
              {
                title: "Functional Materials",
                description:
                  "Design and development of materials with specific functional properties for advanced applications.",
                icon: "⚡",
              },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border-2 border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Recent Research Highlights</h2>

          <div className="space-y-6">
            {[
              {
                title: "Novel Bimetallic Catalysts for Selective Oxidation",
                authors: "Prof. Irina Alexandrovna Kurzina et al.",
                journal: "Advanced Materials Today",
                year: 2024,
              },
              {
                title: "Sustainable Processing of Advanced Composites",
                authors: "Prof. Ajay Kumar Kushwaha et al.",
                journal: "Journal of Materials Science",
                year: 2024,
              },
              {
                title: "Nanomaterials for Energy Storage Applications",
                authors: "Dr. Khushubo Devi et al.",
                journal: "Nano Energy",
                year: 2024,
              },
              {
                title: "Metallurgical Aspects of High-Performance Alloys",
                authors: "Prof. Rupesh Devan et al.",
                journal: "Metallurgical and Materials Transactions",
                year: 2024,
              },
            ].map((pub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-2">{pub.authors}</p>
                <p className="text-gray-500">
                  <span className="font-semibold">{pub.journal}</span> • {pub.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Collaborations & Partnerships</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "IIT Bombay", type: "National Collaboration" },
              { name: "Max-Planck-Institut", type: "International Partnership" },
              { name: "Industry Partners", type: "Industrial Collaboration" },
              { name: "CSIR Institutes", type: "Research Network" },
              { name: "Foreign Universities", type: "Academic Exchange" },
              { name: "Government Agencies", type: "Funding & Support" },
            ].map((collab, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg p-6 text-center border-2 border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{collab.name}</h3>
                <p className="text-gray-600">{collab.type}</p>
              </div>
            ))}
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
