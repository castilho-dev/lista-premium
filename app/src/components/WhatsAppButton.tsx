import { motion } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_MEMBER } from '../constants';

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE_MEMBER
  )}`;

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 18 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-24 right-5 md:bottom-8 md:right-8 z-40 flex items-center gap-3"
      aria-label="Falar com o suporte no WhatsApp"
    >
      <span className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-x-2 group-hover:translate-x-0">
        Precisa de ajuda? Fale com o Suporte
      </span>
      <span className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/20 ring-4 ring-white/70 hover:scale-105 active:scale-95 transition-transform duration-200">
        <WhatsAppIcon size={28} />
      </span>
    </motion.a>
  );
}
