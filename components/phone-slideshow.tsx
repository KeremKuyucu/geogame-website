"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function PhoneSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Array of 8 placeholder images
  const slides = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    src: `/screenshots/screen${i + 1}.jpg`,
  }))
  
  useEffect(() => {
    // Auto-rotate slides every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative w-[250px] md:w-[320px] lg:w-[360px] rounded-[40px] bg-black p-2 shadow-xl">
      <div className="rounded-[32px] overflow-hidden bg-white relative h-[640px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              width={360}
              height={640}
              alt={`GeoGame Screenshot ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-primary w-4" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
