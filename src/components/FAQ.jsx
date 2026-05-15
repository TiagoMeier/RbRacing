import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Dan presupuesto sin cargo?',
    a: 'Sí, siempre. Te hacemos un diagnóstico inicial y te pasamos un presupuesto detallado sin compromiso. Recién con tu OK arrancamos a trabajar.',
  },
  {
    q: '¿Cuánto tarda un service?',
    a: 'Depende del trabajo, pero un service básico lo tenemos listo en el día. Para trabajos más grandes (preparación de motor, electromecánica compleja) coordinamos los tiempos con vos.',
  },
  {
    q: '¿Trabajan con autos de competición?',
    a: 'Sí, es una de nuestras especialidades. Hacemos puesta a punto, preparación de motores, calibración de carburadores y asesoramiento técnico para pilotos.',
  },
  {
    q: '¿Atienden todas las marcas?',
    a: 'Trabajamos con todas las marcas y modelos: Fiat, Ford, Chevrolet, Volkswagen, Renault, Peugeot, Toyota y más. Tanto autos modernos como clásicos.',
  },
  {
    q: '¿Dan garantía sobre los trabajos?',
    a: 'Todos nuestros trabajos tienen garantía. Te informamos los plazos según el tipo de reparación, y respondemos por lo que hicimos.',
  },
  {
    q: '¿Hace falta sacar turno?',
    a: 'Para trabajos chicos podés pasar directamente. Para reparaciones grandes o competición conviene avisarnos antes por WhatsApp así te reservamos lugar.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="card border-l-4 border-rb-gray-200 dark:border-rb-gray-800 has-[button[aria-expanded=true]]:border-rb-red transition-colors">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-display tracking-wide text-xl md:text-2xl text-primary pr-4">
              {faq.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-rb-red text-2xl font-light"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-muted leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
