'use client';

import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import PaperView from '@/components/inc/paper-view';

export default function PaperContent() {
    const [data, setData] = useState([]); // API'den alınan veriler
    const [page, setPage] = useState(1);  // Şu anki sayfa
    const [loading, setLoading] = useState(false); // Yükleniyor durumu
    const [hasMore, setHasMore] = useState(true); // Daha fazla veri var mı
    const [pdfBlob, setPdfBlob] = useState(null);
    const [scale, setScale] = useState(1);
    useEffect(() => {
        console.log("Page değişti: " + page);

        // API'den sayfa sayfa veri çekme
        const fetchPDF = async () => {
            try {
                const response = await axios.get(`http://localhost:3032/pdf/agiss-/page/${page}`, {
                    responseType: 'blob', // PDF verisini Blob olarak al
                });
                setPdfBlob(response.data); // Blob'u state'e kaydet

                // Eğer dönen veri varsa yeni verileri ekle, yoksa hasMore'u false yap
                console.log("Geldi");
            } catch (error) {
                console.error("Veri alınırken hata oluştu:", error);
            }
            setLoading(false);
        };

        fetchPDF();
    }, [page]);

    const next = () => {
        if (hasMore && !loading) {
            setPdfBlob(null);
            setPage(prevPage => prevPage + 2);
        }
    };

    const previous = () => {
        if (hasMore && !loading) {
            if (page > 1) {
                setPdfBlob(null);
                setPage(prevPage => prevPage - 2);
            }
        }
    };

    const scaleUp = () => {
        if (hasMore && !loading) {
            if (scale < 1 * 3) {
                setScale(scale => scale + 0.5);
            }
        }
    };

    const scaleDown = async () => {
        if (hasMore && !loading) {
            if (scale >= 1 + 0.5) {
                setScale(scale => scale - 0.5);
            }
        }
    };

    const memoizedPaperView = useMemo(() => (
        <PaperView scale={scale} pdfBlob={pdfBlob} />
    ), [scale, pdfBlob]);

    return (
        <div className='paper-top'>
            <div className='paper-controls'>
                <div className='paper-controls-center'>
                    {!loading && hasMore && (
                        <button onClick={next}> Sonrakı</button>
                    )}
                    {!loading && hasMore && (
                        <button onClick={previous}>Önceki</button>
                    )}
                    <button onClick={scaleUp}>Yaklaştır</button>
                    <button onClick={scaleDown}>Uzaklaştır</button>
                    {!hasMore && <p>Tüm veriler yüklendi.</p>}
                </div>
            </div>
            {memoizedPaperView}
            <div className='paper-controls'>
                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </div>
    )
}

/*
  


*/