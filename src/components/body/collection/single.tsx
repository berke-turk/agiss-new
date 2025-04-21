// Fetch Api
import ApiPath from "@/lib/api-path";
import { fetchDetails, fetchList } from "@/lib/api-model";
import ProductModel, { ProductGet } from "@/lib/data-interfaces/product";
import CollectionModel, { CollectionGet } from "@/lib/data-interfaces/collection";
import ProductApi from '@/lib/api/product';

// Components
import Map from "@/components/items/map";
import Error404 from "@/components/errors/404";
import Languages from "@/lib/languages";
import Consts from "@/lib/consts";

export default async function Component({ lang, seo }: { lang: string, seo: string }) {
    let collection = await getCollection(lang, seo);
    if (!collection)
        return (
            <>
                <Error404></Error404>
            </>
        )

    let products = await getProducts(collection.collection_id!);

    return (
        <>

            <Map
                title={lang == Languages.TR ? 'SERİLER' : 'SERIES'}
                subTitles={[
                    collection.relationships?.content?.title + "",
                ]}
                links={[
                    '/' + lang.toLocaleLowerCase() + '/koleksiyon/' + collection.relationships?.content?.seo + ""
                ]}></Map>
            <div className="frame">
                <div className="list">
                    {products.map((value, index) => (
                        <a key={"collection-i-" + index} href={'/' + lang.toLocaleLowerCase() + '/' + `${lang == Languages.TR ? 'urun' : 'product'}` + '/' + value.relationships.content.seo} className="big-item">
                            <div className="product-image">
                                <img src={Consts.cdn_base + '/doc/img/' + value.relationships.images?.[0]?.file} alt={value.relationships?.content?.title ?? ""} />
                            </div>
                            <div className="product-info">
                                <h3>{value.relationships?.content?.title}</h3>
                                <p>{value.relationships.category?.relationships?.content.title}</p>
                                <span className="volume">{value.relationships?.content?.weight}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

// Fetch Api
async function getCollection(lang: string, seo: string): Promise<CollectionGet | undefined> {

    // Fetch data from external API
    let result = await fetchDetails<CollectionGet>(ApiPath.collections.details(seo));

    console.log(result);
    // Pass data to the page via props
    return result.data;
}

// Fetch Api
async function getProducts(collection_id: string): Promise<ProductGet[]> {
    console.log("PRODUCTSSS");
    // Fetch data from external API
    let result = await ProductApi.list(0, 100, undefined, { collection_id: collection_id });

    // Pass data to the page via props
    return result.data;
}