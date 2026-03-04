import { useState, useEffect, useRef, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Worker do PDF.js (CDN para evitar problema de build no Vite)
if (typeof pdfjs !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
}

// Proporção A4 para altura do slot (evita layout shift; PDFs costumam ser A4)
const PAGE_ASPECT = 297 / 210
const GAP = 16
const ROOT_MARGIN = '400px' // carrega páginas 400px antes/depois da tela

type PdfViewerProps = {
  url: string
  title?: string
}

export default function PdfViewer({ url }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pageWidth, setPageWidth] = useState(800)
  const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set([0]))
  const slotRefs = useRef<(HTMLDivElement | null)[]>([])

  const pageHeight = pageWidth * PAGE_ASPECT

  useEffect(() => {
    const updateWidth = () => setPageWidth(Math.min(800, window.innerWidth - 48))
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const onLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n)
    setError(null)
    setVisiblePages(new Set([0]))
    slotRefs.current = []
  }, [])

  const onLoadError = useCallback(() => {
    setError('Não foi possível carregar o PDF.')
  }, [])

  useEffect(() => {
    setNumPages(null)
    setError(null)
  }, [url])

  // Só renderiza páginas visíveis (virtualização) para não estourar memória no mobile
  useEffect(() => {
    if (numPages === null) return
    const observer = new IntersectionObserver(
      (entries) => {
        setVisiblePages((prev) => {
          const next = new Set(prev)
          entries.forEach((entry) => {
            const i = Number((entry.target as HTMLElement).dataset.pageIndex)
            if (Number.isNaN(i)) return
            if (entry.isIntersecting) next.add(i)
            else next.delete(i)
          })
          return next
        })
      },
      { root: null, rootMargin: `${ROOT_MARGIN} 0px ${ROOT_MARGIN} 0px`, threshold: 0 }
    )
    for (let i = 0; i < numPages; i++) {
      const el = slotRefs.current[i]
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [numPages])


  if (error) {
    return (
      <div className="rounded-xl bg-white shadow-lg border border-gray-100 p-8 text-center">
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden">
      <div
        className="overflow-x-auto overflow-y-auto p-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <Document
          file={url}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onLoadError}
          loading={
            <div className="flex items-center justify-center py-16 text-gray-500">
              Carregando PDF...
            </div>
          }
          className="flex flex-col items-center"
        >
          {numPages !== null &&
            Array.from({ length: numPages }, (_, i) => (
              <div
                key={`slot-${i}`}
                data-page-index={i}
                ref={(el) => {
                  slotRefs.current[i] = el
                }}
                style={{
                  minHeight: pageHeight,
                  width: pageWidth,
                  marginBottom: i < numPages - 1 ? GAP : 0,
                }}
                className="flex justify-center"
              >
                {visiblePages.has(i) ? (
                  <Page
                    pageNumber={i + 1}
                    width={pageWidth}
                    renderTextLayer
                    renderAnnotationLayer
                    className="shadow-md"
                  />
                ) : (
                  <div
                    style={{ width: pageWidth, height: pageHeight }}
                    className="bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm"
                  >
                    Página {i + 1}
                  </div>
                )}
              </div>
            ))}
        </Document>
      </div>
    </div>
  )
}
