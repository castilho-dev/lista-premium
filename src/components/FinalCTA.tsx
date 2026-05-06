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
    ? 'text-center font-serif font-medium text-3xl sm:text-4xl lg:text-4xl text-white leading-tight mb-8 tracking-tight'
    : 'text-center font-serif font-medium text-2xl sm:text-3xl lg:text-[1.75rem] text-white leading-tight mb-8 tracking-tight'

  return (
    <section
      ref={ref}
      id="comprar"
      className="relative py-20 lg:py-28 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-[#3A2A1A]" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#B88A56]/20 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#5C3D22]/25 blur-3xl pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 container-main">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#E5D1B8]/90 font-medium mb-3">
            Oferta
          </p>
          <h2 className={headlineClass}>
            {headline}
          </h2>

          <div className="rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-amber-900/5 px-6 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-7 text-center">
            <h3 className="text-base font-medium text-neutral-900 mb-4">
              {RECEIVE_HEADLINE}
            </h3>
            <ul className="space-y-3 mb-6 text-left">
              {RECEIVE_ITEMS.map((item, i) => (
                <li key={i} className="flex flex-wrap items-start gap-2 py-2">
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[15px] sm:text-base text-[#8C5E33]">{item.name}</span>
                    <span className="text-[14px] sm:text-[15px] text-neutral-600 leading-snug"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-neutral-200/80 pt-5 mb-5" aria-hidden />
            <h3 className="text-base font-medium text-neutral-900 mb-4">
              {BONUS_HEADLINE}
            </h3>
            <ul className="space-y-3 mb-6 text-left">
              {BONUS_ITEMS.map((item, i) => (
                <li key={i} className="flex flex-wrap items-center gap-3 py-2">
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[15px] sm:text-base text-[#B88A56]">{item.name}</span>
                    <span className="text-[14px] sm:text-[15px] text-neutral-600 leading-snug"> — {item.desc}</span>
                  </div>
                  <span className="flex-shrink-0 text-[15px] sm:text-base line-through text-neutral-400">
                    {item.priceStruck}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-neutral-500 uppercase tracking-wider">
              De <span className="line-through text-neutral-400">{PRICE_ANCHOR}</span> por apenas
            </p>
            <p className="mt-4 font-serif font-medium text-5xl sm:text-6xl bg-gradient-to-r from-[#8C5E33] to-[#B88A56] bg-clip-text text-transparent tabular-nums tracking-tight mb-6">
              {PRICE}
            </p>
            <a
              href={CHECKOUT_LINK}
              className="w-full text-center inline-flex items-center justify-center py-3.5 px-6 rounded-full text-sm sm:text-base font-medium uppercase tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#B88A56]/50 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 shadow-lg shadow-neutral-900/15 hover:scale-[1.02] active:scale-[0.98]"
            >
              {CTA_TEXT}
            </a>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-4 opacity-70">
              <img src="/kiwify-logo.svg" alt="Kiwify" className="h-4 w-auto object-contain" />
              <img src="/visa.svg" alt="Visa" className="h-4 w-auto object-contain" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-4 w-auto object-contain" />
              <img src="/pix.svg" alt="PIX" className="h-4 w-auto object-contain" />
            </div>
            <p className="mt-8 text-xs sm:text-sm font-medium uppercase tracking-widest text-neutral-400">
              Pagamento único — Acesso vitalício
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
