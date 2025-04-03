interface Serie{
    img?: string,
    url: string
}

interface Params {
    title: string,
    series: Serie[]
}

export default function FeaturedSeries(params: Params) {
    return (
        <>
            <div className="series">
                <div className="title">
                    {params.title}
                </div>
                <div className="flex">
                    {params.series.map((value, index) => {
                        return (
                            <a key={"f-s-" + index} href={value.url}><img src={`/static/img/${value.img}`} alt="" /></a>
                        )
                    })}
                </div>
            </div>
        </>
    );
}