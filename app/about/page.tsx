"use client"

import Navbar from "@/components/navbar"

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MEMS</h1>
          <p className="text-xl text-blue-100">Learn more about our department's vision, mission, and achievements</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-xl border-l-4 border-primary hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold text-primary mb-4">Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To emerge as a globally esteemed institution, our vision at the Department of Metallurgical Engineering
                and Materials Science is to educate and mentor the forthcoming generation of engineers, scientists, and
                entrepreneurs. Our unwavering commitment is to contribute significantly to the economic and social
                development of India and the world.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-accent/10 to-amber-50 p-8 rounded-xl border-l-4 border-accent hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold text-primary mb-4">Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission encompasses educational excellence, cutting-edge research, promoting innovation and
                entrepreneurship, and community engagement. We are dedicated to providing comprehensive education in
                advanced materials and metallurgical engineering, undertaking innovative research, fostering a culture
                of innovation, and engaging with the broader community through outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Our Journey</h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2010
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">Center for Materials Science Engineering</h3>
                <p className="text-gray-700 text-lg">
                  The department was originally inaugurated as the Center for Materials Science Engineering, comprising
                  faculty from the Schools of Basic Sciences and Engineering.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2016
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">Full Department Status</h3>
                <p className="text-gray-700 text-lg">
                  The Center for Materials Science Engineering evolved into the fully-fledged Department of
                  Metallurgical Engineering and Materials Science.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2025
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">Continued Excellence</h3>
                <p className="text-gray-700 text-lg">
                  Today, MEMS stands as a beacon for rigorous academic pursuits and impactful contributions to the realm
                  of materials science and engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Research Areas</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Materials Processing", desc: "Advanced techniques for material synthesis and processing" },
              { title: "Characterization", desc: "Comprehensive material characterization and analysis" },
              { title: "Metallurgy", desc: "Traditional and modern metallurgical processes" },
              { title: "Nanotechnology", desc: "Nanomaterials and nanostructured materials" },
              { title: "Composites", desc: "Advanced composite materials development" },
              { title: "Sustainability", desc: "Sustainable materials and green processing" },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-700">{area.desc}</p>
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
