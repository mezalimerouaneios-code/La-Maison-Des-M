import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function TasteSection() {
  return (
    <section id="philosophie" className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-off-white text-center mb-12 md:mb-16"
        >
          L'Art du Goût
        </motion.h2>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center font-sans text-base md:text-lg leading-relaxed text-off-white/80"
        >
          <p className="mb-6">
            La Maison des Mets incarne un voyage gastronomique en perpétuelle métamorphose, où les saveurs algériennes les plus authentiques et la cuisine française contemporaine se fondent dans une harmonie parfaite.
          </p>
          <p className="mb-6">
            Notre carte s'est améliorée au fil du temps pour devenir ce qu'elle est maintenant : une expérience à partager, un voyage de découverte à accomplir ensemble, pour savourer la danse harmonieuse entre tous les éléments.
          </p>
          <p>
            Le goût est le centre de notre monde.
          </p>
        </motion.article>
      </div>
    </section>
  )
}
