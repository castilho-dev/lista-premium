import { useEffect, useRef, useState, useCallback, useId } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const feedbacks = Array.from({ length: 8 }, (_, i) => ({
  src: `/feedback/feedback-${i + 1}.jpeg`,
  alt: `Depoimento de cliente ${i + 1}`,
}))

function InstagramIcon() {
  const id = useId().replace(/:/g, '')
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill={`url(#ig-${id})`} aria-hidden>
      <defs>
        <linearGradient id={`ig-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9ed32" />
          <stop offset="25%" stopColor="#ee2a7b" />
          <stop offset="50%" stopColor="#d22a8a" />
          <stop offset="75%" stopColor="#6228d7" />
          <stop offset="100%" stopColor="#6228d7" />
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const textTestimonials = [
  {
    quote: 'Fazia 6 meses que eu pesquisava fornecedor sozinha e só achava golpe ou coisa que não prestava. No dia que comprei a lista eu já tinha WhatsApp de fornecedor de verdade. Uma semana depois fiz meu primeiro pedido de R$150 e vendi tudo.',
    author: 'Tamara G.',
    location: 'Uberlândia/MG',
    instagram: '@tamaragomes475',
  },
  {
    quote: 'Meu marido falava que era perda de tempo. Eu comecei sem contar pra ninguém. Um mês depois, paguei a conta de luz inteira com o lucro. Agora ele me ajuda a separar os pedidos.',
    author: 'Michele F.',
    location: 'Campinas/SP',
    instagram: '@michele_fernnanda',
  },
  {
    quote: 'Já tentei comprar em atacadista e me trataram como se eu não fosse cliente suficiente. Pediram CNPJ, pedido mínimo de R$500... Aqui eu comprei sem nada disso. Fiz meu primeiro pedido de casa, de pijama.',
    author: 'Bruna G.',
    location: 'Niterói/RJ',
    instagram: '@bruna.gabrielaaa99',
  },
  {
    quote: 'Comprei uma lista de R$40 no Instagram e era tudo falso. Quase desisti. Achava que o problema era eu — que não servia pra isso. Essa foi a primeira que funcionou de verdade.',
    author: 'Camila A.',
    location: 'Vila Velha/ES',
    instagram: '@camil.aalvezz',
  },
  {
    quote: 'Minha maior dúvida era: e se eu comprar e não vender? Comecei com Ruby Rose e Mari Maria porque já pediam pra mim. Vendi tudo no primeiro final de semana. Produto certo vende sozinho.',
    author: 'Isabela C.',
    location: 'Salvador/BA',
    instagram: '@isa_carolinee.p',
  },
  {
    quote: 'Gastei R$300 num curso que prometia fornecedores e no final não me deram nenhum contato. Aqui paguei menos e recebi mais de 150 fornecedores com WhatsApp e tudo. Comecei investindo menos de R$100 no primeiro pedido.',
    author: 'Marcela G.',
    location: 'Caxias do Sul/RS',
    instagram: '@marcela.gutierri',
  },
]

export default function Testimonials() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const textTrackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [currentText, setCurrentText] = useState(0)
  const [twoCards, setTwoCards] = useState(false) // 2 cards no md+, 1 no mobile
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const textIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const maxIndex = feedbacks.length - 4
  const textMaxIndex = twoCards ? textTestimonials.length - 2 : textTestimonials.length - 1

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setTwoCards(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const scrollTo = useCallback((index: number) => {
    const scrollEl = trackRef.current
    if (!scrollEl) return
    const row = scrollEl.firstElementChild
    const card = row?.firstElementChild as HTMLElement | undefined
    if (!card) return
    const gap = 20
    const cardWidth = card.offsetWidth + gap
    scrollEl.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
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

  const scrollTextTo = useCallback((index: number) => {
    const el = textTrackRef.current
    if (!el) return
    const w = el.clientWidth // viewport do scroll container
    if (w <= 0) return
    const step = twoCards ? w / 2 : w // 1 card no mobile, 2 no tablet/desktop
    el.scrollTo({ left: step * index, behavior: 'smooth' })
  }, [twoCards])

  const startTextAutoplay = useCallback(() => {
    if (textIntervalRef.current) clearInterval(textIntervalRef.current)
    textIntervalRef.current = setInterval(() => {
      setCurrentText(prev => {
        const next = prev >= textMaxIndex ? 0 : prev + 1
        scrollTextTo(next)
        return next
      })
    }, 5000)
  }, [textMaxIndex, scrollTextTo])

  useEffect(() => {
    setCurrentText(prev => Math.min(prev, textMaxIndex))
  }, [textMaxIndex])

  useEffect(() => {
    scrollTextTo(currentText)
  }, [twoCards])

  useEffect(() => {
    startTextAutoplay()
    return () => {
      if (textIntervalRef.current) clearInterval(textIntervalRef.current)
    }
  }, [startTextAutoplay])

  const goToText = useCallback((index: number) => {
    setCurrentText(index)
    scrollTextTo(index)
    startTextAutoplay()
  }, [scrollTextTo, startTextAutoplay])

  return (
    <section ref={sectionRef} className="py-14 lg:py-20 bg-cream-100 section-padding">
      <div className="container-main">
        <div className="text-center mb-10 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            Elas Estavam <span className="text-rose-500">No Mesmo Lugar Que Você</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            A diferença? Elas deram o primeiro passo.
          </p>
        </div>

        <div className="fade-in-section stagger-2 relative">
          <div
            ref={trackRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          >
            <div className="flex gap-5">
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

        <div className="fade-in-section mt-14 relative max-w-5xl mx-auto">
          <div
            ref={textTrackRef}
            className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide w-full"
            onScroll={() => {
              const el = textTrackRef.current
              if (!el) return
              const step = twoCards ? el.clientWidth / 2 : el.clientWidth
              if (step <= 0) return
              const i = Math.round(el.scrollLeft / step)
              if (i !== currentText) setCurrentText(Math.max(0, Math.min(i, textMaxIndex)))
            }}
          >
            <div className="flex w-[600%] md:w-[300%] items-stretch">
              {textTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-1/6 snap-center px-2 flex"
                >
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col flex-1 min-h-0">
                    <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] mb-4 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex-shrink-0 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
                      <div className="text-gray-500 text-xs sm:text-sm font-sans">
                        <p>— {t.author}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-[12px] sm:text-[13px] font-sans text-gray-500">
                        <InstagramIcon />
                        <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 bg-clip-text text-transparent font-medium break-all">
                          {t.instagram}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => goToText(Math.max(0, currentText - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Depoimento anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goToText(Math.min(textMaxIndex, currentText + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Próximo depoimento"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: textMaxIndex + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToText(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentText ? 'bg-rose-500 w-6' : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Ir para posição ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Junte-se a +937 mulheres + botão comentados
        <div className="fade-in-section mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex -space-x-2">
              {[21, 32, 45, 58].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover border-2 border-white ring-1 ring-gray-100"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="text-gray-700 font-sans text-sm">
              Junte-se a <strong className="text-gray-900">+937 mulheres</strong> que já estão lucrando
            </span>
          </div>

          <div className="mt-8">
            <a href={CTA_ANCHOR} className="btn-primary">
              TAMBÉM QUERO FAZER PARTE
            </a>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
