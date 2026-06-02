import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import SmoothScroll from './components/SmoothScroll'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Wait for transition to be mid-curtain before resetting
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 550)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <PageTransition />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  )
}
