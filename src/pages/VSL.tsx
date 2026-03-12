import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import UnifiedSection from '../components/UnifiedSection'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

/** Hash que o botão da VTURB deve usar para revelar o conteúdo: href="#mostrar" */
export const VSL_REVEAL_HASH = '#mostrar'
/** Mensagem que a VTURB pode enviar via postMessage para revelar sem recarregar */
export const VSL_REVEAL_MESSAGE = 'vsl-reveal'

/**
 * Página /vsl: só a seção VSL (Hero) visível até o usuário clicar no botão da VTURB.
 * Revelar sem recarregar: use postMessage (veja comentário no código) ou link com #mostrar + interceptação.
 */
export default function VSL() {
  const [contentRevealed, setContentRevealed] = useState(() => typeof window !== 'undefined' && window.location.hash === VSL_REVEAL_HASH)

  // Scroll suave para a seção revelada após o conteúdo ser montado
  useEffect(() => {
    if (!contentRevealed) return
    const t = setTimeout(() => {
      document.getElementById('conteudo-revelado')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
    return () => clearTimeout(t)
  }, [contentRevealed])

  useEffect(() => {
    const reveal = () => setContentRevealed(true)

    const checkHash = () => {
      if (window.location.hash === VSL_REVEAL_HASH) reveal()
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)

    const onMessage = (e: MessageEvent) => {
      if (e.data === VSL_REVEAL_MESSAGE || e.data?.type === VSL_REVEAL_MESSAGE) {
        reveal()
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
        reveal()
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
        <Hero showScrollArrow={contentRevealed} />
        {contentRevealed && (
          <div id="conteudo-revelado">
            <ProductGrid showLogo={false} />
            <Testimonials />
            <UnifiedSection />
            <FinalCTA />
            <FAQ />
          </div>
        )}
      </main>
      {contentRevealed && <Footer />}
    </>
  )
}
