import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * SEÇÃO 4 — "O QUE VOCÊ RECEBE"
 * Design: limpo, editorial, hierarquia clara. Cards com acento lateral nos destaques.
 */

const HEADLINE = 'Pronto. Você achou seus fornecedores.'

const SUBHEADLINE = 'Veja o que está dentro da lista.'

const SOLUTION_CARDS = [
  { number: '+150', title: 'Cada fornecedor testado de verdade', content: 'Nome, endereço, WhatsApp e Instagram de cada um. Tudo organizado pra acessar do celular na hora.', isHighlight: true },
  { number: '100%', title: 'Sem CNPJ? Aqui você entra igual', content: 'Todos os fornecedores atendem quem não tem CNPJ. Sem MEI, sem loja física. Começa de casa, do jeito que você está agora.', isHighlight: false },
  { number: 'R$3 → R$18', title: 'As marcas que vendem sozinhas', content: 'Ruby Rose, Mari Maria, Francine Elke, Bruna Tavares. Compra no atacado, vende com margem real. Produto que as clientes já pedem por nome.', isHighlight: false },
  { number: '15 dias', title: 'Sem risco nenhum pra você', content: 'Compra protegida com garantia de reembolso total. Não gostou, devolvemos cada centavo. Sem perguntas, sem burocracia.', isHighlight: true },
]

const TRANSITION_PHRASE = 'E custa menos do que você já gastou tentando.'

export default function UnifiedSection() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white section-padding">
      <div className="container-main max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-gray-900 text-balance leading-[1.2] text-center mb-4">
          {HEADLINE}
        </h2>
        <p className="text-center text-[15px] sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed mb-12">
          {SUBHEADLINE}
        </p>

        <div className="space-y-5 mb-12">
          {SOLUTION_CARDS.map((card, i) => (
            <div
              key={i}
              className={`fade-in-section relative rounded-2xl bg-white overflow-hidden
                transition-shadow duration-200 hover:shadow-lg
                ${card.isHighlight
                  ? 'shadow-md ring-1 ring-gray-200/80'
                  : 'shadow-sm ring-1 ring-gray-100'}`}
            >
              {/* Barra de acento lateral nos cards em destaque */}
              {card.isHighlight && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 rounded-l-2xl" aria-hidden />
              )}
              <div className={`p-6 sm:p-7 ${card.isHighlight ? 'pl-7 sm:pl-8' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-rose-500 tracking-tight mb-3">
                  {card.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-semibold text-[17px] sm:text-lg text-rose-500">
            {TRANSITION_PHRASE}
          </p>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-rose-200 text-rose-400 mt-4 text-sm font-medium" aria-hidden>
            ↓
          </span>
        </div>
      </div>
    </section>
  )
}
