import Cookies from 'js-cookie';

// Lib
import Consts from '@/lib/consts';

import ApiPath from "../api-path";
import { buildUrl } from "../url";
import { FetcHModel } from '../api-client-model';

// Models
import LanguageModel from './model/language';

//#region Create
interface ICreate {}
interface ICreateFiles {}
interface ICreateResponse {
    success: boolean,
    data: any,
    error: any
}

export const create = async (fields: ICreate, files: ICreateFiles): Promise<ICreateResponse> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/languages', {});

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            },
            body: JSON.stringify({
                ...fields
            })
        });
        let result: FetcHModel<{ items: number, page: number, data: LanguageModel[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: LanguageModel[] }>;

        if (response.status != 200) {
            console.log('___?');
            console.log(response.status); // log response
            return { success: false, data: null, error: null };
        }

        if (result.success)
            return { success: true, data: result.data, error: null };
        else
            console.log(result); // log response data

        return { success: false, data: null, error: result.error };
    } catch (error) {
        console.log("Fetch Error mevcut");
        console.log(error);
        return { success: false, data: null, error: null };
    }
};


export const list = async (index: number, size: number, search?: string, filter?: any): Promise<{ items: number, page: number, data: LanguageModel[] }> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/languages', {
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
        let result: FetcHModel<{ items: number, page: number, data: LanguageModel[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: LanguageModel[] }>;

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

export const details = async (index: number, size: number, search?: string, filter?: any): Promise<{ items: number, page: number, data: LanguageModel[] }> => {
    try {
        const apiUrl = buildUrl(Consts.base_api + '/languages', {
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
        let result: FetcHModel<{ items: number, page: number, data: LanguageModel[] }> = await response.json() as FetcHModel<{ items: number, page: number, data: LanguageModel[] }>;

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
    create, list, details,
}