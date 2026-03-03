import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-10 section-padding">
      <div className="container-main text-center max-w-md mx-auto">
        <p className="text-gray-500 text-sm leading-relaxed">
          Ajudando mulheres a encontrar os fornecedores certos desde 2024.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2">
          <Link
            to="/termos"
            className="text-gray-500 text-xs hover:text-white transition-colors"
          >
            Termos de Uso
          </Link>
          <span className="text-gray-600 text-xs">·</span>
          <Link
            to="/privacidade"
            className="text-gray-500 text-xs hover:text-white transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>

        <p className="mt-4 text-gray-600 text-xs">
          Dúvidas? fornecedoresmake.list@gmail.com
        </p>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            {year} Lista Premium. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Este produto não garante obtenção de lucro. Os resultados variam de acordo com a dedicação de cada pessoa.
          </p>
        </div>
      </div>
    </footer>
  )
}
