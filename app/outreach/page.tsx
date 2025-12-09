"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"

export default function Outreach() {
  const [tab, setTab] = useState<1 | 2>(1)

  // small framer-motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
  }
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  }

  // Replace image names below with files you place inside /public/images/
  const consultancyLogos = [
    "/images/ve.png",
    "/images/um.png",
    "/images/rc.png",
    "/images/mra.png",
    "/images/tf.png",
  ]

  const footprintLogos = [
    "/images/accenture.png",
    "/images/Goldman_Sachs.png",
    "/images/Razorpay.jpg",
    "/images/BjxmtD.webp",
    "/images/axxela.png",
    "/images/deolitte.png",
    "/images/dolot.jpeg",
    "/images/faxoc.png",
    "/images/groww.png",
    "/images/media.jpeg",
    "/images/sahaj.png",
    "/images/tredence.png",
    "/images/tresca.jpeg",
    "/images/unity.jpeg",
    "/images/tata.png",
    "/images/deqode.png",
    "/images/mecon.png",
    "/images/adani.png",
    "/images/mittal.png",
    "/images/regain.png",
  ]

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

      {/* Outreach Programs (unchanged, kept top) */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Our Outreach Initiatives</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
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
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-8 border-2 border-primary hover:shadow-lg transition-all duration-300"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Activities:</p>
                  <ul className="space-y-2">
                    {program.activities.map((a, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Industry / Students toggle (Framer Motion + clean UI) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="section-title">Industry · Students · Collaboration</h2>

            {/* tabs */}
            <div className="flex gap-2 bg-white rounded-full p-1 border border-gray-200">
              <button
                onClick={() => setTab(1)}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                  tab === 1 ? "bg-primary text-white shadow" : "text-primary"
                }`}
                aria-pressed={tab === 1}
              >
                Our Students
              </button>
              <button
                onClick={() => setTab(2)}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                  tab === 2 ? "bg-primary text-white shadow" : "text-primary"
                }`}
                aria-pressed={tab === 2}
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div>
            {/* Students tab */}
            {tab === 1 && (
              <motion.div
                key="students"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                className="grid lg:grid-cols-3 gap-6"
              >
                {/* BTech card */}
                <motion.article
                  variants={cardVariants}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">B.Tech (Metallurgy & Materials)</h3>

                  <div className="flex gap-4 items-start">
                    <img src="/images/convocation.jpg" alt="convocation" className="w-28 h-20 object-cover rounded" />
                    <div className="text-gray-700 text-sm">
                      <p className="mb-2">
                        Our BTech program is rigorous: ~146.5 credits, 49 courses and 12 labs. The curriculum emphasizes practical
                        lab experience and industry-linked projects (7th semester project placements).
                      </p>
                      <ul className="list-disc ml-5 mt-2 text-sm">
                        <li>Strong lab exposure (12 labs)</li>
                        <li>Industry-linked project opportunities</li>
                        <li>Active student participation in national competitions</li>
                      </ul>
                    </div>
                  </div>
                </motion.article>

                {/* MTech card */}
                <motion.article
                  variants={cardVariants}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">M.Tech (Materials Science & Engineering)</h3>

                  <div className="flex gap-4 items-start">
                    <div className="text-gray-700 text-sm">
                      <p className="mb-2">
                        MTech programs combine theoretical depth with practical labs (typically 9 courses + 4 labs). Graduates are
                        ready for research and industry roles.
                      </p>
                      <ul className="list-disc ml-5 mt-2 text-sm">
                        <li>Practical, project-driven curriculum</li>
                        <li>Opportunities for seminars and networking</li>
                        <li>Close faculty-industry collaboration</li>
                      </ul>
                    </div>
                    <img src="/images/irina.jpg" alt="workshop" className="w-28 h-20 object-cover rounded" />
                  </div>
                </motion.article>

                {/* PhD card */}
                <motion.article
                  variants={cardVariants}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">PhD</h3>

                  <div className="flex gap-4 items-start">
                    <img src="/images/group_photo1.jpg" alt="group" className="w-28 h-20 object-cover rounded" />
                    <div className="text-gray-700 text-sm">
                      <p className="mb-2">
                        PhD at IIT Indore emphasizes independent research, annual progress reviews and institute-supported
                        international exposure. Students receive fellowships and participate in research symposia.
                      </p>
                      <ul className="list-disc ml-5 mt-2 text-sm">
                        <li>Institute travel support for conferences</li>
                        <li>Student-run symposiums and Materials Advantage chapter</li>
                        <li>Strong industry-relevant research outputs</li>
                      </ul>
                    </div>
                  </div>
                </motion.article>

                {/* Footprints / logos card (full width on small, grid on larger) */}
                <motion.div variants={cardVariants} className="lg:col-span-3 bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-semibold text-primary mb-4">Footprints of MEMS — Industry & Recruiters</h4>

                  <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4 items-center">
                    {footprintLogos.map((src, i) => (
                      <motion.div
                        key={i}
                        variants={logoVariants}
                        className="flex items-center justify-center p-2 bg-white rounded"
                      >
                        <img src={src} alt={`logo-${i}`} className="max-h-12 object-contain" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Work With Us tab */}
            {tab === 2 && (
              <motion.div
                key="work"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                className="grid lg:grid-cols-3 gap-6"
              >
                {/* Consultancy */}
                <motion.article
                  variants={cardVariants}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">Consultancy</h3>

                  <p className="text-gray-700 text-sm mb-4">
                    Our department provides specialized consultancy in metallurgical process optimization, material selection,
                    failure analysis and custom testing using advanced facilities.
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {consultancyLogos.map((l, idx) => (
                      <motion.div key={idx} variants={logoVariants} className="p-2 bg-gray-50 rounded flex items-center justify-center">
                        <img src={l} alt={`consult-${idx}`} className="max-h-14 object-contain" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a href="/consultancy" className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm">
                      Click for more details
                    </a>
                  </div>
                </motion.article>

                {/* Internships */}
                <motion.article variants={cardVariants} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3">Internships</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We maintain strong industry connections for internships and projects. Companies can onboard students for
                    semester projects and internships — contact memsoffice@iiti.ac.in for collaboration.
                  </p>
                  <img src="/images/irina.jpg" alt="internships" className="w-full h-28 object-cover rounded mt-2" />
                </motion.article>

                {/* Training */}
                <motion.article variants={cardVariants} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3">Training</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Tailored training programs for industry personnel — instrument operation, characterization techniques and
                    focused workshops are available on request.
                  </p>

                  <ul className="list-disc ml-5 text-sm text-gray-700">
                    <li>Hands-on instrument training</li>
                    <li>Focused workshops for partnering industries</li>
                    <li>Custom short-courses on materials testing</li>
                  </ul>
                </motion.article>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Events (kept as before) */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Upcoming Events</h2>

          <div className="space-y-6 mt-6">
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
              <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300">
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
      <Footer />
    </main>
  )
}
