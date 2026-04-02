import { motion } from 'framer-motion'

const footerColumns = [
  {
    title: 'Où Nous Trouver',
    content: (
      <>
        Place de la République<br />
        75010 Paris, France
      </>
    ),
  },
  {
    title: 'Horaires Cuisine',
    content: (
      <>
        Lundi - Mardi: 19h00 - 23h30<br />
        Mercredi - Dimanche: 12h30 - 14h00 / 19h00 - 23h30<br />
        Fermé le midiLundi et Mardi.
      </>
    ),
  },
  {
    title: 'Contacts',
    links: [
      { text: '+33 X XX XX XX XX', href: 'tel:+33XXXXXXXXX' },
      { text: 'contact@lamaisondesmets.fr', href: 'mailto:contact@lamaisondesmets.fr' },
    ],
    social: [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
    ],
  },
  {
    title: 'Press & PR',
    content: (
      <a href="mailto:press@lamaisondesmets.fr" className="hover:text-gold transition-colors duration-300">
        press@lamaisondesmets.fr
      </a>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {footerColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-grey mb-4 font-medium">
                {column.title}
              </h4>
              <div className="font-sans text-sm text-off-white/80 leading-relaxed">
                {column.content}
              </div>
              {column.links && (
                <div className="space-y-2">
                  {column.links.map((link) => (
                    <div key={link.text} className="mb-2">
                      <a
                        href={link.href}
                        className="text-sm text-off-white/80 hover:text-gold transition-colors duration-300"
                      >
                        {link.text}
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {column.social && (
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  {column.social.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="w-8 h-8 flex items-center justify-center border border-off-white/30 hover:border-gold hover:text-gold transition-colors duration-300"
                    >
                      <span className="text-xs uppercase">{s.name[0]}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-off-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-6 text-xs uppercase tracking-wider text-off-white/60">
              <a href="#" className="hover:text-off-white transition-colors duration-300">
                Mentions Légales
              </a>
              <a href="#" className="hover:text-off-white transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="hover:text-off-white transition-colors duration-300">
                Cookies
              </a>
            </div>
            <div className="text-xs text-off-white/40">
              © 2024 La Maison des Mets. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
