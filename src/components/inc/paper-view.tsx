'use client';

import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.mjs`;

export default function PaperView({ scale = 1, pdfBlob = null}) {
    
    return (
        <div className='paper-view'>
            {pdfBlob != null ? (
                <Document
                    file={URL.createObjectURL(pdfBlob)}
                    renderMode="canvas"
                    className="paper-canvas"

                >
                    <Page
                        className=""
                        key={1}
                        pageNumber={1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        scale={scale}
                    />
                    <Page
                        className=""
                        key={2}
                        pageNumber={2}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        scale={scale}
                    />
                </Document>
            ) : (
                <p>PDF yükleniyor...</p>
            )}
        </div>
    );
}