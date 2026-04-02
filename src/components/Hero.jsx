import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2025/05/IYO-Restaurant-1920x935-home-29MAGGIO2025.png"
          alt="La Maison des Mets"
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-dark/30" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-off-white tracking-wide">
            La Maison des Mets
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 font-sans text-sm md:text-base tracking-[0.3em] uppercase text-off-white/80"
          >
            Cuisine Algérienne Raffinée
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-off-white/50 relative overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-off-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
