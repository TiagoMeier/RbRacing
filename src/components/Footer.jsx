import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 dark:border-ink-800 mt-32 no-print">
      <div className="container-rb py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-6">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <div className="text-ink-950 dark:text-ink-50 mb-6">
              <Logo className="h-14 w-auto" variant="footer" />
            </div>
            <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed max-w-xs">
              Mecánica general y electromecánica.
              Villa Carlos Paz, Córdoba.
            </p>
          </div>

          {/* Navegación */}
          <div className="md:col-span-2 md:col-start-7">
            <div className="micro-label mb-5">Navegación</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="link-underline hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="link-underline hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link to="/contacto" className="link-underline hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3">
            <div className="micro-label mb-5">Contacto</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=Av.+Ramón+J.+Cárcano+2016,+Villa+Carlos+Paz"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-accent transition-colors"
                >
                  Av. Ramón J. Cárcano 2016
                </a>
              </li>
              <li>
                <a href="tel:+5493541216151" className="link-underline hover:text-accent transition-colors">
                  +54 9 3541 216151
                </a>
              </li>
              <li>
                <a href="tel:+5493541381628" className="link-underline hover:text-accent transition-colors">
                  +54 9 3541 381628
                </a>
              </li>
              <li className="text-ink-500 dark:text-ink-400 tabular-nums">Lun a Vie · 8:30–12:30 · 15:30–18:30</li>
              <li className="text-ink-500 dark:text-ink-400 tabular-nums">Sáb · 8:30–12:30</li>
            </ul>
          </div>

          {/* Redes */}
          <div className="md:col-span-2">
            <div className="micro-label mb-5">Social</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/5493541216151" target="_blank" rel="noreferrer" className="link-underline hover:text-accent transition-colors">WhatsApp</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="link-underline hover:text-accent transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="link-underline hover:text-accent transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-ink-500 dark:text-ink-400">
            © {new Date().getFullYear()} RB Racing — Villa Carlos Paz
          </p>
          <p className="text-xs text-ink-500 dark:text-ink-400 font-mono">
            Mecánica · Electromecánica
          </p>
        </div>
      </div>
    </footer>
  )
}
