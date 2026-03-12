import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_LINK, PRICE, PRICE_ANCHOR } from '../constants'

/**
 * SEÇÃO 5 — A oferta
 * Conecta a visão da seção 4 com o preço. Garantia em destaque. Bônus, checklist, CTA.
 */

const HEADLINE_MAIN = 'O que separa você de lucrar com maquiagem é o acesso aos fornecedores certos.'
const HEADLINE_VSL = 'A distância entre a vida que você tem e a que você acabou de imaginar é menor do que você pensa.'
const RECEIVE_HEADLINE = 'Você vai receber:'
const RECEIVE_ITEMS = [
  { name: 'Acesso', desc: 'Mais de 150 fornecedores no app, sempre atualizados. Tudo no seu celular.' },
  { name: 'Catálogo', desc: 'As marcas que sua cliente já pede: Ruby Rose, Mari Maria, Bruna Tavares e mais. Tudo com preço de atacado.' },
  { name: 'Garantia', desc: '15 dias pra testar. Não gostou? Devolvemos tudo, sem enrolação.' },
]

const BONUS_HEADLINE = 'E de bônus você ainda leva:'

const BONUS_ITEMS = [
  { name: 'Grupo VIP Exclusivo', desc: 'Grupo fechado com fornecedor novo todo dia e preço melhor. Você nunca fica só na lista.', priceStruck: 'R$ 127' },
  { name: 'Calculadora de Vendas', desc: 'Descubra sua margem e o preço certo na hora. Acabou o achismo na hora de vender.', priceStruck: 'R$ 97,90' },
  { name: 'Instagram 10K', desc: 'Cresça no orgânico sem gastar com anúncio. No seu ritmo, no seu bolso.', priceStruck: 'R$ 29,90' },
  { name: 'WhatsApp Lucrativo', desc: 'Catálogo que vende no automático. Seu negócio não para quando você para.', priceStruck: 'R$ 59,90' },
]

const CTA_TEXT = 'QUERO COMEÇAR AINDA HOJE'

type FinalCTAProps = { variant?: 'main' | 'vsl' }

export default function FinalCTA({ variant = 'vsl' }: FinalCTAProps) {
  const ref = useScrollReveal<HTMLElement>()
  const isMain = variant === 'main'
  const headline = isMain ? HEADLINE_MAIN : HEADLINE_VSL
  const headlineClass = isMain
    ? 'text-center font-display text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight mb-8'
    : 'text-center font-display text-2xl sm:text-3xl lg:text-[1.75rem] font-extrabold text-white leading-tight mb-8'

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
          <h2 className={headlineClass}>
            {headline}
          </h2>

          {/* Card único: você vai receber, bônus, preço e CTA */}
          <div className="rounded-2xl bg-white/[0.06] border border-white/[0.12] px-6 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-5 text-center">
            <h3 className="text-base font-heading font-semibold text-white mb-4">
              {RECEIVE_HEADLINE}
            </h3>
            <ul className="space-y-3 mb-6 text-left">
              {RECEIVE_ITEMS.map((item, i) => (
                <li key={i} className="flex flex-wrap items-start gap-2 py-2">
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[15px] sm:text-base text-[#E39A23]">{item.name}</span>
                    <span className="text-[14px] sm:text-[15px] text-white/80 leading-snug"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-5 mb-5" aria-hidden />
            <h3 className="text-base font-heading font-semibold text-white mb-4">
              {BONUS_HEADLINE}
            </h3>
            <ul className="space-y-3 mb-6 text-left">
              {BONUS_ITEMS.map((item, i) => (
                <li key={i} className="flex flex-wrap items-center gap-3 py-2">
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[15px] sm:text-base text-green-400">{item.name}</span>
                    <span className="text-[14px] sm:text-[15px] text-white/80 leading-snug"> — {item.desc}</span>
                  </div>
                  <span className="flex-shrink-0 text-[15px] sm:text-base line-through text-white/50">
                    {item.priceStruck}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-white/50 uppercase tracking-wider">
              De <span className="line-through text-white/40">{PRICE_ANCHOR}</span> por apenas
            </p>
            <p className="mt-4 font-display text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tight mb-6">
              {PRICE}
            </p>
            <a
              href={CHECKOUT_LINK}
              className="w-full text-center inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-heading font-extrabold text-sm sm:text-base uppercase text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 shadow-lg shadow-green-600/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              {CTA_TEXT}
            </a>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
              <img src="/kiwify-logo.svg" alt="Kiwify" className="h-4 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/visa.svg" alt="Visa" className="h-4 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-4 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/pix.svg" alt="PIX" className="h-4 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
            </div>
            <p className="mt-8 text-xs sm:text-sm font-medium uppercase tracking-widest text-white/40">
              Pagamento único — Acesso vitalício
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
