import { useEffect, useRef, useState, useCallback } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  { img: '/lista/lista-1.png', name: 'Sadoer Nicotinamide Marshmallow Body Lotion', market: 48.10, list: 5.00, discount: 90 },
  { img: '/lista/lista-2.png', name: 'BTX Lisoterapia Organic', market: 23.90, list: 4.00, discount: 83 },
  { img: '/lista/lista-3.png', name: 'Gloss Labial Liphoney Franciny Ehlke', market: 34.90, list: 8.00, discount: 77 },
  { img: '/lista/lista-4.png', name: 'Lip Gloss Crystal Magic Wand', market: 29.90, list: 3.79, discount: 87 },
  { img: '/lista/lista-5.png', name: 'Gel Hidratante Beijável Body Girl', market: 22.90, list: 5.90, discount: 74 },
  { img: '/lista/lista-6.png', name: 'Máscara De Cílios Long Lash Luisance', market: 20.10, list: 3.89, discount: 81 },
  { img: '/lista/lista-7.png', name: 'Paleta de Sombras Huda Beauty Nude Medium Obsessions', market: 210.20, list: 32.90, discount: 84 },
  { img: '/lista/lista-8.png', name: 'Esponja Feels Mood Angle Blender Ruby Rose', market: 29.90, list: 4.90, discount: 83 },
]

const galleryImages = Array.from({ length: 10 }, (_, i) => ({
  src: `/produtos/produto${i + 1}.jpeg`,
  alt: `Produto de maquiagem ${i + 1}`,
}))

function formatBRL(v: number) {
  return `R$ ${v.toFixed(2).replace('.', ',')}`
}

export default function ProductGrid() {
  const ref = useScrollReveal<HTMLElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const maxIndex = Math.max(0, products.length - 4)
  const galleryTrackRef = useRef<HTMLDivElement>(null)
  const [currentGallery, setCurrentGallery] = useState(0)
  const galleryIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const maxIndexGallery = Math.max(0, galleryImages.length - 4)
  const [expandedProductIndex, setExpandedProductIndex] = useState<number | null>(null)
  const [expandedGalleryIndex, setExpandedGalleryIndex] = useState<number | null>(null)

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

  const scrollToGallery = useCallback((index: number) => {
    const track = galleryTrackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    if (!card) return
    const gap = 20
    const cardWidth = card.offsetWidth + gap
    track.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  }, [])

  const startGalleryAutoplay = useCallback(() => {
    if (galleryIntervalRef.current) clearInterval(galleryIntervalRef.current)
    galleryIntervalRef.current = setInterval(() => {
      setCurrentGallery(prev => {
        const next = prev >= maxIndexGallery ? 0 : prev + 1
        scrollToGallery(next)
        return next
      })
    }, 3000)
  }, [maxIndexGallery, scrollToGallery])

  useEffect(() => {
    startGalleryAutoplay()
    return () => {
      if (galleryIntervalRef.current) clearInterval(galleryIntervalRef.current)
    }
  }, [startGalleryAutoplay])

  const goToGallery = useCallback((index: number) => {
    setCurrentGallery(index)
    scrollToGallery(index)
    startGalleryAutoplay()
  }, [scrollToGallery, startGalleryAutoplay])

  useEffect(() => {
    if (expandedProductIndex == null && expandedGalleryIndex == null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setExpandedProductIndex(null); setExpandedGalleryIndex(null); return }
      if (expandedProductIndex != null) {
        if (e.key === 'ArrowLeft') setExpandedProductIndex(i => (i ?? 0) <= 0 ? products.length - 1 : (i ?? 0) - 1)
        if (e.key === 'ArrowRight') setExpandedProductIndex(i => (i ?? 0) >= products.length - 1 ? 0 : (i ?? 0) + 1)
      }
      if (expandedGalleryIndex != null) {
        if (e.key === 'ArrowLeft') setExpandedGalleryIndex(i => (i ?? 0) <= 0 ? galleryImages.length - 1 : (i ?? 0) - 1)
        if (e.key === 'ArrowRight') setExpandedGalleryIndex(i => (i ?? 0) >= galleryImages.length - 1 ? 0 : (i ?? 0) + 1)
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [expandedProductIndex, expandedGalleryIndex])

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-10 fade-in-section">
          <img
            src="/logo-1.png"
            alt="Lista Premium"
            className="h-24 sm:h-28 lg:h-32 w-auto object-contain mx-auto mb-6"
          />
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
            className="flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          >
            {products.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedProductIndex(i)}
                  className="product-card group w-full text-left bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                    <div className="product-card-area aspect-square bg-cream-50 flex items-center justify-center p-2 sm:p-4 transition-colors duration-300">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="product-card-img max-h-full max-w-full object-contain transition-transform duration-400 ease-out rounded-xl sm:rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                    <span className="product-card-badge absolute top-2 left-2 sm:top-3 sm:left-3 bg-rose-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-sm transition-all duration-300">
                      -{p.discount}%
                    </span>
                  </div>

                  <div className="p-3 sm:p-5">
                    <h3 className="font-heading font-medium text-gray-700 text-[11px] sm:text-[13px] leading-snug tracking-tight line-clamp-2 min-h-[2.25rem] sm:min-h-[2.5rem] mb-2 sm:mb-4">
                      {p.name}
                    </h3>

                    <div className="space-y-1 sm:space-y-1.5">
                      <p className="text-gray-400 text-[10px] sm:text-xs">
                        <span className="line-through tabular-nums">{formatBRL(p.market)}</span>
                        <span className="text-gray-400/80 ml-1 sm:ml-1.5">no mercado</span>
                      </p>
                      <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                        <span className="text-green-600 font-bold text-base sm:text-xl tabular-nums tracking-tight">
                          {formatBRL(p.list)}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold text-green-700 uppercase tracking-wider bg-green-50 px-1.5 py-0.5 sm:px-2 rounded">
                          Lista Premium
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
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

        {/* Carrossel da galeria (exemplos de produtos) */}
        <div className="mt-14 relative">
          <div
            ref={galleryTrackRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] group"
              >
                <button
                  type="button"
                  onClick={() => setExpandedGalleryIndex(i)}
                  className="w-full rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => goToGallery(Math.max(0, currentGallery - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Anterior galeria"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToGallery(Math.min(maxIndexGallery, currentGallery + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Próximo galeria"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndexGallery + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToGallery(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentGallery ? 'bg-rose-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide galeria ${i + 1}`}
            />
          ))}
        </div>

        <div className="fade-in-section mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            Compra a R$ 3,79. Vende a R$ 18,90. Mais de 400% de margem. A diferença entre quem lucra e quem empata? Saber onde comprar.
          </p>
          {/* <a href={CTA_ANCHOR} className="btn-primary">
            QUERO ACESSO AOS FORNECEDORES
          </a> */}
        </div>
      </div>

      {/* Modal: card de produto expandido — carrossel + X no canto */}
      {expandedProductIndex != null && (() => {
        const p = products[expandedProductIndex]
        const prev = () => setExpandedProductIndex(expandedProductIndex <= 0 ? products.length - 1 : expandedProductIndex - 1)
        const next = () => setExpandedProductIndex(expandedProductIndex >= products.length - 1 ? 0 : expandedProductIndex + 1)
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setExpandedProductIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Detalhes do produto"
          >
            <button
              type="button"
              onClick={() => setExpandedProductIndex(null)}
              className="fixed top-4 right-4 z-[60] w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-gray-600"
              aria-label="Fechar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button type="button" onClick={e => { e.stopPropagation(); prev() }} className="absolute left-2 top-1/2 -translate-y-1/2 z-[55] w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-gray-600" aria-label="Anterior">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button type="button" onClick={e => { e.stopPropagation(); next() }} className="absolute right-2 top-1/2 -translate-y-1/2 z-[55] w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-gray-600" aria-label="Próximo">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <div className="aspect-square bg-cream-50 flex items-center justify-center p-6">
                  <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain rounded-xl" />
                </div>
                <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">-{p.discount}%</span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-heading font-medium text-gray-800 text-base sm:text-lg leading-snug mb-4">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  <span className="line-through tabular-nums">{formatBRL(p.market)}</span>
                  <span className="ml-1.5">no mercado</span>
                </p>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-green-600 font-bold text-xl tabular-nums">{formatBRL(p.list)}</span>
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wider bg-green-50 px-2 py-1 rounded">Lista Premium</span>
                </div>
                <p className="mt-3 text-gray-400 text-xs">{(expandedProductIndex + 1)} / {products.length}</p>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Modal: imagem da galeria expandida — carrossel + X no canto */}
      {expandedGalleryIndex != null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setExpandedGalleryIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <button
            type="button"
            onClick={() => setExpandedGalleryIndex(null)}
            className="fixed top-4 right-4 z-[60] w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-gray-600"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <button type="button" onClick={e => { e.stopPropagation(); setExpandedGalleryIndex(expandedGalleryIndex <= 0 ? galleryImages.length - 1 : expandedGalleryIndex - 1) }} className="absolute left-2 top-1/2 -translate-y-1/2 z-[55] w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-gray-600" aria-label="Anterior">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button type="button" onClick={e => { e.stopPropagation(); setExpandedGalleryIndex(expandedGalleryIndex >= galleryImages.length - 1 ? 0 : expandedGalleryIndex + 1) }} className="absolute right-2 top-1/2 -translate-y-1/2 z-[55] w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-gray-600" aria-label="Próximo">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          <img
            src={galleryImages[expandedGalleryIndex].src}
            alt={galleryImages[expandedGalleryIndex].alt}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg relative z-10"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
