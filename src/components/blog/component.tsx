import Link from 'next/link';

export default async function Blogs() {

    // Fetch Api

    //
    let blogs = [
        {
            blog_id: "1",
            category: "Türkçülük Araştırmaları",
            title: "Atsız'da Sivil Milliyetçilik Anlayışı",
            img: "",
            date: "12.02.2024",
            author: {
                id: "2",
                fullname: 'Hasan Basri Sakar'
            }
        }
    ];

    return (
        <>
            <div className="custom-select" >
                <select>
                    <option value="0">Varsayılan Sıralama</option>
                    <option value="1">En Yeniye Göre Sırala</option>
                    <option value="2">En Eskiye Göre Sırala</option>
                    <option value="3">En Çok Okunana Göre Sırala</option>
                    <option value="4">En Az Okunana Göre Sırala</option>
                </select>
            </div>
            <div className="yazilar-list flex">
                {blogs.map((value, index) => (
                    <div className="card" key={`blog-i-${index}`}>
                        <a href="#">
                            <div className="detail">
                                <div className="t-a">{value.category}</div>
                                <div className="detail-y">
                                    <b>{value.title}</b>
                                    <i>{value.date} ● {value.author.fullname}</i>
                                </div></div>
                            <img src="images/ta.jpg" alt="Buraya Başlık Gelecek" />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}