import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 flex items-center justify-center text-rb-gray-700 dark:text-rb-gray-300 hover:text-rb-red dark:hover:text-rb-red transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-rb-gray-950/95 backdrop-blur-md shadow-sm dark:shadow-rb-red/5'
          : 'bg-white dark:bg-rb-gray-950'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-rb-red" />
      <div className="container-rb flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group text-rb-gray-950 dark:text-white" aria-label="RB Racing - Inicio">
          <Logo variant="nav" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-5 py-2 font-display tracking-wider text-base transition-colors duration-200 ${
                  isActive
                    ? 'text-rb-red'
                    : 'text-rb-gray-900 dark:text-rb-gray-100 hover:text-rb-red dark:hover:text-rb-red'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-rb-red" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://wa.me/5493541216151"
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-3 !px-6 !text-base"
          >
            WhatsApp
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-rb-gray-900 dark:bg-rb-gray-100 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-rb-gray-900 dark:bg-rb-gray-100 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-rb-gray-900 dark:bg-rb-gray-100 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-rb-gray-950 ${
          open ? 'max-h-96 border-t border-rb-gray-200 dark:border-rb-gray-800' : 'max-h-0'
        }`}
      >
        <nav className="container-rb py-6 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display tracking-wider text-2xl py-2 ${
                  isActive ? 'text-rb-red' : 'text-rb-gray-900 dark:text-rb-gray-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/5493541216151"
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-4 justify-center"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
