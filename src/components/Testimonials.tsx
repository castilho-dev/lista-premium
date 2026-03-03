import { useEffect, useRef, useState, useCallback } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CTA_LINK } from '../constants'

const feedbacks = Array.from({ length: 8 }, (_, i) => ({
  src: `/feedback/feedback-${i + 1}.jpeg`,
  alt: `Depoimento de cliente ${i + 1}`,
}))

export default function Testimonials() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const maxIndex = feedbacks.length - 4

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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-cream-100 section-padding">
      <div className="container-main">
        <div className="text-center mb-14 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            O Que Dizem{' '}
            <span className="text-rose-500">Nossas Clientes</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Feedback real de quem já comprou a lista e está transformando seu negócio
          </p>
        </div>

        <div className="fade-in-section stagger-2 relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-hidden scroll-smooth"
          >
            {feedbacks.map((fb, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] group"
              >
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 hover:-translate-y-1">
                  <img
                    src={fb.src}
                    alt={fb.alt}
                    className="w-full h-auto"
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

        <div className="fade-in-section mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-sans text-sm">
              <strong className="text-gray-900">+930 mulheres</strong> já transformaram seus negócios
            </span>
          </div>

          <div className="mt-8">
            <a href={CTA_LINK} className="btn-primary">
              QUERO FAZER PARTE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
