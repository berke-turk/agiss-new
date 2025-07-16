import Cookies from 'js-cookie';

// Lib
import Consts from '@/lib/consts';

import ApiPath from "../api-path";
import { buildUrl } from "../url";
import { FetcHModel } from '../api-client-model';

// Models
import { ProductGet } from '../data-interfaces/product';

//#region Create
interface ICreate { }
interface ICreateFiles { }
interface ICreateResponse {
    success: boolean,
    data: any,
    error: any
}

export const list = async (index: number, size: number, search?: string, filter?: any): Promise<{ items: number, page: number, data: ProductGet[] }> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/products', {
            filter: filter,
            search: search,
            page: {
                index: index,
                size: size
            },
        });

        console.log(apiUrl);

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            },
            cache: 'no-cache'
        });
        let result: FetcHModel<{ items: number, page: number, data: ProductGet[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: ProductGet[] }>;

        console.log(result);
        if (response.status != 200) {
            console.log('___?');
            console.log(response.status); // log response
            return { items: 0, page: index, data: [] };
        }

        if (result.success)
            return result.data;
        else
            console.log(result.data); // log response data

        return { items: 0, page: index, data: [] };
    } catch (error) {
        console.log("Fetch Error mevcut");
        console.log(error);
        return { items: 0, page: index, data: [] };
    }
};

export const details = async (id: string): Promise<ProductGet | null> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/products/' + id, {});

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            },
            cache: 'no-cache'
        });
        let result: FetcHModel<ProductGet> = await response.json() as FetcHModel<ProductGet>;

        if (response.status != 200) {
            console.log('___?');
            console.log(response.status); // log response
            return null;
        }

        console.log(result);
        if (result.success)
            return result.data;
        else
            console.log(result.data); // log response data

        return null;
    } catch (error) {
        console.log("Fetch Error mevcut");
        console.log(error);
        return null;
    }
};

export default {
    list, details,
}