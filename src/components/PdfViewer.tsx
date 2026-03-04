import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Worker do PDF.js (CDN para evitar problema de build no Vite)
if (typeof pdfjs !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
}

type PdfViewerProps = {
  url: string
  title?: string
}

export default function PdfViewer({ url }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pageWidth, setPageWidth] = useState(800)

  useEffect(() => {
    const updateWidth = () => setPageWidth(Math.min(800, window.innerWidth - 48))
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  function onLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setError(null)
  }

  function onLoadError() {
    setError('Não foi possível carregar o PDF.')
  }

  useEffect(() => {
    setNumPages(null)
    setError(null)
  }, [url])

  if (error) {
    return (
      <div className="rounded-xl bg-white shadow-lg border border-gray-100 p-8 text-center">
        <p className="text-gray-600 mb-4">{error}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700"
        >
          Abrir PDF em nova aba
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto overflow-y-visible" style={{ WebkitOverflowScrolling: 'touch' }}>
        <Document
          file={url}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onLoadError}
          loading={
            <div className="flex items-center justify-center py-16 text-gray-500">
              Carregando PDF...
            </div>
          }
          className="flex flex-col items-center gap-4 p-4"
        >
          {numPages !== null &&
            Array.from(new Array(numPages), (_, i) => (
              <Page
                key={`page-${i + 1}`}
                pageNumber={i + 1}
                width={pageWidth}
                renderTextLayer
                renderAnnotationLayer
                className="shadow-md"
              />
            ))}
        </Document>
      </div>
    </div>
  )
}
