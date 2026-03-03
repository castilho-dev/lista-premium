import { useScrollReveal } from '../hooks/useScrollReveal'
import { CTA_LINK } from '../constants'

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
            Preço do mercado vs. preço com a lista. Faça as contas.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {products.map((p, i) => (
            <div key={i} className={`fade-in-section stagger-${Math.min(i + 1, 8)}`}>
              <div className="product-card group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-default">
                <div className="relative overflow-hidden">
                  <div className="product-card-area aspect-square bg-cream-50 flex items-center justify-center p-2 sm:p-4 transition-colors duration-300">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="product-card-img max-h-full max-w-full object-contain transition-transform duration-400 ease-out"
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
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-section mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            Compra a R$ 3,79. Vende a R$ 18,90. Mais de 400% de margem. A diferença entre quem lucra e quem empata? Saber onde comprar.
          </p>
          <a href={CTA_LINK} className="btn-primary">
            QUERO ACESSO AOS FORNECEDORES
          </a>
        </div>
      </div>
    </section>
  )
}
