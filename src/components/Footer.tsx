export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-10 section-padding">
      <div className="container-main text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xs">LP</span>
          </div>
          <span className="font-display font-bold text-white">Lista Prêmio</span>
        </div>

        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
          Lista completa e atualizada de fornecedores atacadistas de maquiagem verificados.
        </p>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            {year} Lista Prêmio. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Este produto não garante obtenção de lucro. Os resultados variam de acordo com a dedicação de cada pessoa.
          </p>
        </div>
      </div>
    </footer>
  )
}
