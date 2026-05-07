import { useCallback, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

if (typeof pdfjs !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

/** Fallback quando a página ainda não mediu (e-books costumam não ser A4) */
const DEFAULT_ASPECT = 297 / 210;
const GAP = 16;
const ROOT_MARGIN = '400px';
type Props = {
  file: string;
  title?: string;
};

export default function PdfViewer({ file }: Props) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pageWidth, setPageWidth] = useState(320);
  const [slotHeights, setSlotHeights] = useState<Record<number, number>>({});
  const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set([0]));
  const scrollRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const measure = () => {
      const cs = getComputedStyle(el);
      const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const raw = el.clientWidth - padX;
      const w = Math.min(900, Math.max(200, Math.floor(raw)));
      setPageWidth(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setSlotHeights({});
  }, [file, pageWidth]);

  const onLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
    setError(null);
    setVisiblePages(new Set([0]));
    slotRefs.current = [];
  }, []);

  const onLoadError = useCallback(() => {
    setError('Não foi possível carregar o PDF.');
  }, []);

  useEffect(() => {
    setNumPages(null);
    setError(null);
  }, [file]);

  const onPageLoadSuccess = useCallback(
    (pageIndex: number, page: { getViewport: (opts: { scale: number }) => { width: number; height: number } }) => {
      const vp = page.getViewport({ scale: 1 });
      const h = (pageWidth / vp.width) * vp.height;
      setSlotHeights((prev) => (prev[pageIndex] === h ? prev : { ...prev, [pageIndex]: h }));
    },
    [pageWidth]
  );

  useEffect(() => {
    if (numPages === null) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setVisiblePages((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const i = Number((entry.target as HTMLElement).dataset.pageIndex);
            if (Number.isNaN(i)) return;
            if (entry.isIntersecting) next.add(i);
            else next.delete(i);
          });
          return next;
        });
      },
      { root: null, rootMargin: `${ROOT_MARGIN} 0px ${ROOT_MARGIN} 0px`, threshold: 0 }
    );

    for (let i = 0; i < numPages; i++) {
      const slot = slotRefs.current[i];
      if (slot) observer.observe(slot);
    }
    return () => observer.disconnect();
  }, [numPages]);

  if (error) {
    return (
      <div className="rounded-2xl bg-white border border-neutral-200 p-8 text-center">
        <p className="text-neutral-600 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm w-full max-w-full min-w-0">
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-auto p-4 w-full max-w-full min-w-0"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <Document
          file={file}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onLoadError}
          loading={<div className="flex items-center justify-center py-16 text-neutral-500">Carregando PDF...</div>}
          className="flex flex-col items-center w-full max-w-full min-w-0"
        >
          {numPages !== null &&
            Array.from({ length: numPages }, (_, i) => {
              const measuredH = slotHeights[i];
              const fallbackH = pageWidth * DEFAULT_ASPECT;
              const slotH = measuredH ?? fallbackH;

              return (
                <div
                  key={`slot-${i}`}
                  data-page-index={i}
                  ref={(el) => {
                    slotRefs.current[i] = el;
                  }}
                  style={{
                    minHeight: slotH,
                    width: '100%',
                    maxWidth: pageWidth,
                    marginBottom: i < numPages - 1 ? GAP : 0,
                  }}
                  className="flex justify-center shrink-0"
                >
                  {visiblePages.has(i) ? (
                    <div className="w-full flex justify-center [&_.react-pdf__Page]:max-w-full [&_.react-pdf__Page__canvas]:max-w-full [&_.react-pdf__Page__canvas]:h-auto">
                      <Page
                        pageNumber={i + 1}
                        width={pageWidth}
                        renderTextLayer
                        renderAnnotationLayer
                        className="shadow-md max-w-full"
                        onLoadSuccess={(page) => onPageLoadSuccess(i, page)}
                      />
                    </div>
                  ) : (
                    <div
                      style={{ width: pageWidth, height: slotH }}
                      className="bg-neutral-100 rounded flex items-center justify-center text-neutral-400 text-sm max-w-full"
                    >
                      Página {i + 1}
                    </div>
                  )}
                </div>
              );
            })}
        </Document>
      </div>
    </div>
  );
}
