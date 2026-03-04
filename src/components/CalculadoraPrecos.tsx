import { useState } from 'react'

function parseNum(s: string): number {
  const n = parseFloat(String(s).replace(',', '.').replace(/\s/g, '')) || 0
  return Number.isFinite(n) ? n : 0
}

function fmtBr(value: number): string {
  return value.toFixed(2).replace('.', ',')
}

/**
 * Calculadora de precificação completa:
 * - Custo do produto + custos operacionais
 * - Margem desejada (%) e impostos (%)
 * - Preço sem impostos, preço final, markup, margem de contribuição
 * - Campo "preço de venda" para simular e ver margem real
 * - Explicações (como usar, margem x markup, fórmulas)
 */
export default function CalculadoraPrecos() {
  const [custoProduto, setCustoProduto] = useState('')
  const [custosOperacionais, setCustosOperacionais] = useState('')
  const [margemDesejada, setMargemDesejada] = useState('')
  const [impostos, setImpostos] = useState('')
  const [precoVendaManual, setPrecoVendaManual] = useState('')

  const custoP = parseNum(custoProduto)
  const custoOp = parseNum(custosOperacionais)
  const margem = parseNum(margemDesejada)
  const imp = parseNum(impostos)
  const custoTotal = custoP + custoOp
  const precoManual = parseNum(precoVendaManual)

  // Preço a partir da margem (sem impostos): Preço = Custo Total / (1 - Margem/100)
  let precoSemImpostos = 0
  let precoVendaFinal = 0
  let markupPct = 0
  let margemContribuicao = 0
  if (custoTotal > 0 && margem > 0 && margem < 100) {
    precoSemImpostos = custoTotal / (1 - margem / 100)
    // Preço final com impostos: Preço Final = Preço sem Impostos / (1 - Impostos/100)
    if (imp >= 0 && imp < 100) {
      precoVendaFinal = precoSemImpostos / (1 - imp / 100)
    } else {
      precoVendaFinal = precoSemImpostos
    }
    markupPct = ((precoVendaFinal / custoTotal) - 1) * 100
    margemContribuicao = ((precoVendaFinal - custoTotal) / precoVendaFinal) * 100
  }

  // Análise pelo preço de venda digitado (margem real)
  let margemReal = 0
  let lucroReal = 0
  let markupReal = 0
  if (precoManual > 0 && custoTotal > 0) {
    lucroReal = precoManual - custoTotal
    margemReal = (lucroReal / precoManual) * 100
    markupReal = ((precoManual / custoTotal) - 1) * 100
  }

  return (
    <div className="space-y-8 text-left">
      <p className="text-gray-600 text-sm leading-relaxed">
        Calcule o preço de venda considerando custo do produto, custos operacionais, margem de lucro desejada e impostos. 
        Use o campo &quot;Preço de venda&quot; para simular um preço e ver a margem real.
      </p>

      {/* Entradas */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-heading font-medium text-gray-700 text-sm mb-1.5">
            Custo do produto (R$)
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="Ex: 25,00"
            value={custoProduto}
            onChange={(e) => setCustoProduto(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
          />
          <p className="text-xs text-gray-500 mt-1">Matéria-prima, embalagem, etc.</p>
        </div>
        <div>
          <label className="block font-heading font-medium text-gray-700 text-sm mb-1.5">
            Custos operacionais (R$)
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="Ex: 5,00 ou 0"
            value={custosOperacionais}
            onChange={(e) => setCustosOperacionais(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
          />
          <p className="text-xs text-gray-500 mt-1">Mão de obra, frete, energia, etc.</p>
        </div>
        <div>
          <label className="block font-heading font-medium text-gray-700 text-sm mb-1.5">
            Margem de lucro desejada (%)
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="Ex: 40"
            value={margemDesejada}
            onChange={(e) => setMargemDesejada(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
          />
          <p className="text-xs text-gray-500 mt-1">Sobre o preço de venda (antes dos impostos).</p>
        </div>
        <div>
          <label className="block font-heading font-medium text-gray-700 text-sm mb-1.5">
            Impostos sobre a venda (%)
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="Ex: 15 ou 0"
            value={impostos}
            onChange={(e) => setImpostos(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
          />
          <p className="text-xs text-gray-500 mt-1">ICMS, PIS, COFINS, etc. (deixe 0 se não aplicável).</p>
        </div>
      </div>

      {/* Resultado principal */}
      {precoVendaFinal > 0 && (
        <div className="rounded-xl bg-rose-50 border border-rose-100 p-5 sm:p-6 space-y-4">
          <h3 className="font-heading font-semibold text-gray-800 text-lg">Resultado do cálculo</h3>
          <dl className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-gray-500">Custo total</dt>
              <dd className="font-semibold text-gray-800">R$ {fmtBr(custoTotal)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Preço sem impostos</dt>
              <dd className="font-semibold text-gray-800">R$ {fmtBr(precoSemImpostos)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Preço de venda final</dt>
              <dd className="font-bold text-rose-600 text-lg">R$ {fmtBr(precoVendaFinal)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Markup</dt>
              <dd className="font-semibold text-gray-800">{markupPct.toFixed(1)}%</dd>
            </div>
            <div>
              <dt className="text-gray-500">Margem de contribuição</dt>
              <dd className="font-semibold text-gray-800">{margemContribuicao.toFixed(1)}%</dd>
            </div>
            <div>
              <dt className="text-gray-500">Lucro por unidade</dt>
              <dd className="font-semibold text-green-700">R$ {fmtBr(precoVendaFinal - custoTotal)}</dd>
            </div>
          </dl>
        </div>
      )}

      {/* Simular preço de venda (análise inversa) */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-heading font-semibold text-gray-800 mb-2">Simular um preço de venda</h3>
        <p className="text-gray-600 text-sm mb-3">
          Digite um preço de venda para ver qual seria a margem real e o lucro (com base no custo total acima).
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-[140px]">
            <label className="block font-heading font-medium text-gray-700 text-sm mb-1.5">Preço de venda (R$)</label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="Ex: 59,90"
              value={precoVendaManual}
              onChange={(e) => setPrecoVendaManual(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
            />
          </div>
        </div>
        {precoManual > 0 && custoTotal > 0 && (
          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-100 p-4 inline-block">
            <p className="text-sm text-gray-600">
              Margem real: <strong className="text-gray-800">{margemReal.toFixed(1)}%</strong>
              {' — '}
              Markup: <strong className="text-gray-800">{markupReal.toFixed(1)}%</strong>
              {' — '}
              Lucro: <strong className="text-green-700">R$ {fmtBr(lucroReal)}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Explicações */}
      <details className="rounded-xl border border-gray-200 bg-gray-50/50 overflow-hidden">
        <summary className="font-heading font-medium text-gray-700 px-4 py-3 cursor-pointer hover:bg-gray-100">
          Como usar e fórmulas
        </summary>
        <div className="px-4 pb-4 pt-1 space-y-4 text-sm text-gray-600">
          <div>
            <strong className="text-gray-800">Como usar:</strong>
            <ul className="list-disc list-inside mt-1 space-y-0.5">
              <li>Informe o custo direto do produto e, se tiver, os custos operacionais por unidade.</li>
              <li>Defina a margem de lucro desejada em % (sobre o preço antes dos impostos).</li>
              <li>Se houver impostos sobre a venda, informe o percentual total.</li>
              <li>Use &quot;Simular um preço de venda&quot; para testar um preço e ver a margem real.</li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Diferença entre margem e markup:</strong>
            <p className="mt-1">
              A <strong>margem</strong> é calculada sobre o preço de venda: (Preço − Custo) ÷ Preço. 
              O <strong>markup</strong> é sobre o custo: (Preço − Custo) ÷ Custo. Ex.: custo R$ 100, venda R$ 150 → margem 33,3%, markup 50%.
            </p>
          </div>
          <div>
            <strong className="text-gray-800">Fórmulas utilizadas:</strong>
            <ul className="mt-1 space-y-0.5 font-mono text-xs">
              <li>Custo total = Custo do produto + Custos operacionais</li>
              <li>Preço sem impostos = Custo total ÷ (1 − Margem% ÷ 100)</li>
              <li>Preço de venda final = Preço sem impostos ÷ (1 − Impostos% ÷ 100)</li>
              <li>Markup % = ((Preço de venda ÷ Custo total) − 1) × 100</li>
              <li>Margem de contribuição % = ((Preço − Custo total) ÷ Preço) × 100</li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  )
}
