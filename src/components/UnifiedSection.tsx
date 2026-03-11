import type { ReactElement } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * SEÇÃO 4 — Future pacing: "Sua primeira semana"
 * Timeline narrativa. Copy alinhada ao doc de inteligência (avatar: dona de casa/mãe/CLT, lê de noite no celular, quer não depender de marido/patrão, provar pra família).
 */

const TIMELINE = [
  {
    label: 'Quando você abre a lista',
    body: 'Nome, WhatsApp, endereço e Instagram de cada fornecedor — tudo no celular. Você escolhe um e manda mensagem.',
    icon: 'phone',
  },
  {
    label: 'Quando o catálogo chega',
    body: 'Ruby Rose, Mari Maria, Francine Elke, Bruna Tavares. As marcas que sua cliente já pede por nome, com preço de atacado de verdade.',
    icon: 'catalog',
  },
  {
    label: 'Primeiro pedido',
    body: 'Tudo do celular, de casa. Sem CNPJ, sem MEI. Ninguém te pede documento, ninguém te trata como se você não fosse de verdade. Você consegue fazer isso sozinha.',
    icon: 'bag',
  },
  {
    label: 'Primeira venda',
    body: 'O produto chega. Você tira foto, posta no Instagram, manda no grupo. A primeira cliente compra. Com margem que fecha. O primeiro dinheiro que é só seu. Você conseguiu.',
    icon: 'sale',
  },
  {
    label: 'O momento que você imagina',
    body: 'O dinheiro entra na sua conta. Quem duvidou percebe. Você não precisa mais pedir, não precisa mais explicar. O dinheiro é seu.',
    icon: 'heart',
  },
]

/* Ícones da timeline: celular, catálogo, sacola, venda, coração */
const IconPhone = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)
const IconCatalog = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)
const IconBag = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
)
const IconSale = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const IconHeart = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const STEP_ICONS: Record<string, () => ReactElement> = {
  phone: IconPhone,
  catalog: IconCatalog,
  bag: IconBag,
  sale: IconSale,
  heart: IconHeart,
}

export default function UnifiedSection() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 section-padding relative overflow-hidden bg-white"
    >
      <div className="container-main max-w-xl relative">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance leading-tight text-center mb-12 sm:mb-14">
          A próxima história é a <span className="text-rose-500">sua</span>
        </h2>

        <div className="relative">
          <div
            className="absolute top-5 sm:top-6 bottom-5 left-4 sm:left-5 w-0.5 bg-gray-200 -translate-x-1/2 rounded-full"
            aria-hidden
          />
          {TIMELINE.map((step, i) => {
            const Icon = STEP_ICONS[step.icon] || IconPhone
            return (
              <div key={i} className="relative flex gap-4 sm:gap-5 pb-8 sm:pb-10 last:pb-0">
                <div
                  className="relative z-10 flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-500/25"
                  aria-hidden
                >
                  <Icon />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-heading font-bold text-base sm:text-[17px] text-rose-600 mb-2">
                    {step.label}
                  </p>
                  <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
