import { Link } from 'react-router-dom'

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 text-sm font-heading font-medium mb-12 transition-colors"
        >
          ← Voltar
        </Link>

        <div className="border-l-4 border-rose-500/60 pl-6 mb-10">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            Termos de Uso
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            Lista Premium
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-[15px]">
          <p>
            Ao adquirir a Lista Premium, você concorda com os seguintes termos:
          </p>

          <section className="pt-4">
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">1. Produto</h2>
            <p>
              A Lista Premium é um produto digital que consiste em uma lista de fornecedores atacadistas de maquiagem verificados, com nome, endereço, WhatsApp e Instagram. O acesso é enviado de forma imediata após a confirmação do pagamento.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">2. Acesso</h2>
            <p>
              O acesso ao produto é liberado na hora, assim que o pagamento for confirmado pela plataforma. Você recebe as instruções por e-mail e pode acessar do celular ou computador.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">3. Reembolso</h2>
            <p>
              Oferecemos garantia de 15 dias. Se você não estiver satisfeita, pode solicitar o reembolso integral dentro desse prazo, sem necessidade de justificativa. Após o reembolso, o acesso ao produto será revogado.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">4. Resultados</h2>
            <p>
              A Lista Premium fornece acesso a fornecedores verificados. Este produto não garante lucro ou resultados específicos. Os resultados variam de acordo com a dedicação, estratégia e condições de cada pessoa.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">5. Uso e Revenda</h2>
            <p>
              É proibida a revenda, o compartilhamento ou a distribuição da lista a terceiros. O acesso é pessoal e intransferível. O uso indevido pode resultar no cancelamento do acesso sem reembolso.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">6. Pagamento</h2>
            <p>
              O processamento de pagamento é realizado pela plataforma Kiwify, em ambiente seguro. A Lista Premium não armazena dados de cartão ou dados bancários.
            </p>
          </section>

          <div className="mt-14 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Última atualização: 2024. Em caso de dúvidas, entre em contato: fornecedoresmake.list@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
