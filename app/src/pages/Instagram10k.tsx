import { Link } from 'react-router-dom';
import { ChevronLeft, Instagram } from 'lucide-react';
import PdfViewer from '../components/PdfViewer';

export default function Instagram10k() {
  return (
    <div className="space-y-6">
      <Link
        to="/inicio"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar para o início
      </Link>

      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[10px] tracking-[0.3em] uppercase font-medium text-[#8C5E33]">
          <Instagram className="h-3 w-3" />
          Bônus
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-serif font-medium text-neutral-900 tracking-tight">
          Instagram 10K
        </h1>
        <p className="mt-2 text-neutral-500 max-w-2xl leading-relaxed">
          Estratégia completa de perfil, alcance e vendas no Instagram.
        </p>
      </div>

      <PdfViewer file="/pdf/instagram10k.pdf" title="Instagram 10K - PDF" />
    </div>
  );
}
