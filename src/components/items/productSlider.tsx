'use client';

import Consts from '@/lib/consts';
import Product, { ProductGet } from '@/lib/data-interfaces/product';
import Link from 'next/link';

export default function ProductSlider({ products }: { products: ProductGet[] }) {
    return (
        <div className="new-products frame">
            <h3 className="new-products__title">En Yeniler</h3>
            <div className="slider-container">
                <button className="slider-button prev-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23fff">
                        <path
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                        </path>
                    </svg>
                </button>

                <div className="slider-content">
                    {products.map((value, index) => (
                        <a key={"product-" + index} href={"/tr/urun/" + value.relationships.content.seo} className="slider-item">
                            <div className="product-image">
                                <img src={Consts.cdn_base + '/doc/img/' + value.relationships.images?.[0]?.file} alt={value.relationships.content.title} />
                            </div>
                            <div className="product-info">
                                <h3>{value.relationships.content?.title ?? ""}</h3>
                                <p>{value.relationships.collection?.relationships?.content.title ?? ""}</p>
                                <span className="volume">{value.relationships.category?.relationships?.content.title ?? ""}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <button className="slider-button next-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23fff">
                        <path
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}