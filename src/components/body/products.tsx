import Head from "next/head";
import type { Metadata } from 'next'

import './css/products.css';

// Fetch Api
import ApiPath from "@/lib/api-path";
import { fetchDetails, fetchList } from "@/lib/api-model";
import ProductModel, { ProductGet } from "@/lib/data-interfaces/product";
import ProductApi from '@/lib/api/product';

// Lib
import Languages from "@/lib/languages";
import Consts from "@/lib/consts";

export default async function Component({ lang, query, metaDataUpdate }: { lang: string, query?: string, metaDataUpdate: (newMetaData: Metadata) => {} }) {
    let products = await getProducts(lang, query);

    console.log("fff");
    await metaDataUpdate({ title: "Ürünler" });
    return (
        <>
            <div className="frame">
                <div className="list">
                    {products.map((value, index) => (
                        <a key={"products-" + index} href={'/' + lang.toLocaleLowerCase() + '/' + `${lang == Languages.TR ? 'urun' : 'product'}` + '/' + value.relationships.content.seo} className="slider-item">
                            <div className="product-image">
                                <img src={Consts.cdn_base + '/doc/img/' + value.relationships.images?.[0]?.file} alt={value.relationships.content.title} />
                            </div>
                            <div className="product-info">
                                <h3>{value.relationships.content.title}</h3>
                                <p>{value.relationships.category?.relationships?.content.title}</p>
                                <p>{value.relationships.collection?.relationships?.content.title}</p>
                                <span className="volume">{value.relationships.content.weight}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

// Fetch Api
async function getProducts(lang: string, search_query?: string): Promise<ProductGet[]> {
    // Fetch data from external API
    let result = await ProductApi.list(0, 100, search_query, { language: lang })

    // Pass data to the page via props
    return result.data;
}