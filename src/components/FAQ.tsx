import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'É seguro? Já caí em golpe antes...',
    a: 'Sim, 100% seguro. Trabalhamos com plataforma de pagamento segura, temos +930 clientes satisfeitas e oferecemos garantia incondicional de 15 dias. Se não gostar, devolvemos seu dinheiro. Não foi você que errou antes — o mercado é cheio de pilantra mesmo. Aqui é diferente.',
  },
  {
    q: 'Como eu sei que os fornecedores são reais?',
    a: 'Cada fornecedor foi testado com compra real antes de entrar na lista. A gente comprou, recebeu, conferiu qualidade. Fornecedor que não responde ou que manda produto diferente do prometido é removido. E no grupo VIP, as próprias compradoras reportam suas experiências.',
  },
  {
    q: 'Isso é um curso?',
    a: 'Não. Você não vai assistir 40 horas de aula pra no final não ter nenhum contato de fornecedor. A Lista Premium é ferramenta: você abre, escolhe o fornecedor, manda mensagem e compra. Direto ao ponto.',
  },
  {
    q: 'Preciso de CNPJ para comprar desses fornecedores?',
    a: 'NÃO! Todos os fornecedores da lista aceitam compras sem CNPJ. É exatamente por isso que criamos a Lista Premium — para você que quer começar sem burocracia.',
  },
  {
    q: 'Tem pedido mínimo alto?',
    a: 'Os fornecedores da lista trabalham com diferentes valores. Incluímos opções para quem está começando e pode investir pouco — dá pra começar com menos de R$ 100.',
  },
  {
    q: 'E se eu comprar produto e encalhar?',
    a: 'A lista inclui fornecedores que aceitam pedido pequeno — dá pra começar testando com menos de R$100. Você não precisa comprar estoque grande de cara. Testa pouco, vê o que vende na sua região, e aí escala.',
  },
  {
    q: 'Os produtos são originais?',
    a: 'Sim. Incluímos apenas fornecedores que trabalham com produto original e nota fiscal. Produto falsificado prejudica sua cliente e seu nome — e a gente sabe que sua reputação é o que faz seu negócio crescer.',
  },
  {
    q: 'E se eu não conseguir vender?',
    a: 'A lista te dá fornecedores com preço de atacado real — margens de 200% a 400%. Mas você não fica sozinha: no grupo VIP, mulheres que já vendem compartilham o que funciona todo dia. O primeiro passo é ter o fornecedor certo. O resto você aprende com quem já tá fazendo.',
  },
  {
    q: 'Como recebo a lista após a compra?',
    a: 'O acesso é IMEDIATO. Assim que o pagamento for confirmado, você recebe o acesso para a plataforma com todos os fornecedores organizados. Faz login e já está tudo lá.',
  },
  {
    q: 'A lista é atualizada?',
    a: 'SIM! Além da lista completa, você entra no grupo VIP exclusivo onde nossa equipe compartilha TODOS OS DIAS novos fornecedores e oportunidades de lucro.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-neutral-200/80 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left gap-4 group"
      >
        <span className="font-semibold text-neutral-900 group-hover:text-[#8C5E33] transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
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
        <p className="text-neutral-600 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#FAF7F2] section-padding">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-10 fade-in-section">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8C5E33] font-medium mb-2">Suporte</p>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Ainda Com{' '}
            <span className="bg-gradient-to-r from-[#8C5E33] to-[#B88A56] bg-clip-text text-transparent">Dúvida</span>?
          </h2>
        </div>

        <div className="fade-in-section stagger-2 bg-white rounded-2xl px-6 sm:px-8 shadow-sm border border-neutral-200/70">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
