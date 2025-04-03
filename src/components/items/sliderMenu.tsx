'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Slider({lang}: {lang?: string}) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/static/scripts/slider.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <h1>Pürüzsüz bir <br /> cilt için  <br /><a href={`/${lang?.toLocaleLowerCase("TR")}/urunler`}>Agiss'i Keşfet</a></h1>
                    <div className="carousel-item active">
                        <img src="https://cdn.agiss.com.tr/v1/web-packages/images/cover-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.agiss.com.tr/v1/web-packages/images/cover-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.agiss.com.tr/v1/web-packages/images/cover-3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <svg className="control" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M14.91 6.71a.996.996 0 0 0-1.41 0L8.91 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41" />
                    </svg> <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <svg className="control" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01" />
                    </svg>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}