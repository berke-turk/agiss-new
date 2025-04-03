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
    subtitle?: string,
    seo?: string,
    description?: string,
    keywords?: string,
    language: string
}

export interface CategoryGet {
    category_id?: string,
    category_no?: string,
    client_id?: string,
    relationships?: {
        content: CategoryContent,
    },
    files?: CategoryFile[],
    images?: CategoryImage[],
    category_type?: string,
    category_status?: string,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}

export default interface Category {
    category_id?: string,
    category_no?: string,
    client_id?: string,
    content: CategoryContent,
    files?: CategoryFile[],
    images?: CategoryImage[],
    category_type?: string,
    category_status?: string,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}