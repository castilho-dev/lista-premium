import { Instagram, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { Fornecedor, iniciaisFornecedor } from '../../data/fornecedores';

type Props = {
  fornecedor: Fornecedor;
};

export default function FornecedorCard({ fornecedor }: Props) {
  const mapsHref = fornecedor.endereco
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fornecedor.endereco)}`
    : undefined;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl border border-neutral-200/70 hover:border-[#B88A56]/50 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 p-5 flex flex-col"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-[#EADBC5] to-[#C9A679] text-white font-semibold flex items-center justify-center text-sm tracking-wide shadow-inner">
          {iniciaisFornecedor(fornecedor)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C5E33]">
            #{String(fornecedor.id).padStart(2, '0')}
          </div>
          <h3 className="mt-0.5 text-base font-semibold text-neutral-900 leading-snug truncate">
            {fornecedor.nome}
          </h3>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {fornecedor.instagram ? (
          <a
            href={fornecedor.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            Instagram
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-400 cursor-not-allowed">
            <Instagram className="h-3.5 w-3.5" />
            Instagram
          </span>
        )}
        {fornecedor.whatsapp ? (
          <a
            href={fornecedor.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[#B88A56] text-white hover:bg-[#A07641] transition-colors"
          >
            <WhatsAppIcon size={14} />
            WhatsApp
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-400 cursor-not-allowed">
            <WhatsAppIcon size={14} />
            WhatsApp
          </span>
        )}
        {mapsHref ? (
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
          >
            <MapPin className="h-3.5 w-3.5" />
            Mapa
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-400 cursor-not-allowed">
            <MapPin className="h-3.5 w-3.5" />
            Mapa
          </span>
        )}
        {fornecedor.site ? (
          <a
            href={fornecedor.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            <Globe className="h-3.5 w-3.5" />
            Site
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-neutral-200 text-neutral-400 cursor-not-allowed">
            <Globe className="h-3.5 w-3.5" />
            Site
          </span>
        )}
      </div>
    </motion.article>
  );
}
