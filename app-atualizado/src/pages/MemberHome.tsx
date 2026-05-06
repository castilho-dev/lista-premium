import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Calculator, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { getMemberSession, firstName } from '../auth';
import { fornecedores } from '../data/fornecedores';

const shortcuts = [
  {
    to: '/fornecedores',
    title: 'Fornecedores',
    desc: 'Diretório completo com contato direto.',
    icon: Users,
    accent: 'from-[#F5E6D0] to-[#EADBC5]',
    badge: `${fornecedores.length} marcas`,
  },
  {
    to: '/calculadora',
    title: 'Calculadora',
    desc: 'Precifique com margem, markup ou concorrência.',
    icon: Calculator,
    accent: 'from-[#EFE6DB] to-[#E2D3BE]',
    badge: 'Ferramenta',
  },
  {
    to: '/instagram10k',
    title: 'Instagram 10K',
    desc: 'Estratégia de perfil, alcance e vendas.',
    icon: Instagram,
    accent: 'from-[#F2E4D4] to-[#E5D1B8]',
    badge: 'Bônus PDF',
  },
  {
    to: '/whatsapplucrativo',
    title: 'WhatsApp Lucrativo',
    desc: 'Atendimento e vendas pelo WhatsApp.',
    icon: WhatsAppIcon,
    accent: 'from-[#ECDFCF] to-[#DDC6A8]',
    badge: 'Bônus PDF',
  },
];

export default function MemberHome() {
  const session = getMemberSession();
  const nome = firstName(session?.name);

  return (
    <div className="space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-[#3A2A1A] text-white p-8 md:p-12"
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#B88A56]/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] tracking-[0.3em] uppercase font-medium text-[#E5D1B8]">
            <Sparkles className="h-3 w-3" />
            Acesso Premium
          </div>
          <h1 className="mt-5 text-3xl md:text-5xl font-serif font-medium tracking-tight leading-tight">
            {nome ? (
              <>
                Bem-vinda,{' '}
                <span className="bg-gradient-to-r from-[#E5D1B8] to-[#B88A56] bg-clip-text text-transparent">
                  {nome}
                </span>
                .
              </>
            ) : (
              <>
                Bem-vinda à{' '}
                <span className="bg-gradient-to-r from-[#E5D1B8] to-[#B88A56] bg-clip-text text-transparent">
                  Lista Premium
                </span>
                .
              </>
            )}
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed">
            Seu diretório exclusivo de fornecedores, ferramentas de precificação e materiais
            estratégicos para o mercado de beleza de alto padrão.
          </p>
          <Link
            to="/fornecedores"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors"
          >
            Explorar Fornecedores
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>

      <section>
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#8C5E33] font-medium">
              Atalhos
            </p>
            <h2 className="mt-1 text-2xl font-serif font-medium text-neutral-900">
              Suas seções
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {shortcuts.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={s.to}
                  className="group block relative overflow-hidden rounded-2xl bg-white border border-neutral-200/70 hover:border-[#B88A56]/40 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 p-6"
                >
                  <div
                    className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-neutral-900 text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C5E33] font-medium">
                      {s.badge}
                    </span>
                  </div>
                  <div className="relative mt-6">
                    <h3 className="text-lg font-medium text-neutral-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="relative mt-4 flex items-center gap-1.5 text-xs font-medium text-neutral-900">
                    Acessar
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
