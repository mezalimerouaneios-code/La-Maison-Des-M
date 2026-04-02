import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function BannerSection() {
  return (
    <section className="bg-dark pb-6">
      <div className="container mx-auto px-6">
        <div className="grid gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="relative overflow-hidden group"
          >
            <div className="zoom-effect">
              <img
                src="https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2025/04/IYO-pagina-MENU-in-evidenza-1920x867-1.png"
                alt="Philosophie"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent flex items-center">
              <div className="pl-8 md:pl-16">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-off-white mb-4"
                >
                  Philosophie
                </motion.h3>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  href="#philosophie"
                  className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  Découvrir
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="relative overflow-hidden group"
          >
            <div className="zoom-effect">
              <img
                src="https://www.iyo-restaurant.com/wp-content-iyoexp-secure/uploads/2025/04/IYO-pagina-MENU-in-evidenza-light.png"
                alt="Carte"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent flex items-center">
              <div className="pl-8 md:pl-16">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-off-white mb-4"
                >
                  Carte
                </motion.h3>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  href="#carte"
                  className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  Découvrir
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
