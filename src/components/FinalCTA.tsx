import { useScrollReveal } from '../hooks/useScrollReveal'
import { CTA_LINK, PRICE } from '../constants'

const checklistItems = [
  '+150 fornecedores testados com compra real — não é lista copiada do Google',
  'Grupo VIP com fornecedores novos aparecendo TODO DIA',
  'Marcas que suas clientes já pedem por nome',
  '100% sem CNPJ — ninguém vai te barrar na porta',
  'Paga e recebe na hora, tudo no celular',
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
          {/* Container leve: só borda rose sutil, sem glass */}
          <div className="bg-white/[0.03] border border-rose-500/20 rounded-3xl p-8 sm:p-12">
            {/* Preço — com glow rose */}
            <div className="relative text-center py-4">
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none" aria-hidden>
                <div className="w-48 h-32 sm:w-56 sm:h-36 bg-rose-500/20 rounded-full blur-3xl" />
              </div>
              <p className="relative text-white/65 text-xs font-semibold uppercase tracking-[0.25em]">
                Acesso completo por apenas
              </p>
              <p className="relative mt-4 font-display text-5xl sm:text-6xl font-bold text-white tracking-tighter tabular-nums">
                {PRICE}
              </p>
              <p className="relative mt-6 text-sm font-medium tracking-widest uppercase text-gold-300/90">
                Pagamento único — Acesso vitalício
              </p>
            </div>

            {/* Checklist — checkmarks rose */}
            <ul className="mt-10 space-y-4 max-w-md mx-auto text-left">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20 mt-0.5">
                    <svg className="w-3 h-3 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botão CTA */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={CTA_LINK}
                className="btn-primary-large w-full sm:w-auto text-center inline-flex items-center justify-center"
              >
                QUERO O ACESSO AGORA
              </a>
              <img
                src="/kiwify-logo.svg"
                alt="Kiwify"
                className="h-6 w-auto object-contain opacity-40 [filter:brightness(0)_invert(1)]"
              />
            </div>
          </div>

          {/* Garantia e prova social — fora do container */}
          <p className="mt-10 text-center text-sm text-white/50 leading-relaxed">
            7 dias pra testar — não gostou, devolvemos cada centavo
          </p>
          <p className="mt-2 text-center text-sm text-white/45">
            Mais de 937 mulheres já estão comprando dos mesmos fornecedores.
          </p>
        </div>
      </div>
    </section>
  )
}
