import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Accueil', href: '#' },
  { label: 'Philosophie', href: '#philosophie' },
  { label: 'Carte', href: '#carte' },
  { label: 'Réserver', href: '#reserver' },
  { label: 'Événements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark/80 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="relative z-50">
            <img
              src="https://www.iyo-restaurant.com/wp-content-iyoexp-secure/themes/experience/img/logo-white.svg"
              alt="La Maison des Mets"
              className="h-8 md:h-10"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.slice(0, 5).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-off-white/80 hover:text-off-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#reserver"
              className="font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold/80 transition-colors duration-300"
            >
              Réserver
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 w-8 h-6 flex flex-col justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block w-full h-px bg-off-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-full h-px bg-off-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-px bg-off-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-dark z-30 flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="font-serif text-3xl md:text-4xl text-off-white hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
