import Cookies from 'js-cookie';

// Lib
import Consts from '@/lib/consts';

import ApiPath from "../api-path";
import { buildUrl } from "../url";
import { FetcHModel } from '../api-client-model';

// Models
import CollectionModel from './model/collection';

//#region Create
interface ICreate {}
interface ICreateFiles {}
interface ICreateResponse {
    success: boolean,
    data: any,
    error: any
}

export const list = async (index: number, size: number, search?: string, filter?: any): Promise<{ items: number, page: number, data: CollectionModel[] }> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/collections', {
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
        });
        let result: FetcHModel<{ items: number, page: number, data: CollectionModel[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: CollectionModel[] }>;

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

export const details = async (index: number, size: number, search?: string, filter?: any): Promise<{ items: number, page: number, data: CollectionModel[] }> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/collections', {
            filter: filter,
            search: search,
            page: {
                index: index,
                size: size
            },
        });

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            },
        });
        let result: FetcHModel<{ items: number, page: number, data: CollectionModel[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: CollectionModel[] }>;

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

export default {
     list, details,
}