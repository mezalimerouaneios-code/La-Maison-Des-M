import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function Events() {
  return (
    <section id="evenements" className="bg-off-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-charcoal text-center mb-12 md:mb-16"
        >
          Événements
        </motion.h2>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center font-sans text-base md:text-lg leading-relaxed text-charcoal/80 mb-8"
        >
          <p className="mb-4">
            Organisez votre événement spécial avec La Maison des Mets.
          </p>
          <p>
            Choisissez notre professionnalisme pour célébrer chaque occasion avec créativité et raffinement. 
            Contactez-nous pour des informations, des devis personnalisés et des idées originales.
          </p>
        </motion.article>

        <motion.a
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          href="#contact"
          className="block text-center font-sans text-xs tracking-[0.3em] uppercase text-charcoal hover:text-gold transition-colors duration-300"
        >
          Découvrir Plus
        </motion.a>
      </div>
    </section>
  )
}
