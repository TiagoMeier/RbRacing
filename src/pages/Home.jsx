import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import work1 from '../assets/work-1.webp'
import work2 from '../assets/work-2.webp'
import work3 from '../assets/work-3.webp'
import work4 from '../assets/work-4.webp'
import work5 from '../assets/work-5.webp'

const services = [
  {
    num: '01',
    slug: 'mecanica-general',
    title: 'Mecánica general',
    short: 'El mantenimiento que tu auto necesita, sin sorpresas.',
    items: ['Service completo', 'Frenos', 'Suspensión', 'Embrague', 'Distribución'],
    image: work4,
  },
  {
    num: '02',
    slug: 'electromecanica',
    title: 'Electromecánica',
    short: 'Diagnóstico eléctrico, encendidos, alternadores e iluminación.',
    items: ['Encendidos', 'Alternadores', 'Diagnóstico', 'LEDs interior', 'Baterías'],
    image: work1,
  },
]

function useClock() {
  const [time, setTime] = useState(() => {
    const d = new Date()
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
  })
  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date()
      setTime(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`)
    }, 60000)
    return () => clearInterval(t)
  }, [])
  return time
}

function HeroStatus() {
  const time = useClock()
  // Horario real: Lun-Vie 8:30-12:30 y 15:30-18:30 / Sáb 8:30-12:30 / Dom cerrado
  const now = new Date()
  const day = now.getDay() // 0=Dom, 6=Sáb
  const minutes = now.getHours() * 60 + now.getMinutes()
  let isOpen = false
  if (day >= 1 && day <= 5) {
    // Lun-Vie: 8:30-12:30 (510-750 min) y 15:30-18:30 (930-1110 min)
    isOpen = (minutes >= 510 && minutes < 750) || (minutes >= 930 && minutes < 1110)
  } else if (day === 6) {
    // Sáb: 8:30-12:30
    isOpen = minutes >= 510 && minutes < 750
  }

  return (
    <div className="flex items-center gap-3 micro-label">
      <span className="relative flex w-1.5 h-1.5">
        {isOpen && <span className="absolute inline-flex w-full h-full rounded-full bg-accent animate-ping opacity-75" />}
        <span className={`relative inline-flex w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-accent' : 'bg-ink-400'}`} />
      </span>
      <span className="!text-ink-700 dark:!text-ink-300">{isOpen ? 'Abierto' : 'Cerrado'}</span>
      <span className="text-ink-300 dark:text-ink-700">·</span>
      <span className="!text-ink-700 dark:!text-ink-300 tabular-nums">Lun–Vie 8:30–18:30</span>
    </div>
  )
}

// Animado: cada elemento aparece con un delay propio usando state de React
function HeroAnimate({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <Tag
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </Tag>
  )
}

export default function Home() {
  return (
    <>
      <Seo path="/" />

      {/* ============================ */}
      {/* HERO v4 */}
      {/* ============================ */}
      <section className="relative min-h-[100svh] flex flex-col pt-24 pb-10 overflow-hidden">
        <div className="container-rb flex-1 flex flex-col w-full">

          {/* Top meta row */}
          <HeroAnimate delay={100} className="flex items-center justify-between mb-8 md:mb-12">
            <HeroStatus />
            <div className="hidden md:flex items-center gap-4 micro-label">
              <span>RB Racing</span>
              <span className="text-ink-300 dark:text-ink-700">/</span>
              <span>antes Electromecánica Rosso</span>
            </div>
          </HeroAnimate>

          {/* Main content */}
          <div className="flex-1 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <HeroAnimate delay={200} className="mb-6">
                <p className="micro-label !text-accent">
                  Villa Carlos Paz — Córdoba
                </p>
              </HeroAnimate>

              <RevealText
                as="h1"
                trigger="mount"
                staggerMs={90}
                delay={400}
                className="text-ink-950 dark:text-ink-50 mb-8 md:mb-10"
                style={{
                  fontSize: 'clamp(3.5rem, 8.5vw, 8rem)',
                  lineHeight: '0.93',
                  letterSpacing: '-0.045em',
                  fontWeight: 500,
                }}
              >
                Mecánica <span style={{ color: '#C8102E', fontStyle: 'italic', fontWeight: 400 }}>precisa</span>.
              </RevealText>

              <HeroAnimate delay={1200}>
                <p className="text-lg md:text-xl text-ink-600 dark:text-ink-400 max-w-md leading-relaxed">
                  Taller especializado en mecánica general y electromecánica.
                  Trabajo prolijo, presupuesto sin compromiso.
                </p>
              </HeroAnimate>

              <HeroAnimate delay={1500} className="flex flex-wrap items-center gap-3 mt-10 md:mt-14">
                <Link to="/servicios" className="btn-primary">
                  Ver servicios
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/contacto" className="btn-ghost">
                  Contactanos
                </Link>
              </HeroAnimate>
            </div>

            {/* Right: image */}
            <HeroAnimate delay={500} className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-100 dark:bg-ink-900">
                  <img
                    src={work3}
                    alt="Carburador desarmado"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink-950 tabular-nums">
                      Nº 042
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 mb-1">
                        Trabajo reciente
                      </div>
                      <div className="text-sm font-medium text-white">
                        Carburador
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-400 tabular-nums">
                  <span>RB Racing</span>
                  <span>03 / 2026</span>
                </div>
              </div>
            </HeroAnimate>
          </div>

          {/* Bottom bar */}
          <HeroAnimate delay={1800} className="pt-8 mt-10 border-t border-ink-200 dark:border-ink-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <div>
                <div className="micro-label mb-1.5">Áreas</div>
                <div className="text-sm font-medium text-ink-950 dark:text-ink-50">
                  Mecánica · Electromecánica
                </div>
              </div>
              <div>
                <div className="micro-label mb-1.5">Horario</div>
                <div className="text-sm font-medium text-ink-950 dark:text-ink-50 tabular-nums">
                  Lun–Vie 8:30–18:30
                </div>
              </div>
              <div>
                <div className="micro-label mb-1.5">Dirección</div>
                <a
                  href="https://maps.google.com/?q=Av.+Ramón+J.+Cárcano+2016,+Villa+Carlos+Paz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink-950 dark:text-ink-50 link-underline"
                >
                  Av. Cárcano 2016
                </a>
              </div>
              <div>
                <div className="micro-label mb-1.5">Teléfono</div>
                <a href="tel:+5493541216151" className="text-sm font-medium text-ink-950 dark:text-ink-50 link-underline tabular-nums">
                  +54 9 3541 216151
                </a>
              </div>
            </div>
          </HeroAnimate>
        </div>
      </section>

      {/* ============================ */}
      {/* MANIFIESTO */}
      {/* ============================ */}
      <section className="py-32 md:py-48 border-t border-ink-100 dark:border-ink-900">
        <div className="container-rb">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <Reveal>
                <div className="micro-label mb-3">— Manifiesto</div>
                <div className="text-sm text-ink-500 dark:text-ink-400">
                  Lo que creemos.
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <RevealText
                as="p"
                trigger="view"
                staggerMs={40}
                className="text-display text-ink-950 dark:text-ink-50"
              >
                Cuidamos cada auto como si fuera <span style={{ color: '#A3A3A3' }}>nuestro</span>. Diagnóstico claro, trabajo prolijo, <span style={{ color: '#C8102E' }}>resultado garantizado</span>.
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ */}
      {/* HISTORIA — homenaje sutil */}
      {/* ============================ */}
      <section className="py-24 md:py-32 border-t border-ink-100 dark:border-ink-900">
        <div className="container-rb">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <Reveal>
                <div className="micro-label mb-3">— Historia</div>
                <div className="text-sm text-ink-500 dark:text-ink-400">
                  De dónde venimos.
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <Reveal>
                <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-700 dark:text-ink-300">
                  <p>
                    RB Racing nace de <span className="text-ink-950 dark:text-ink-50 font-medium">Electromecánica Rosso</span>,
                    el taller fundado por <span className="text-ink-950 dark:text-ink-50 font-medium">Edgardo Rosso</span> en
                    Villa Carlos Paz. Especialistas en electromecánica desde el primer día.
                  </p>
                  <p>
                    Con la incorporación de un nuevo socio y la suma del área de mecánica general,
                    el taller dio un paso más y se transformó en RB Racing —
                    <span className="text-ink-500 dark:text-ink-400"> manteniendo la misma exigencia, ampliando los servicios.</span>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-12 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                  <div>
                    <div className="micro-label mb-1.5">Fundador</div>
                    <div className="text-sm font-medium text-ink-950 dark:text-ink-50">Edgardo Rosso</div>
                  </div>
                  <div>
                    <div className="micro-label mb-1.5">Origen</div>
                    <div className="text-sm font-medium text-ink-950 dark:text-ink-50">Electromecánica Rosso</div>
                  </div>
                  <div>
                    <div className="micro-label mb-1.5">Hoy</div>
                    <div className="text-sm font-medium text-ink-950 dark:text-ink-50">RB Racing</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      {services.map((service, idx) => (
        <section key={service.slug} className="py-24 md:py-32 border-t border-ink-100 dark:border-ink-900">
          <div className="container-rb">
            <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <Reveal className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:col-start-6' : ''}`} delay={100}>
                <Link
                  to={`/servicios#${service.slug}`}
                  className="block relative aspect-[4/3] overflow-hidden group bg-ink-100 dark:bg-ink-900"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out-quint group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink-950 tabular-nums">
                      {service.num} / 02
                    </span>
                  </div>
                </Link>
              </Reveal>

              <Reveal className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`} delay={200}>
                <div className="micro-label !text-accent mb-6">
                  Servicio {service.num}
                </div>
                <RevealText
                  as="h2"
                  trigger="view"
                  className="text-h2 text-ink-950 dark:text-ink-50 mb-6"
                  staggerMs={50}
                >
                  {service.title}.
                </RevealText>
                <p className="text-lg text-ink-600 dark:text-ink-400 leading-relaxed mb-8 max-w-md">
                  {service.short}
                </p>

                <ul className="space-y-2 mb-10 max-w-md">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center justify-between py-2.5 border-b border-ink-100 dark:border-ink-800">
                      <span className="text-sm text-ink-700 dark:text-ink-300">{item}</span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-ink-400 tabular-nums">
                        0{i + 1}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/servicios" className="btn-ghost">
                  Conocé más
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* TRABAJOS */}
      <section className="py-24 md:py-32 border-t border-ink-100 dark:border-ink-900">
        <div className="container-rb">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <Reveal>
              <div className="micro-label !text-accent mb-4">— Trabajos recientes</div>
              <RevealText
                as="h2"
                trigger="view"
                className="text-h2 text-ink-950 dark:text-ink-50 max-w-xl"
              >
                Algunos trabajos del taller.
              </RevealText>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/servicios" className="link-underline text-sm text-ink-500 dark:text-ink-400 hover:text-accent dark:hover:text-accent transition-colors">
                Ver todos →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3">
            <Reveal className="col-span-2 md:col-span-7 md:row-span-2" delay={0}>
              <GalleryItem src={work1} num="01" caption="Cambio de tensor" />
            </Reveal>
            <Reveal className="md:col-span-5" delay={80}>
              <GalleryItem src={work2} num="02" caption="Correa poli-V" />
            </Reveal>
            <Reveal className="md:col-span-5" delay={160}>
              <GalleryItem src={work4} num="03" caption="Carburador listo" />
            </Reveal>
            <Reveal className="md:col-span-6" delay={240}>
              <GalleryItem src={work5} num="04" caption="LEDs interior" />
            </Reveal>
            <Reveal className="md:col-span-6" delay={320}>
              <GalleryItem src={work3} num="05" caption="Limpieza de carburador" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-ink-950 text-white mt-24">
        <div className="absolute inset-0">
          <img src={work3} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
        </div>

        <div className="container-rb relative">
          <div className="max-w-3xl">
            <Reveal>
              <div className="micro-label !text-accent mb-6">— ¿Listo?</div>
            </Reveal>
            <RevealText
              as="h2"
              trigger="view"
              staggerMs={70}
              className="mb-12 text-white"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.035em',
                fontWeight: 500,
              }}
            >
              Traé tu auto. Nosotros hacemos el resto.
            </RevealText>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/5493541216151" target="_blank" rel="noreferrer" className="btn-primary !bg-white !text-ink-950 hover:!bg-accent hover:!text-white">
                  WhatsApp
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <Link to="/contacto" className="btn-ghost !border-white/30 !text-white hover:!border-white hover:!bg-white/10">
                  Cómo llegar
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function GalleryItem({ src, num, caption }) {
  return (
    <div className="relative w-full aspect-square overflow-hidden bg-ink-100 dark:bg-ink-900 group cursor-pointer">
      <img
        src={src}
        alt={caption}
        className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out-quint group-hover:scale-[1.05]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.18em] font-medium text-ink-950 tabular-nums">
        Nº {num}
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {caption}
      </div>
    </div>
  )
}
