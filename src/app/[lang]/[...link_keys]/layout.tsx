import type { Metadata } from 'next'

// Lib
import { LangProvider } from "@/lib/context/lang";

export default function LangLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string, link_keys: string[] }
}>) {

    return (
        <>
            <LangProvider lang={params.lang.toLocaleUpperCase()}>{children}</LangProvider>
        </>
    );
}
