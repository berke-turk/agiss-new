export function objectToQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (key === "filter" && typeof value === "object" && value !== null) {
            // filter içindeki değerleri filter[key]=value olarak ekle
            Object.entries(value).forEach(([filterKey, filterValue]) => {
                if (filterValue !== undefined && filterValue !== null) {
                    searchParams.append(`filter[${filterKey}]`, String(filterValue));
                }
            });
        } else if (key === "page" && typeof value === "object" && value !== null) {
            // page içindeki değerleri page[key]=value olarak ekle
            Object.entries(value).forEach(([pageKey, pageValue]) => {
                if (pageValue !== undefined && pageValue !== null) {
                    searchParams.append(`page[${pageKey}]`, String(pageValue));
                }
            });
        } else {
            // Diğer değerleri normal şekilde ekle
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        }
    });

    return searchParams.toString();
}

export function buildUrl(baseUrl: string, params: Record<string, any>): string {
    const queryString = objectToQueryString(params);
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}