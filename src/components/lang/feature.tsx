'use client'

import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LangFeature({ is_base = false, lang }: { is_base?: boolean, lang: string }) {
    const router = useRouter()
    useEffect(() => {
        let currentLang = Cookie.get('lang');
        if (currentLang) {
            if (currentLang != lang)
                Cookie.set('lang', lang.toLocaleUpperCase());
        }
        else
            Cookie.set('lang', lang.toLocaleUpperCase());
        console.log(Cookie.get('lang'));

        if (is_base)
            router.replace('/' + lang);
    }, []);

    return (
        <>
        </>
    )
}