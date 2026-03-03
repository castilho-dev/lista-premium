import { useEffect, useState } from 'react'
import { CTA_LINK } from '../constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-main section-padding flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">LP</span>
          </div>
          <span
            className={`font-display font-bold text-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Lista Prêmio
          </span>
        </div>
        <a
          href={CTA_LINK}
          className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md"
        >
          Quero Acesso
        </a>
      </div>
    </header>
  )
}
