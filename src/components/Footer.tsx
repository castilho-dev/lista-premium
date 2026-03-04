import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 section-padding">
      {/* Linha de destaque no topo (alinhada ao tema) */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent max-w-2xl mx-auto" aria-hidden />

      <div className="container-main pt-8 pb-10">
        <div className="max-w-lg mx-auto text-center">
          {/* Logo */}
          <img
            src="/logo-1.png"
            alt="Lista Premium"
            className="h-20 sm:h-24 lg:h-28 w-auto object-contain mx-auto my-6 opacity-95"
          />

          {/* Tagline */}
          <p className="text-gray-400 text-sm font-sans leading-relaxed">
            Ajudando mulheres a encontrar os fornecedores certos desde 2024.
          </p>

          {/* Links legais */}
          <nav className="mt-6 flex items-center justify-center gap-1 sm:gap-2 flex-wrap" aria-label="Links legais">
            <Link
              to="/termos"
              className="text-gray-500 text-xs font-heading font-medium hover:text-rose-300 transition-colors px-3 py-1.5 rounded-md hover:bg-white/5"
            >
              Termos de Uso
            </Link>
            <span className="text-gray-700 text-xs" aria-hidden>•</span>
            <Link
              to="/privacidade"
              className="text-gray-500 text-xs font-heading font-medium hover:text-rose-300 transition-colors px-3 py-1.5 rounded-md hover:bg-white/5"
            >
              Política de Privacidade
            </Link>
          </nav>

          {/* Contato */}
          <p className="mt-5 text-gray-500 text-xs">
            <span className="text-gray-600 font-heading font-medium">Contato:</span>{' '}
            <a
              href="mailto:fornecedoresmake.list@gmail.com"
              className="text-gray-400 hover:text-rose-300 transition-colors"
            >
              fornecedoresmake.list@gmail.com
            </a>
          </p>

          {/* Bloco legal */}
          <div className="mt-8 pt-6 border-t border-gray-800/80">
            <p className="text-gray-600 text-[11px] font-sans">
              © {year} Lista Premium. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-gray-700 text-[11px] leading-relaxed max-w-sm mx-auto">
              Este produto não garante obtenção de lucro. Os resultados variam de acordo com a dedicação de cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
