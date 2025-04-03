import Consts from "@/lib/consts";
import ProductModel, {CollectionGet} from "@/lib/data-interfaces/collection";
import Languages from "@/lib/languages";

interface Params {
    title: string,
    lang: string,
    series: CollectionGet[]
}

export default function SliderSeries(params: Params) {
    return (
        <>
            <div className="series-1">
                <div className="title">
                    {params.title}
                </div>
                <div className="slider-container">
                    <button className="slider-button prev-button">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'>
                            <path
                                d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' />
                        </svg>
                    </button>

                    <div className="slider-content">
                        {params.series.map((value, index) =>
                        (
                            <a key={"n-s-" + index} href={'/' + params.lang + '/' + `${params.lang.toLocaleUpperCase() == Languages.TR ? 'urun' : 'product'}` + '/' + value.relationships.content.seo} className="slider-item">
                                <div className="product-image">
                                    <img src={Consts.cdn_base + '/doc/img/' + value.images?.[0]} alt={value.relationships.content.title} />
                                </div>
                                <div className="product-info">
                                    <h3>{value.relationships.content.title}</h3>
                                    <p>{""}</p>
                                    <span className="volume">{value.relationships.content.description}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <button className="slider-button next-button">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'>
                            <path
                                d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}