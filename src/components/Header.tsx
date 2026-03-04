import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CTA_LINK } from '../constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isTransparent = !scrolled && location.pathname === '/'
  const textClass = isTransparent ? 'text-white' : 'text-gray-800'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-main section-padding flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">LP</span>
          </div>
          <span className={`font-display font-bold text-lg transition-colors duration-300 ${textClass}`}>
            Lista Premium
          </span>
        </Link>

        {/* Links de Fornecedores, Calculadora, Instagram 10K e WhatsApp Lucrativo só aparecem na área de membros (/app/area) */}

        <div className="flex items-center gap-3">
          <a
            href={CTA_LINK}
            className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md"
          >
            Quero Acesso
          </a>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex w-10 h-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5"
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
      </div>

      {/* Mobile: drawer do menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl z-50 md:hidden py-6 px-6">
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              <a
                href={CTA_LINK}
                className="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold text-sm py-3.5 px-5 rounded-lg transition-colors"
              >
                Quero Acesso
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
