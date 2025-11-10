"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  image: string
}

const newsItems: NewsItem[] = [
  { id: 1, title: "Department of MEMS celebrates its 1st Department Day on February 1st, 2025", date: "Feb 1, 2025", image: "https://mems.iiti.ac.in/static/media/gd.bcda48b64df24a98feb6.png" },
  { id: 2, title: "New Faculty Dr. Khushubo Devi joins the Department", date: "Jan 15, 2025", image: "https://mems.iiti.ac.in/static/media/kusenter.20d89cfec7c959d3e9b8.jpg" },
  { id: 3, title: "Prof. Irina Alexandrovna Kurzina delivers expert lecture on Bimetallic catalysts", date: "Dec 20, 2024", image: "https://mems.iiti.ac.in/static/media/irina.e22ce2072124bbf4f57a.jpg" },
  { id: 4, title: "Research highlights published in top-tier journals", date: "Dec 10, 2024", image: "/research-publication.jpg" }, // local asset
]

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain") // default: show full image
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

  // Optional: automatic heuristic to switch to 'contain' when image aspect ratio differs a lot from container.
  // (commented — left as example if you want automatic behaviour)
  // useEffect(() => {
  //   const img = new window.Image()
  //   img.src = newsItems[current].image
  //   img.onload = () => {
  //     const cw = containerRef.current?.clientWidth || 1
  //     const ch = containerRef.current?.clientHeight || 1
  //     const containerRatio = cw / ch
  //     const imgRatio = img.width / img.height
  //     // if image is much wider or much taller than container, prefer contain
  //     if (Math.abs(imgRatio - containerRatio) > 0.4) setFitMode("contain")
  //     else setFitMode("cover")
  //   }
  // }, [current])

  return (
    <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg fade-in-up border-4 border-primary">
      {/* header with Fit toggle */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-primary/20 bg-white/60">
        <div className="text-sm font-semibold text-primary">News</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFitMode((m) => (m === "contain" ? "cover" : "contain"))}
            className="px-3 py-1 rounded-md border border-primary text-primary bg-white hover:bg-primary/5 text-sm"
            title="Toggle Fit/Fill"
          >
            {fitMode === "contain" ? "Fit (show full image)" : "Fill (crop to fill)"}
          </button>
        </div>
      </div>

      <div ref={containerRef} className="relative h-72 md:h-96 overflow-hidden">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-600 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
            aria-hidden={index !== current}
          >
            {/* image wrapper must be relative for Image fill */}
            <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
              {/* next/image with fill + object-contain or object-cover */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className={fitMode === "contain" ? "object-contain" : "object-cover"}
                // if external domains aren't set in next.config.js, you can use unoptimized (not recommended for production):
                // unoptimized={true}
                priority={index === current}
              />

              {/* gradient overlay for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <p className="text-white text-sm font-semibold mb-2">{item.date}</p>
                <h3 className="text-white text-lg md:text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* nav */}
      <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-accent/90 text-primary p-2 rounded-full hover:scale-110">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-accent/90 text-primary p-2 rounded-full hover:scale-110">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {newsItems.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); setAutoPlay(false) }} className={`rounded-full transition-all ${i === current ? "bg-accent w-8 h-2" : "bg-white/50 w-2 h-2"}`} />
        ))}
      </div>
    </div>
  )
}
