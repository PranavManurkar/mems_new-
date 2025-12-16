"use client";

import React from "react";
import { motion } from "framer-motion";

type ArchiveEvent = {
  date: string; // display-friendly date (e.g. "1/2/2025" or "Feb 1, 2025")
  description: string;
  link?: string; // optional URL to a details page or poster
  linkLabel?: string; // optional label for the link (e.g. "details", "poster")
};

type EventArchiveProps = {
  events?: ArchiveEvent[];
  archiveHref?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04 } }),
};

/**
 * EventArchive.tsx
 *
 * - Uses the existing site color tokens (primary, blue-900, accent).
 * - Renders a responsive timeline / stacked card list.
 * - Accepts events which now support an optional link (details/poster).
 */

const defaultEvents: ArchiveEvent[] = [
  {
    date: "1/2/2025",
    description:
      "The Department of Metallurgy Engineering and Materials Science (MEMS) at IIT Indore is excited to celebrate its first Department Day on 1st February 2025. Organized by the students and faculty, the event will feature engaging activities, expert talks, and cultural programs, showcasing the spirit and achievements of MEMS. Join us as we celebrate innovation and excellence!",
    link: "/events/department-day-2025",
    linkLabel: "details",
  },
  {
    date: "7/11/2024",
    description:
      'Dept of Metallurgical Engineering and Materials Science (IIT Indore) is organizing a 5-Day Workshop on "Advanced Materials Processing and Characterization" during 19-23 December, 2024 in IIT Indore Campus.',
    link: "/events/workshop-advanced-materials-2024",
    linkLabel: "details / poster",
  },
  {
    date: "16/07/2024",
    description:
      'A textbook titled "Material Science and Engineering" written by Dr. Vinod Kumar and Dr. Nisheeth K. Prasad (MEMS Department, IIT Indore) has been published online by AICTE. The book is as per AICTE model syllabus and designed for 2nd year Diploma Students of Mechanical Engineering.',
    link: "https://example.com/aicte-book", // replace with real URL if available
    linkLabel: "details",
  },
  {
    date: "24/05/2024",
    description:
      'Research group of Prof. Rupesh S. Devan (Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore) granted a patent for an invention entitled "A molten salt solid-state reaction- based process to obtain a high purity Ti3AlC2 Max Phase".',
  },
  {
    date: "11/07/2024",
    description:
      'Department of Metallurgical Engineering and Materials Science, IIT Indore organized an International Conference on "Energy and Environmental Materials (E2M)".',
    link: "/events/e2m-conference-2024",
    linkLabel: "details",
  },
  {
    date: "02/02/2024",
    description:
      'One article from the Research group of Dr. Dhirendra Kumar Rai titled "Two-dimensional Ti3C2Tx MXene nanosheets for CO2 electroreduction in aqueous electrolytes" has been chosen as an outstanding article in Energy Advances.',
    link: "/news/mxene-co2-electroreduction",
    linkLabel: "details",
  },
  {
    date: "23/01/2024",
    description:
      'Dr. Pankaj Mohanty (Lecturer, Department of Physics, University of Johannesburg) delivered an expert lecture titled "Structural and Magnetic Properties of Cr-based Rare-earth Oxides" in the Department of Metallurgical Engineering and Materials Science (MEMS).',
  },
  {
    date: "15/01/2024",
    description:
      'Materials Advantage Student Chapter of Department of Metallurgical Engineering and Materials Science, IIT Indore hosted one-day workshop-cum-training program (hybrid mode) on "Thermodynamic Insights for Materials Design — A CALPHAD Perspective".',
    link: "/events/calphad-workshop-2024",
    linkLabel: "details",
  },
  {
    date: "04/01/2024",
    description:
      "Mr. Santosh Bimli, Research scholar, MEMS Department IIT Indore has received Best Oral Presentation Award under the guidance of Prof. Rupesh S. Devan at Global Conference for decarbonisation of Energy and Materials (GC-DEM) held at NTU Singapore.",
  },
  {
    date: "24/11/2023",
    description:
      'Materials Advantage Student Chapter of MEMS Department IIT Indore organized an International Symposium on "Physical Metallurgy of High-Entropy Alloys". The symposium featured expert talks, poster presentations, 3-minute flash presentations by students and a Rangoli competition of the Fe-Fe3C Phase diagram.',
    link: "/events/heasymposium-2023",
    linkLabel: "details / poster",
  },
  {
    date: "15/10/2023",
    description: "MEMS Department, IIT Indore organized an In-House Symposium on Engineers' Day.",
  },
  {
    date: "13/11/2023",
    description:
      "MEMS Department, IIT Indore organized an event where Mr. Vishal Kumar Rana, Scientific Officer at BIS delivered a lecture on standardization of Metallography and Heat treatment of Metals and alloys.",
  },
  {
    date: "14/12/2022",
    description:
      "Dr. Rupesh S. Devan is serving as an Editor for the Chinese Journal of Physics; Elsevier.",
    link: "/news/rupesh-devan-editor",
    linkLabel: "details",
  },
];

/**
 * EventArchive component (separate file)
 *
 * - Use this component by importing: `import EventArchive from './EventArchive'`
 * - Optionally pass `events` prop to override the default dataset.
 */
export default function EventArchive({ events = defaultEvents, archiveHref }: EventArchiveProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Event Archive</h2>
            <p className="text-sm text-gray-600 mt-1 max-w-xl">
              A concise record of past events. Click the link where available to view full details or download event posters.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center px-3 py-2 bg-white border rounded-md shadow-sm text-sm text-gray-700">
              Total events: <strong className="ml-2 text-primary">{events.length}</strong>
            </span>

            {archiveHref && (
              <a
                href={archiveHref}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm shadow hover:opacity-95 transition"
              >
                View full archive
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-24 top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 to-primary/5" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {events.map((ev, idx) => (
              <motion.article
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="col-span-1 lg:col-span-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Date / marker column */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="flex items-start lg:items-center gap-3">
                      <div className="hidden lg:flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white border-2 border-primary shadow-sm -ml-1" />
                      </div>

                      <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="mt-1 font-medium text-primary">{ev.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm text-gray-600 mb-2">Event</p>
                          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            {ev.description}
                            {/* inline link(s) rendered at end of description */}
                            {ev.link && (
                              <span className="ml-2">
                                <a
                                  href={ev.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary underline ml-1"
                                >
                                  {ev.linkLabel ?? "details"}
                                </a>
                              </span>
                            )}
                          </p>
                        </div>

                        <div className="hidden md:flex items-center text-sm text-gray-400">
                          <span>#{idx + 1}</span>
                        </div>
                      </div>

                      {/* If linkLabel contains 'poster' or 'poster' is desired separately, show a small CTA */}
                      {ev.link && ev.linkLabel?.toLowerCase().includes("poster") && (
                        <div className="mt-4 flex items-center gap-3">
                          <a
                            href={ev.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-accent/10 text-primary border border-accent rounded-md text-sm hover:bg-accent/20 transition"
                          >
                            View poster
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {archiveHref && (
          <div className="mt-6 flex items-center justify-center">
            <a
              href={archiveHref}
              className="inline-block px-5 py-2 bg-primary text-white rounded-full shadow hover:opacity-95 text-sm"
            >
              View Full Archive
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
