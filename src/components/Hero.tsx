export default function Hero() {
  return (
    <section className="relative min-h-0 py-20 lg:py-28 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900/40" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 container-main section-padding text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto text-balance">
          A Lista de Fornecedores Que Suas Concorrentes <span className="text-[#D5004D]">Não Querem Que Você Conheça</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-sans leading-relaxed">
          Os mesmos fornecedores que as revendedoras que mais lucram usam — enquanto você ainda paga caro comprando no lugar errado.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
