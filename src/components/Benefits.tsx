import { useScrollReveal } from '../hooks/useScrollReveal'

const normalItems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
      </svg>
    ),
    title: '+150 Fornecedores Verificados',
    desc: 'Cada fornecedor foi testado com compra real antes de entrar na lista. Você recebe nome, endereço, WhatsApp e Instagram — tudo organizado pra acessar do celular.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Acesso 100% Online',
    desc: 'Paga e recebe na hora. Tudo no celular — não precisa de computador, não precisa esperar entrega.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Garantia de 15 Dias',
    desc: 'Não gostou? Devolvemos cada centavo. Sem perguntas. Você não arrisca nada.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: 'Sem Necessidade de CNPJ',
    desc: 'Todos os fornecedores atendem quem é informal. Sem CNPJ, sem MEI, sem loja física. Dá pra começar de casa, do jeito que você está agora.',
  },
]

const bonusItems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Grupo VIP Exclusivo',
    desc: 'Fornecedores novos aparecendo TODOS OS DIAS com preços ainda menores. Acabou a era de pesquisar sozinha no Google por horas sem achar nada.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Marcas de Blogueiras',
    desc: 'Ruby Rose, Mari Maria, Francine Elke, Bruna Tavares. As marcas que suas clientes já pedem por nome — produto que vende sozinho.',
  },
]

export default function Benefits() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-14 fade-in-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 text-balance">
            Tudo Que Você Precisa Para{' '}
            <span className="text-rose-500">Começar a Lucrar</span>{' '}
            Hoje Mesmo
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalItems.map((item, i) => (
            <div
              key={`n-${i}`}
              className={`fade-in-section stagger-${i + 1} group glass-card p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-5 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
          {bonusItems.map((item, i) => (
            <div
              key={`b-${i}`}
              className={`fade-in-section stagger-${normalItems.length + i + 1} group relative p-7 rounded-2xl border-2 border-rose-200 bg-rose-50/80 hover:bg-rose-100/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                BÔNUS
              </span>
              <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center mb-5 group-hover:bg-rose-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
