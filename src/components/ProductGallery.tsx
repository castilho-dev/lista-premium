import { useEffect, useRef, useState, useCallback } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const images = Array.from({ length: 10 }, (_, i) => ({
  src: `/produtos/produto${i + 1}.jpeg`,
  alt: `Produto de maquiagem ${i + 1}`,
}))

export default function ProductGallery() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const maxIndex = images.length - 4

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    if (!card) return
    const gap = 20
    const cardWidth = card.offsetWidth + gap
    track.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  }, [])

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = prev >= maxIndex ? 0 : prev + 1
        scrollTo(next)
        return next
      })
    }, 3000)
  }, [maxIndex, scrollTo])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoplay])

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    scrollTo(index)
    startAutoplay()
  }, [scrollTo, startAutoplay])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-14 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            Exemplos de Produtos Que Você{' '}
            <span className="text-rose-500">Encontrará na Lista</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Fornecedores selecionados com preços reais de atacado
          </p>
        </div>

        <div className="fade-in-section stagger-2 relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-hidden scroll-smooth"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] group"
              >
                <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(Math.max(0, current - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goTo(Math.min(maxIndex, current + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-rose-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
