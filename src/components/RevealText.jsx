import { useEffect, useRef, useState } from 'react'

export default function RevealText({
  children,
  as: Tag = 'h1',
  className = '',
  style = {},
  delay = 0,
  trigger = 'mount',
  staggerMs = 60,
}) {
  const ref = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (trigger === 'mount') {
      const t = setTimeout(() => setPlay(true), delay)
      return () => clearTimeout(t)
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setPlay(true), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, trigger])

  const segments = []
  const processNode = (node, keyPrefix = '') => {
    if (typeof node === 'string') {
      const words = node.split(/(\s+)/)
      words.forEach((word, i) => {
        if (/^\s+$/.test(word)) {
          segments.push({ type: 'space', content: word, key: `${keyPrefix}-s${i}` })
        } else if (word.length > 0) {
          segments.push({ type: 'word', content: word, key: `${keyPrefix}-w${i}` })
        }
      })
    } else if (Array.isArray(node)) {
      node.forEach((n, i) => processNode(n, `${keyPrefix}-${i}`))
    } else if (node && node.props && node.props.children !== undefined) {
      const tempStart = segments.length
      processNode(node.props.children, `${keyPrefix}-wrap`)
      const newSegments = segments.splice(tempStart)
      segments.push({
        type: 'wrapper',
        element: node.type,
        props: node.props,
        children: newSegments,
        key: `${keyPrefix}-wrap`,
      })
    }
  }
  processNode(children)

  let wordIndex = 0
  const renderSegment = (seg) => {
    if (seg.type === 'space') return seg.content
    if (seg.type === 'word') {
      const idx = wordIndex++
      return (
        <span key={seg.key} className="rt-word">
          <span
            className="rt-inner"
            style={{
              transform: play ? 'translateY(0)' : 'translateY(110%)',
              transitionDelay: `${idx * staggerMs}ms`,
            }}
          >
            {seg.content}
          </span>
        </span>
      )
    }
    if (seg.type === 'wrapper') {
      const Wrapper = seg.element
      return (
        <Wrapper key={seg.key} {...seg.props}>
          {seg.children.map(renderSegment)}
        </Wrapper>
      )
    }
    return null
  }

  return (
    <Tag ref={ref} className={`reveal-text ${className}`} style={style}>
      {segments.map(renderSegment)}
    </Tag>
  )
}
