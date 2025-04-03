export interface CollectionFile {
    collection_id: string,
    collection_file_id: string,
    file: string,
    seo?: string,
    created_at?: string,
    updated_at?: string
}

export interface CollectionImage {
    collection_id: string,
    collection_image_id: string,
    file: string,
    seo?: string,
    image_order?: number,
    created_at?: string,
    updated_at?: string
}

export interface CollectionContent {
    collection_id: string,
    title?: string,
    seo?: string,
    description?: string,
    keywords?: string,
    language: string
}

export interface CollectionGet {
    collection_id?: string,
    collection_no?: string,
    client_id?: string,
    relationships: {
        content: CollectionContent,
    }
    files?: CollectionFile[],
    images?: CollectionImage[],
    collection_type?: string,
    collection_status?: string,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}

export default interface Collection {
    collection_id?: string,
    collection_no?: string,
    client_id?: string,
    content: CollectionContent,
    files?: CollectionFile[],
    images?: CollectionImage[],
    collection_type?: string,
    collection_status?: string,
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}