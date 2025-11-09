"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function HODDesk() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-blue-50 to-accent/10 border-b-4 border-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="section-title">HOD's Desk</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* HOD Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-xl border-4 border-primary hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://mems.iiti.ac.in/static/media/prof20.3a347569c4cf457ecb44.jpeg"
                alt="Prof. Ajay Kumar Kushwaha"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* HOD Message */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Prof. Ajay Kumar Kushwaha</h3>
            <p className="text-gray-600 font-semibold text-lg">Head of Department</p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to the Department of Metallurgical Engineering and Materials Science at IIT Indore. Our
                department is committed to excellence in education, research, and innovation.
              </p>
              <p>
                We strive to provide our students with comprehensive knowledge in materials science and metallurgical
                engineering, preparing them for successful careers in academia and industry.
              </p>
              <p>
                Our faculty members are engaged in cutting-edge research addressing real-world challenges in materials
                processing, characterization, and applications.
              </p>
            </div>

            <div className="pt-4 space-y-2 text-sm">
              <p>
                <span className="font-semibold text-primary">Office:</span> Pod 1-D 301
              </p>
              <p>
                <span className="font-semibold text-primary">Phone:</span> +91-731-666-3478
              </p>
              <p>
                <span className="font-semibold text-primary">Email:</span> hodmems@iiti.ac.in
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 hover:shadow-lg"
            >
              Read Full Message
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto border-2 border-primary">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">Prof. Ajay Kumar Kushwaha</DialogTitle>
            <DialogDescription>Head of Department - Full Message</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Welcome to the Department of Metallurgical Engineering and Materials Science at IIT Indore. Our department
              is committed to excellence in education, research, and innovation.
            </p>
            <p>
              We strive to provide our students with comprehensive knowledge in materials science and metallurgical
              engineering, preparing them for successful careers in academia and industry.
            </p>
            <p>
              Our faculty members are engaged in cutting-edge research addressing real-world challenges in materials
              processing, characterization, and applications.
            </p>
            <p>
              The department has state-of-the-art facilities for materials characterization, including scanning electron
              microscopy, X-ray diffraction, and thermal analysis equipment. These resources enable our students and
              researchers to conduct world-class research.
            </p>
            <p>
              We believe in fostering a collaborative environment where students, faculty, and industry partners work
              together to solve complex problems and drive innovation in materials science and engineering.
            </p>
            <p>
              I encourage all prospective students to explore the opportunities available in our department. Whether you
              are interested in pursuing a career in academia, industry, or entrepreneurship, we are here to support
              your journey.
            </p>
            <p>
              Thank you for your interest in the Department of Metallurgical Engineering and Materials Science at IIT
              Indore. We look forward to welcoming you to our community of scholars and innovators.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
