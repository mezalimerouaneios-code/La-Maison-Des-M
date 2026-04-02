import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const awards = [
  { name: 'MICHELIN', img: 'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2023/11/MICHELIN.png' },
  { name: 'Gambero Rosso', img: 'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2023/11/Gambero-Rosso-3-mappamondi.png' },
  { name: 'Guide Espresso', img: 'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2023/11/ESPRESSO-2017.jpg' },
  { name: 'Sommelier', img: 'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2023/11/SOMMELIER.jpg' },
  { name: '50 Top', img: 'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2023/11/50-TOP.jpg' },
  { name: 'Bacchette', img: 'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2023/11/3-BACCHETTE.jpg' },
]

export default function Awards() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationId
    let scrollPos = 0
    let isPaused = false

    const scroll = () => {
      if (!isPaused) {
        scrollPos += 0.5
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0
        }
        container.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(scroll)
    }

    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="bg-off-white py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-charcoal text-center mb-12"
      >
        Guides et Prix
      </motion.h2>

      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...awards, ...awards].map((award, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
          >
            <img
              src={award.img}
              alt={award.name}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
