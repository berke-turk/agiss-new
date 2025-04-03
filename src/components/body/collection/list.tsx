// Fetch Api
import ApiPath from "@/lib/api-path";
import { fetchDetails, fetchList } from "@/lib/api-model";

// Components
import Error404 from "@/components/errors/404";

export default async function CollectionsBody({ lang, searchParams }: { lang: string, searchParams?: { scollection?: string } }) {
    let collections = await getCollections(lang, searchParams?.scollection);
    if (!collections)
        return (
            <>
                <Error404></Error404>
            </>
        )


    return (
        <>
        </>
    );
}

// Fetch Api
async function getCollections(lang: string, scollection?: string): Promise<any | undefined> {
    console.log(ApiPath.products.list(lang.toLocaleUpperCase()));

    // Fetch data from external API
    let result = await fetchList<any>(ApiPath.collections.list(lang.toLocaleUpperCase(), 0, 100, scollection));

    console.log(result);
    // Pass data to the page via props
    return result.data;
}