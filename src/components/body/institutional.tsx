// Lib
import Languages from "@/lib/languages";

export default function Component({ lang }: { lang: string }) {

    return (
        <>
            <div className="maps">
                <div className="frame">
                    {lang == Languages.TR ? 'Kurumsal' : 'Institutional'}
                </div>
            </div>

            <div className="page-wrapper  highlight">
                <div className="info-block about-company">
                    <div className="company-heading">Biz<br />Kimiz?</div>
                    <div className="company-description">
                        2011 yılında kurulan KOZMOTEK GLOBAL, AGIVA markası altında Profesyonel Saç Bakım ürünleri ve AGISS markası altında depilasyon ürünlerinin üreticisi ve ihracatçısıdır. Ürünlerimiz 65'ten fazla ülkeye ihraç edilmektedir.
                        <br /><br />
                        Türkiye'deki A101 marketler zincirinin (11.000 mağaza) ve BİM marketlerinin (6.500 mağaza) depilasyon ürün grubundaki tek tedarikçisiyiz. Ayrıca, Türkiye'nin en tanınmış kozmetik mağaza zinciri olan Gratis'te depilasyon ürün grubu için ilk 3 tedarikçiden biriyiz.
                    </div>
                </div>
            </div>
            <div className="page-wrapper">
                <div className="info-block production-info">
                    <div className="company-description">
                        Markanın gücü, yenilikçiliğinden ve kaliteye yönelik farklı anlayışından gelmektedir. Deneyimli kadrosu ve AR-GE yatırımlarıyla marka, tüketici ihtiyaçlarını karşılamaya yönelik geniş ürün yelpazesi, modern ve şık tasarımlar sunmaktadır.
                    </div>
                    <div className="company-heading">Üretim</div>

                </div>
            </div>
            <div className="page-wrapper high-pink">
                <div className="info-block research-development ">
                    <div className="company-heading">Ar-ge<br />Yatırımları</div>
                    <div className="company-description">
                        Kozmotek, profesyonel kanalda tüketici ihtiyaçlarını karşılamayı hedefleyen geniş ürün yelpazesi, modern ve şık tasarımlar ve kalite anlayışı ile pazara sunulmuştur. Güvenilir bir marka olmayı başarmış ve tüketiciler tarafından tercih edilmektedir.
                    </div>
                </div>
            </div>
            <div className="page-wrapper">
                <div className="info-block qualite-info">
                    <div className="company-heading">Kalite Sertifikaları</div>

                    <div className="company-description">
                        <img src="/static/img/kalite.jpg" alt="" />
                    </div>

                </div>
            </div>
            <div className="page-wrapper dark-pink2">
                <div className="news">
                    <img src="/static/img/haberler.jpeg" alt="" />
                    <div className="right">
                        <div className="company-heading">Haberler</div>
                        <div className="company-description">
                            5. BEAUTYISTANBUL Fuarı 2-4 Ekim
                            2024’te İstanbul Kongre Merkezi,
                            Lütfi Kırdar ve Hilton İstanbul
                            Bosphorus, Harbiye’de gerçekleşti.
                            Büyüme trendiyle global arenada
                            adından söz ettiren ve dünyanın en
                            büyük 5 kozmetik fuarı arasında yer
                            alan BEAUTYISTANBUL’da bizde
                            yerimizi aldık.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}