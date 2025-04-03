export default function Component({ lang }: { lang: string }) {
    let title = "iletişim";
    return (
        <>
            <div className="maps">
                <div className="frame">
                    MEDYA
                </div>
            </div>

            <div className="communication ">
                <div className="frame flex2">
                    <div className="com-info">
                        <h2>İLETİŞİM BİLGİLERİ</h2>
                        <div className="container">
                            <div className="row">
                                <div className="com-title">
                                    Firma Adı
                                </div>
                                <div className="com-desc">
                                    Kozmotek Kozmetik
                                </div>
                            </div>
                            <div className="row">
                                <div className="com-title">
                                    Adres
                                </div>
                                <div className="com-desc">
                                    Osmangazi, Mareşal Fevzi Çakmak Cd. No:29,
                                    34538 Esenyurt/İstanbul
                                </div>
                            </div>
                            <div className="row">
                                <div className="com-title">
                                    Telefon
                                </div>
                                <div className="com-desc">
                                    +90 212 689 65 65
                                </div>
                            </div>
                            <div className="row">
                                <div className="com-title">
                                    E-posta
                                </div>
                                <div className="com-desc">
                                    info@kozmotek.com.tr
                                </div>
                            </div>
                            <div className="row" id="bottom">
                                <div className="com-title">
                                    Sosyal Medya
                                </div>
                                <div className="com-desc">
                                    <div className="footer-social">

                                        <a href="https://www.instagram.com/agissturkey" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path stroke="black" strokeWidth="2"
                                                    d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z" />
                                                <circle cx="16.5" cy="7.5" r="1.5" fill="black" />
                                                <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" />
                                            </g>
                                        </svg></a>
                                        <a href="https://facebook.com/agissturkey" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <path fill="black"
                                                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                                        </svg></a>
                                        <a href="https://x.com/agissturkey" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
                                            <g fill="none">
                                                <g clipPath="url(#primeTwitter0)">
                                                    <path fill="black"
                                                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="primeTwitter0">
                                                        <path fill="#fff" d="M0 0h14v14H0z" />
                                                    </clipPath>
                                                </defs>
                                            </g>
                                        </svg></a>
                                        <a href="https://www.youtube.com/channel/UCvLa2H0fJvnhBFw49mU_1Mg" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <path fill="black"
                                                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                                        </svg></a>
                                        <a href="https://www.tiktok.com/@agissturkey?_t=ZS-8urgNM2h1Pw&_r=1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <path fill="black"
                                                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
                                        </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="com-form">
                        <h2>İLETİŞİM FORMU</h2>
                        <p>Lütfen iletişim bilginlerinizi eksiksiz doldurmaya özen gösteriniz.</p>
                        <form action="">
                            <select defaultValue={"seciniz"} name="cars" id="cars">
                                <option value="seciniz">Departman Seçiniz</option>
                            </select>
                            <div className="flex">
                                <input type="text" placeholder="Adınız*" name="ad" id="ad" />
                                <input type="text" name="soyad" placeholder="Soyadınız*" id="soyad" />
                            </div>
                            <div className="flex">
                                <input type="text" name="e-posta" placeholder="E-posta Adresiniz*" id="eposta" />
                                <input type="text" placeholder="Telefon*" name="Telefon" id="tel" />
                            </div>
                            <textarea id="w3review" name="w3review" rows={4} cols={50} defaultValue={"Mesajınız*"}></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}