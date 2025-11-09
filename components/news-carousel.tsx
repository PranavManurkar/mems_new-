"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Department of MEMS celebrates its 1st Department Day on February 1st, 2025",
    date: "Feb 1, 2025",
    image: "/mems-department-celebration-event.jpg",
  },
  {
    id: 2,
    title: "New Faculty Dr. Khushubo Devi joins the Department",
    date: "Jan 15, 2025",
    image: "/faculty-member-welcome.jpg",
  },
  {
    id: 3,
    title: "Prof. Irina Alexandrovna Kurzina delivers expert lecture on Bimetallic catalysts",
    date: "Dec 20, 2024",
    image: "/expert-lecture-seminar.jpg",
  },
  {
    id: 4,
    title: "Research highlights published in top-tier journals",
    date: "Dec 10, 2024",
    image: "/research-publication.jpg",
  },
]

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % newsItems.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + newsItems.length) % newsItems.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg fade-in-up border-4 border-primary">
      <div className="relative h-80 md:h-96 overflow-hidden">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
              <p className="text-white text-sm font-semibold mb-2 animate-fade-in">{item.date}</p>
              <h3 className="text-white text-xl md:text-2xl font-bold animate-fade-in">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-primary p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg font-bold"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-primary p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg font-bold"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`transition-all duration-300 rounded-full ${index === current ? "bg-accent w-8 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/75"}`}
          />
        ))}
      </div>
    </div>
  )
}
