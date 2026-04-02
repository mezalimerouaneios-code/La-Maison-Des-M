import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] },
  }),
}

const contacts = [
  {
    title: 'WhatsApp',
    value: 'Nous écrire',
    href: 'https://api.whatsapp.com/send/?phone=33XXXXXXXXX&text&type=phone_number&app_absent=0',
    target: '_blank',
  },
  {
    title: 'Téléphone',
    value: '+33 X XX XX XX XX',
    href: 'tel:+33XXXXXXXXX',
  },
  {
    title: 'E-mail',
    value: 'Envoyer',
    href: 'mailto:contact@lamaisondesmets.fr',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-off-white text-center mb-12 md:mb-16"
        >
          Restons en Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              variants={fadeUp}
              className="text-center"
            >
              <h3 className="font-serif text-lg md:text-xl uppercase tracking-wide text-off-white mb-4 font-light">
                {contact.title}
              </h3>
              <a
                href={contact.href}
                target={contact.target}
                rel={contact.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="font-sans text-xs tracking-[0.3em] uppercase text-grey hover:text-gold transition-colors duration-300"
              >
                {contact.value}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
