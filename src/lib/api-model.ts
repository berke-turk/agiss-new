// Lib
import Consts from '@/lib/consts';
//

export interface FetcHModel<T> {
    success: boolean,
    data: T,
    error: boolean
}

export async function fetchList<T>(path: string, config?: RequestInit): Promise<{ items: number, page: number, data: T[] }> {
    try {

        const response = await fetch(Consts.base_api + path, {
            ...config,
            cache: 'no-cache'
        });
        let result: FetcHModel<{ items: number, page: number, data: T[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: T[] }>;
        if (response.status != 200) {
            console.log('___?');
            console.log(response.status); // log response
            return {
                items: 0,
                page: 0,
                data: []
            };
        }

        if (result.success)
            return result.data;
        else
            console.log(result.data); // log response data

        return {
            items: 0,
            page: 0,
            data: []
        };
    } catch (error) {
        console.log("Fetch Error mevcut");
        console.log(error);
        return {
            items: 0,
            page: 0,
            data: []
        };
    }
}

export async function fetchDetails<T>(path: string, config?: RequestInit): Promise<{ success: boolean, data?: T }> {
    try {

        console.log(Consts.base_api + path);
        const response = await fetch(Consts.base_api + path, {
            ...config,
            cache: 'no-cache'
        });
        let result: FetcHModel<T> = await response.json() as FetcHModel<T>;

        if (response.status != 200) {
            console.log('___?');
            console.log(response.status); // log response
            return { success: false };
        }

        if (result.success)
            return { success: true, data: result.data };
        else
            console.log(result.data); // log response data

        return { success: false };
    } catch (error) {
        console.log("Fetch Error mevcut");
        console.log(error);
        return { success: false };
    }
}