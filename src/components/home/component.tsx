// Items
import ProductModel, { ProductGet } from '@/lib/data-interfaces/product';
import { fetchList } from '@/lib/api-model';
import ApiPath from '@/lib/api-path';
import Languages from '@/lib/languages';
import Slider from '../items/sliderMenu';
import ProductSlider from '../items/productSlider';

// Api
import ProductApi from '@/lib/api/product';

export default async function Page({ lang }: { lang: string }) {
    let newSeries = [];
    let newProducts: ProductGet[] = await getNewProducts(lang);

    return (
        <>
            <Slider lang={lang}></Slider>
            <div className="product-showcase frame">
                <h2 className="product-showcase__title">İhtiyaçlarınıza uygun ürünleri keşfedin</h2>
                <p className="product-showcase__description">
                    Agiss Ağda Bantları farklı cilt tiplerine özel olarak üretilmektedir. Cildinize uygun olan herhangi bir çeşidiyle
                    istenmeyen tüylerinizden pratik ve kolay bir şekilde kurtulabilirsiniz.
                </p>
                <div className="product-showcase__products">
                    <a href="/tr/koleksiyon/normal-ciltler" className="product-card">
                        <img src="https://cdn.agiss.com.tr/v1/web-packages/images/item-1.jpg" alt="Normal Ciltler" className="product-card__image" />
                        <p className="product-card__description">4 hafta boyunca etkili.</p>
                        <span  className="product-card__button">Normal Ciltler &gt;&gt;</span>
                    </a>
                    <a href="/tr/koleksiyon/hassas-ciltler" className="product-card">
                        <img src="https://cdn.agiss.com.tr/v1/web-packages/images/item-2.jpg" alt="Hassas Ciltler" className="product-card__image" />
                        <p className="product-card__description">Tahriş etmeden çözüm.</p>
                        <span className="product-card__button">Hassas Ciltler &gt;&gt;</span>
                    </a>
                    <a href="/tr/koleksiyon/tum-ciltler" className="product-card">
                        <img src="https://cdn.agiss.com.tr/v1/web-packages/images/item-3.jpg" alt="Tüm Ciltler" className="product-card__image" />
                        <p className="product-card__description">Amonyak içermeyen formül.</p>
                        <span className="product-card__button">Tüm Ciltler &gt;&gt;</span>
                    </a>
                </div>
            </div>

            <hr />

            <div className="categories">
                <h3 className="categories__title frame">İpuçları</h3>
                <div className="categories__grid">
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--dark">
                        <span className="category-card__text">Ağda Bantları <span className="category-card__arrow">{">>"}</span></span>
                    </a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--light">
                        <span className="category-card__text">Tüy Dökücü Krem <span className="category-card__arrow">{">>"}</span></span>
                    </a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--light">
                        <span className="category-card__text">Ağda <span className="category-card__arrow">{">>"}</span></span>
                    </a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--dark">
                        <span className="category-card__text">Ağda Bezleri <span className="category-card__arrow">{">>"}</span></span>
                    </a>
                </div>
            </div>

            <ProductSlider products={newProducts}>

            </ProductSlider>

            <div className="banner-container">
                <div className="frame">
                    <div className="video-section">
                        <video className="video-element" controls>
                            <source src="video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="product-section1">
                        <img src="/static/img/banner-foto.jpeg" alt="Beauty Product" className="product-image1" />
                    </div>
                </div>
            </div>
        </>
    );
}

async function getNewProducts(lang: string): Promise<ProductGet[]> {
    // Fetch new product list
    let result = await ProductApi.list(0,20, undefined, {language: lang});

    return result.data;
}