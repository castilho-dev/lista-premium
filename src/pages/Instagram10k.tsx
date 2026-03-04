import PdfViewer from '../components/PdfViewer'

const PDF_URL = '/pdf/instagram10k.pdf'

export default function Instagram10k() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans pt-24 pb-16">
      <div className="container-main max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-l-4 border-rose-500/60 pl-6 mb-8">
          <h1 className="font-display text-gray-900 font-bold text-2xl sm:text-3xl tracking-tight">
            Instagram 10K
          </h1>
          <p className="mt-1 text-gray-500 text-sm">Lista Premium</p>
        </div>

        <PdfViewer url={PDF_URL} title="Instagram 10K" />
      </div>
    </div>
  )
}
