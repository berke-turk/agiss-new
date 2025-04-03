import React from "react";

// Models
import ProductModel from "@/lib/data-interfaces/product";
import Languages from "@/lib/languages";
import { CategoryGet } from "@/lib/data-interfaces/category";

interface Props {
    lang: string,
    categories: CategoryGet[]
    children?: React.ReactNode
}

export default function ProductLi({ categories, lang, children }: Props) {
    return (
        <>
            {children}
            {categories.map((value, index) =>
            (
                <li key={"p-l-" + index}><a href={'/' + lang.toLocaleLowerCase() + `/${lang == Languages.TR ? 'kategori' : 'category'}/` + value.relationships?.content.seo}>{value.relationships?.content.title}</a></li>
            ))}
        </>
    );
}