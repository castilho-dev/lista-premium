import { useScrollReveal } from '../hooks/useScrollReveal'

const rows = [
  { label: 'Fornecedores', bad: 'Números desatualizados', good: 'Atualização DIÁRIA no grupo VIP' },
  { label: 'Verificação', bad: 'Não verificados', good: 'Cada fornecedor testado pessoalmente' },
  { label: 'Informações', bad: 'Incompletas e confusas', good: 'Nome, endereço, WhatsApp e Instagram' },
  { label: 'Suporte', bad: 'Comprou e ficou sozinha', good: 'Suporte contínuo da equipe' },
  { label: 'Garantia', bad: 'Sem garantia nenhuma', good: '7 dias de garantia incondicional' },
  { label: 'CNPJ', bad: 'Exige CNPJ', good: '100% SEM necessidade de CNPJ' },
]

export default function Comparison() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white section-padding">
      <div className="container-main max-w-4xl">
        <div className="text-center mb-14 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            Por Que a Lista Prêmio{' '}
            <span className="text-rose-500">NÃO É</span>{' '}
            Como As Outras
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Se você já comprou uma lista que não funcionou, entenda por que esta é diferente
          </p>
        </div>

        <div className="fade-in-section stagger-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 text-center" />
            <div className="p-4 text-center border-x border-gray-200">
              <span className="font-heading font-semibold text-sm text-gray-500 uppercase tracking-wide">
                Listas Comuns
              </span>
            </div>
            <div className="p-4 text-center">
              <span className="font-heading font-semibold text-sm text-green-600 uppercase tracking-wide">
                Lista Prêmio
              </span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50/50 transition-colors`}
            >
              <div className="p-4 flex items-center">
                <span className="font-heading font-semibold text-sm text-gray-700">
                  {row.label}
                </span>
              </div>
              <div className="p-4 flex items-center gap-2 border-x border-gray-100">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">{row.bad}</span>
              </div>
              <div className="p-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-800 font-medium">{row.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
