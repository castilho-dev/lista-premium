import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import VSL from './pages/VSL'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import Fornecedores from './pages/Fornecedores'
import Calculadora from './pages/Calculadora'
import Instagram10k from './pages/Instagram10k'
import WhatsAppLucrativo from './pages/WhatsAppLucrativo'
import Suporte from './pages/Suporte'
import Login from './pages/Login'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import { isMemberLoggedIn } from './auth'

function ProtectedMemberRoute({ children }: { children: React.ReactNode }) {
  if (!isMemberLoggedIn()) return <Navigate to="/app" replace />
  return <>{children}</>
}

/** IDs do Microsoft Clarity por rota */
const CLARITY_IDS = {
  /** Landing principal (/) e demais páginas */
  main: 'vun7nydhxj',
  /** Página /vsl (teste A/B) */
  vsl: 'vun7x69vpo',
} as const

function ClarityScript() {
  const location = useLocation()
  const injected = useRef(false)
  useEffect(() => {
    if (injected.current) return
    injected.current = true
    const id = location.pathname === '/vsl' ? CLARITY_IDS.vsl : CLARITY_IDS.main
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.textContent = `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${id}");`
    document.head.appendChild(script)
  }, [location.pathname])
  return null
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
      <ClarityScript />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  const isAppRoute = location.pathname.startsWith('/app')
  /** Landing / e /vsl: sem header (logo, Quero Acesso, menu) para focar na conversão */
  const hideSiteChrome = location.pathname === '/' || location.pathname === '/vsl'
  const showHeader = !isAppRoute && !hideSiteChrome
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vsl" element={<VSL />} />
        <Route path="/app" element={<Login />} />
        <Route path="/termos" element={<ProtectedMemberRoute><TermosDeUso /></ProtectedMemberRoute>} />
        <Route path="/privacidade" element={<ProtectedMemberRoute><PoliticaPrivacidade /></ProtectedMemberRoute>} />
        <Route path="/fornecedores" element={<ProtectedMemberRoute><Fornecedores /></ProtectedMemberRoute>} />
        <Route path="/calculadora" element={<ProtectedMemberRoute><Calculadora /></ProtectedMemberRoute>} />
        <Route path="/instagram10k" element={<ProtectedMemberRoute><Instagram10k /></ProtectedMemberRoute>} />
        <Route path="/whatsapplucrativo" element={<ProtectedMemberRoute><WhatsAppLucrativo /></ProtectedMemberRoute>} />
        <Route path="/suporte" element={<ProtectedMemberRoute><Suporte /></ProtectedMemberRoute>} />
        <Route path="/app/area" element={<Navigate to="/fornecedores" replace />} />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
      {!isAppRoute && location.pathname !== '/' && <WhatsAppButton />}
    </>
  )
}
