import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  Package,
  Percent,
  Target,
  TrendingUp,
} from 'lucide-react';

type Modo = 'margem' | 'markup' | 'concorrente';

type State = {
  custoProduto: number;
  frete: number;
  impostos: number;
  embalagem: number;
  taxaPct: number;
  custoFixo: number;
  modo: Modo;
  margemDesejada: number;
  markupPct: number;
  precoConcorrente: number;
  quantidade: number;
};

const initial: State = {
  custoProduto: 0,
  frete: 0,
  impostos: 0,
  embalagem: 0,
  taxaPct: 0,
  custoFixo: 0,
  modo: 'margem',
  margemDesejada: 30,
  markupPct: 100,
  precoConcorrente: 0,
  quantidade: 1,
};

const money = (n: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    Number.isFinite(n) ? n : 0
  );
const pct = (n: number) => `${(Number.isFinite(n) ? n : 0).toFixed(1)}%`;

function calc(s: State) {
  const custoDireto =
    s.custoProduto + s.frete + s.impostos + s.embalagem + s.custoFixo;
  const taxa = Math.max(0, Math.min(s.taxaPct, 99)) / 100;

  let preco = 0;

  if (s.modo === 'margem') {
    const m = Math.max(0, Math.min(s.margemDesejada, 99)) / 100;
    const denom = 1 - taxa - m;
    preco = denom > 0 ? custoDireto / denom : custoDireto;
  } else if (s.modo === 'markup') {
    preco = custoDireto * (1 + s.markupPct / 100);
  } else {
    preco = s.precoConcorrente;
    const taxaValor = preco * taxa;
    const lucro = preco - custoDireto - taxaValor;
    const margemReal = preco > 0 ? lucro / preco : 0;
    if (margemReal < 0.15) {
      const mAlvo = 0.2;
      const denom = 1 - taxa - mAlvo;
      preco = denom > 0 ? custoDireto / denom : custoDireto;
    }
  }

  const taxaValor = preco * taxa;
  const lucroUnit = preco - custoDireto - taxaValor;
  const margemReal = preco > 0 ? (lucroUnit / preco) * 100 : 0;
  const qtd = Math.max(1, Math.floor(s.quantidade || 1));

  return {
    custoDireto,
    precoSugerido: preco,
    taxaValor,
    lucroUnit,
    margemReal,
    totalReceita: preco * qtd,
    totalCusto: custoDireto * qtd,
    totalLucro: lucroUnit * qtd,
    qtd,
  };
}

function margemTone(m: number) {
  if (m < 10) return { color: 'text-rose-600', bg: 'bg-rose-50', label: 'Margem baixa' };
  if (m < 20) return { color: 'text-amber-600', bg: 'bg-amber-50', label: 'Margem apertada' };
  if (m < 35) return { color: 'text-emerald-600', bg: 'bg-emerald-50', label: 'Margem saudável' };
  return { color: 'text-emerald-700', bg: 'bg-emerald-50', label: 'Margem excelente' };
}

const steps = [
  { label: 'Custos', icon: Package },
  { label: 'Taxas', icon: Percent },
  { label: 'Estratégia', icon: Target },
];

export default function CalculadoraPrecos() {
  const [s, setS] = useState<State>(initial);
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const r = useMemo(() => calc(s), [s]);
  const tone = margemTone(r.margemReal);

  const update = <K extends keyof State>(k: K, v: State[K]) =>
    setS((p) => ({ ...p, [k]: v }));

  const numberInput = (
    key: keyof State,
    label: string,
    placeholder?: string,
    suffix?: string
  ) => (
    <label className="block">
      <span className="block text-xs font-medium text-neutral-600 mb-1.5">{label}</span>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step="0.01"
          value={(s[key] as number) || ''}
          onChange={(e) => update(key, Number(e.target.value) as never)}
          placeholder={placeholder}
          className="w-full h-11 px-4 pr-12 rounded-xl bg-white border border-neutral-200 focus:border-[#B88A56] focus:ring-4 focus:ring-[#B88A56]/10 outline-none text-sm transition-all"
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );

  const resumoTexto = () =>
    [
      `Lista Premium - Resumo da Precificação`,
      `Preço sugerido: ${money(r.precoSugerido)}`,
      `Custo direto: ${money(r.custoDireto)}`,
      `Taxa (R$): ${money(r.taxaValor)}`,
      `Lucro por unidade: ${money(r.lucroUnit)}`,
      `Margem real: ${pct(r.margemReal)}`,
      `Quantidade: ${r.qtd}`,
      `Receita total: ${money(r.totalReceita)}`,
      `Lucro total: ${money(r.totalLucro)}`,
    ].join('\n');

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(resumoTexto());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  const baixarCsv = () => {
    const rows = [
      ['Campo', 'Valor'],
      ['Preço sugerido', r.precoSugerido.toFixed(2)],
      ['Custo direto', r.custoDireto.toFixed(2)],
      ['Taxa (R$)', r.taxaValor.toFixed(2)],
      ['Lucro por unidade', r.lucroUnit.toFixed(2)],
      ['Margem real (%)', r.margemReal.toFixed(2)],
      ['Quantidade', String(r.qtd)],
      ['Receita total', r.totalReceita.toFixed(2)],
      ['Lucro total', r.totalLucro.toFixed(2)],
    ];
    const csv = rows.map((row) => row.map((c) => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'precificacao.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {steps.map((st, i) => {
              const Icon = st.icon;
              const active = i === step;
              const done = i < step;
              return (
                <button
                  key={st.label}
                  onClick={() => setStep(i)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                    active
                      ? 'bg-neutral-900 text-white shadow-md'
                      : done
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
                  }`}
                >
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-white/20">
                    {done ? <Check className="h-3 w-3" /> : <Icon className="h-3 w-3" />}
                  </span>
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 md:p-8 min-h-[360px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="s0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-medium text-neutral-900">Custos diretos por unidade</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Informe os valores unitários para compor o custo do produto.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {numberInput('custoProduto', 'Custo do produto', '0,00', 'R$')}
                  {numberInput('frete', 'Frete por unidade', '0,00', 'R$')}
                  {numberInput('impostos', 'Impostos / taxas por unidade', '0,00', 'R$')}
                  {numberInput('embalagem', 'Embalagem / insumos', '0,00', 'R$')}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-medium text-neutral-900">Taxas e comissões</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Custos de plataforma, cartão e despesas fixas rateadas.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {numberInput('taxaPct', 'Taxa marketplace / cartão', '0', '%')}
                  {numberInput('custoFixo', 'Custos fixos por unidade', '0,00', 'R$')}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-medium text-neutral-900">Estratégia de precificação</h3>
                <p className="mt-1 text-sm text-neutral-500">Escolha o método e os parâmetros.</p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {(['margem', 'markup', 'concorrente'] as Modo[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => update('modo', m)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium capitalize transition-all ${
                        s.modo === m
                          ? 'bg-neutral-900 text-white shadow-md'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {m === 'margem' ? 'Margem' : m === 'markup' ? 'Markup' : 'Concorrente'}
                    </button>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {s.modo === 'margem' &&
                    numberInput('margemDesejada', 'Margem desejada', '30', '%')}
                  {s.modo === 'markup' && numberInput('markupPct', 'Markup', '100', '%')}
                  {s.modo === 'concorrente' &&
                    numberInput('precoConcorrente', 'Preço do concorrente', '0,00', 'R$')}
                  {numberInput('quantidade', 'Quantidade', '1', 'un')}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between pt-6 border-t border-neutral-100">
            <button
              onClick={() => setStep((p) => Math.max(0, p - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-neutral-600 disabled:text-neutral-300 rounded-full hover:bg-neutral-100 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </button>
            <button
              onClick={() => setStep((p) => Math.min(steps.length - 1, p + 1))}
              disabled={step === steps.length - 1}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium bg-neutral-900 text-white disabled:bg-neutral-200 disabled:text-neutral-400 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Avançar
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <aside className="lg:sticky lg:top-24 h-max">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">
            <TrendingUp className="h-3.5 w-3.5" />
            Resumo
          </div>
          <div className="mt-4">
            <p className="text-xs text-neutral-400">Preço sugerido</p>
            <p className="mt-1 text-4xl font-serif font-medium tracking-tight">
              {money(r.precoSugerido)}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">Lucro / un</p>
              <p className="mt-1 text-sm font-medium">{money(r.lucroUnit)}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">Margem real</p>
              <p className="mt-1 text-sm font-medium">{pct(r.margemReal)}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">Custo direto</p>
              <p className="mt-1 text-sm font-medium">{money(r.custoDireto)}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">Taxa</p>
              <p className="mt-1 text-sm font-medium">{money(r.taxaValor)}</p>
            </div>
          </div>

          <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full ${tone.bg} ${tone.color}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="text-xs font-medium">{tone.label}</span>
          </div>

          <div className="mt-5 pt-5 border-t border-white/10 space-y-2 text-sm">
            <div className="flex items-center justify-between text-neutral-300">
              <span>Receita total ({r.qtd}×)</span>
              <span className="text-white font-medium">{money(r.totalReceita)}</span>
            </div>
            <div className="flex items-center justify-between text-neutral-300">
              <span>Lucro total</span>
              <span className="text-white font-medium">{money(r.totalLucro)}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <button
              onClick={copiar}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white text-neutral-900 text-xs font-medium hover:bg-neutral-100 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
            <button
              onClick={baixarCsv}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#B88A56] text-white text-xs font-medium hover:bg-[#A07641] transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              CSV
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
