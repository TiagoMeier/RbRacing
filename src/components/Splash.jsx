import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Splash() {
  const [show, setShow] = useState(true)
  const [rpm, setRpm] = useState(0)

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('rb-splash-seen')
    if (hasSeen) {
      setShow(false)
      return
    }

    // Animate RPM number
    const start = performance.now()
    const duration = 1800
    const target = 9000

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setRpm(Math.floor(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    const t = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('rb-splash-seen', '1')
    }, 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-rb-gray-950 flex flex-col items-center justify-center"
        >
          {/* Speed lines bg */}
          <div className="absolute inset-0 speed-lines opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-rb-red" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-rb-red" />

          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-white"
            >
              <Logo variant="splash" className="h-24 w-auto" />
            </motion.div>

            {/* Tachometer */}
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Background arc */}
                <path
                  d="M 30 150 A 80 80 0 1 1 170 150"
                  fill="none"
                  stroke="#27272A"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Animated arc */}
                <motion.path
                  d="M 30 150 A 80 80 0 1 1 170 150"
                  fill="none"
                  stroke="#C8102E"
                  strokeWidth="6"
                  strokeLinecap="round"
                  pathLength="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: [0.5, 0, 0.5, 1] }}
                />
                {/* Tick marks */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                  const angle = -225 + i * 31
                  const rad = (angle * Math.PI) / 180
                  const x1 = 100 + Math.cos(rad) * 70
                  const y1 = 100 + Math.sin(rad) * 70
                  const x2 = 100 + Math.cos(rad) * 80
                  const y2 = 100 + Math.sin(rad) * 80
                  return (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={i >= 6 ? '#C8102E' : '#71717A'}
                      strokeWidth="2"
                    />
                  )
                })}
              </svg>
              {/* RPM number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-display text-5xl text-white tabular-nums">
                  {rpm.toLocaleString('es-AR')}
                </div>
                <div className="mono-label !text-rb-red mt-1">RPM</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 mono-label !text-rb-gray-400"
            >
              Encendiendo motor...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
