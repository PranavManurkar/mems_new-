"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Advanced Lab",
    description: "State-of-the-art research facilities",
    image: "https://files-prod.tii.ae/inline-images/Projectile%20Launcher%20%28Gas%20Gun%29%20-%20unique%20to%20the%20region.jpg",
  },
  {
    id: 2,
    title: "Materials Research",
    description: "Cutting-edge studies",
    image:
      "https://mems.iiti.ac.in/static/media/MEMS%20Website%20-%20SK%20group%20Graphical%20Abstract.c3f5fb8bc6f66f4c2d80.jpg",
  },
  {
    id: 3,
    title: "Testing Lab",
    description: "Quality assurance",
    image: "https://people.iiti.ac.in/~dkr/wp-content/uploads/2019/10/Fume-Hood-2.jpg",
  },
  {
    id: 4,
    title: "Innovation Hub",
    description: "Next-gen materials",
    image: "https://mems.iiti.ac.in/static/media/Graphical_Abstract_Vamsi_group.d17326a03c6914736afc.jpg",
  },
  {
    id: 5,
    title: "Research Wing",
    description: "Collaborative work",
    image: "https://mems.iiti.ac.in/static/media/DK%20Rai%20PPT%20Department%20webpage.f893f0cdf3826fd0821b.jpg",
  },
  {
    id: 6,
    title: "Faculty Expertise",
    description: "World-class researchers",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQEr-kdLKSeWtw/feedshare-shrink_800/B4DZlhhIVzGgAg-/0/1758277705500?e=1764201600&v=beta&t=bTI3OW_yfchDhVr1BpHINfxcVpG-RxfaLGp4OA92zrQ",
  },
]

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryItems.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % galleryItems.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 z-0" />

      {/* Main carousel container */}
      <div className="relative h-96 md:h-[550px] lg:h-[600px] overflow-hidden">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Image with smooth transitions and zoom effect */}
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />

            {/* Premium gradient overlay with better color and positioning */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Enhanced content overlay with better typography and spacing */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
              <div
                className={`transition-all duration-1000 ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">{item.title}</h2>
                <p className="text-white/90 text-base md:text-xl lg:text-2xl font-light tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons with IIT Indore blue and gold accents */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 group bg-white/15 hover:bg-[#FDB913] backdrop-blur-md text-white hover:text-[#003D7A] p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-[#FDB913]"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 group bg-white/15 hover:bg-[#FDB913] backdrop-blur-md text-white hover:text-[#003D7A] p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-[#FDB913]"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Enhanced dot indicators with gold accent color */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`transition-all duration-500 rounded-full backdrop-blur-sm border ${
              index === current
                ? "bg-[#FDB913] w-10 h-3 border-[#FDB913]"
                : "bg-white/20 w-3 h-3 border-white/40 hover:bg-white/40 hover:border-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter badge with professional styling */}
      <div className="absolute top-6 md:top-8 right-6 md:right-8 z-20 bg-[#003D7A]/80 backdrop-blur-md border border-[#FDB913]/50 px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-semibold text-sm md:text-base">
        {current + 1} <span className="text-white/60">/ {galleryItems.length}</span>
      </div>
    </div>
  )
}
