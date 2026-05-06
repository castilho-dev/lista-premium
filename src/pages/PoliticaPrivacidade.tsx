import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { isAuthenticated } from '../auth';

export default function PoliticaPrivacidade() {
  const backTo = isAuthenticated() ? '/inicio' : '/';
  const backLabel = isAuthenticated() ? 'Voltar para o início' : 'Voltar ao login';

  return (
    <div className="space-y-6 max-w-3xl">
      <Link
        to={backTo}
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        {backLabel}
      </Link>

      <h1 className="text-3xl md:text-4xl font-serif font-medium text-neutral-900 tracking-tight">
        Política de Privacidade
      </h1>

      <div className="text-neutral-600 text-sm leading-relaxed space-y-4">
        <p>
          Armazenamos apenas os dados necessários para validar seu acesso (e-mail e nome, quando
          disponível). Sua sessão é mantida no navegador via sessionStorage e é encerrada ao fechar
          a aba.
        </p>
        <p>
          Não compartilhamos seus dados com terceiros para fins de marketing. O contato direto com
          fornecedores ocorre fora do aplicativo, nos canais próprios de cada marca.
        </p>
        <p>Você pode solicitar a remoção dos seus dados contatando o suporte a qualquer momento.</p>
      </div>
    </div>
  );
}
