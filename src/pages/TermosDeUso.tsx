import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { isAuthenticated } from '../auth';

export default function TermosDeUso() {
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
        Termos de Uso
      </h1>

      <div className="text-neutral-600 text-sm leading-relaxed space-y-4">
        <p>
          Ao acessar a área de membros da Lista Premium você concorda em utilizar as informações
          disponibilizadas de forma pessoal e intransferível. O conteúdo é protegido e sua
          redistribuição não é permitida.
        </p>
        <p>
          A Lista Premium reúne dados públicos de fornecedores para facilitar o contato comercial.
          Os preços, políticas e condições são definidos por cada fornecedor e podem mudar sem aviso.
        </p>
        <p>
          O acesso é vinculado ao e-mail de compra. Em caso de uso indevido, o acesso pode ser
          suspenso.
        </p>
      </div>
    </div>
  );
}
