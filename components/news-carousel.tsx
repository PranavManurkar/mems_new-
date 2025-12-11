"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "MEMS celebrates its 1st Department Day with activities, expert talks and cultural programs",
    image: "/news/gd.png",
  },
  {
    id: 2,
    title: "Dr. K. V. Vamsi delivers invited talk on L12 Precipitate Strengthened Alloys at MGIT Hyderabad",
    image: "/news/vksiri.jpg",
  },
  {
    id: 3,
    title: "Textbook 'Materials Science and Engineering' by Dr. Vinod Kumar & Dr. Nisheeth Prasad published by AICTE",
    image: "/news/book.png",
  },
  {
    id: 4,
    title: "Prof. Kamanio Chattopadhyay (IISc) visits MEMS and interacts with faculty & research scholars",
    image: "/news/pkc.png",
  },
  {
    id: 5,
    title: "MEMS welcomes new faculty member Dr. Khushubo Devi to the department",
    image: "/news/kusenter.jpg",
  },
  {
    id: 6,
    title: "Prof. Irina Kurzina delivers expert lecture on bimetallic palladium-based catalysts",
    image: "/news/irina.jpg",
  },
  {
    id: 7,
    title: "Prof. N.K. Mukhopadhyay delivers lecture on High Entropy Alloys and future prospects",
    image: "/news/nk.jpg",
  },
  {
    id: 8,
    title: "MEMS welcomes Dr. Ranjith Kumar Poobalan as new Assistant Professor",
    image: "/news/ranenter.jpg",
  },
  {
    id: 9,
    title: "Prof. Ahoutou Paul Kouakou joins as visiting scientist under CV Raman Fellowship",
    image: "/news/af.jpg",
  },
  {
    id: 10,
    title: "Dr. Hemant Borkar participates in PFAM 2023; research scholar wins 3rd prize in oral presentation",
    image: "/news/heman.jpg",
  },
  {
    id: 11,
    title: "Dr. Ajay K Kushwaha visits INST Mohali as external examiner for PhD Viva",
    image: "/news/ajay.jpg",
  },
  {
    id: 12,
    title: "Research Scholar Subhash Chand Yadav successfully defends his PhD thesis",
    image: "/news/subhash.jpg",
  },
  {
    id: 13,
    title: "MEMS welcomes Prof. Bhanu Pant, Former Outstanding Scientist ISRO",
    image: "/news/isro.jpg",
  },
  {
    id: 14,
    title: "IIT Indore conducts its 11th Convocation featuring international dignitaries",
    image: "/news/convocation.jpg",
  },
  {
    id: 15,
    title: "Department organizes Orientation Program for new PG & PhD students",
    image: "/news/gd.png", // You added a duplicate "ne" earlier, but no image named 'ne.png' exists
  },
]


export default function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain")
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => setCurrent((p) => (p + 1) % newsItems.length), 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((p) => (p + 1) % newsItems.length)
    setAutoPlay(false)
  }
  const prev = () => {
    setCurrent((p) => (p - 1 + newsItems.length) % newsItems.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg fade-in-up border-4 border-primary">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-primary/20 bg-white/60">
        <div className="text-sm font-semibold text-primary">News</div>

        <button
          onClick={() => setFitMode((m) => (m === "contain" ? "cover" : "contain"))}
          className="px-3 py-1 rounded-md border border-primary text-primary bg-white hover:bg-primary/5 text-sm"
        >
          {fitMode === "contain" ? "Fit (show full image)" : "Fill (crop image)"}
        </button>
      </div>

      {/* Image */}
      <div ref={containerRef} className="relative h-72 md:h-96 overflow-hidden">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-600 
              ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
          >
            <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className={fitMode === "contain" ? "object-contain" : "object-cover"}
                priority={index === current}
              />

              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/10 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-white text-lg md:text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-accent/90 text-primary p-2 rounded-full hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-accent/90 text-primary p-2 rounded-full hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {newsItems.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setAutoPlay(false) }}
            className={`rounded-full transition-all 
              ${i === current ? "bg-accent w-8 h-2" : "bg-white/50 w-2 h-2"}`}
          />
        ))}
      </div>
    </div>
  )
}
