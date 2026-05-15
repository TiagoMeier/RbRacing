import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-6 z-30 w-12 h-12 bg-rb-gray-950 dark:bg-rb-red text-white flex items-center justify-center shadow-xl hover:bg-rb-red transition-colors no-print"
          aria-label="Volver arriba"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  return (
    <>
      <BackToTop />
      <footer className="relative bg-rb-gray-950 text-rb-gray-300 mt-20 no-print">
        <div className="absolute top-0 left-0 right-0 h-1 bg-rb-red" />

        <div className="container-rb py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="inline-block mb-6 text-white">
                <Logo className="h-16 w-auto" variant="footer" />
              </div>
              <p className="text-rb-gray-400 max-w-md leading-relaxed mb-6">
                Taller dedicado a mecánica general, competición y electromecánica.
                Encendidos, alternadores y todo lo que tu vehículo necesita en Villa Carlos Paz.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/5493541216151"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-rb-gray-700 flex items-center justify-center hover:border-rb-red hover:bg-rb-red transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-rb-gray-700 flex items-center justify-center hover:border-rb-red hover:bg-rb-red transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-rb-gray-700 flex items-center justify-center hover:border-rb-red hover:bg-rb-red transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://maps.google.com/?q=Av.+Ramón+J.+Cárcano+2016,+Villa+Carlos+Paz"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-rb-gray-700 flex items-center justify-center hover:border-rb-red hover:bg-rb-red transition-colors"
                  aria-label="Google Maps"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mono-label !text-rb-red mb-5">Navegación</h4>
              <ul className="space-y-3 font-display tracking-wide text-lg">
                <li><Link to="/" className="hover:text-rb-red transition-colors">Inicio</Link></li>
                <li><Link to="/servicios" className="hover:text-rb-red transition-colors">Servicios</Link></li>
                <li><Link to="/nosotros" className="hover:text-rb-red transition-colors">Nosotros</Link></li>
                <li><Link to="/contacto" className="hover:text-rb-red transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mono-label !text-rb-red mb-5">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="leading-relaxed">
                  Av. Ramón J. Cárcano 2016<br />
                  X5152 Villa Carlos Paz, Córdoba
                </li>
                <li>
                  <a href="tel:+5493541216151" className="hover:text-rb-red transition-colors">
                    3541-216151
                  </a>
                </li>
                <li>
                  <a href="tel:+5493541381628" className="hover:text-rb-red transition-colors">
                    3541-381628
                  </a>
                </li>
                <li className="font-mono text-xs uppercase tracking-wider pt-2">
                  Lun – Sáb · 9 a 20hs
                </li>
              </ul>
            </div>
          </div>

          <div className="section-divider opacity-20 my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-rb-gray-500">
            <div>© {new Date().getFullYear()} RB Racing · Villa Carlos Paz</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-rb-red rounded-full animate-pulse-slow" />
              Mecánica · Competición · Electromecánica
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
