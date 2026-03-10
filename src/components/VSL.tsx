import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CTA_ANCHOR } from '../constants'

export default function VSL() {
  const sectionRef = useScrollReveal<HTMLElement>()
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
            Descubra Como <span className="text-rose-500">+937</span> Revendedoras Estão Comprando a <span className="text-green-600">R$3</span> e Vendendo a <span className="text-green-600">R$15</span>
          </h2>
        </div>

        <div className="fade-in-section stagger-2 max-w-3xl mx-auto">
          <div ref={playerContainerRef} />
        </div>

        <div className="fade-in-section stagger-3 mt-10 text-center">
          <a href={CTA_ANCHOR} className="btn-primary">
            QUERO CONHECER A LISTA AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
