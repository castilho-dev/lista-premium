import { useScrollReveal } from '../hooks/useScrollReveal'
import { CTA_LINK, PRICE } from '../constants'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="comprar"
      className="relative py-20 lg:py-28 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900/40" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-main text-center">
        <div className="fade-in-section max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Chegou a Sua Vez de Ter o Negócio Que Sempre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-400">
              Sonhou
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Mais de 930 mulheres já deram o primeiro passo. E você?
          </p>

          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-sm font-heading uppercase tracking-wide">
                Acesso completo por apenas
              </span>
              <span className="text-white font-display text-5xl sm:text-6xl font-bold mt-2">
                {PRICE}
              </span>
              <span className="text-white/50 text-sm mt-1">Pagamento único</span>
            </div>

            <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
              {[
                '+150 fornecedores verificados',
                'Grupo VIP com atualizações diárias',
                'Marcas de blogueiras incluídas',
                'Sem necessidade de CNPJ',
                'Acesso imediato',
                'Garantia de 7 dias',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href={CTA_LINK} className="btn-primary-large w-full sm:w-auto animate-pulse-soft">
                QUERO ACESSO AGORA POR {PRICE}
              </a>
            </div>

            <p className="mt-4 text-white/40 text-xs flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Compra segura com garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
