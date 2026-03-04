import { useState, useEffect } from 'react'

function toCurrency(v: number): string {
  return (Number(v) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

type Mode = 'margin' | 'markup' | 'competitor'

interface LastComputation {
  custoDireto: number
  suggestedPrice: number
  marginRealPct: number
  feeAmount: number
  profitBRL: number
  qty: number
  totalCostQty: number
  totalRevenueQty: number
  totalProfitQty: number
}

function InputGroup({
  id,
  label,
  tooltip,
  value,
  onChange,
  type = 'number',
  step = '0.01',
  placeholder,
  help,
  full,
  options,
}: {
  id: string
  label: string
  tooltip?: string
  value: string | number
  onChange: (v: string) => void
  type?: string
  step?: string
  placeholder?: string
  help?: string
  full?: boolean
  options?: { value: string; label: string }[]
}) {
  const input = options ? (
    <select
      id={id}
      value={String(value)}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  ) : (
    <input
      id={id}
      type={type}
      step={step}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
    />
  )
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="block font-heading font-medium text-gray-700 text-sm mb-1.5" title={tooltip}>
        {label}
      </label>
      {input}
      {help && <div className="text-xs text-gray-500 mt-1">{help}</div>}
    </div>
  )
}

export default function CalculadoraPrecos() {
  const [cost, setCost] = useState('20')
  const [shipping, setShipping] = useState('5')
  const [taxes, setTaxes] = useState('2.5')
  const [pack, setPack] = useState('1')
  const [feePct, setFeePct] = useState('12')
  const [fixed, setFixed] = useState('3')
  const [mode, setMode] = useState<Mode>('margin')
  const [marginPct, setMarginPct] = useState('40')
  const [markupPct, setMarkupPct] = useState('80')
  const [compPrice, setCompPrice] = useState('59.9')
  const [qty, setQty] = useState('1')
  const [alert, setAlert] = useState<{ message: string; type: string } | null>(null)
  const [lastComputation, setLastComputation] = useState<LastComputation | null>(null)

  const costNum = Number(cost) || 0
  const shippingNum = Number(shipping) || 0
  const taxesNum = Number(taxes) || 0
  const packNum = Number(pack) || 0
  const feePctNum = Number(feePct) || 0
  const fixedNum = Number(fixed) || 0
  const marginPctNum = Number(marginPct) || 0
  const markupPctNum = Number(markupPct) || 0
  const compPriceNum = Number(compPrice) || 0
  const qtyNum = Math.max(1, Number(qty) || 1)

  const custoDireto = costNum + shippingNum + taxesNum + packNum + fixedNum
  const feeFactor = feePctNum / 100

  let suggestedPrice = 0
  let modeUsed = ''

  if (costNum > 0) {
    if (mode === 'margin') {
      const desiredMargin = marginPctNum / 100
      const denom = 1 - feeFactor - desiredMargin
      suggestedPrice = denom > 0 ? custoDireto / denom : custoDireto * (1 + desiredMargin + feeFactor)
      modeUsed = `Margem desejada de ${marginPctNum}%`
    } else if (mode === 'markup') {
      suggestedPrice = custoDireto * (1 + markupPctNum / 100)
      modeUsed = `Markup de ${markupPctNum}% aplicado sobre custo total`
    } else {
      const priceIfComp = compPriceNum || 0
      const feeAmountComp = priceIfComp * feeFactor
      const marginRealComp = priceIfComp - feeAmountComp - custoDireto
      const marginRealPctComp = priceIfComp ? (marginRealComp / priceIfComp) * 100 : 0
      if (marginRealPctComp < 15 && priceIfComp > 0) {
        const desired = 20 / 100
        const denom = 1 - feeFactor - desired
        suggestedPrice = denom > 0 ? custoDireto / denom : custoDireto * (1 + desired + feeFactor)
        modeUsed = `Concorrente detectado (R$ ${priceIfComp.toFixed(2)}). Margem real dele é ${marginRealPctComp.toFixed(2)}% → sugerimos preço que gere 20%`
      } else {
        suggestedPrice = priceIfComp || custoDireto * 1.5
        modeUsed = `Ajuste em cima do preço do concorrente: R$ ${priceIfComp.toFixed(2)}`
      }
    }
  }

  const feeAmount = suggestedPrice * feeFactor
  const profitBRL = suggestedPrice - feeAmount - custoDireto
  const marginRealPct = suggestedPrice ? (profitBRL / suggestedPrice) * 100 : 0
  const totalCostQty = custoDireto * qtyNum
  const totalRevenueQty = suggestedPrice * qtyNum
  const totalProfitQty = profitBRL * qtyNum

  useEffect(() => {
    setLastComputation({
      custoDireto,
      suggestedPrice,
      marginRealPct,
      feeAmount,
      profitBRL,
      qty: qtyNum,
      totalCostQty,
      totalRevenueQty,
      totalProfitQty,
    })
  }, [custoDireto, suggestedPrice, marginRealPct, feeAmount, profitBRL, qtyNum, totalCostQty, totalRevenueQty, totalProfitQty])

  useEffect(() => {
    if (marginRealPct > 0 && marginRealPct < 10) {
      setAlert({ message: 'Margem muito baixa! Considere aumentar o preço ou reduzir custos.', type: 'danger' })
    } else if (marginRealPct >= 10 && marginRealPct < 20) {
      setAlert({ message: 'Margem baixa. Avalie se vale a pena vender neste preço.', type: 'warning' })
    } else if (marginRealPct >= 40) {
      setAlert({ message: 'Excelente margem! Preço competitivo e lucrativo.', type: 'success' })
    }
    const t = setTimeout(() => setAlert(null), 5000)
    return () => clearTimeout(t)
  }, [marginRealPct])

  const marginColorClass =
    marginRealPct >= 30 ? 'text-green-600' : marginRealPct >= 15 ? 'text-amber-600' : 'text-rose-600'

  const copyPrice = () => {
    if (!lastComputation) return
    const text = `${toCurrency(lastComputation.suggestedPrice)} — margem estimada ${lastComputation.marginRealPct.toFixed(2)}%`
    navigator.clipboard.writeText(text).then(() => setAlert({ message: 'Preço copiado para área de transferência!', type: 'success' }))
  }

  const downloadCsv = () => {
    if (!lastComputation) return
    const rows = [
      ['Item', 'Valor'],
      ['Custo por unidade', lastComputation.custoDireto.toFixed(2)],
      ['Preço sugerido', lastComputation.suggestedPrice.toFixed(2)],
      ['Margem real (%)', lastComputation.marginRealPct.toFixed(2)],
      ['Taxa por unidade', lastComputation.feeAmount.toFixed(2)],
      ['Lucro por unidade', lastComputation.profitBRL.toFixed(2)],
      ['Quantidade', String(lastComputation.qty)],
      ['Custo total', lastComputation.totalCostQty.toFixed(2)],
      ['Receita total', lastComputation.totalRevenueQty.toFixed(2)],
      ['Lucro total', lastComputation.totalProfitQty.toFixed(2)],
    ]
    const csv = rows.map((r) => r.map((c) => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'precificacao_lista_premium.csv'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setAlert({ message: 'Arquivo CSV baixado com sucesso!', type: 'success' })
  }

  return (
    <div className="space-y-6 text-left">
      <p className="text-gray-600 text-sm leading-relaxed">
        Ferramenta inteligente para calcular preços de venda com base nos seus custos reais. Receba sugestões de preços, margem real e explicações detalhadas.
      </p>

      <div className="rounded-xl bg-rose-50 border border-rose-100 px-4 py-3 text-sm text-gray-700">
        <strong>Dica:</strong> Preencha todos os campos com valores reais do seu negócio. Quanto mais preciso, melhor será o cálculo do preço de venda.
      </div>

      {/* 1. Custos Diretos */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold text-sm">1</div>
          <h3 className="font-heading font-bold text-gray-800">Custos Diretos do Produto</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputGroup id="cost" label="Custo do produto (preço que você pagou)" tooltip="Valor que você pagou para comprar o produto do fornecedor, sem frete ou taxas." value={cost} onChange={setCost} placeholder="Ex: 15.50" help="Exemplo: R$ 15,50 para um batom" />
          <InputGroup id="shipping" label="Frete por unidade" tooltip="Custo do frete dividido pela quantidade de produtos comprados." value={shipping} onChange={setShipping} placeholder="Ex: 3.00" help="Se comprou 10 produtos e pagou R$ 30 de frete, coloque R$ 3,00" />
          <InputGroup id="taxes" label="Impostos/Taxas por unidade" tooltip="ICMS, IPI, PIS, COFINS e outras taxas divididas por unidade." value={taxes} onChange={setTaxes} placeholder="Ex: 1.80" help="Geralmente 8-12% do valor do produto" />
          <InputGroup id="pack" label="Embalagem / Insumos por unidade" tooltip="Custo de caixas, etiquetas, fitas, papel de presente, etc. por produto." value={pack} onChange={setPack} placeholder="Ex: 0.80" help="Caixas, etiquetas, papel de presente" />
        </div>
      </section>

      {/* 2. Taxas e Comissões */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold text-sm">2</div>
          <h3 className="font-heading font-bold text-gray-800">Taxas e Comissões</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputGroup id="feePct" label="Taxa de marketplace / cartão (% sobre o preço de venda)" tooltip="Porcentagem que a plataforma (Mercado Livre, Shopee, etc.) ou operadora de cartão cobra sobre cada venda." value={feePct} onChange={setFeePct} placeholder="Ex: 12" help="Mercado Livre: 12-15% | Shopee: 8-12% | Cartão: 3-5%" />
          <InputGroup id="fixed" label="Custos fixos por unidade" tooltip="Marketing, armazenamento, devolução, tempo de trabalho dividido pela quantidade vendida." value={fixed} onChange={setFixed} placeholder="Ex: 2.50" help="Marketing, estoque, devoluções, seu tempo" />
        </div>
      </section>

      {/* 3. Estratégia */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold text-sm">3</div>
          <h3 className="font-heading font-bold text-gray-800">Estratégia de Precificação</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputGroup
            id="mode"
            label="Modo de precificação"
            tooltip="Escolha como você quer calcular o preço: por margem desejada, markup sobre custo, ou baseado no concorrente."
            value={mode}
            onChange={(v) => setMode(v as Mode)}
            full
            options={[
              { value: 'margin', label: 'Baseado em Margem Desejada (recomendado)' },
              { value: 'markup', label: 'Baseado em Markup (multiplicador)' },
              { value: 'competitor', label: 'Preço com ajuste ao concorrente' },
            ]}
            help="Margem = % de lucro sobre o preço final | Markup = % sobre o custo total"
          />
          <InputGroup id="marginPct" label="Margem desejada (%)" tooltip="Porcentagem de lucro que você quer ter sobre o preço de venda final." value={marginPct} onChange={setMarginPct} placeholder="Ex: 40" help="30-50% é uma margem saudável para maquiagem" />
          <InputGroup id="markupPct" label="Markup (% sobre custo total)" tooltip="Porcentagem que você quer adicionar sobre o custo total para chegar no preço de venda." value={markupPct} onChange={setMarkupPct} placeholder="Ex: 80" help="Se custo é R$ 20 e markup 80%, preço será R$ 36" />
          <InputGroup id="compPrice" label="Preço do concorrente" tooltip="Preço que seus concorrentes vendem o mesmo produto (opcional)." value={compPrice} onChange={setCompPrice} placeholder="Ex: 45.90" help="Pesquise em marketplaces e redes sociais" />
          <InputGroup id="qty" label="Quantidade para simular" value={qty} onChange={setQty} type="number" step="1" placeholder="Ex: 10" help="Para calcular totais de uma compra maior" />
        </div>
        <div className="flex flex-wrap gap-3 items-center mt-4">
          <span className="text-sm text-gray-500">Cálculo em tempo real</span>
          <button type="button" onClick={downloadCsv} className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-heading text-sm font-medium hover:bg-gray-50 transition-colors">
            Baixar CSV
          </button>
          <button type="button" onClick={copyPrice} className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-heading text-sm font-medium hover:bg-gray-50 transition-colors">
            Copiar Preço
          </button>
        </div>
      </section>

      {/* 4. Resultados */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-display font-bold text-sm">4</div>
          <h3 className="font-heading font-bold text-gray-800">Resultados da Precificação</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Custo total por unidade</div>
            <div className="text-lg font-bold text-gray-800 mt-1">{toCurrency(custoDireto)}</div>
          </div>
          <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
            <div className="text-xs text-rose-600 font-medium uppercase tracking-wide">Preço sugerido</div>
            <div className="text-lg font-bold text-rose-700 mt-1">{toCurrency(suggestedPrice)}</div>
          </div>
          <div className={`rounded-xl border p-4 ${marginRealPct >= 30 ? 'bg-green-50 border-green-100' : marginRealPct >= 15 ? 'bg-amber-50 border-amber-100' : 'bg-rose-50 border-rose-100'}`}>
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Margem real esperada</div>
            <div className={`text-lg font-bold mt-1 ${marginColorClass}`}>{marginRealPct.toFixed(2)} %</div>
          </div>
        </div>

        {alert && (
          <div
            className={`rounded-xl px-4 py-3 text-sm ${
              alert.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : alert.type === 'warning' ? 'bg-amber-50 border border-amber-200 text-amber-800' : 'bg-rose-50 border border-rose-200 text-rose-800'
            }`}
          >
            {alert.message}
          </div>
        )}

        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 sm:p-5 text-sm text-gray-700 space-y-4">
          <strong className="text-gray-800">Análise detalhada do cálculo</strong>
          <div className="rounded-lg bg-white border border-gray-100 p-4 border-l-4 border-l-rose-400">
            <strong className="text-gray-800">Resumo financeiro</strong>
            <ul className="mt-2 space-y-1">
              <li>Custo total por unidade: <strong>{toCurrency(custoDireto)}</strong></li>
              <li>Preço sugerido: <strong>{toCurrency(suggestedPrice)}</strong></li>
              <li>Taxa de marketplace: <strong>{toCurrency(feeAmount)}</strong> ({feePctNum}%)</li>
              <li>Lucro por unidade: <strong>{toCurrency(profitBRL)}</strong></li>
              <li>Margem real: <strong>{marginRealPct.toFixed(2)}%</strong></li>
            </ul>
          </div>
          <div>
            <strong className="text-gray-800">Passo a passo</strong>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li><strong>Custos diretos:</strong> {toCurrency(costNum)} (produto) + {toCurrency(shippingNum)} (frete) + {toCurrency(taxesNum)} (impostos) + {toCurrency(packNum)} (embalagem) + {toCurrency(fixedNum)} (custos fixos) = <strong>{toCurrency(custoDireto)}</strong></li>
              <li><strong>Estratégia aplicada:</strong> {modeUsed}</li>
              <li><strong>Taxas sobre venda:</strong> {feePctNum}% de {toCurrency(suggestedPrice)} = <strong>{toCurrency(feeAmount)}</strong></li>
              <li><strong>Lucro líquido:</strong> {toCurrency(suggestedPrice)} − {toCurrency(feeAmount)} − {toCurrency(custoDireto)} = <strong>{toCurrency(profitBRL)}</strong></li>
            </ol>
          </div>
          {qtyNum > 1 && (
            <div className="rounded-lg bg-rose-50/50 border border-rose-100 p-4 border-l-4 border-l-rose-400">
              <strong className="text-gray-800">Projeção para {qtyNum} unidades</strong>
              <ul className="mt-2 space-y-1">
                <li>Custo total: <strong>{toCurrency(totalCostQty)}</strong></li>
                <li>Receita total: <strong>{toCurrency(totalRevenueQty)}</strong></li>
                <li>Lucro total: <strong>{toCurrency(totalProfitQty)}</strong></li>
              </ul>
            </div>
          )}
          <div className="rounded-lg bg-amber-50 border border-amber-100 p-3 text-xs">
            <strong>Dica:</strong> Margens entre 30-50% são ideais para produtos de maquiagem. Ajuste os valores conforme sua estratégia de negócio.
          </div>
        </div>
      </section>

      <p className="text-center text-gray-400 text-xs">Lista Premium · Calculadora — personalize conforme sua política comercial.</p>
    </div>
  )
}
