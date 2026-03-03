import { Link } from 'react-router-dom'

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 text-sm font-heading font-medium mb-12 transition-colors"
        >
          ← Voltar
        </Link>

        <div className="border-l-4 border-rose-500/60 pl-6 mb-10">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            Lista Premium
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-[15px]">
          <p>
            Esta política descreve como a Lista Premium trata os dados das usuárias.
          </p>

          <section className="pt-4">
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">1. Dados coletados</h2>
            <p>
              Coletamos nome, e-mail e dados necessários ao processamento do pagamento (realizado pela plataforma Kiwify). Não armazenamos dados de cartão de crédito ou dados bancários em nossos servidores.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">2. Uso dos dados</h2>
            <p>
              Os dados são utilizados para: liberar seu acesso ao produto após a compra, enviar comunicações relacionadas ao produto (acesso, atualizações, grupo VIP), prestar suporte e cumprir obrigações legais quando aplicável.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">3. Compartilhamento</h2>
            <p>
              Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing. Os dados de pagamento são processados exclusivamente pela Kiwify, em conformidade com as normas de segurança aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">4. Direito de exclusão</h2>
            <p>
              Você pode solicitar a exclusão dos seus dados pessoais entrando em contato conosco. A exclusão pode implicar a perda de acesso ao produto, conforme nossos termos de uso.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">5. Cookies</h2>
            <p>
              O site pode utilizar cookies para melhorar a experiência de navegação e para fins técnicos (por exemplo, lembrar preferências). Você pode configurar seu navegador para recusar cookies, observando que isso pode afetar algumas funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-gray-900 font-bold text-lg mb-2">6. Contato</h2>
            <p>
              Para dúvidas, solicitações de exclusão de dados ou outras questões sobre privacidade, entre em contato: fornecedoresmake.list@gmail.com
            </p>
          </section>

          <div className="mt-14 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Última atualização: 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
