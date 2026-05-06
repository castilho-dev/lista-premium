import { FileText } from 'lucide-react';

type Props = {
  file: string;
  title: string;
};

export default function PdfViewer({ file, title }: Props) {
  return (
    <div className="w-full">
      <div className="aspect-[4/5] md:aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-dashed border-neutral-300 flex flex-col items-center justify-center p-10 text-center">
        <div className="h-16 w-16 rounded-2xl bg-white shadow-sm border border-neutral-200 flex items-center justify-center">
          <FileText className="h-7 w-7 text-[#B88A56]" />
        </div>
        <h3 className="mt-5 text-lg font-medium text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500 max-w-md leading-relaxed">
          O arquivo PDF será renderizado aqui. Adicione o arquivo em{' '}
          <code className="px-1.5 py-0.5 rounded bg-neutral-200/70 text-[11px] font-mono text-neutral-700">
            public{file}
          </code>{' '}
          para liberar a leitura dentro do aplicativo.
        </p>
        <span className="mt-4 inline-flex items-center gap-2 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium rounded-full bg-amber-50 text-[#8C5E33] border border-amber-100">
          Em breve
        </span>
      </div>
    </div>
  );
}
