import { useEffect, useMemo, useState } from 'react';
import { Search, X, Lock, Globe as Globe2, Clock } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { fornecedores } from '../../data/fornecedores';
import FornecedorCard from './FornecedorCard';

const TOTAL_FORNECEDORES = 150;

export default function FornecedoresList() {
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return fornecedores;
    return fornecedores.filter((f) => {
      const haystack = [f.nome, f.instagram, f.whatsapp, f.endereco, f.site]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  const bloqueadosCount = TOTAL_FORNECEDORES - fornecedores.length;
  const mostrarBloqueados = query.trim().length === 0 && bloqueadosCount > 0;

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#8C5E33] font-medium">
          Diretório Exclusivo
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-serif font-medium text-neutral-900 tracking-tight">
          Fornecedores
        </h1>
        <p className="mt-2 text-neutral-500 max-w-2xl leading-relaxed">
          {TOTAL_FORNECEDORES} fornecedores selecionados para o mercado de beleza de alto padrão.
        </p>
      </div>

      <div className="sticky top-16 md:top-20 z-20 bg-[#FAF7F2]/85 backdrop-blur-xl py-3 -mx-5 md:-mx-8 px-5 md:px-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, produto, estado..."
            className="w-full h-12 pl-11 pr-11 rounded-full bg-white border border-neutral-200 focus:border-[#B88A56] focus:ring-4 focus:ring-[#B88A56]/10 outline-none text-sm text-neutral-900 placeholder:text-neutral-400 transition-all shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Limpar busca"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <p className="mt-2 text-xs text-neutral-500 px-1">
          {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
        </p>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center"
          >
            <p className="text-neutral-500">Nenhum fornecedor encontrado para "{query}".</p>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {filtered.map((f) => (
              <FornecedorCard key={f.id} fornecedor={f} />
            ))}
            {mostrarBloqueados &&
              Array.from({ length: bloqueadosCount }).map((_, i) => {
                const numero = fornecedores.length + i + 1;
                return (
                  <button
                    key={`locked-${numero}`}
                    onClick={() => setModalOpen(true)}
                    className="group relative bg-white/60 rounded-2xl border border-dashed border-neutral-300 hover:border-[#B88A56] transition-all duration-300 p-5 flex flex-col text-left overflow-hidden"
                  >
                    <div className="absolute inset-0 backdrop-blur-[6px] bg-white/40 pointer-events-none" />
                    <div className="relative flex items-start gap-4">
                      <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 text-neutral-500 flex items-center justify-center shadow-inner">
                        <Lock className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C5E33]">
                          #{String(numero).padStart(2, '0')}
                        </div>
                        <h3 className="mt-0.5 text-base font-semibold text-neutral-400 leading-snug select-none">
                          Fornecedor Internacional
                        </h3>
                      </div>
                    </div>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-200/80 text-neutral-400 blur-[1px] select-none">
                        ••••••••
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-200/80 text-neutral-400 blur-[1px] select-none">
                        ••••••
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-200/80 text-neutral-400 blur-[1px] select-none">
                        ••••
                      </span>
                    </div>

                    <div className="relative mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.15em] uppercase text-[#8C5E33] group-hover:text-[#6F4924] transition-colors">
                      <Lock className="h-3 w-3" />
                      Toque para saber mais
                    </div>
                  </button>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 bg-neutral-900/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: 'spring', damping: 24, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative bg-gradient-to-br from-[#FBF5EC] to-[#F3E7D2] px-6 pt-8 pb-6">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/70 backdrop-blur text-neutral-600 hover:text-neutral-900 hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#8C5E33]">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] uppercase text-[#8C5E33]">
                  <Clock className="h-3 w-3" />
                  Liberação em até 7 dias
                </div>
                <h3 className="mt-2 text-xl font-serif font-medium text-neutral-900 leading-snug">
                  Fornecedor internacional
                </h3>
              </div>
              <div className="px-6 py-6 space-y-4">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Esse fornecedor é internacional. Seu acesso será liberado em 7 dias.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Os fornecedores internacionais passam por uma curadoria e validação extra. Assim que estiverem prontos, serão liberados automaticamente no seu acesso.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full h-12 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
