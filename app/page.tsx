"use client"

import Navbar from "@/components/navbar"
import NewsCarousel from "@/components/news-carousel"
import HODDesk from "@/components/hod-desk"
import GalleryCarousel from "@/components/gallery-carousel"

export default function Home() {
  // chosen video: IIT Indore campus tour (used as MEMS stand-in)
  const VIDEO_ID = "NbGRTRocs9c"
  const ytSrc =
    `https://www.youtube.com/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&controls=1&modestbranding=1`

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-gradient-to-b from-blue-50 to-white py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <GalleryCarousel />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-blue-50 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Research Focus Areas</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The Department of Metallurgical Engineering and Materials Science covers research in multiple areas
            including Materials Processing, Advanced Materials, Metallurgical Engineering, Computational Materials
            Science, and Materials Characterization.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Materials Processing & Characterization</h3>
              <p className="text-gray-700">
                Advanced techniques for processing and characterizing novel materials for industrial applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-3">Computational Materials Science</h3>
              <p className="text-gray-700">
                Computational modeling and simulation of materials behavior and properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About the Department</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base">
                The Department of Metallurgical Engineering and Materials Science (MEMS) at IIT Indore is dedicated to
                advancing knowledge and innovation in materials science and engineering.
              </p>
              <p className="text-base">
                Originally established as the Center for Materials Science Engineering in 2009, our department evolved
                into a fully-fledged department in 2016. We comprise world-class faculty and state-of-the-art research
                facilities.
              </p>
              <p className="text-base">
                We focus on multidisciplinary research addressing real-world challenges through comprehensive
                understanding of material processing, structure, and properties.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-primary">
              <img
                src="https://mems.iiti.ac.in/static/media/prof20.3a347569c4cf457ecb44.jpeg"
                alt="Department"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-blue-50 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">News & Events</h2>
          <NewsCarousel />
        </div>
      </section>

      {/* HOD's Desk */}
      <HODDesk />

      {/* Department Overview: always-playing tinted video */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Department Overview</h2>

          <div className="relative rounded-xl overflow-hidden shadow-xl h-96 md:h-[500px] bg-black border-4 border-primary">
            {/* Always-playing YouTube iframe (muted -> allows autoplay). */}
            <iframe
              className="w-full h-full"
              src={ytSrc}
              title="Department Overview - IIT Indore"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />

            {/* Tint overlay: change bg-primary/35 to any color/opacity you like */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-primary/35 mix-blend-multiply pointer-events-none"
            />

            {/* gradient + caption (keeps text readable on top of tinted video) */}
            <div className="absolute inset-0 flex items-end p-6">
              <div className="bg-gradient-to-t from-black/60 to-transparent rounded-xl p-4 max-w-lg">
                <h3 className="text-white text-lg md:text-xl font-bold">Department of MEMS — Overview</h3>
                <p className="text-white/90 text-sm md:text-base">Highlights, facilities and campus life at IIT Indore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-blue-900 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent">15+</div>
              <p className="text-lg font-semibold">Faculty Members</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent">100+</div>
              <p className="text-lg font-semibold">PhD Students</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent">50+</div>
              <p className="text-lg font-semibold">Publications/Year</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent">2016</div>
              <p className="text-lg font-semibold">Established</p>
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
              <p className="text-gray-300">Indore, Madhya Pradesh, INDIA</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Contact</h3>
              <p className="text-gray-300">Phone: +91-7324-306-819</p>
              <p className="text-gray-300">Email: memsoffice@iiti.ac.in</p>
              <p className="text-gray-300">HOD: hodmems@iiti.ac.in</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/" className="hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/research" className="hover:text-accent transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="/people" className="hover:text-accent transition-colors">
                    People
                  </a>
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
