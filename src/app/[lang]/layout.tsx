import Head from "next/head";

// Lib
import { fetchList } from "@/lib/api-model";
import ApiPath from "@/lib/api-path";
import Categories from '@/lib/types/category/types';

// Components
import Navbar from "@/components/navbar/component";
import Footer from "@/components/footer/component";

// Models
import ProductModel, { ProductGet } from "@/lib/data-interfaces/product";
import { CategoryGet } from "@/lib/data-interfaces/category";
import { CollectionGet } from "@/lib/data-interfaces/collection";

export default async function LangLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string }
}>) {
    // Fetct Navbar Items
    let series = await getCollections(params.lang);
    console.log(series);

    let categories = await getCategories(params.lang, 20, Categories.Product);
    console.log(categories);
    return (
        <>
            <Navbar categories={categories} series={series} lang={params.lang.toLocaleUpperCase()}></Navbar>
            {children}
            <Footer lang={params.lang.toLocaleUpperCase()}></Footer >
        </>
    );
}

// This gets called on every request
async function getProducts(lang: string): Promise<ProductGet[]> {
    // Fetch data from external API
    let result = await fetchList<ProductGet>(ApiPath.products.list(lang.toLocaleUpperCase(), 0, 10), undefined);

    console.log(result);
    // Pass data to the page via props
    return result.data;
}

// This gets called on every request
async function getCategories(lang: string, page_size: number = 4, category_type?: string): Promise<CategoryGet[]> {
    // Fetch data from external API
    let result = await fetchList<CategoryGet>(ApiPath.categories.list(lang.toLocaleUpperCase(), 0, page_size, category_type), undefined);

    console.log(result);
    // Pass data to the page via props
    return result.data;
}

// This gets called on every request
async function getCollections(lang: string, page_size: number = 4, category_type?: string): Promise<CollectionGet[]> {
    // Fetch data from external API
    let result = await fetchList<CollectionGet>(ApiPath.categories.list(lang.toLocaleUpperCase(), 0, page_size, category_type), undefined);

    console.log(result);
    // Pass data to the page via props
    return result.data;
}