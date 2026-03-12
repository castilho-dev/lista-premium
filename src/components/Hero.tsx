import { useEffect, useRef } from 'react'

type HeroProps = { showScrollArrow?: boolean }

/**
 * Hero com headline e VSL (vídeo).
 * Usado na página /vsl (teste A/B). A landing principal (/) não usa Hero.
 */
export default function Hero({ showScrollArrow = true }: HeroProps) {
  const playerContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = playerContainerRef.current
    if (!container) return

    const smartPlayer = document.createElement('vturb-smartplayer')
    smartPlayer.id = 'vid-69a61e32a414172eb5d53530'
    smartPlayer.style.display = 'block'
    smartPlayer.style.margin = '0 auto'
    smartPlayer.style.width = '100%'
    smartPlayer.style.maxWidth = '400px'
    container.appendChild(smartPlayer)

    const script = document.createElement('script')
    script.src = 'https://scripts.converteai.net/669adcdb-7c63-4fd9-8ad4-f5fa06e38092/players/69a61e32a414172eb5d53530/v4/player.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      script.remove()
      if (container.contains(smartPlayer)) {
        container.removeChild(smartPlayer)
      }
    }
  }, [])

  return (
    <section className="relative min-h-0 pt-6 pb-16 lg:pb-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900/40" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 container-main section-padding text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-10">
          A lista de fornecedores que permitem comprar maquiagem a <span className="text-green-400">R$ 3</span> no atacado
        </h1>
        <div className="max-w-3xl mx-auto" ref={playerContainerRef} />
      </div>

      {showScrollArrow && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </section>
  )
}
