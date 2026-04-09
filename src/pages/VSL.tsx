import { useEffect } from 'react'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import UnifiedSection from '../components/UnifiedSection'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

/** Hash opcional para o CTA da VTURB rolar até a oferta: href="#mostrar" */
export const VSL_REVEAL_HASH = '#mostrar'
/** postMessage opcional da VTURB para rolar até a oferta sem recarregar */
export const VSL_REVEAL_MESSAGE = 'vsl-reveal'

/**
 * Página /vsl: Hero com VSL + restante da landing sempre visível.
 * VTURB pode usar #mostrar ou postMessage para rolar até a seção de ofertas.
 */
export default function VSL() {
  useEffect(() => {
    const scrollToOffers = () => {
      document.getElementById('conteudo-revelado')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const checkHash = () => {
      if (window.location.hash === VSL_REVEAL_HASH) scrollToOffers()
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)

    const onMessage = (e: MessageEvent) => {
      if (e.data === VSL_REVEAL_MESSAGE || e.data?.type === VSL_REVEAL_MESSAGE) {
        scrollToOffers()
        if (!window.location.hash) window.history.replaceState(null, '', `${window.location.pathname}${VSL_REVEAL_HASH}`)
      }
    }
    window.addEventListener('message', onMessage)

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element)?.closest?.('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (href === VSL_REVEAL_HASH || href === `${window.location.pathname}${VSL_REVEAL_HASH}` || href?.endsWith('#mostrar')) {
        e.preventDefault()
        e.stopPropagation()
        window.location.hash = VSL_REVEAL_HASH
        scrollToOffers()
      }
    }
    document.documentElement.addEventListener('click', onClick, true)

    return () => {
      window.removeEventListener('hashchange', checkHash)
      window.removeEventListener('message', onMessage)
      document.documentElement.removeEventListener('click', onClick, true)
    }
  }, [])

  return (
    <>
      <main>
        <Hero />
        <div id="conteudo-revelado">
          <ProductGrid showLogo={false} />
          <Testimonials />
          <UnifiedSection />
          <FinalCTA />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  )
}
