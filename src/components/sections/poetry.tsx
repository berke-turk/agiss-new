import Link from 'next/link';

export default function Poetry() {
    return (
        <>
            <img src="images/BANNERSİİR.png" className="s-banner" alt="" />

            <div className="siirler">
                <div className="flex">
                    <div className="left1">
                        <div className="list">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div className="card" key={index}>
                                    <div className="profil flex">
                                        <img src="images/hasan.jpg" alt="" />
                                        <div className="baslik"><b>Türk Hayali</b><i>Berke Türk</i></div>
                                    </div>
                                    <p>Aşkın şiddetine vurulmuşum ben Uğrunda can vermektir tek hayalim</p>
                                    <Link href="#" className="s-btn">Devamını Oku</Link>
                                </div>
                            ))}
                        </div>
                        <Link href="#" className="dahafazla">Daha Fazlası İçin Tıklayınız</Link>
                    </div>

                    <div className="right1">
                        <div className="digersiirler">
                            <div className="title">
                                Şairlerimiz
                            </div>
                            <div className="list">
                                <div className="card">
                                    <Link href="#" className="flex">
                                        <img src="images/hasan.jpg" alt="" />
                                        <div className="detail"><b>Hasan Basri Sakar</b><i>Şair - Yazar</i></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="images/BANNERarastirma.png" className="s-banner" alt="" />
                <div className="say-title">
                    KÖGMENLER DERGİSİ
                    <i>SAYILARIMIZ</i>
                </div>

                <div className="flex sayilar">
                    <div className="sayi">
                        <div>
                            <img src="images/mayıs23.jpg" alt="" />
                            <p className="say-title">Kögmenler Dergisi</p>
                            <p className="say-detail">Mayıs 2023</p>
                            <Link href="#">OKU</Link>
                        </div>
                    </div>
                </div>

                <div className="dhfz">
                    <Link href="#" className="dahafazla">Daha Fazlası İçin Tıklayınız</Link>
                </div>

                <img src="images/BANNERarastirma.jpg" className="s-banner" style={{ marginBottom: '0px' }} alt="" />
            </div>
        </>
    )
}