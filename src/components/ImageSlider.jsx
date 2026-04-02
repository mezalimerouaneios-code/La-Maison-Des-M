import { useEffect, useRef } from 'react'
import { Swiper } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const images = [
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2024/09/IYO-Restaurant-1920x935-home.jpg',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2024/07/IYO-Restaurant-cocktail-bar-1920x1280.png',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2024/07/IYO-Restaurant-1.png',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2025/04/IYO-foto-per-sito-2-1920x1247.png',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2024/09/IYO2414555LOWLOW-1920x1280.jpg',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2024/07/2-1-1920x1280.png',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2025/04/IYO-foto-per-sito-4-1920x1247.png',
  'https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2025/04/IYO-foto-per-sito-1920x1247.png',
]

export default function ImageSlider() {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current = new Swiper('.swiper-container', {
        modules: [Navigation],
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      })
    }

    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy()
      }
    }
  }, [])

  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="swiper-container relative">
          <div className="swiper-wrapper">
            {images.map((src, index) => (
              <div key={index} className="swiper-slide">
                <img
                  src={src}
                  alt={`La Maison des Mets ${index + 1}`}
                  className="w-full h-64 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            ))}
          </div>
          <div className="swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-off-white"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
          <div className="swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-off-white"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
