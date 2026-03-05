import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_LINK, PRICE, PRICE_ANCHOR } from '../constants'

const benefits = [
  '+150 Fornecedores Verificados',
  'Acesso 100% Online',
  'Garantia de 15 Dias',
  'Sem Necessidade de CNPJ',
  'Grupo VIP Exclusivo',
  'Marcas de Blogueiras',
]

const bonuses = [
  { name: 'Calculadora de vendas', price: 'R$ 97,90' },
  { name: 'Instagram 10K', price: 'R$ 29,90' },
  { name: 'WhatsApp Lucrativo', price: 'R$ 59,90' },
]

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="comprar"
      className="relative py-24 lg:py-32 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900/30" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-rose-500/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold-400/12 rounded-full blur-3xl" />

      <div className="relative z-10 container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tudo Que Separa Você de Quem Já Está Lucrando
            <br />
            é <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-400">Uma Decisão</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-lg mx-auto">
            Você não precisa de mais coragem. Precisa do acesso certo.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          {/* Card CTA — visual mais profissional */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-2xl shadow-black/20 overflow-hidden">
            {/* Borda superior: mais alta + gradiente rosa/dourado com brilho passando da esquerda pra direita */}
            <div className="relative h-2 sm:h-2.5 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              {/* Base: gradiente do tema */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, #D5004D 0%, #ED5A8F 25%, #D4AF37 50%, #E4C36A 75%, #D5004D 100%)',
                }}
                aria-hidden
              />
              {/* Brilho que atravessa da esquerda para a direita */}
              <div
                className="absolute inset-0 bg-shine animate-shine-sweep"
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 75%, transparent 100%)',
                }}
                aria-hidden
              />
            </div>

            <div className="p-8 sm:p-10">
              {/* 1. Benefícios */}
              <div>
                <p className="text-center text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Benefícios</p>
                <ul className="space-y-3 max-w-md mx-auto text-left">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Bônus com preços riscados */}
              <div className="mt-8">
                <p className="text-center text-gold-300/90 text-xs font-semibold uppercase tracking-wider mb-4">Bônus</p>
                <ul className="space-y-2.5 max-w-md mx-auto text-left">
                  {bonuses.map((item, i) => (
                    <li key={i} className="flex items-center justify-between gap-3 text-white/90 text-sm">
                      <span className="flex items-center gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10">
                          <svg className="w-2.5 h-2.5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{item.name}</span>
                      </span>
                      <span className="shrink-0 text-white/70">
                        <span className="line-through text-white/50">{item.price}</span>
                        <span className="ml-1 text-gold-300/90">por R$ 00,00</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risquinho */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent max-w-xs mx-auto my-8" aria-hidden />

              {/* 3. De R$ 127 por apenas / R$ 67 / Pagamento único */}
              <div className="relative text-center py-4">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none" aria-hidden>
                  <div className="w-40 h-24 sm:w-48 sm:h-28 bg-rose-500/10 rounded-full blur-2xl" />
                </div>
                <p className="relative text-white/70 text-sm sm:text-base font-semibold uppercase tracking-[0.15em]">
                  De <span className="line-through text-white/50">{PRICE_ANCHOR}</span> por apenas
                </p>
                <p className="relative mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter tabular-nums">
                  {PRICE}
                </p>
                <p className="relative mt-4 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-gold-300/90">
                  Pagamento único — Acesso vitalício
                </p>
              </div>

              {/* 4. Botão CTA */}
              <div className="mt-8 sm:mt-10 flex flex-col items-center gap-5">
                <a
                  href={CHECKOUT_LINK}
                  className="btn-primary-large w-full sm:w-auto text-center inline-flex items-center justify-center shadow-lg shadow-green-600/20"
                >
                  QUERO O ACESSO AGORA
                </a>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <img
                    src="/kiwify-logo.svg"
                    alt="Kiwify"
                    className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]"
                  />
                  <img src="/visa.svg" alt="Visa" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
                  <img src="/pix.svg" alt="PIX" className="h-5 w-auto object-contain opacity-50 [filter:brightness(0)_invert(1)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Garantia e prova social — fora do container */}
          <p className="mt-10 text-center text-sm text-white/50 leading-relaxed">
            15 dias pra testar — não gostou, devolvemos cada centavo
          </p>
          <p className="mt-2 text-center text-sm text-white/45">
            Mais de 937 mulheres já estão comprando dos mesmos fornecedores.
          </p>
        </div>
      </div>
    </section>
  )
}
