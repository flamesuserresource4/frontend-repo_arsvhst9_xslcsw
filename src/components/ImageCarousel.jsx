import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ images = [] }) {
  const scroller = useRef(null)

  const scrollBy = (dir) => {
    const el = scroller.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.9
    el.scrollTo({ left: el.scrollLeft + (dir === 'left' ? -scrollAmount : scrollAmount), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, idx) => (
          <div key={idx} className="snap-start shrink-0 w-[85%] sm:w-[48%] md:w-[32%]">
            <img
              src={src}
              alt={`Gym ${idx + 1}`}
              className="h-64 w-full object-cover rounded-xl shadow-sm hover:shadow-md transition-shadow"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollBy('left')}
        className="absolute -left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow border border-gray-200 grid place-items-center hover:bg-white"
        aria-label="Scroll left"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scrollBy('right')}
        className="absolute -right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow border border-gray-200 grid place-items-center hover:bg-white"
        aria-label="Scroll right"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
