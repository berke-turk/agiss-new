export interface CategoryFile {
    category_id: string,
    category_file_id: string,
    file: string,
    seo?: string,
    created_at?: string,
    updated_at?: string
}

export interface CategoryImage {
    category_id: string,
    category_image_id: string,
    file: string,
    seo?: string,
    image_order?: number,
    created_at?: string,
    updated_at?: string
}

export interface CategoryContent {
    category_id: string,
    title?: string,
    seo?: string,
    description?: string,
    detail?: string,
    keywords?: string,
    language: string
}

export default interface Category {
    category_id?: string,
    category_no?: string,
    relationships?: {
        content: CategoryContent,
    },
    files?: CategoryFile[],
    images?: CategoryImage[],
    category_type?: string,
    category_status?: string,
    view_count?: number,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}