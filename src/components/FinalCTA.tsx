import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_LINK, PRICE, PRICE_ANCHOR } from '../constants'

/**
 * SEÇÃO 5 — "A OFERTA"
 * Design: dark premium, glass sutil, CTA em evidência, hierarquia clara.
 */

const HEADLINE = 'Com a primeira venda, o acesso já se pagou.'
const SUBHEADLINE = 'E se não funcionar, devolvemos tudo. Sem perguntas.'
const BONUS_HEADLINE = 'E de bônus você ainda leva:'

const BONUS_ITEMS = [
  { name: 'Grupo VIP Exclusivo', desc: 'Fornecedores novos todos os dias com preços ainda menores.', priceStruck: 'R$ 127,00' },
  { name: 'Calculadora de Vendas', desc: 'Calcule sua margem real antes de comprar qualquer produto.', priceStruck: 'R$ 97,90' },
  { name: 'Instagram 10K', desc: 'Atraia clientes sem gastar com anúncios pagos.', priceStruck: 'R$ 29,90' },
  { name: 'WhatsApp Lucrativo', desc: 'Modelo de catálogo que vende enquanto você dorme.', priceStruck: 'R$ 59,90' },
]

const CHECKLIST_ITEMS = ['+150 fornecedores testados', 'Sem CNPJ', 'Marcas de blogueiras', 'Garantia 15 dias', '4 bônus inclusos']

const CTA_TEXTS = ['QUERO O ACESSO AGORA', 'QUERO ENTRAR NA LISTA']
const CTA_INDEX = 0

const POST_CTA_LINE1 = '15 dias pra testar — não gostou, devolvemos cada centavo.'
const POST_CTA_LINE2 = 'Mais de 937 mulheres já estão comprando dos mesmos fornecedores.'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="comprar" className="relative py-20 lg:py-28 section-padding overflow-hidden">
      {/* Fundo: dark único com gradiente sutil */}
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800/95" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 container-main">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <h2 className="text-center font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
            {HEADLINE}
          </h2>
          <p className="text-center text-[15px] text-white/70 max-w-md mx-auto mb-10">
            {SUBHEADLINE}
          </p>

          {/* Bônus */}
          <h3 className="text-center text-base font-semibold text-white/90 mb-4">
            {BONUS_HEADLINE}
          </h3>
          <ul className="space-y-3 mb-8">
            {BONUS_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm"
              >
                <span className="flex-shrink-0 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  Bônus
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[15px] text-white block">{item.name}</span>
                  <span className="text-[13px] text-white/60">{item.desc}</span>
                </div>
                <span className="flex-shrink-0 text-right">
                  <span className="line-through text-[13px] text-white/40">{item.priceStruck}</span>
                  <span className="ml-2 text-[15px] font-bold text-emerald-400">R$ 0,00</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Separador */}
          <div className="h-px bg-white/[0.08] mb-8" aria-hidden />

          {/* Checklist compacto */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] text-white/50 mb-8">
            {CHECKLIST_ITEMS.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          {/* Bloco de preço — card único, preço em destaque */}
          <div className="rounded-2xl bg-white/[0.05] border border-white/[0.08] p-8 sm:p-10 text-center mb-8">
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

          {/* CTA + pagamentos */}
          <div className="flex flex-col items-center gap-6">
            <a
              href={CHECKOUT_LINK}
              className="w-full sm:max-w-md text-center inline-flex items-center justify-center py-4 px-8 rounded-xl font-extrabold text-base sm:text-lg uppercase text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 shadow-lg shadow-emerald-500/25"
            >
              {CTA_TEXTS[CTA_INDEX]}
            </a>
            <p className="text-[12px] text-white/40 uppercase tracking-wider">
              Pagamento seguro
            </p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <img src="/kiwify-logo.svg" alt="Kiwify" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/visa.svg" alt="Visa" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
              <img src="/pix.svg" alt="PIX" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
            </div>
          </div>

          {/* Reforços */}
          <p className="mt-8 text-center text-[13px] text-white/45 leading-relaxed flex items-center justify-center gap-2 flex-wrap">
            <svg className="w-4 h-4 flex-shrink-0 text-white/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10z"/>
            </svg>
            {POST_CTA_LINE1}
          </p>
          <p className="mt-2 text-center text-[13px] text-white/40">
            {POST_CTA_LINE2}
          </p>
        </div>
      </div>
    </section>
  )
}
