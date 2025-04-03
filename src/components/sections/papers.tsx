import PaperData from '@/lib/data-interfaces/paper';

export default async function Papers({ selectOption, papers = [] }: { selectOption?: boolean, papers?: PaperData[] }) {
    
    /* Redux */

    //
    return (
        <>
            {selectOption && (
                <div className="custom-select" >
                    <select>
                        <option value="0">Varsayılan Sıralama</option>
                        <option value="1">En Yeniye Göre Sırala</option>
                        <option value="2">En Eskiye Göre Sırala</option>
                        <option value="3">En Çok Okunana Göre Sırala</option>
                        <option value="4">En Az Okunana Göre Sırala</option>
                    </select>
                </div>
            )}
            <div className="sayilar list flex margin">
                {papers.map((value, index) => (
                    <div className="sayi" key={`paper-i-${index}`}>
                        <a href={'/papers/' + value.seo}>
                            <img src="images/mayıs23.jpg" alt="" />
                            <p className="say-title">{value.title}</p>
                            <p className="say-detail">{value.formatted_created_date}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}