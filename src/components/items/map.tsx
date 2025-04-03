import Consts from "@/lib/consts";
import './css/map.css';

export default function Map({ title, subTitles, links }: { title: string, subTitles: string[], links: string[] }) {
    return (
        <>
            <div className="maps">
                <div className="frame">
                    {title}
                    {subTitles.map((value, index) => (
                        <>
                            {" > "} <a key={"map-link-" + index} className="map-link" href={links[index] ?? "/"} style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}><b>{value.toLocaleUpperCase("TR")}</b></a>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}