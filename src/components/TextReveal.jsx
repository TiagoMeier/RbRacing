import { useEffect, useRef } from 'react'

/**
 * TextReveal — anima cada palabra desde abajo cuando entra al viewport.
 * Acepta el texto como children plano, o array de partes con `accent: true`
 * para colorear partes específicas.
 *
 * Uso simple:   <TextReveal>Mecánica de precisión.</TextReveal>
 * Uso avanzado: <TextReveal parts={[{text: 'Mecánica'}, {text: 'de precisión.', accent: true, br: true}]} />
 */
export default function TextReveal({ children, parts, as: Tag = 'h1', className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('reveal-in'), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  // Si vienen parts estructurados
  if (parts) {
    return (
      <Tag ref={ref} className={`text-reveal ${className}`}>
        {parts.map((part, idx) => (
          <span key={idx}>
            {part.br && <br />}
            {part.text.split(' ').map((word, i) => (
              <span key={i} className="word">
                <span style={{ transitionDelay: `${(idx * 0.05) + i * 0.05}s` }} className={part.accent ? 'text-accent' : ''}>
                  {word}{i < part.text.split(' ').length - 1 ? '\u00A0' : ''}
                </span>
              </span>
            ))}
          </span>
        ))}
      </Tag>
    )
  }

  // Modo simple: split por palabras
  const words = String(children).split(' ')
  return (
    <Tag ref={ref} className={`text-reveal ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word">
          <span style={{ transitionDelay: `${i * 0.06}s` }}>
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}
