import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_LINK, PRICE, PRICE_ANCHOR } from '../constants'

/**
 * SEÇÃO 5 — A oferta
 * Conecta a visão da seção 4 com o preço. Garantia em destaque. Bônus, checklist, CTA.
 */

const HEADLINE = 'R$67 é a distância entre a vida que você tem e a que você acabou de imaginar.'
const SUBHEADLINE = 'Se em 15 dias você não gostar, devolvemos tudo. Sem perguntas.'

const BONUS_HEADLINE = 'E de bônus você ainda leva:'

const BONUS_ITEMS = [
  { name: 'Grupo VIP Exclusivo', desc: 'Fornecedores novos todo dia, com preço ainda menor. Você não fica dependendo só da lista — ela cresce com você.', priceStruck: 'R$ 127,00' },
  { name: 'Calculadora de Vendas', desc: 'Você sabe quanto vai lucrar antes de comprar qualquer produto. Para de adivinhar e fecha a margem de verdade.', priceStruck: 'R$ 97,90' },
  { name: 'Instagram 10K', desc: 'Atraia cliente sem gastar com anúncio. Cresce no orgânico, do jeito que sua bolsa permite.', priceStruck: 'R$ 29,90' },
  { name: 'WhatsApp Lucrativo', desc: 'Modelo de catálogo que vende enquanto você dorme. Seu negócio não para quando você para.', priceStruck: 'R$ 59,90' },
]

const CHECKLIST = ['+150 fornecedores', 'Sem CNPJ', 'Marcas de blogueiras', 'Garantia 15 dias', '4 bônus']

const CTA_TEXT = 'QUERO COMEÇAR AINDA HOJE'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="comprar"
      className="relative py-20 lg:py-28 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800/95" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none" aria-hidden />

      <div className="relative z-10 container-main">
        <div className="max-w-lg mx-auto">
          <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-[1.75rem] font-extrabold text-white leading-tight mb-4">
            {HEADLINE}
          </h2>
          <p className="text-center text-[15px] sm:text-base text-white/80 max-w-md mx-auto mb-10">
            {SUBHEADLINE}
          </p>

          <h3 className="text-center text-base font-heading font-semibold text-white/95 mb-4">
            {BONUS_HEADLINE}
          </h3>
          <ul className="space-y-3 mb-8">
            {BONUS_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flex flex-wrap items-start gap-3 p-4 rounded-xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm"
              >
                <span className="flex-shrink-0 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  Bônus
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[15px] text-white block">{item.name}</span>
                  <span className="text-[13px] text-white/60 leading-snug">{item.desc}</span>
                </div>
                <span className="flex-shrink-0 text-right">
                  <span className="line-through text-[13px] text-white/40">{item.priceStruck}</span>
                  <span className="ml-2 text-[15px] font-bold text-green-400">R$ 0,00</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Mini-checklist: uma linha, sutil */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[13px] text-white/50 mb-8">
            {CHECKLIST.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-white/[0.05] border border-white/[0.1] p-8 sm:p-10 text-center mb-8">
            <p className="text-sm text-white/50 uppercase tracking-wider">
              De <span className="line-through text-white/40">{PRICE_ANCHOR}</span> por apenas
            </p>
            <p className="mt-2 font-display text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tight">
              {PRICE}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/40">
              Pagamento único — Acesso vitalício
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href={CHECKOUT_LINK}
              className="w-full sm:max-w-md text-center inline-flex items-center justify-center py-4 px-8 rounded-xl font-heading font-extrabold text-base sm:text-lg uppercase text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              {CTA_TEXT}
            </a>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <img src="/kiwify-logo.svg" alt="Kiwify" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/visa.svg" alt="Visa" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/pix.svg" alt="PIX" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
