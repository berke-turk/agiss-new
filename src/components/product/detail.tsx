'use client';

import { useEffect, useState } from "react";
// Lib
import Product, { ProductGet } from "@/lib/data-interfaces/product";
import Consts from "@/lib/consts";
import Languages from "@/lib/languages";

export default function ProductDetail({ product, lang }: { product: ProductGet, lang: string }) {
    let [activeImage, setActiveImage] = useState<number>(0);

    const nextImage = (yon: number) => {
        yon = (yon + activeImage + product.relationships.images!.length) % product.relationships.images!.length;
        replaceImage(yon);
    };

    const replaceImage = (value: number) => {
        setActiveImage(value);
    };

    console.log(product.relationships);

    return (
        <>
            <div className="frame" style={{ marginTop: '50px' }}>
                <div className="product-section">
                    <div className="product-images">
                        <div className="active-image">
                            <img id="" src={Consts.cdn_base + '/doc/img/' + product.relationships.images?.[activeImage].file} alt="AGISS Kuru Şampuan" />
                            <button className="gezinme-butonu previous" onClick={() => { nextImage(-1) }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23fff">
                                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                            </svg></button>
                            <button className="gezinme-butonu next" onClick={() => { nextImage(1) }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23fff">
                                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                            </svg></button>
                        </div>
                        <div className="small-images">
                            {product.relationships.images?.map((value, index) => (
                                <img key={"p-i-" + index} className={"small-image" + (activeImage == index ? ' active ' : '')} src={Consts.cdn_base + '/doc/img/' + value.file} onClick={() => { replaceImage(index) }} />
                            ))}
                        </div>
                    </div>
                    <div className="product-bilgisi">
                        <h1 className="product-title">{product.relationships.content.title}</h1>
                        <p className="product-category">{product.relationships.collection?.relationships.content.title ?? product.relationships.category?.relationships?.content.title ?? ""}</p>
                        {product.relationships.content.subtitle && (
                            <p className="product-subtitle">{product.relationships.content.subtitle}</p>
                        )}
                        {product.relationships.content.weight && (
                            <p className="product-weight">{product.relationships.content.weight}</p>
                        )}
                        <div className="cizgi" style={{ borderColor: product.decor_code }}></div>
                        <div className="product-description" style={{ }}>
                            <div dangerouslySetInnerHTML={{ __html: product.relationships.content.description?.slice(0, 280).trim() ?? "" }} />
                        </div>
                        <a href={
                            lang == Languages.TR ? '#:~:text=ÜRÜN AÇIKLAMASI' : '#:~:text=PRODUCT DETAILS'
                        } style={{ color: product.decor_code }} className="devamini-oku" >{lang == Languages.TR ? 'Devamını Oku..' : 'Read More...'}</a>
                        <div className="cizgi" style={{ borderColor: product.decor_code }}></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="frame">
                <div className="aciklama" id="aciklama">
                    <div className="title" style={{ backgroundColor: product.decor_code }}>
                        {lang == Languages.TR ? 'ÜRÜN AÇIKLAMASI' : 'PRODUCT DETAILS'}
                    </div>
                    <div className="product-detail-text" style={{ textAlign: 'center' }}>
                        <div dangerouslySetInnerHTML={{ __html: product.relationships.content.detail ?? "" }} />
                    </div>
                    {product.relationships.detail_images?.map((value, index) => (
                        <img key={"p-d-i-" + index} src={Consts.cdn_base + '/doc/img/' + value.file} alt={product.relationships.content.title + ""} />
                    ))}
                </div>
            </div>
        </>
    )

}