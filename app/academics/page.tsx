"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"

export default function Academics() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100">
            Comprehensive programs in Metallurgical Engineering and Materials Science
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title text-2xl font-bold text-primary mb-2">Academic Programs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                key: "btech",
                title: "B.Tech in Metallurgical Engineering and Materials Science",
                duration: "4 Years",
                description:
                  "Comprehensive undergraduate program in Metallurgical Engineering and Materials Science offering a rigorous curriculum in materials science, metallurgy, processing, and characterization.",
                highlights: [
                  "Core Metallurgy & Materials Courses",
                  "Extensive Laboratory Work",
                  "Industry Internships",
                  "Capstone Project Work",
                ],
                links: [
                  {
                    label: "Rules, Policies, Curriculum and Courses of Study (UG)",
                    href: "https://academic.iiti.ac.in/Document/2022-July-UG-Rules+Policies+Curriculum+Syllabi-of-Courses%2011%20October%202022.pdf",
                  },
                  {
                    label: "UG Registration / Procedure (AY 2023–24)",
                    href: "https://academic.iiti.ac.in/Admission/UG/Procedure%20for%20Online%20Registration%20for%20new%20UG%20students%20of%20AY%202023-24.pdf",
                  },
                ],
              },
              {
                key: "mtech-mse",
                title: "M.Tech in Materials Science & Engineering",
                duration: "2 Years",
                description:
                  "Advanced postgraduate program focusing on materials synthesis, characterization techniques, and applications in energy, electronics, biomaterials, and structural materials.",
                highlights: [
                  "Advanced Core & Elective Courses",
                  "Research-Oriented Projects",
                  "Thesis Work",
                  "Industry & Research Collaboration",
                ],
                links: [
                  {
                    label: "Rules, Policies, Curriculum and Courses of Study (PG/PhD)",
                    href: "https://academic.iiti.ac.in/Document/new2023/2023-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2029%20August%202023.pdf",
                  },
                  {
                    label: "Academic Calendar (PG/PhD 2022–23)",
                    href: "https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf",
                  },
                ],
              },
              {
                key: "mtech-met",
                title: "M.Tech in Metallurgical Engineering",
                duration: "2 Years",
                description:
                  "Specialized program focused on extraction, production, and manipulation of metals and alloys, with emphasis on physical metallurgy, corrosion, and advanced characterization.",
                highlights: [
                  "Specialized Metallurgy Curriculum",
                  "Hands-on Lab & Characterization",
                  "Industry-relevant Dissertation",
                  "Training for R&D and Process Industries",
                ],
                links: [
                  {
                    label: "Rules, Policies, Curriculum and Courses of Study (PG/PhD)",
                    href: "https://academic.iiti.ac.in/Document/new2023/2023-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2029%20August%202023.pdf",
                  },
                  {
                    label: "Academic Calendar (PG/PhD 2022–23)",
                    href: "https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf",
                  },
                ],
              },
              {
                key: "phd",
                title: "PhD Programs (Metallurgical Engineering & Materials Science)",
                duration: "Typically 3–5 Years",
                description:
                  "Doctoral programs emphasizing original research in metallurgical engineering and materials science, supported by state-of-the-art facilities and active research groups.",
                highlights: [
                  "Independent Research with Faculty Mentorship",
                  "Publications & Conference Presentations",
                  "Regular Seminars & Progress Reviews",
                  "Thesis Defense and Viva",
                ],
                links: [
                  {
                    label: "PhD Rules, Policies, Curriculum and Courses of Study (PG/PhD)",
                    href: "https://academic.iiti.ac.in/Document/new2023/2023-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2029%20August%202023.pdf",
                  },
                  {
                    label: "PhD Admission Portal",
                    href: "https://academic.iiti.ac.in:8443/nregistration.jsp",
                  },
                  {
                    label: "PhD Advertisement / Detailed MEQ & Eligibility",
                    href: "https://academic.iiti.ac.in/phdadvt.php",
                  },
                ],
              },
            ].map((program) => (
              <div
                key={program.key}
                className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-8 border-2 border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 font-semibold mb-4">
                  Duration: {program.duration}
                </p>
                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {program.links && program.links.length > 0 && (
                    <div>
                      <p className="font-semibold text-primary mb-2">
                        Important Links:
                      </p>

                      {/* Button-style links with hover pop-up effect */}
                      <div className="flex flex-wrap gap-2">
                        {program.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
            inline-flex items-center
            px-3 py-2
            text-xs md:text-sm font-semibold
            rounded-lg
            border border-primary
            text-primary bg-white
            shadow-sm
            hover:bg-primary hover:text-white
            hover:shadow-lg
            transform hover:-translate-y-0.5 hover:scale-101
            transition-all duration-200
            break-words
          "
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Courses */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Core Courses</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Metallurgical Engineering
              </h3>
              <ul className="space-y-3">
                {[
                  "Extractive Metallurgy",
                  "Physical Metallurgy",
                  "Mechanical Metallurgy",
                  "Steelmaking & Casting",
                  "Non-Ferrous Metallurgy",
                  "Corrosion & Protection",
                ].map((course, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-lg">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Materials Science
              </h3>
              <ul className="space-y-3">
                {[
                  "Materials Characterization",
                  "Nanomaterials",
                  "Composite Materials",
                  "Biomaterials",
                  "Functional Materials",
                  "Materials Sustainability",
                ].map((course, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-lg">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar & Holidays (2023–24) */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title text-2xl font-bold text-primary mb-2">Academic Calendar & Holidays (2023–24)</h2>
          <div className="bg-white border-2 border-primary rounded-xl p-6 shadow-sm space-y-4">
            <p className="text-gray-700">
              Refer to the Institute academic documents for detailed schedules and holiday lists:
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=739b4cf4d3&attid=0.1&permmsgid=msg-f:1768679276744765627&th=188b9c6e6bf770bb&view=att&disp=inline"
                  target="_blank"
                  rel="noreferrer"
                   className="
        inline-flex items-center
        px-4 py-2
        text-sm font-semibold
        rounded-lg
        border border-primary
        text-primary bg-white
        shadow-sm  
        hover:bg-primary hover:text-white
        hover:shadow-lg
        transform hover:-translate-y-0.5 hover:scale-101
        transition-all duration-200
        break-all
      "
                >
                  Click here to view the Academic Calendar (UG / PG / PhD)
                </a>
              </li>
              <li>
                <a
                  href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=739b4cf4d3&attid=0.2&permmsgid=msg-f:1784633122427770085&th=18c44a5e94b414e5&view=att&disp=inline"
                  target="_blank"
                  rel="noreferrer"
                   className="
        inline-flex items-center
        px-4 py-2
        text-sm font-semibold
        rounded-lg
        border border-primary
        text-primary bg-white
        shadow-sm  
        hover:bg-primary hover:text-white
        hover:shadow-lg
        transform hover:-translate-y-0.5 hover:scale-101
        transition-all duration-200
        break-all
      "
                >
                  List of Holidays (2023–24)
                </a>
              </li>
            </ul>
          </div>

          {/* General academic portal link */}
          <div className="mt-6 bg-blue-50 border border-primary/40 rounded-xl p-4">
            <p className="text-gray-700">
              For complete and updated academic information (rules, policies, admission notifications, etc.), visit the{" "}
              <a
                href="https://academic.iiti.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-800 font-semibold hover:underline"
              >
                IIT Indore Academic Portal
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
