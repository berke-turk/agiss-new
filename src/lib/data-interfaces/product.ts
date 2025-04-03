import Category, { CategoryGet } from "./category"
import Collection, { CollectionGet } from "./collection"

export interface ProductContent {
    product_id: string,
    title?: string,
    subtitle?: string,
    seo?: string,
    description?: string,
    detail?: string,
    keywords?: string,
    weight?: string,
    language: string
}

export interface ProductFile {
    product_id: string,
    product_file_id: string,
    file: string,
    seo?: string,
    created_at?: string,
    updated_at?: string
}

export interface ProductImage {
    product_id: string,
    product_image_id: string,
    file: string,
    seo?: string,
    image_order?: number,
    created_at?: string,
    updated_at?: string
}

export interface ProductDetailImage {
    product_id: string,
    product_detail_image_id: string,
    file: string,
    seo?: string,
    image_order?: number,
    created_at?: string,
    updated_at?: string
}

export interface ProductGet {
    category_id?: string,
    collection_id?: string,
    product_id?: string,
    product_no?: string,
    relationships: {
        category?: CategoryGet,
        collection?: CollectionGet,
        content: ProductContent,
        files?: ProductFile[],
        images?: ProductImage[],
        detail_images?: ProductDetailImage[],
    },
    decor_code?: string,
    product_type?: string,
    product_status?: string,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}

export default interface Product {
    category_id?: string,
    collection_id?: string,
    product_id?: string,
    product_no?: string,
    content: ProductContent,
    files?: ProductFile[],
    images?: ProductImage[],
    detail_images?: ProductDetailImage[],
    decor_code?: string,
    product_type?: string,
    product_status?: string,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}