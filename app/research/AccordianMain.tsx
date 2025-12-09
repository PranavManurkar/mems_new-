"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

type AccordionItem = {
  id: string
  title: string
  content: React.ReactNode
}

type Props = {
  defaultExpandedIndex?: number
}

export default function AccordianMain({ defaultExpandedIndex = -1 }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    defaultExpandedIndex >= 0 ? defaultExpandedIndex : null
  )

  useEffect(() => {
    setExpandedIndex(defaultExpandedIndex >= 0 ? defaultExpandedIndex : null)
  }, [defaultExpandedIndex])

  const toggle = (i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i))
  }

  const items: AccordionItem[] = [
    {
      id: "how-to-reach",
      title: "How to reach IIT Indore",
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-2">By Train</h4>
              <p>
                Indore Railway Station is ≈24 km from IIT Indore campus. Taxi
                (approx. ₹800) or auto-rickshaw (₹400–500) are available. For
                public transport take shared taxi/auto/bus to Bhawarkuan Square
                then bus M-19 to IIT Indore Gate-1.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">By Air</h4>
              <p>
                Devi Ahilyabai Holkar International Airport is ≈32 km from the
                campus. Pre-paid taxis to IIT Indore cost ≈₹900–1100.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">By Bus</h4>
              <p>
                Indore is well connected by interstate buses. Plan to reach
                Bhawarkuan Square (Khandwa Road) and take bus M-19 to IIT Indore.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="https://www.google.com/maps/dir//Indian+Institute+Of+Technology+(IIT),+Indore,+Khandwa+Rd,+Simrol,+Madhya+Pradesh+453552"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-3 py-2 bg-primary text-white rounded-md text-sm"
            >
              View on Map
            </a>

            <a
              href="https://www.iiti.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-3 py-2 border border-primary text-primary rounded-md text-sm hover:bg-primary hover:text-white transition"
            >
              College Website
            </a>
          </div>
        </div>
      ),
    },

    {
      id: "accomodation",
      title: "Accommodation facilities in IITI",
      content: (
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            IIT Indore is a residential institute. Students of all programs are
            required to stay in hostels. There are multiple hostels (one
            reserved for female residents and one for married students). Hostels
            are close to academic pods and labs, and provide recreational
            facilities for students.
          </p>

          <p>
            For details and hostel rules:{" "}
            <a
              href="https://hostel.iiti.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Hostel facilities
            </a>
          </p>
        </div>
      ),
    },

    {
      id: "health-safety",
      title: "Health and Safety",
      content: (
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            The Health Centre provides outpatient, day care, trauma and emergency
            services for students, employees and dependents.
          </p>

          <p>
            For details see:{" "}
            <a
              href="https://hostel.iiti.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Health & Safety Facilities
            </a>
          </p>
        </div>
      ),
    },

    {
      id: "department-committees",
      title: "Departmental Committees",
      content: (
        <div className="text-sm text-gray-700 space-y-4">
          {/* a compact representation of all committees from the provided data */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">DPGC</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Dhirendra Kumar Rai (Convener)</li>
                <li>Prof. Nishith Kumar Prasad</li>
                <li>Prof. Vivek Verma (HOD) (ex-officio)</li>
                <li>Prof. Dudekula Althaf Basha</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">DUGC</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Ramsajeevan Maurya (Convener)</li>
                <li>Prof. Hemant Borkar</li>
                <li>Prof. Sunil Kumar</li>
                <li>Prof. Ranjith K. Poobalan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Library Committee</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Sumanta Samal (Convener)</li>
                <li>Prof. Abhijit Ghosh</li>
                <li>Prof. Khushubo Devi</li>
                <li>Prof. Rupesh S. Devan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Outreach Activities</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Nishith Kumar Prasad (Convener)</li>
                <li>Prof. Ranjith K. Poobalan</li>
                <li>Prof. K.V. Vamsi</li>
                <li>Prof. Khushubo Devi</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Placement & Industry Relations</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Vinod Kumar (Convener)</li>
                <li>Prof. Chandan Haldar</li>
                <li>Prof. Vivek Verma</li>
                <li>Prof. Eswar K. Prasad</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Annual Report & RTI</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Chandan Haldar (Convener)</li>
                <li>Prof. Vinod Kumar</li>
                <li>Prof. Sumanta Samal</li>
                <li>Prof. Ranjith K. Poobalan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Website</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. Venkata Vamsi (Convener)</li>
                <li>Prof. Chandan Haldar</li>
                <li>Prof. Nishith Kumar Prasad</li>
                <li>Prof. Abhijit Ghosh</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Student reps:</strong> Priyanshu, Aditi, Pratik Prajn,
                Ansh Kyal
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Safety</h4>
              <ul className="list-disc list-inside ml-2">
                <li>Prof. M. Dubey (Convener)</li>
                <li>Prof. Vinod Kumar</li>
                <li>Prof. Parasharam M. Shirage</li>
                <li>Prof. Jayaprakash Murugesan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Department Finance Advisory</h4>
              <ul className="list-disc list-inside ml-2">
                <li>HOD (ex officio) Prof. Jayaprakash Murugesan (Convener)</li>
                <li>Prof. D.A. Basha</li>
                <li>Prof. Eshwar K. Prasad</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "facilities",
      title: "Facilities",
      content: (
        <div className="text-sm text-gray-700 space-y-4">
          <p className="mb-2">
            Departmental common facilities and labs — HOD (ex officio) (Convener):{" "}
            <strong>Prof. Sumanta Samal</strong>
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Major Labs & Groups</h4>
              <ul className="list-disc list-inside ml-2">
                <li>
                  <strong>SEM</strong> — Prof. Ajay K. Kushwaha (Professor-Incharge),
                  Prof. P. M. Shirage, Prof. Dhirendra K. Rai
                </li>
                <li>
                  <strong>XRD</strong> — Prof. Rupesh S. Devan (Professor-Incharge),
                  Prof. Abhijit Ghosh, Prof. Sunil Kumar
                </li>
                <li>
                  <strong>Computational</strong> — Prof. Chandan Haldar (Professor-Incharge),
                  Prof. Sumanta Samal, Prof. V.K. Vamsi
                </li>
                <li>
                  <strong>UTM / Mechanical Testing</strong> — Prof. Eswar Prasad
                  (Professor-Incharge), Prof. Jayaprakash, Prof. Abhijeet Ghosh,
                  Prof. Santosh Hosmani
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">SPS / Special Equipment</h4>
              <ul className="list-disc list-inside ml-2">
                <li>
                  <strong>SPS</strong> — Prof. Vinod Kumar (Professor-Incharge),
                  Prof. Ram Sajeevan Maurya, Prof. Sumanta Samal, Prof. Sunil Kumar
                </li>
                <li>
                  <strong>SEM / XRD / Computational / UTM / SPS</strong> — see above
                  in-charges for details.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              For other facilities:{" "}
              <a
                href="#"
                className="text-primary hover:underline"
              >
                Other Facilities
              </a>
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "other-facilities",
      title: "Other Facilities (short list)",
      content: (
        <div className="text-sm text-gray-700 space-y-2">
          <p>Examples of additional equipment available:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Gravity-related apparatus</li>
            <li>Thermal Conductivity Detector (TCD)</li>
            <li>Microscopy and imaging apparatus</li>
            <li>Young’s modulus apparatus</li>
            <li>Parallelogram apparatus</li>
            <li>Anderson Bridge</li>
            <li>Triple beam balance</li>
            <li>Ballistic Galvanometer</li>
            <li>Centrifuge machine</li>
            <li>Resonance apparatus</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div className="resources-main">
      <div className="space-y-3">
        {items.map((it, i) => {
          const open = expandedIndex === i
          return (
            <div key={it.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-primary/5 transition"
              >
                <div>
                  <div className="text-base font-semibold text-primary">{it.title}</div>
                </div>

                <div className="ml-4 flex items-center gap-3">
                  <span className="text-sm text-gray-500">{open ? "−" : "+"}</span>
                </div>
              </button>

              <div
                className={`px-4 pb-4 transition-[max-height,opacity] duration-300 overflow-hidden ${
                  open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-3">{it.content}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
