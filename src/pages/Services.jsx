import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import work1 from '../assets/work-1.webp'
import work4 from '../assets/work-4.webp'

const services = [
  {
    num: '01',
    slug: 'mecanica-general',
    title: 'Mecánica general',
    headline: 'El cuidado que tu auto merece.',
    image: work4,
    intro: 'Desde el service de rutina hasta reparaciones complejas. Mantener tu auto al día es invertir en seguridad y evitar problemas mayores.',
    items: [
      'Service completo y mantenimiento programado',
      'Frenos: pastillas, discos, cilindros',
      'Suspensión y tren delantero',
      'Embrague y caja de cambios',
      'Distribución y correa poli-V',
      'Cambio de tensores y rodamientos',
    ],
  },
  {
    num: '02',
    slug: 'electromecanica',
    title: 'Electromecánica',
    headline: 'Sistema eléctrico, sin misterios.',
    image: work1,
    intro: 'Diagnóstico, reparación y mejora de todo el sistema eléctrico, desde el encendido hasta la iluminación. Trabajos prolijos con garantía.',
    items: [
      'Encendidos electrónicos',
      'Reparación y cambio de alternadores',
      'Diagnóstico eléctrico general',
      'Instalación de iluminación LED interior',
      'Iluminación LED para tablero',
      'Baterías, cableado y arranque',
    ],
  },
]

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
      }
    }
  }, [hash])

  return (
    <>
      <Seo
        title="Servicios"
        description="Mecánica general y electromecánica en Villa Carlos Paz, Córdoba."
        path="/servicios"
      />

      {/* HERO tipográfico con text reveal */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="container-rb">
          <Reveal>
            <div className="micro-label !text-accent mb-8">Servicios — 02</div>
          </Reveal>
          <TextReveal
            parts={[
              { text: 'Dos áreas.' },
              { text: 'Un mismo nivel.', accent: true, br: true },
            ]}
            className="text-ink-950 dark:text-ink-50 max-w-4xl"
          />
        </div>
      </section>

      {/* Cada servicio */}
      {services.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className="py-24 md:py-32 border-t border-ink-100 dark:border-ink-900 scroll-mt-20"
        >
          <div className="container-rb">
            <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <Reveal className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                <div className="image-zoom relative aspect-[4/5]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex flex-col justify-center`}>
                <Reveal delay={120}>
                  <div className="micro-label !text-accent mb-6">{s.num} — {s.title}</div>
                  <h2 className="text-h2 text-ink-950 dark:text-ink-50 mb-8 max-w-md">
                    {s.headline}
                  </h2>
                  <p className="text-lg text-ink-600 dark:text-ink-400 leading-relaxed mb-10 max-w-md">
                    {s.intro}
                  </p>
                </Reveal>

                <Reveal delay={200}>
                  <ul className="space-y-4 mb-10 max-w-md">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <span className="text-accent text-xs mt-1.5 font-mono">/</span>
                        <span className="text-ink-700 dark:text-ink-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={280}>
                  <a
                    href={`https://wa.me/5493541216151?text=Hola%20RB%20Racing!%20Quer%C3%ADa%20consultar%20por%20${encodeURIComponent(s.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary self-start"
                  >
                    Consultar →
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-ink-100 dark:border-ink-900">
        <div className="container-rb">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-h2 text-ink-950 dark:text-ink-50 mb-8">
                ¿No encontrás lo que buscás?
              </h2>
              <p className="text-lg text-ink-600 dark:text-ink-400 leading-relaxed mb-10 max-w-xl">
                Atendemos también casos puntuales y trabajos a medida. Escribinos y conversamos.
              </p>
              <Link to="/contacto" className="btn-primary">
                Hablemos →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
