import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * SEÇÃO 4 — Future pacing: "Sua primeira semana"
 * Timeline narrativa. A lead se VÊ em cada cena. Sem cards de benefícios, sem números em destaque.
 */

const HEADLINE = 'A próxima história é a sua.'

const TIMELINE = [
  {
    label: 'Hoje à noite',
    body: 'Você abre a lista no celular. Nome, WhatsApp, endereço e Instagram de cada fornecedor. Tudo ali. Você escolhe um, manda mensagem no WhatsApp e espera. A sensação é de quem finalmente achou o que procurava.',
  },
  {
    label: 'Amanhã de manhã',
    body: 'O fornecedor responde. Manda o catálogo. Ruby Rose por R$3. Mari Maria por R$5. Francine Elke por R$4. As marcas que sua cliente já pede por nome — e você nunca soube onde comprar no atacado. Os preços são reais.',
  },
  {
    label: 'Primeiro pedido',
    body: 'Você faz o pedido do celular. De casa. Sem CNPJ, sem MEI, sem ninguém pra aprovar. Ninguém te pede documento, ninguém te trata diferente. Você consegue fazer isso sozinha.',
  },
  {
    label: 'Primeira venda',
    body: 'O produto chega. Você tira foto, posta no Instagram, manda no grupo. A primeira cliente compra. Você vendeu por R$18 o que custou R$3. Na primeira venda, o acesso à lista já se pagou. Você conseguiu.',
  },
  {
    label: 'O momento que você imagina',
    body: 'O dinheiro entra na sua conta. O marido percebe. A mãe vê que não era ilusão. Você não precisa mais pedir. Não precisa mais explicar. O dinheiro é seu.',
  },
]

const TRANSITION_PHRASE = 'E isso sai por menos do que você já gastou — ou perdeu — tentando sozinha.'

export default function UnifiedSection() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 section-padding relative overflow-hidden bg-cream-50"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" aria-hidden />

      <div className="container-main max-w-xl relative">
        <h2 className="font-display text-2xl sm:text-[1.625rem] font-extrabold text-gray-900 text-balance leading-tight text-center mb-12 sm:mb-14">
          {HEADLINE}
        </h2>

        {/* Timeline: um bloco por momento, círculo à esquerda, linha conectando */}
        <div className="relative">
          {/* Linha vertical contínua atrás dos círculos */}
          <div
            className="absolute top-3 bottom-3 left-4 sm:left-5 w-0.5 bg-gray-200 -translate-x-1/2 rounded-full"
            aria-hidden
          />
          {TIMELINE.map((step, i) => (
            <div key={i} className="relative flex gap-4 sm:gap-5 pb-8 sm:pb-10 last:pb-0">
              <div className="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500 border-4 border-cream-50" aria-hidden />
              <div className="flex-1 min-w-0 pt-0.5">
                <p className="font-heading font-bold text-base sm:text-[17px] text-rose-600 mb-2">
                  {step.label}
                </p>
                <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transição */}
        <div className="text-center mt-12 sm:mt-14 pt-4">
          <p className="font-heading font-semibold text-[17px] sm:text-lg text-rose-600 max-w-md mx-auto">
            {TRANSITION_PHRASE}
          </p>
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-rose-300 text-rose-500 mt-5"
            aria-hidden
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
