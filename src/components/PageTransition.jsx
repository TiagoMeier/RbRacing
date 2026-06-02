import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition() {
  const { pathname } = useLocation()
  const [state, setState] = useState('idle')
  const [first, setFirst] = useState(true)

  useEffect(() => {
    if (first) { setFirst(false); return }
    setState('in')
    const t1 = setTimeout(() => setState('out'), 550)
    const t2 = setTimeout(() => setState('idle'), 1150)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [pathname])

  return <div className={`page-transition state-${state}`} aria-hidden="true" />
}
