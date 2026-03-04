import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import Fornecedores from './pages/Fornecedores'
import Calculadora from './pages/Calculadora'
import Instagram10k from './pages/Instagram10k'
import WhatsAppLucrativo from './pages/WhatsAppLucrativo'
import Login from './pages/Login'
import AppArea from './pages/AppArea'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import { isMemberLoggedIn } from './auth'

function ProtectedMemberRoute({ children }: { children: React.ReactNode }) {
  if (!isMemberLoggedIn()) return <Navigate to="/app" replace />
  return <>{children}</>
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
  const location = useLocation()
  const isAppRoute = location.pathname.startsWith('/app')
  const isSalesPage = location.pathname === '/'
  const showHeader = !isAppRoute && !isSalesPage
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/fornecedores" element={<ProtectedMemberRoute><Fornecedores /></ProtectedMemberRoute>} />
        <Route path="/calculadora" element={<ProtectedMemberRoute><Calculadora /></ProtectedMemberRoute>} />
        <Route path="/instagram10k" element={<ProtectedMemberRoute><Instagram10k /></ProtectedMemberRoute>} />
        <Route path="/whatsapplucrativo" element={<ProtectedMemberRoute><WhatsAppLucrativo /></ProtectedMemberRoute>} />
        <Route path="/app" element={<Login />} />
        <Route path="/app/area" element={<AppArea />} />
      </Routes>
      {!isAppRoute && <WhatsAppButton />}
    </>
  )
}
