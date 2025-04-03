'use client';

// Lib
import Languages from "@/lib/languages";
import { useLang } from "@/lib/context/lang";

export default function Component({ lang }: {lang: string}) {
    let title = "iletişim";
    return (
        <>
            <div className="maps">
                <div className="frame">
                    {lang == Languages.TR ? 'Katalog' : 'Catalog'}
                </div>
            </div>

            <div className="catalog">
                <div className="frame flex1">
                    <a href="#">
                        <img src="/static/img/pdf.svg" alt="" />
                        Katalog<br />2024
                    </a>
                    <a href="#">
                        <img src="/static/img/pdf.svg" alt="" />
                        Broşür<br />2024
                    </a>
                    <a href="#">
                        <img src="/static/img/pdf.svg" alt="" />
                        Z Katalog<br />2024
                    </a>
                </div>
            </div>
        </>
    )
}