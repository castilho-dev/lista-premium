import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PdfViewer from '../components/PdfViewer';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

export default function WhatsAppLucrativo() {
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
          <WhatsAppIcon size={12} />
          Bônus
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-serif font-medium text-neutral-900 tracking-tight">
          WhatsApp Lucrativo
        </h1>
        <p className="mt-2 text-neutral-500 max-w-2xl leading-relaxed">
          Atendimento e vendas pelo WhatsApp com fluxo comprovado.
        </p>
      </div>

      <PdfViewer file="/pdf/whatsapp-lucrativo.pdf" title="WhatsApp Lucrativo - PDF" />
    </div>
  );
}
