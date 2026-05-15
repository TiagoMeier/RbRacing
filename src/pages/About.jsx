import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import work3 from '../assets/work-3.webp'
import work5 from '../assets/work-5.webp'
import work2 from '../assets/work-2.webp'

const values = [
  { num: '01', title: 'Trabajo Honesto', desc: 'Diagnóstico claro, presupuesto antes de tocar nada, y solo lo que tu vehículo realmente necesita.' },
  { num: '02', title: 'Pasión por el Auto', desc: 'No es solo un trabajo. Vivimos los fierros desde adentro y eso se nota en cada detalle.' },
  { num: '03', title: 'Garantía Real', desc: 'Respondemos por cada trabajo que sale de acá. Tu confianza es lo que más cuidamos.' },
]

const stats = [
  { target: 10, suffix: '+', label: 'Años en el rubro' },
  { target: 500, suffix: '+', label: 'Vehículos atendidos' },
  { target: 3, suffix: '', label: 'Áreas especializadas' },
  { target: 100, suffix: '%', label: 'Trabajos con garantía' },
]

function StatNumber({ target, suffix }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        const start = performance.now()
        const duration = 1500
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.floor(target * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, started])

  return (
    <span ref={ref} className="display-text text-5xl md:text-7xl text-white tabular-nums">
      {value}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <>
      <Seo
        title="Nosotros"
        description="Más de una década dedicados a la mecánica, competición y electromecánica en Villa Carlos Paz."
        path="/nosotros"
      />

      {/* HERO */}
      <section className="pt-32 pb-20 surface relative overflow-hidden speed-lines">
        <div className="hidden lg:block absolute top-1/2 -right-20 w-[120%] h-1 bg-rb-red opacity-60 rotate-[20deg]" />

        <div className="container-rb relative grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-rb-red" />
              <span className="mono-label !text-rb-red">Nosotros</span>
            </div>
            <h1 className="display-text text-6xl md:text-7xl lg:text-8xl text-primary mb-8">
              MÁS QUE UN<br />
              <span className="text-rb-red">TALLER.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-6">
              RB Racing nació de la pasión por los autos y la mecánica de competición.
              Lo que empezó como un proyecto entre amigos se convirtió en un taller que
              hoy atiende a clientes de Carlos Paz y toda la región.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Combinamos la mecánica tradicional con las técnicas modernas de
              electromecánica. Ya sea un service básico o la preparación de un
              motor de competición, ponemos el mismo nivel de atención.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="relative">
            <div className="absolute -inset-6 border-2 border-rb-gray-200 dark:border-rb-gray-800" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-rb-red z-0" />
            <img src={work3} alt="Taller" className="w-full aspect-[4/5] object-cover relative z-10" />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 surface-invert">
        <div className="container-rb">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="text-center md:text-left border-t-2 border-rb-red pt-4">
                  <div className="mb-2">
                    <StatNumber target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="mono-label !text-rb-gray-400">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 surface">
        <div className="container-rb">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-rb-red" />
                <span className="mono-label !text-rb-red">Cómo trabajamos</span>
              </div>
              <h2 className="display-text text-5xl md:text-7xl text-primary">
                NUESTROS<br />VALORES.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 0.15}>
                <div className="card p-10 relative group hover:bg-rb-gray-950 dark:hover:bg-rb-red hover:text-white transition-all duration-500 h-full">
                  <div className="font-display text-7xl text-rb-red group-hover:text-white transition-colors mb-6">{v.num}</div>
                  <h3 className="display-text text-2xl mb-4 tracking-wider text-primary group-hover:text-white transition-colors">{v.title}</h3>
                  <p className="text-muted group-hover:text-rb-gray-200 leading-relaxed transition-colors">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-rb-gray-950 dark:bg-rb-gray-900">
        {[work2, work5, work3].map((src, i) => (
          <div key={i} className={`relative aspect-[4/3] overflow-hidden ${i === 2 ? 'col-span-2 md:col-span-1' : ''} group`}>
            <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-rb-red/0 group-hover:bg-rb-red/20 transition-colors" />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 surface">
        <div className="container-rb text-center">
          <Reveal>
            <h2 className="display-text text-4xl md:text-6xl text-primary mb-6">
              VENÍ A CONOCERNOS.
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Estamos en Av. Ramón J. Cárcano 2016, Villa Carlos Paz. Pasá cuando quieras.
            </p>
            <Link to="/contacto" className="btn-primary">
              Cómo llegar →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
