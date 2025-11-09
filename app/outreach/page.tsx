"use client"

import Navbar from "@/components/navbar"

export default function Outreach() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Outreach & Community</h1>
          <p className="text-xl text-blue-100">Engaging with society through education and innovation</p>
        </div>
      </section>

      {/* Outreach Programs */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Our Outreach Initiatives</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "School Outreach Programs",
                description:
                  "Interactive sessions and demonstrations for school students to inspire interest in materials science and engineering.",
                activities: ["Science Demonstrations", "Lab Visits", "Career Talks", "Workshops"],
              },
              {
                title: "Industry Collaboration",
                description:
                  "Strong partnerships with industries for research, internships, and placement opportunities.",
                activities: ["Industry Seminars", "Internships", "Joint Research", "Placements"],
              },
              {
                title: "Community Engagement",
                description:
                  "Programs aimed at promoting scientific awareness and technological literacy in the community.",
                activities: ["Public Lectures", "Science Fairs", "Awareness Campaigns", "Mentorship"],
              },
              {
                title: "International Collaboration",
                description:
                  "Exchange programs and collaborative research with international institutions and universities.",
                activities: ["Student Exchange", "Faculty Exchange", "Joint Research", "Conferences"],
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border-2 border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Activities:</p>
                  <ul className="space-y-2">
                    {program.activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Upcoming Events</h2>

          <div className="space-y-6">
            {[
              {
                title: "Department Day Celebration",
                date: "February 1, 2025",
                description: "Annual celebration featuring expert talks, cultural programs, and student achievements.",
              },
              {
                title: "Materials Science Workshop",
                date: "March 15, 2025",
                description:
                  "Hands-on workshop on advanced characterization techniques for school and college students.",
              },
              {
                title: "Industry-Academia Meet",
                date: "April 10, 2025",
                description: "Networking event bringing together industry professionals and academic researchers.",
              },
              {
                title: "Research Symposium",
                date: "May 20, 2025",
                description: "Platform for students and researchers to present their latest research findings.",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary bg-blue-50 px-4 py-2 rounded-lg whitespace-nowrap">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Outreach */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg mb-8 text-blue-100">
              Interested in collaborating with us or participating in our outreach programs?
            </p>
            <a
              href="mailto:memsoffice@iiti.ac.in"
              className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
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
