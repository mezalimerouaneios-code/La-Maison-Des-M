import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function IntroSection() {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center font-sans text-base md:text-lg leading-relaxed text-off-white/80"
        >
          <p className="mb-6">
            Depuis 2024, La Maison des Mets est la rencontre parfaite entre la cuisine algérienne traditionnelle et l'élégance française.
          </p>
          <p className="mb-6">
            Au cœur de la ville, La Maison des Mets est le restaurant qui a révolutionné la gastronomie nord-africaine, combinant des produits d'excellence et des techniques innovantes.
          </p>
          <p>
            Reconnu pour son excellence culinaire, La Maison des Mets continue d'évoluer, eleva l'expérience gastronomique à de nouveaux sommets de créativité et d'authenticité.
          </p>
        </motion.article>
      </div>
    </section>
  )
}
