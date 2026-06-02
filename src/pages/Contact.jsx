import { useState } from 'react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const nombre = data.get('nombre')
    const vehiculo = data.get('vehiculo')
    const mensaje = data.get('mensaje')
    const text = `Hola RB Racing! Soy ${nombre}.%0A%0AVeh%C3%ADculo: ${vehiculo}%0A%0A${mensaje}`
    window.open(`https://wa.me/5493541216151?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Contacto"
        description="Av. Ramón J. Cárcano 2016, Villa Carlos Paz. Tel: 3541-216151. Lun a Vie 8:30 a 12:30 y 15:30 a 18:30 · Sáb 8:30 a 12:30."
        path="/contacto"
      />

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="container-rb">
          <Reveal>
            <div className="micro-label !text-accent mb-8">Contacto</div>
          </Reveal>
          <TextReveal as="h1" className="text-ink-950 dark:text-ink-50 max-w-4xl mb-10">
            Hablemos.
          </TextReveal>
          <Reveal delay={300}>
            <p className="text-lg md:text-xl text-ink-600 dark:text-ink-400 max-w-2xl leading-relaxed">
              Pasá por el taller, llamanos o escribinos por WhatsApp.
              Atendemos todas las consultas y damos presupuesto sin compromiso.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="pb-24 md:pb-32">
        <div className="container-rb">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 border-t border-ink-200 dark:border-ink-800 pt-16">
            <Reveal>
              <div className="micro-label !text-accent mb-4">Dirección</div>
              <a
                href="https://maps.google.com/?q=Av.+Ramón+J.+Cárcano+2016,+Villa+Carlos+Paz"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-ink-950 dark:text-ink-50 leading-relaxed link-underline"
              >
                Av. Ramón J. Cárcano 2016<br />
                Villa Carlos Paz, Córdoba
              </a>
            </Reveal>

            <Reveal delay={80}>
              <div className="micro-label !text-accent mb-4">Teléfono</div>
              <div className="space-y-1">
                <a href="tel:+5493541216151" className="block text-lg text-ink-950 dark:text-ink-50 link-underline">
                  +54 9 3541 216151
                </a>
                <a href="tel:+5493541381628" className="block text-lg text-ink-950 dark:text-ink-50 link-underline">
                  +54 9 3541 381628
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="micro-label !text-accent mb-4">Horarios</div>
              <div className="space-y-3 tabular-nums">
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-ink-500 dark:text-ink-400 mb-1">Lun — Vie</div>
                  <p className="text-base text-ink-950 dark:text-ink-50">
                    8:30 — 12:30<br />
                    15:30 — 18:30
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-ink-500 dark:text-ink-400 mb-1">Sábado</div>
                  <p className="text-base text-ink-950 dark:text-ink-50">8:30 — 12:30</p>
                </div>
                <div className="text-sm text-ink-400">Domingo cerrado</div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="micro-label !text-accent mb-4">WhatsApp</div>
              <a
                href="https://wa.me/5493541216151"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-ink-950 dark:text-ink-50 link-underline"
              >
                Escribir ahora →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="pb-24 md:pb-32 border-t border-ink-200 dark:border-ink-800 pt-24">
        <div className="container-rb">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <div className="micro-label !text-accent mb-6">Consulta rápida</div>
              <h2 className="text-h2 text-ink-950 dark:text-ink-50 mb-12 max-w-md">
                Contanos qué necesitás.
              </h2>

              {sent ? (
                <div className="border-l-2 border-accent pl-6 py-6">
                  <p className="text-h3 text-ink-950 dark:text-ink-50 mb-3">Mensaje enviado.</p>
                  <p className="text-ink-600 dark:text-ink-400">
                    Se abrió WhatsApp con tu mensaje. Te respondemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
                  <div>
                    <label htmlFor="nombre" className="micro-label block mb-3">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full bg-transparent border-b border-ink-300 dark:border-ink-700 focus:border-accent outline-none py-3 text-lg text-ink-950 dark:text-ink-50 transition-colors placeholder:text-ink-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehiculo" className="micro-label block mb-3">Vehículo</label>
                    <input
                      type="text"
                      id="vehiculo"
                      name="vehiculo"
                      className="w-full bg-transparent border-b border-ink-300 dark:border-ink-700 focus:border-accent outline-none py-3 text-lg text-ink-950 dark:text-ink-50 transition-colors placeholder:text-ink-400"
                      placeholder="Marca, modelo, año"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="micro-label block mb-3">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows="3"
                      className="w-full bg-transparent border-b border-ink-300 dark:border-ink-700 focus:border-accent outline-none py-3 text-lg text-ink-950 dark:text-ink-50 transition-colors resize-none placeholder:text-ink-400"
                      placeholder="Contanos qué necesitás..."
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-6">
                    Enviar por WhatsApp →
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal delay={160}>
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] relative overflow-hidden bg-ink-100 dark:bg-ink-900">
                <iframe
                  title="Ubicación RB Racing"
                  src="https://www.google.com/maps?q=Av.+Ram%C3%B3n+J.+C%C3%A1rcano+2016,+Villa+Carlos+Paz,+C%C3%B3rdoba&output=embed"
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
