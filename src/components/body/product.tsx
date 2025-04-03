import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";

// Fetch Api
import ApiPath from "@/lib/api-path";
import { fetchDetails } from "@/lib/api-model";
import ProductModel, { ProductGet } from "@/lib/data-interfaces/product";

// Components
import ProductDetail from "@/components/product/detail";
import Map from "@/components/items/map";
import Error404 from "@/components/errors/404";

// Lib
import ProductApi from '@/lib/api/product';
import Languages from "@/lib/languages";
import Consts from "@/lib/consts";
import { useLang } from "@/lib/context/lang";

export default async function Component({ lang, seo }: { lang: string, seo: string }) {

    // Fetch Product Data
    let product = await getProduct(seo);
    if (product) {
        product.relationships.content.detail = DOMPurify.sanitize(product.relationships.content.detail ?? "")
    }
    console.log(product);
    if (product)
        return (
            <>
                <Head>
                    <meta name="title" content={product.relationships.content.title} />
                    <meta name="description" content={product.relationships.content.description?.slice(0, 150) + '...'} />
                    <meta name="keywords" content={product.relationships.content.keywords} />
                </Head>
                <Map
                    title={lang == Languages.TR ? 'ÜRÜN' : 'PRODUCT'}
                    subTitles={[
                        product.relationships.category?.relationships?.content?.title + '',
                        product.relationships.content.title + ''
                    ]}
                    links={[
                        Consts.base + '/' + (lang == Languages.TR ? 'tr/kategori' : 'en/category') + '/' + product.relationships.category?.relationships?.content?.seo,
                        product.relationships.content?.seo + ''
                    ]}></Map>
                <ProductDetail lang={lang} product={product}></ProductDetail>
            </>
        );
    else
        return (
            <Error404></Error404>
        );
}

// Fetch Api
async function getProduct(seo: string): Promise<ProductGet | undefined> {
    // Fetch data from external API
    let result = await ProductApi.details(seo);
    console.log("aaaaa");
    console.log(result);
    if (result)
        return result;
    return;
}