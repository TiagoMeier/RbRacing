import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center text-ink-700 dark:text-ink-300 hover:text-accent dark:hover:text-accent transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out-quint ${
        scrolled
          ? 'bg-white/80 dark:bg-ink-950/80 backdrop-blur-lg border-b border-ink-200/50 dark:border-ink-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-rb flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center text-ink-950 dark:text-ink-50" aria-label="RB Racing - Inicio">
          <Logo variant="nav" className="h-9 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav - centro */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? 'text-ink-950 dark:text-ink-50'
                    : 'text-ink-500 dark:text-ink-400 hover:text-ink-950 dark:hover:text-ink-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <a
            href="https://wa.me/5493541216151"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary !py-2 !px-5"
          >
            WhatsApp
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menú"
          >
            <span className={`block w-5 h-px bg-current transition-transform duration-300 ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-transform duration-300 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white dark:bg-ink-950 transition-all duration-500 ease-out-quint ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-rb pt-12 flex flex-col gap-1">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-4 text-4xl font-medium tracking-tight border-b border-ink-200 dark:border-ink-800 transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${isActive ? 'text-accent' : 'text-ink-950 dark:text-ink-50'}`
              }
              style={{ transitionDelay: open ? `${i * 80 + 100}ms` : '0ms' }}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/5493541216151"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-10 justify-center w-full"
          >
            WhatsApp →
          </a>
        </nav>
      </div>
    </header>
  )
}
