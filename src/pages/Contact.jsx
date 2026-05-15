import { useState } from 'react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'

const contactItems = [
  {
    label: 'Dirección',
    value: 'Av. Ramón J. Cárcano 2016\nX5152 Villa Carlos Paz, Córdoba',
    href: 'https://maps.google.com/?q=Av.+Ramón+J.+Cárcano+2016,+Villa+Carlos+Paz',
    cta: 'Ver en Maps',
  },
  {
    label: 'Teléfonos',
    value: '3541-216151\n3541-381628',
    href: 'tel:+5493541216151',
    cta: 'Llamar',
  },
  {
    label: 'Horarios',
    value: 'Lun a Sáb\n9:00 a 20:00 hs',
    href: null,
    cta: null,
  },
  {
    label: 'WhatsApp',
    value: 'Respondemos rápido\nmensajes y consultas',
    href: 'https://wa.me/5493541216151',
    cta: 'Escribir',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const nombre = formData.get('nombre')
    const vehiculo = formData.get('vehiculo')
    const mensaje = formData.get('mensaje')
    const text = `Hola RB Racing! Soy ${nombre}.%0A%0AVehículo: ${vehiculo}%0A%0A${mensaje}`
    window.open(`https://wa.me/5493541216151?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Contacto"
        description="Estamos en Av. Ramón J. Cárcano 2016, Villa Carlos Paz. Tel: 3541-216151. Lunes a Sábado de 9 a 20hs."
        path="/contacto"
      />

      {/* HERO */}
      <section className="pt-32 pb-16 surface-invert relative overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-50" />
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-rb-red/20 rounded-full blur-3xl" />

        <div className="container-rb relative">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-rb-red" />
              <span className="mono-label !text-rb-red">Contacto</span>
            </div>
            <h1 className="display-text text-6xl md:text-8xl lg:text-9xl mb-6 text-white">
              HABLEMOS.
            </h1>
            <p className="text-lg text-rb-gray-300 max-w-2xl">
              Pasá por el taller, llamanos o mandanos un WhatsApp.
              Atendemos todas las consultas y damos presupuesto sin compromiso.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 surface">
        <div className="container-rb">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactItems.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="card p-8 group hover:bg-rb-gray-950 dark:hover:bg-rb-red hover:text-white transition-all duration-300 relative h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-rb-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="mono-label !text-rb-red mb-4 group-hover:!text-white transition-colors">{c.label}</div>
                  <p className="font-display text-2xl tracking-wide whitespace-pre-line mb-6 text-primary group-hover:text-white transition-colors">
                    {c.value}
                  </p>
                  {c.href && (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm font-mono uppercase tracking-widest text-rb-gray-500 group-hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      {c.cta} →
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* FORM + MAP */}
          <div className="grid lg:grid-cols-2 gap-10">
            <Reveal direction="left">
              <span className="mono-label !text-rb-red">Mandanos tu consulta</span>
              <h2 className="display-text text-4xl md:text-5xl text-primary mt-3 mb-8">
                CONTANOS QUÉ<br />NECESITÁS.
              </h2>

              {sent ? (
                <div className="card p-8 border-l-4 border-rb-red">
                  <p className="font-display text-2xl text-primary mb-2">¡Mensaje enviado!</p>
                  <p className="text-muted">Se abrió WhatsApp con tu mensaje. Te respondemos lo antes posible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mono-label block mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="w-full bg-transparent border-b-2 border-rb-gray-300 dark:border-rb-gray-700 focus:border-rb-red outline-none py-3 text-lg text-primary transition-colors placeholder:text-rb-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="mono-label block mb-2">Vehículo</label>
                    <input
                      type="text"
                      name="vehiculo"
                      className="w-full bg-transparent border-b-2 border-rb-gray-300 dark:border-rb-gray-700 focus:border-rb-red outline-none py-3 text-lg text-primary transition-colors placeholder:text-rb-gray-400"
                      placeholder="Ej: Fiat 147, Renault Clio..."
                    />
                  </div>
                  <div>
                    <label className="mono-label block mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      required
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-rb-gray-300 dark:border-rb-gray-700 focus:border-rb-red outline-none py-3 text-lg text-primary transition-colors resize-none placeholder:text-rb-gray-400"
                      placeholder="Contanos qué necesitás..."
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-4">
                    Enviar por WhatsApp →
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="relative min-h-[500px] bg-rb-gray-100 dark:bg-rb-gray-900">
                <iframe
                  title="Ubicación RB Racing"
                  src="https://www.google.com/maps?q=Av.+Ram%C3%B3n+J.+C%C3%A1rcano+2016,+Villa+Carlos+Paz,+C%C3%B3rdoba&output=embed"
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-6 left-6 bg-rb-gray-950 text-white px-6 py-4 z-10 pointer-events-none">
                  <div className="mono-label !text-rb-red mb-1">Aquí estamos</div>
                  <div className="font-display text-lg tracking-wide">Av. Cárcano 2016</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
