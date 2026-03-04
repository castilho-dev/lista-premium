import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { CTA_LINK } from '../constants'
import { isMemberLoggedIn } from '../auth'

const navItems = [
  { path: '/fornecedores', label: 'Fornecedores' },
  { path: '/calculadora', label: 'Calculadora' },
  { path: '/instagram10k', label: 'Instagram 10K' },
  { path: '/whatsapplucrativo', label: 'WhatsApp Lucrativo' },
  { path: '/suporte', label: 'Suporte' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isLoggedIn = isMemberLoggedIn()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isTransparent = !scrolled && location.pathname === '/'
  const textClass = isTransparent ? 'text-white' : 'text-gray-800'
  const linkClass = isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-rose-600'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-main section-padding flex items-center">
        {/* Mobile: hamburger à esquerda */}
        <div className="w-10 flex-shrink-0 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex w-10 h-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={`w-6 h-6 ${textClass}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Logo: centralizada no mobile, à esquerda no desktop */}
        <div className="flex-1 flex justify-center md:justify-start min-w-0">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="/logo-1.png" alt="Lista Premium" className="h-11 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop: nav + CTA. Mobile: espaçador para manter logo centralizada */}
        <div className="w-10 flex-shrink-0 md:w-auto md:flex-1 flex items-center justify-end gap-3">
          <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-sm font-medium transition-colors ${linkClass} ${
                  location.pathname === item.path ? (isTransparent ? 'text-white' : 'text-rose-600') : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {!isLoggedIn && (
            <a
              href={CTA_LINK}
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md"
            >
              Quero Acesso
            </a>
          )}
        </div>
      </div>

      {/* Mobile: menu em portal (body) para não ser cortado; aba esquerda → direita, altura total */}
      {menuOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
              style={{ touchAction: 'none' }}
              aria-hidden
              onClick={() => setMenuOpen(false)}
            />
            <div
              className="fixed top-0 left-0 bottom-0 w-[min(280px,85vw)] max-w-[280px] bg-white shadow-2xl z-[9999] md:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex justify-end p-4 border-b border-gray-100 shrink-0">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 -m-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                  aria-label="Fechar menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 py-4 px-3 overflow-y-auto min-h-0" aria-label="Menu mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-heading font-medium py-3 px-4 rounded-xl transition-colors ${
                      location.pathname === item.path
                        ? 'bg-rose-50 text-rose-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {!isLoggedIn && (
                  <a
                    href={CTA_LINK}
                    className="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold text-sm py-3.5 px-5 rounded-xl transition-colors"
                  >
                    Quero Acesso
                  </a>
                )}
              </nav>
            </div>
          </>,
          document.body
        )}
    </header>
  )
}
