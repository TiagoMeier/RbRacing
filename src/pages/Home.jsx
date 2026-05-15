import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Logo from '../components/Logo'
import Testimonials from '../components/Testimonials'
import BrandsMarquee from '../components/BrandsMarquee'
import FAQ from '../components/FAQ'
import Lightbox from '../components/Lightbox'
import work1 from '../assets/work-1.webp'
import work2 from '../assets/work-2.webp'
import work3 from '../assets/work-3.webp'
import work4 from '../assets/work-4.webp'
import work5 from '../assets/work-5.webp'

const services = [
  { num: '01', title: 'Mecánica General', desc: 'Service, frenos, suspensión, embrague y todo el mantenimiento que tu vehículo necesita.' },
  { num: '02', title: 'Competición', desc: 'Preparación de motores y puesta a punto para autos de competición y alto rendimiento.' },
  { num: '03', title: 'Electromecánica', desc: 'Encendidos, alternadores, sistema eléctrico e iluminación LED.' },
]

const works = [work1, work2, work3, work4, work5]

export default function Home() {
  const [lightboxIdx, setLightboxIdx] = useState(null)

  return (
    <>
      <Seo path="/" />

      {/* HERO */}
      <section className="relative min-h-screen pt-20 flex items-center overflow-hidden surface speed-lines">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rb-red"
             style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rb-gray-950 dark:bg-rb-gray-900 opacity-95"
             style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 5% 100%)' }} />

        <div className="hidden lg:block absolute top-1/4 -left-20 w-[140%] h-1 bg-rb-red opacity-80 -rotate-[20deg]" />
        <div className="hidden lg:block absolute top-1/3 -left-20 w-[140%] h-0.5 bg-rb-red opacity-40 -rotate-[20deg]" />

        <div className="container-rb relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-rb-red" />
              <span className="mono-label !text-rb-red">Villa Carlos Paz · Córdoba</span>
            </div>

            <h1 className="display-text text-7xl md:text-8xl lg:text-9xl text-primary mb-6">
              POTENCIA<br />
              <span className="text-rb-red">CONFIANZA</span><br />
              VELOCIDAD
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed mb-10">
              Mecánica general, preparación para competición y electromecánica.
              Más de una década poniendo a punto autos que rinden.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/servicios" className="btn-primary">
                Ver Servicios
                <span className="inline-block">→</span>
              </Link>
              <Link to="/contacto" className="btn-outline">
                Contactanos
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 border border-white/20" />
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-rb-red"
              />
              <div className="relative text-white p-12">
                <Logo variant="hero" className="w-80 h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 font-mono text-xs uppercase tracking-[0.3em] text-white">
                Est. — Carlos Paz
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-rb-gray-950 dark:bg-rb-gray-900 text-white py-4 z-10">
          <div className="container-rb flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-rb-red rounded-full animate-pulse" />
              Abierto · Lun a Sáb 9 a 20hs
            </div>
            <div className="hidden md:block">Av. Ramón J. Cárcano 2016</div>
            <div>Tel: 3541-216151 / 381628</div>
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <BrandsMarquee />

      {/* SERVICES SHORT */}
      <section className="py-24 surface relative">
        <div className="container-rb">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-rb-red" />
                  <span className="mono-label !text-rb-red">Qué hacemos</span>
                </div>
                <h2 className="display-text text-5xl md:text-7xl text-primary">
                  TRES ÁREAS,<br />UN MISMO STANDARD.
                </h2>
              </div>
              <Link to="/servicios" className="mono-label hover:text-rb-red transition-colors flex items-center gap-2">
                Ver todos los servicios <span>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.num} direction="up" delay={i * 0.1}>
                <article className="group relative card card-hover p-8 border-l-4 border-rb-gray-200 dark:border-rb-gray-800 hover:border-rb-red h-full">
                  <div className="font-display text-7xl text-rb-gray-200 dark:text-rb-gray-800 group-hover:text-rb-red transition-colors duration-500 mb-6">
                    {s.num}
                  </div>
                  <h3 className="display-text text-3xl text-primary mb-3 tracking-wider">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-rb-red text-2xl">→</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 surface-invert relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-rb-red" />
        <div className="container-rb relative">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-rb-red" />
                <span className="mono-label !text-rb-red">Trabajos recientes</span>
              </div>
              <h2 className="display-text text-5xl md:text-7xl text-white">
                EL TALLER<br />EN ACCIÓN.
              </h2>
              <p className="text-rb-gray-400 mt-6 max-w-lg">
                Clickeá cualquier imagen para verla en grande. Cada trabajo, cada detalle.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Reveal direction="scale" className="col-span-2 row-span-2">
              <button
                onClick={() => setLightboxIdx(0)}
                className="relative group overflow-hidden aspect-square w-full"
              >
                <img src={works[0]} alt="Trabajo 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-rb-gray-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-left">
                  <div className="mono-label !text-white">Tuning interior · LEDs</div>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-rb-red text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
              </button>
            </Reveal>
            {works.slice(1).map((src, i) => (
              <Reveal key={i} direction="scale" delay={(i + 1) * 0.08}>
                <button
                  onClick={() => setLightboxIdx(i + 1)}
                  className="relative group overflow-hidden aspect-square w-full"
                >
                  <img src={src} alt={`Trabajo ${i + 2}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-rb-red/0 group-hover:bg-rb-red/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-rb-red text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={works}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onNext={() => setLightboxIdx((i) => (i + 1) % works.length)}
        onPrev={() => setLightboxIdx((i) => (i - 1 + works.length) % works.length)}
      />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-24 surface">
        <div className="container-rb max-w-4xl">
          <Reveal>
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-rb-red" />
                <span className="mono-label !text-rb-red">Preguntas frecuentes</span>
                <div className="w-12 h-px bg-rb-red" />
              </div>
              <h2 className="display-text text-5xl md:text-6xl text-primary">
                LO QUE MÁS NOS PREGUNTAN.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 surface relative">
        <div className="container-rb">
          <Reveal direction="scale">
            <div className="bg-rb-gray-950 dark:bg-rb-gray-900 text-white p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-rb-red"
                   style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }} />

              <div className="relative max-w-2xl">
                <div className="mono-label !text-rb-red mb-4">¿Listo?</div>
                <h2 className="display-text text-5xl md:text-7xl mb-6">
                  TRAÉ TU AUTO.<br />HACEMOS EL RESTO.
                </h2>
                <p className="text-rb-gray-300 text-lg mb-10 max-w-lg">
                  Diagnóstico, presupuesto sin compromiso y trabajos con garantía.
                  Escribinos por WhatsApp o pasá por el taller.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/5493541216151" target="_blank" rel="noreferrer" className="btn-primary">
                    WhatsApp →
                  </a>
                  <Link to="/contacto" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-rb-gray-950">
                    Más info
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
