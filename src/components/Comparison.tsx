import { useScrollReveal } from '../hooks/useScrollReveal'

const rows = [
  { label: 'Fornecedores', bad: 'Lista velha cheia de número que não existe', good: 'Atualização DIÁRIA no grupo VIP' },
  { label: 'Verificação', bad: 'Ninguém testou antes de te vender', good: 'Cada fornecedor testado pessoalmente' },
  { label: 'Informações', bad: 'Só nome e um número que não responde', good: 'Nome, endereço, WhatsApp e Instagram' },
  { label: 'Suporte', bad: 'Pagou, sumiu, te bloquearam', good: 'Suporte contínuo da equipe' },
  { label: 'Garantia', bad: 'Perdeu o Pix? Problema seu', good: '15 dias de garantia incondicional' },
  { label: 'CNPJ', bad: 'Sem CNPJ nem te atendem', good: '100% SEM necessidade de CNPJ' },
  { label: 'Produto', bad: 'Produto falsificado que mancha a pele da cliente', good: 'Fornecedores com produto original e nota' },
  { label: 'Investimento', bad: 'Cursos de R$300 que não dão nenhum contato', good: 'Acesso a +150 fornecedores por uma fração disso' },
]

const IconX = () => (
  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600" aria-hidden>
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </span>
)

const IconCheck = () => (
  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600" aria-hidden>
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </span>
)

export default function Comparison() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white section-padding">
      <div className="container-main max-w-4xl">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            Você <span className="text-rose-500">Já Caiu</span> Nessa Antes
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Veja por que a Lista Premium é diferente de tudo que você já tentou.
          </p>
        </div>

        <div className="fade-in-section min-w-0">
          {/* Mobile: cards empilhados */}
          <div className="md:hidden space-y-3">
            {rows.map((row) => (
              <div
                key={row.label}
                className="overflow-hidden rounded-xl border border-rose-200/60 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              >
                <div className="px-4 py-3 border-b border-rose-100 bg-rose-50/80">
                  <span className="font-heading text-sm font-semibold text-gray-800">
                    {row.label}
                  </span>
                </div>
                <div className="divide-y divide-rose-100">
                  <div className="px-4 py-3 flex items-start gap-3 bg-white">
                    <IconX />
                    <div>
                      <span className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-0.5">
                        Listas Comuns
                      </span>
                      <span className="text-sm text-gray-600">{row.bad}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-start gap-3 bg-green-50/60">
                    <IconCheck />
                    <div>
                      <span className="font-heading text-xs font-semibold uppercase tracking-wider text-green-700 block mb-0.5">
                        Lista Premium
                      </span>
                      <span className="text-sm font-medium text-gray-800">{row.good}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: tabela */}
          <div className="hidden md:block overflow-x-auto">
            <div className="overflow-hidden rounded-2xl border border-rose-200/60 bg-rose-50 shadow-[0_2px_12px_rgba(0,0,0,0.06)] min-w-0">
              <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-rose-200/80 bg-rose-100/80">
                <div className="px-5 py-4 sm:px-6 sm:py-5">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Critério
                  </span>
                </div>
                <div className="border-x border-rose-200/60 px-5 py-4 text-center sm:px-6 sm:py-5">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-gray-500">
                    Listas Comuns
                  </span>
                </div>
                <div className="px-5 py-4 text-center sm:px-6 sm:py-5 bg-green-50/70">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-green-700">
                    Lista Premium
                  </span>
                </div>
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1fr_1fr_1fr] border-b border-rose-200/50 last:border-b-0 ${
                    i % 2 === 1 ? 'bg-white/60' : 'bg-rose-50/50'
                  } transition-colors hover:bg-rose-100/40`}
                >
                  <div className="px-5 py-4 flex items-center sm:px-6 sm:py-4">
                    <span className="font-heading text-sm font-semibold text-gray-800">
                      {row.label}
                    </span>
                  </div>
                  <div className="border-x border-rose-200/40 px-5 py-4 flex items-center gap-3 sm:px-6 sm:py-4">
                    <IconX />
                    <span className="text-sm text-gray-600">{row.bad}</span>
                  </div>
                  <div className="px-5 py-4 flex items-center gap-3 sm:px-6 sm:py-4 bg-green-50/50">
                    <IconCheck />
                    <span className="text-sm font-medium text-gray-800">{row.good}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
