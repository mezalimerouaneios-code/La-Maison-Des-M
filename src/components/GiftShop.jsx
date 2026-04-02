import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function GiftShop() {
  return (
    <section id="reserver" className="relative bg-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-off-white mb-6">
            Gift Shop
          </h2>
          <p className="font-sans text-sm md:text-base tracking-wide text-off-white/80 mb-8 leading-relaxed">
            Offrez une expérience surprenante avec la cuisine algérienne raffinée de La Maison des Mets. 
            Avec nos cartes cadeaux et bons cadeaux, offrez des moments inoubliables et le goût unique de 
            La Maison des Mets, parfaits pour chaque occasion spéciale.
          </p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            href="#"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-gold hover:text-gold/80 transition-colors duration-300 border-b border-gold pb-1"
          >
            Acheter
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
