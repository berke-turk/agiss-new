import Consts from "@/lib/consts";
import { CategoryGet } from "@/lib/data-interfaces/category";
import Languages from "@/lib/languages";

interface Params {
    lang: string,
    categories: CategoryGet[]
}

export default function CategoriesCard({ lang, categories }: Params) {
    return (
        <>
            {categories.map((value, index) => (
                <a key={"category-l-" + index} href={'/' + lang.toLocaleLowerCase() + (lang == Languages.TR ? '/koleksiyon' : '/collection') + '/' + value.relationships?.content.seo} className="card">
                    <div className="image-wrapper">
                        <img src={Consts.cdn_base + '/doc/img/' + value.images?.[0]} alt={value.relationships?.content.title} />
                    </div>
                    <div className="detail">
                        <b>{value.relationships?.content.title}</b>
                        <p>{value.relationships?.content.subtitle ?? ""}<br /> {value.relationships?.content.description}</p>
                    </div>
                </a>
            ))}
        </>
    );
}