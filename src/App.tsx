import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import Login from './pages/Login'
import AppArea from './pages/AppArea'
import WhatsAppButton from './components/WhatsAppButton'

function useIsAppRoute() {
  const { pathname } = useLocation()
  return pathname.startsWith('/app')
}

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
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const isAppRoute = useIsAppRoute()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/app" element={<Login />} />
        <Route path="/app/area" element={<AppArea />} />
      </Routes>
      {!isAppRoute && <WhatsAppButton />}
    </>
  )
}
