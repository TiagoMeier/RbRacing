import Reveal from './Reveal'

const testimonials = [
  {
    name: 'Tiago Meier',
    role: 'Cliente',
    text: 'Le instalaron LEDs en pies y tablero al auto y quedó increíble. Trabajo prolijo, atención de diez. Súper recomendado.',
    rating: 5,
    initial: 'T',
  },
  {
    name: 'Martín G.',
    role: 'Piloto amateur',
    text: 'Pongo el auto en sus manos para la temporada. Sabe lo que hacen, te explican todo y se nota la pasión por la mecánica.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Sofía P.',
    role: 'Cliente',
    text: 'Me cambiaron la correa, el tensor y me hicieron un service completo. Precio justo y todo impecable. Vuelvo siempre.',
    rating: 5,
    initial: 'S',
  },
]

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rb-red">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-rb-red" />

      <div className="container-rb">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-rb-red" />
              <span className="mono-label !text-rb-red">Testimonios</span>
            </div>
            <h2 className="display-text text-5xl md:text-7xl text-primary">
              LO QUE DICEN<br />NUESTROS CLIENTES.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 0.15}>
              <article className="bg-white dark:bg-rb-gray-900 p-8 relative h-full flex flex-col group hover:shadow-2xl dark:hover:shadow-rb-red/10 transition-shadow duration-500">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-rb-red text-white flex items-center justify-center font-display text-2xl">
                  "
                </div>

                <div className="flex gap-1 mb-4 mt-2">
                  {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} />)}
                </div>

                <p className="text-muted leading-relaxed flex-1 mb-6 italic">
                  {t.text}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-rb-gray-200 dark:border-rb-gray-800">
                  <div className="w-12 h-12 bg-rb-gray-950 dark:bg-rb-red text-white flex items-center justify-center font-display text-xl">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-display tracking-wide text-lg text-primary">{t.name}</div>
                    <div className="mono-label">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps?q=Av.+Ram%C3%B3n+J.+C%C3%A1rcano+2016,+Villa+Carlos+Paz,+C%C3%B3rdoba"
              target="_blank"
              rel="noreferrer"
              className="mono-label hover:text-rb-red transition-colors inline-flex items-center gap-2"
            >
              Dejanos tu reseña en Google <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
