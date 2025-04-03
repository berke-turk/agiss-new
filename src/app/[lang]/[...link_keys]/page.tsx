import type { Metadata } from 'next'

// Lib
import Languages from "@/lib/languages";
import { LangProvider } from "@/lib/context/lang";

// Page Body Components
import Category from '@/components/body/category/single';
import CategoryList from '@/components/body/category/list';
import Collection from '@/components/body/collection/single';
import CollectionList from '@/components/body/collection/list';
import Product from '@/components/body/product';
import ProductList from '@/components/body/products';
import Catalog from "@/components/body/catalog";
import Contact from "@/components/body/contact";
import Institutional from "@/components/body/institutional";
import Media from "@/components/body/media";
import Tips from "@/components/body/tips";
import Error404 from "@/components/errors/404";
//

// MetaData
export var metadata: Metadata = {
    title: "Agiss"
};

const metaDataUpdate = async function (newMetaData: Metadata) {
    metadata = { ...newMetaData };
}

interface PageProps {
    params: {
        lang: string;
        link_keys: string[];
    };
    searchParams?: {
        sproduct?: string,
        scollection?: string,
        scategory?: string,
        search?: string,
    }
}

export default function Home({
    params,
    searchParams
}: PageProps) {
    // Filter link_keys
    console.log("fff");
    console.log(params.link_keys.length);
    console.log(params.link_keys);
    console.log(searchParams);

    switch (params.link_keys[0]) {
        case (
            params.lang == Languages.TRL ? "urunler" : "products"
        ):
            metadata.title = params.lang == Languages.TRL ? "Ürünler - Agiss" : "Products - Agiss";
            return (
                <ProductList metaDataUpdate={metaDataUpdate}
                    lang={params.lang.toLocaleUpperCase()}
                    query={searchParams?.search}></ProductList>
            );
        case (
            params.lang == Languages.TRL ? "kategoriler" : "categories"
        ):
            metadata.title = params.lang == Languages.TRL ? "Kategoriler - Agiss" : "Categories - Agiss";
            return (
                <CategoryList></CategoryList>
            );
        case (
            params.lang == Languages.TRL ? "koleksiyonlar" : "collections"
        ):
            metadata.title = params.lang == Languages.TRL ? "Koleksiyonlar - Agiss" : "Collections - Agiss";
            return (
                <CollectionList lang={params.lang}></CollectionList>
            );

        case (
            params.lang == Languages.TRL ? "urun" : "product"
        ):
            console.log("geldi?")
            if (params.link_keys.length == 2)
                return (
                    <Product lang={params.lang.toLocaleUpperCase()} seo={params.link_keys[1]}></Product>
                );
            else
                return (
                    <Error404></Error404>
                );
        case (
            params.lang == Languages.TRL ? "kategori" : "category"
        ):
            if (params.link_keys.length == 2)
                return (
                    <Category lang={params.lang.toLocaleUpperCase()} seo={params.link_keys[1]}></Category>
                );
            else
                return (
                    <Error404></Error404>
                );
        case (
            params.lang == Languages.TRL ? "koleksiyon" : "collection"
        ):
            if (params.link_keys.length == 2)
                return (
                    <Collection lang={params.lang.toLocaleUpperCase()} seo={params.link_keys[1]}></Collection>
                );
            else
                return (
                    <Error404></Error404>
                );
        case (
            params.lang == Languages.TRL ? "katalog" : "catalog"
        ):
            metadata.title = params.lang == Languages.TRL ? "Katalog - Agiss" : "Catalog - Agiss";
            return (
                <Catalog lang={params.lang.toLocaleUpperCase()}></Catalog>
            );
        case (
            params.lang == Languages.TRL ? "iletisim" : "contact"
        ):
            metadata.title = params.lang == Languages.TRL ? "İletişim - Agiss" : "Contact - Agiss";
            return (
                <Contact lang={params.lang.toLocaleUpperCase()}></Contact>
            );
        case (
            params.lang == Languages.TRL ? "ipuclari" : "tips"
        ):
            metadata.title = params.lang == Languages.TRL ? "İpuçları - Agiss" : "Tips - Agiss";
            return (
                <Tips lang={params.lang.toLocaleUpperCase()}></Tips>
            );
        case (
            params.lang == Languages.TRL ? "kurumsal" : "institutional"
        ):
            metadata.title = params.lang == Languages.TRL ? "Kurumsal - Agiss" : "Institutional - Agiss";
            return (
                <Institutional lang={params.lang.toLocaleUpperCase()}></Institutional>
            );
        case (
            params.lang == Languages.TRL ? "medya" : "media"
        ):
            metadata.title = params.lang == Languages.TRL ? "Medya - Agiss" : "Media - Agiss";
            return (
                <Media lang={params.lang.toLocaleUpperCase()}></Media>
            );
        default:
            return (
                <Error404></Error404>
            );
    }
}