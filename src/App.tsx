import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import WhatsAppButton from './components/WhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => e.preventDefault()
    const preventImageDrag = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) e.preventDefault()
    }

    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('dragstart', preventImageDrag)

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('dragstart', preventImageDrag)
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  )
}
