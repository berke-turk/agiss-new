import Categories from '@/lib/types/category/types';

const ApiPath = {
    papers: {
        list: (page_index: number = 0, page_size: number = 20) => `/papers?page[index]=${page_index}&page[size]=${page_size}`,
    },
    products: {
        list: (language: string, page_index: number = 0, page_size: number = 20, is_new: string = 'false', category_id?: string, collection_id?: string, search?: string) =>
            `/products?filter[language]=${language}&page[index]=${page_index}&page[size]=${page_size}` +
            `${is_new != 'false' ? '&filter[is_new]=' + is_new : ''}` +
            `${category_id ? '&filter[category_id]=' + category_id : ''}` +
            `${collection_id ? `&filter[collection_id]=` + collection_id : ``}` +
            `${search ? `&search=` + search : ``}`,
        details: (seo: string) => `/products/${seo}`,
    },
    categories: {
        list: (language: string, page_index: number = 0, page_size: number = 20, search?: string) => `/categories?filter[language]=${language}&page[index]=${page_index}&page[size]=${page_size}${search ? `&search=${search}` : ``}`,
        details: ( seo: string) => `/categories/${seo}`,
    },
    collections: {
        list: (language: string, page_index: number = 0, page_size: number = 20, search?: string | null) => `/collections?filter[language]=${language}&page[index]=${page_index}&page[size]=${page_size}${search ? `&search=${search}` : ``}`,
        details: (seo: string) => `/collections/${seo}`,
    }
} as const;

export default ApiPath;