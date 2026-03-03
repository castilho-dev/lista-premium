import { useScrollReveal } from '../hooks/useScrollReveal'
import { CTA_LINK, PRICE } from '../constants'

const products = [
  { img: '/grade/grade1.png', name: 'Marshmallow de Gel', market: 19.90, list: 5.00, discount: 75 },
  { img: '/grade/grade2.webp', name: 'Máscara Capilar', market: 15.90, list: 4.00, discount: 75 },
  { img: '/grade/grade3.png', name: 'Gloss Labial Mel', market: 24.90, list: 8.00, discount: 68 },
  { img: '/grade/grade4.webp', name: 'Gloss Labial Fashion Rosa', market: 18.90, list: 3.79, discount: 80 },
  { img: '/grade/grade5.png', name: 'Creme em Gel Body Girl', market: 22.90, list: 5.90, discount: 74 },
  { img: '/grade/grade7.webp', name: 'Máscara Cílios V. Lash', market: 19.90, list: 3.89, discount: 80 },
  { img: '/grade/grade8.webp', name: 'Paleta de Sombras Luxo', market: 29.90, list: 4.90, discount: 83 },
]

function formatBRL(v: number) {
  return `R$ ${v.toFixed(2).replace('.', ',')}`
}

export default function ProductGrid() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream-100 section-padding">
      <div className="container-main">
        <div className="text-center mb-14 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            Veja Produtos Que Você Poderia{' '}
            <span className="text-rose-500">Estar Vendendo Hoje</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Compare os preços da lista com os preços do mercado e veja a margem de lucro real
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div
              key={i}
              className={`fade-in-section stagger-${Math.min(i + 1, 8)} group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
            >
              <div className="relative">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  -{p.discount}%
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-semibold text-gray-800 text-sm mb-3 min-h-[40px]">
                  {p.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-gray-400 line-through text-sm">
                    {formatBRL(p.market)}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-green-600 font-bold text-xl">
                    {formatBRL(p.list)}
                  </span>
                  <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                    COM A LISTA
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-section mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Imagine comprar a <strong>R$ 3,79</strong> e vender a <strong>R$ 18,90</strong> -
            isso é mais de <strong className="text-green-600">400% de lucro</strong>
          </p>
          <a href={CTA_LINK} className="btn-primary">
            QUERO ACESSO AGORA POR {PRICE}
          </a>
        </div>
      </div>
    </section>
  )
}
