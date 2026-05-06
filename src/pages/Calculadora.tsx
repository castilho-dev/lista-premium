import CalculadoraPrecos from '../components/CalculadoraPrecos'

export default function Calculadora() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#8C5E33] font-medium">Ferramenta</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-serif font-medium text-neutral-900 tracking-tight">
          Calculadora de Precificação
        </h1>
        <p className="mt-2 text-neutral-500 max-w-2xl leading-relaxed">
          Defina custos, taxas e estratégia para obter o preço ideal em três passos.
        </p>
      </div>
      <CalculadoraPrecos />
    </div>
  )
}
