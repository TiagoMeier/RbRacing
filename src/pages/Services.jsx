import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import work1 from '../assets/work-1.webp'
import work2 from '../assets/work-2.webp'
import work4 from '../assets/work-4.webp'

const groups = [
  {
    num: '01',
    title: 'Mecánica General',
    image: work4,
    items: [
      'Service completo y mantenimiento programado',
      'Sistema de frenos: pastillas, discos, cilindros',
      'Suspensión y tren delantero',
      'Embrague y caja de cambios',
      'Distribución y correa poli-V',
      'Cambio de tensores y rodamientos',
    ],
  },
  {
    num: '02',
    title: 'Competición',
    image: work2,
    items: [
      'Preparación de motores para competición',
      'Puesta a punto de carburadores',
      'Limpieza y armado completo',
      'Cambio de juntas y componentes internos',
      'Calibración para alto rendimiento',
      'Asesoramiento técnico para pilotos',
    ],
  },
  {
    num: '03',
    title: 'Electromecánica',
    image: work1,
    items: [
      'Encendidos electrónicos',
      'Reparación y cambio de alternadores',
      'Diagnóstico del sistema eléctrico',
      'Instalación de iluminación LED interior',
      'Iluminación LED para tablero',
      'Baterías, cableado y arranque',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Servicios"
        description="Mecánica general, competición y electromecánica. Service, frenos, carburadores, encendidos, alternadores e iluminación LED."
        path="/servicios"
      />

      {/* HERO */}
      <section className="pt-32 pb-16 surface-invert relative overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-rb-red/20 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute top-1/2 -left-20 w-[140%] h-1 bg-rb-red opacity-60 -rotate-[15deg]" />

        <div className="container-rb relative">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-rb-red" />
              <span className="mono-label !text-rb-red">Servicios</span>
            </div>
            <h1 className="display-text text-6xl md:text-8xl lg:text-9xl mb-6 text-white">
              TODO LO QUE<br />HACEMOS.
            </h1>
            <p className="text-lg text-rb-gray-300 max-w-2xl">
              Desde un service de rutina hasta la preparación completa de un motor de competición.
              Tres áreas, atención personalizada, garantía sobre el trabajo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GROUPS */}
      <section className="py-20 surface">
        <div className="container-rb space-y-24">
          {groups.map((g, idx) => (
            <article
              key={g.num}
              id={`area-${g.num}`}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              <Reveal direction={idx % 2 === 1 ? 'right' : 'left'} className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute -inset-4 border border-rb-gray-200 dark:border-rb-gray-800" />
                <div className={`absolute -top-4 ${idx % 2 === 1 ? '-left-4' : '-right-4'} w-20 h-20 bg-rb-red flex items-center justify-center z-10`}>
                  <span className="font-display text-3xl text-white">{g.num}</span>
                </div>
                <img src={g.image} alt={g.title} className="w-full aspect-[4/5] object-cover relative" />
              </Reveal>

              <Reveal direction={idx % 2 === 1 ? 'left' : 'right'} delay={0.2} className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="mono-label !text-rb-red">Área {g.num}</span>
                <h2 className="display-text text-5xl md:text-6xl text-primary mt-3 mb-8">
                  {g.title.toUpperCase()}
                </h2>
                <ul className="space-y-4">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-4 group">
                      <span className="text-rb-red font-mono text-sm mt-1.5 group-hover:translate-x-1 transition-transform">
                        ▸
                      </span>
                      <span className="text-muted text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a
                    href={`https://wa.me/5493541216151?text=Hola%20RB%20Racing!%20Quer%C3%ADa%20consultar%20por%20${encodeURIComponent(g.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 font-display tracking-wider text-lg text-primary hover:text-rb-red transition-colors"
                  >
                    Consultá por este servicio <span>→</span>
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 surface-alt">
        <div className="container-rb text-center">
          <Reveal>
            <h2 className="display-text text-4xl md:text-6xl text-primary mb-6">
              ¿NO ENCONTRÁS LO QUE BUSCÁS?
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Atendemos también casos puntuales y trabajos a medida. Consultanos.
            </p>
            <Link to="/contacto" className="btn-primary">
              Hablemos →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
