import React from "react";

// Models
import {ProductGet} from "@/lib/data-interfaces/product";
import Languages from "@/lib/languages";

interface Props {
    products: ProductGet[],
    lang: string,
    children?: React.ReactNode
}

export default function ProductLi({ products, lang, children }: Props) {
    return (
        <>
            {children}
            {products.map((value, index) =>
            (
                <li key={"p-l-" + index}><a href={'/' + lang.toLocaleLowerCase() + `/${lang == Languages.TR ? 'urun' : 'product'}/` + value.relationships.content.seo}>{value.relationships.content.title?.slice(0, 25) + '...'}</a></li>
            ))}
        </>
    );
}