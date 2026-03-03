import { useEffect, useState } from 'react'
import { CTA_LINK, PRICE } from '../constants'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={CTA_LINK}
          className="btn-primary w-full text-center text-base py-3.5"
        >
          QUERO ACESSO POR {PRICE}
        </a>
      </div>
    </div>
  )
}
