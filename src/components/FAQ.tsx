import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'É seguro? Já caí em golpe antes...',
    a: 'Sim, 100% seguro. Trabalhamos com plataforma de pagamento segura, temos +930 clientes satisfeitas e oferecemos garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro. Não foi você que errou antes — o mercado é cheio de pilantra mesmo. Aqui é diferente.',
  },
  {
    q: 'Preciso de CNPJ para comprar desses fornecedores?',
    a: 'NÃO! Todos os fornecedores da lista aceitam compras sem CNPJ. É exatamente por isso que criamos a Lista Prêmio — para você que quer começar sem burocracia.',
  },
  {
    q: 'Como recebo a lista após a compra?',
    a: 'O acesso é IMEDIATO. Assim que o pagamento for confirmado, você recebe o acesso para a plataforma com todos os fornecedores organizados. Faz login e já está tudo lá.',
  },
  {
    q: 'A lista é atualizada?',
    a: 'SIM! Além da lista completa, você entra no grupo VIP exclusivo onde nossa equipe compartilha TODOS OS DIAS novos fornecedores e oportunidades de lucro.',
  },
  {
    q: 'E se eu não conseguir vender?',
    a: 'A lista te dá acesso aos fornecedores certos com preços de atacado. Com margem de lucro de até 400%, o produto praticamente se vende sozinho. E se ainda assim não gostar, tem 7 dias de garantia.',
  },
  {
    q: 'Tem pedido mínimo alto?',
    a: 'Os fornecedores da lista trabalham com diferentes valores. Incluímos opções para quem está começando e pode investir pouco — dá pra começar com menos de R$ 100.',
  },
  {
    q: 'Quanto tempo leva para chegar?',
    a: 'É digital! Você recebe AGORA, no mesmo instante após a confirmação do pagamento. Acessa do celular ou computador.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left gap-4 group"
      >
        <span className="font-heading font-semibold text-gray-800 group-hover:text-rose-500 transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream-100 section-padding">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-14 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="fade-in-section stagger-2 bg-white rounded-2xl px-6 sm:px-8 shadow-sm border border-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
