import type { Metadata } from 'next'

import BasePage from '@/components/home/component';
import LangFeature from '@/components/lang/feature';

// MetaData
export const metadata: Metadata = {
    title: 'Agiss'
};

interface PageProps {
    params: {
        lang: string;
    };
}

export default function Home({
    params
}: PageProps) {
    return (
        <>
            <BasePage lang={params.lang.toLocaleUpperCase("TR")}></BasePage>
            <LangFeature is_base={false} lang={params.lang}></LangFeature>
        </>
    )
}
