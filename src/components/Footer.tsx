import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-[#2A1F16] text-white section-padding overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-48 w-[min(100%,48rem)] rounded-full bg-[#B88A56]/15 blur-3xl pointer-events-none" aria-hidden />

      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#B88A56]/45 to-transparent max-w-2xl mx-auto relative" aria-hidden />

      <div className="container-main pt-8 pb-10 relative z-10">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex flex-col items-center gap-3 my-6">
            <Logo size={64} />
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-400 font-medium">
              Lista Premium
            </span>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Ajudando mulheres a encontrar os fornecedores certos desde 2024.
          </p>

          <nav className="mt-6 flex items-center justify-center gap-1 sm:gap-2 flex-wrap" aria-label="Links legais">
            <Link
              to="/termos"
              className="text-neutral-500 text-xs font-medium hover:text-[#E5D1B8] transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
            >
              Termos de Uso
            </Link>
            <span className="text-neutral-600 text-xs" aria-hidden>•</span>
            <Link
              to="/privacidade"
              className="text-neutral-500 text-xs font-medium hover:text-[#E5D1B8] transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
            >
              Política de Privacidade
            </Link>
          </nav>

          <p className="mt-5 text-neutral-500 text-xs">
            <span className="text-neutral-400 font-medium">Contato:</span>{' '}
            <a
              href="mailto:fornecedoresmake.list@gmail.com"
              className="text-neutral-400 hover:text-[#E5D1B8] transition-colors"
            >
              fornecedoresmake.list@gmail.com
            </a>
          </p>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-neutral-500 text-[11px]">
              © {year} Lista Premium. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-neutral-600 text-[11px] leading-relaxed max-w-sm mx-auto">
              Este produto não garante obtenção de lucro. Os resultados variam de acordo com a dedicação de cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
