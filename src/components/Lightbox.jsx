import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-rb-gray-950/95 lightbox-backdrop flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="absolute top-6 right-6 text-white hover:text-rb-red transition-colors z-10"
            aria-label="Cerrar"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-rb-red transition-colors"
            aria-label="Anterior"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-rb-red transition-colors"
            aria-label="Siguiente"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index]}
              alt={`Trabajo ${index + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <div className="mono-label !text-rb-red">Trabajo {index + 1} / {images.length}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
