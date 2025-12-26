"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import AccordianMain from "./AccordianMain"   // your provided accordion component
import { researchAreas } from "@/data/reasearchArea"    // make sure file name matches

export default function Research() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Research Areas of MEMS</h1>
          <p className="text-xl text-blue-100">
            Our department works across a broad spectrum — from synthesis and
            characterization to strategic materials and energy applications.
          </p>
        </div>
      </section>

      {/* Research cards */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/research/${area.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                aria-label={`Read about ${area.title}`}
              >
                {/* Image Container - Large image at top */}
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  {area.image ? (
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/10 to-blue-100">
                      {area.icon ?? "🔹"}
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="px-5 pt-4 pb-2">
                  <h3 className="font-bold text-lg text-gray-800 leading-snug">
                    {area.title}
                  </h3>
                </div>

                {/* Research Topics/Description List */}
                <div className="px-5 pb-4 flex-1">
                  {area.topics && Array.isArray(area.topics) ? (
                    <ul className="space-y-1">
                      {area.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-gray-700 leading-relaxed">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  )}
                </div>

                {/* Read More Button */}
                <div className="px-5 pb-5">
                  <span className="inline-block text-sm font-semibold rounded-full px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Departmental Committees & Facilities (Accordion) */}
      <section className="py-10 bg-gradient-to-r from-primary/5 to-blue-50 border-t border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="section-title mb-6">Department Resources</h2>

          {/* AccordianMain is the component you shared earlier.
              Keep it as a single component file at components/AccordianMain.tsx */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <AccordianMain defaultExpandedIndex={-1} />
          </div>
        </div>
      </section>

      {/* Funding & Consultancy images (side-by-side like your screenshot) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Funding */}
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-primary mb-4">FUNDING</h3>
              <div className="rounded overflow-hidden border border-gray-100">
                {/* Put your funding image into public/images/funding.png */}
                <Image
                  src="/chart.svg"
                  alt="Funding chart"
                  width={1200}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Consultancy */}
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-primary mb-6">CONSULTANCY</h3>

              {/* Logos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
                {/* Logo 1 */}
                <Image
                  src="/volvo.png"
                  alt="VE Commercial Vehicles"
                  width={200}
                  height={80}
                  className="object-contain w-full max-h-[70px]"
                />

                {/* Logo 2 */}
                <Image
                  src="/technofast-og.jpg"
                  alt="UM Logo"
                  width={200}
                  height={80}
                  className="object-contain w-full max-h-[70px]"
                />

                {/* Logo 3 */}
                <Image
                  src="/raychem-logo.png"
                  alt="Raychem RPG"
                  width={200}
                  height={80}
                  className="object-contain w-full max-h-[70px]"
                />

                {/* Logo 4 */}
                <Image
                  src="/moyra.jpg"
                  alt="MRA Logo"
                  width={200}
                  height={80}
                  className="object-contain w-full max-h-[70px]"
                />

                {/* Logo 5 */}
                <Image
                  src="/Logo_UshaMartin.png"
                  alt="Technofast"
                  width={200}
                  height={80}
                  className="object-contain w-full max-h-[70px]"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <Link
                  href="/consultancy"
                  className="inline-block px-5 py-2 rounded-full bg-primary text-white font-medium hover:shadow-md hover:opacity-95 transition"
                >
                  Click for more details
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
