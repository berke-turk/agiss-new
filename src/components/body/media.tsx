// Lib
import Languages from "@/lib/languages";

export default function Component({ lang }: { lang: string }) {

    return (
        <>
            <div className="maps">
                <div className="frame">
                    {lang == Languages.TR ? 'Medya' : 'Media'}
                </div>
            </div>

            <div className="media">
                <div className="frame flex1">
                    <a href="#">
                        <div className="thumbnail">
                            <img src="/static/img/slider.jpg" alt="Background image" />
                            <div className="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M8 5.14v14l11-7z" /></svg>
                            </div>
                        </div>
                        Katalog<br />2024
                        <i>Video 01</i>
                    </a>
                    <a href="#">
                        <div className="thumbnail">
                            <img src="/static/img/slider.jpg" alt="Background image" />
                            <div className="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M8 5.14v14l11-7z" /></svg>
                            </div>
                        </div>
                        Katalog<br />2024
                        <i>Video 01</i>
                    </a>

                    <a href="#">
                        <div className="thumbnail">
                            <img src="/static/img/slider.jpg" alt="Background image" />
                            <div className="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M8 5.14v14l11-7z" /></svg>
                            </div>
                        </div>
                        Katalog<br />2024
                        <i>Video 01</i>
                    </a>

                    <a href="#">
                        <div className="thumbnail">
                            <img src="/static/img/slider.jpg" alt="Background image" />
                            <div className="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M8 5.14v14l11-7z" /></svg>
                            </div>
                        </div>
                        Katalog<br />2024
                        <i>Video 01</i>
                    </a>

                    <a href="#">
                        <div className="thumbnail">
                            <img src="/static/img/slider.jpg" alt="Background image" />
                            <div className="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M8 5.14v14l11-7z" /></svg>
                            </div>
                        </div>
                        Katalog<br />2024
                        <i>Video 01</i>
                    </a>

                    <a href="#">
                        <div className="thumbnail">
                            <img src="/static/img/slider.jpg" alt="Background image" />
                            <div className="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M8 5.14v14l11-7z" /></svg>
                            </div>
                        </div>
                        Katalog<br />2024
                        <i>Video 01</i>
                    </a>

                </div>
            </div>

        </>
    )
}