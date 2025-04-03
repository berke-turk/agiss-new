'use client';

import { MutableRefObject, useRef } from "react";

// Lib

export default function About() {
    const countRef = useRef(0); // Sayıyı saklamak için ref
    const countDisplayRef: MutableRefObject<HTMLParagraphElement | null> = useRef(null); // DOM elemanını seçmek için ref

    const increment = () => {
        countRef.current += 1; // Sayıyı arttır
        if (countDisplayRef.current) {
            countDisplayRef.current.textContent = `Mevcut Sayı: ${countRef.current}`; // DOM'u güncelle
        }
    };

    return (
        <div>
            <h1>useRef ile DOM Güncelleme</h1>
            <p ref={countDisplayRef}>Mevcut Sayı: 0</p>
            <button onClick={increment}>Arttır</button>
        </div>
    );
}