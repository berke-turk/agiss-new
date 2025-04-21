// Fetch Api
import ApiPath from "@/lib/api-path";
import { fetchDetails, fetchList } from "@/lib/api-model";
import ProductModel, { ProductGet } from "@/lib/data-interfaces/product";
import CategoryModel, { CategoryGet } from "@/lib/data-interfaces/category";
import ProductApi from '@/lib/api/product';

// Components
import Map from "@/components/items/map";
import Error404 from "@/components/errors/404";
import Languages from "@/lib/languages";
import Consts from "@/lib/consts";

export default async function Component({ lang, seo }: { lang: string, seo: string }) {
    let category = await getCategory(seo);
    if (!category)
        return (
            <>
                <Error404></Error404>
            </>
        )

    let products = await getProducts(category.category_id!);

    return (
        <>
            <Map
                title={lang == Languages.TR ? 'KATEGORİ' : 'CATEGORY'}
                subTitles={[
                    category.relationships?.content.title + "",
                ]}
                links={[
                    category.relationships?.content.seo + ""
                ]}></Map>
            <div className="frame">
                <div className="list">
                    {products.map((value, index) => (
                        <a key={"category-i-" + index} href={'/' + lang.toLocaleLowerCase() + '/' + `${lang == Languages.TR ? 'urun' : 'product'}` + '/' + value.relationships.content.seo} className="big-item">
                            <div className="product-image">
                                <img src={Consts.cdn_base + '/doc/img/' + value.relationships.images?.[0]?.file} alt={value.relationships.category?.relationships?.content.title} />
                            </div>
                            <div className="product-info">
                                <h3>{value.relationships.content.title}</h3>
                                <p>{value.relationships.collection?.relationships?.content.title}</p>
                                <span className="volume">{value.relationships.content.weight}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

// Fetch Api
async function getCategory(seo: string): Promise<CategoryGet | undefined> {
    // Fetch data from external API
    let result = await fetchDetails<CategoryGet>(ApiPath.categories.details(seo));

    // Pass data to the page via props
    return result.data;
}

// Fetch Api
async function getProducts(category_id: string): Promise<ProductGet[]> {
    console.log("PRODUCTSSS");
    // Fetch data from external API
    let result = await ProductApi.list(0, 100, undefined, { category_id: category_id });

    // Pass data to the page via props
    return result.data;
}