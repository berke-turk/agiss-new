'use client';

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import ProductLi from './items/productLi';
import ProductTypesLi from './items/productTypesLi';

// Models
import { CategoryGet } from '@/lib/data-interfaces/category';
import { CollectionGet } from '@/lib/data-interfaces/collection';
import Languages from '@/lib/languages';
import CategoriesCard from './items/colectionCard';

export default function Navbar({ categories, series, lang }: { categories: CategoryGet[], series: CollectionGet[], lang: string | null }) {
    const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState<number>(-1);
    const searchInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const productsDropdownRef = useRef<HTMLDivElement>(null);
    const collectionsDropdownRef = useRef<HTMLDivElement>(null);
    const clueDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/static/scripts/navbar.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openProductDropdown = async () => {
        productsDropdownRef.current?.classList.toggle('show');
        collectionsDropdownRef.current?.classList.remove('show');
        clueDropdownRef.current?.classList.remove('show');
    }

    const openCollectionsDropdown = async () => {
        productsDropdownRef.current?.classList.remove('show');
        collectionsDropdownRef.current?.classList.toggle('show');
        clueDropdownRef.current?.classList.remove('show');
    }

    const openClueDropdown = async () => {
        productsDropdownRef.current?.classList.remove('show');
        collectionsDropdownRef.current?.classList.remove('show');
        clueDropdownRef.current?.classList.toggle('show');
    }

    const closeDropDowns = async () => {
        productsDropdownRef.current?.classList.remove('show');
        collectionsDropdownRef.current?.classList.remove('show');
        clueDropdownRef.current?.classList.remove('show');
    }

    const closeOpenMenu = async (id: string) => {
        if (document.getElementById(id)) {
            if (document.getElementById(id)?.style.display == 'block') {
                document.getElementById(id)!.style.display = 'none';
                document.getElementById(id)!.style.transition = "all .5s";
            } else {
                document.getElementById(id)!.style.display = "block";
            }
        }
    }

    const closeOpenMobileMenu = async (id: string) => {
        let element = document.getElementById(id);
        if (element) {
            if (element.style.right == '-100%') {
                element.style.right = '0%';
                element.style.transition = 'all .3s';
            } else
                element.style.right = '-100%';
        }
    }

    const closeMenu = async (id: string) => {
        let element = document.getElementById(id);
        if (element) {
            element.style.right = '-100%';
        }
    }

    const handleSearch = async (value: string) => {
        if (value != "") {
            window.location.href = '/tr/urunler?search=' + value
        }
    }

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch(searchInput.current?.value ?? "");
        }
    };

    const handleSearchButtonDown = (e: any) => {
        handleSearch(searchInput.current?.value ?? "");
    };

    return (
        <>
            <div className="head"></div>
            <div className="navbar-agiss" onMouseLeave={() => { closeDropDowns(); }}>
                <div className="frame nav-grid">
                    <a href={`/${lang?.toLocaleLowerCase()}`}>
                        <img src="/static/img/agiss-logo.svg" className="logo" alt="" />
                    </a>
                    <div className="menu">
                        <a href="#" className="menu-link" onMouseEnter={() => { openProductDropdown(); }}>{lang == Languages.TR ? 'ÜRÜNLER' : 'PRODUCTS'}</a>
                        <div ref={productsDropdownRef} id="products-dropdown" className="dropdown-content frame">
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'urunler' : 'products'}`}>{lang == Languages.TR ? 'Tüm Ürünler' : 'All Products'}</a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/kremler-ve-spreyler' : 'category/creams-and-spreys'}`}>{lang == Languages.TR ? 'Kremler ve Spreyler' : 'Kremler ve Spreyler'}</a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/agdalar' : 'category/agdalar'}`}>{lang == Languages.TR ? 'Ağdalar' : 'Ağdalar'}</a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/agda-sonrasi' : 'category/agda-sonrasi'}`}>{lang == Languages.TR ? 'Ağda Sonrası' : 'Ağda Sonrası'}</a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/yardimci-urunler' : 'category/yardimci-urunler'}`}>{lang == Languages.TR ? 'Yardımcı Ürünler' : 'Yardımcı Ürünler'}</a>
                        </div>
                        <a href="#" className="menu-link" onMouseEnter={() => { openCollectionsDropdown(); }}>{lang == Languages.TR ? 'KOLEKSİYON' : 'COLLECTION'}</a>
                        <div ref={collectionsDropdownRef} id="collections-dropdown" className="dropdown-content1 frame">
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/normal-ciltler' : 'collection/normal-ciltler'}`} className="collection-card">
                                <div id="normal-ciltler" className="collection-title">Normal Ciltler</div>
                                <img src="/static/img/normal-ciltler.jpg" alt="" />
                            </a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/hassas-ciltler' : 'collection/hassas-ciltler'}`} className="collection-card">
                                <div id="hassas-ciltler" className="collection-title">Hassas Ciltler</div>
                                <img src="/static/img/hassas-ciltler.jpg" alt="" />
                            </a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/tum-ciltler' : 'collection/tum-ciltler'}`} className="collection-card">
                                <div id="tüm-ciltler" className="collection-title">Tüm Ciltler</div>
                                <img src="/static/img/tüm-ciltler.jpg" alt="" />
                            </a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/erkekler' : 'collection/erkekler'}`} className="collection-card">
                                <div id="man-ciltler" className="collection-title">Man</div>
                                <img src="/static/img/man.jpg" alt="" />
                            </a>
                        </div>
                        <a href="#" className="menu-link" onMouseEnter={() => { openClueDropdown(); }}>{lang == Languages.TR ? 'İPUCU' : 'TİPS'}</a>
                        <div ref={clueDropdownRef} id="clue-dropdown" className="dropdown-content2 frame">
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--dark">
                                <span className="category-card__text">{lang == Languages.TR ? 'AĞDA BANTLARI' : 'AĞDA BANTLARI'} <span className="category-card__arrow">{">>"}</span></span>
                            </a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--light">
                                <span className="category-card__text">{lang == Languages.TR ? 'TÜY DÖKÜCÜ KREM' : 'TÜY DÖKÜCÜ KREM'} <span className="category-card__arrow">{">>"}</span></span>
                            </a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--light">
                                <span className="category-card__text">{lang == Languages.TR ? 'AĞDA' : 'AĞDA'} <span className="category-card__arrow">{">>"}</span></span>
                            </a>
                            <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`} className="category-card category-card--dark">
                                <span className="category-card__text">{lang == Languages.TR ? 'AĞDA BEZLERİ' : 'AĞDA BEZLERİ'} <span className="category-card__arrow">{">>"}</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="right-menu">
                        <div className="search-box">
                            <input ref={searchInput} type="text" onKeyDown={handleSearchKeyDown} placeholder={lang == Languages.TR ? 'ARA' : 'SEARCH'} />
                            <div onClick={handleSearchButtonDown} className="icon-search">
                                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" width="1.3em" height="1.3em"
                                    viewBox="0 0 24 24">
                                    <path fill="#fff"
                                        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                                </svg>
                            </div>
                        </div>
                        <span className="lang-select">{lang == Languages.TR ? 'TR' : 'EN'}</span>
                        <div className="menu-button" onClick={() => { closeOpenMenu('slider-menu') }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                                    fill="#001B70" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-menu" id="slider-menu">
                <div className="navigation">
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kurumsal' : 'institutional'}`}>{lang == Languages.TR ? 'Kurumsal' : 'Institutional'}</a>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'katalog' : 'catalog'}`}>{lang == Languages.TR ? 'E-katalog' : 'E-Catalog'}</a>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'medya' : 'media'}`}>{lang == Languages.TR ? 'Medya' : 'Media'}</a>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'iletisim' : 'contact'}`}>{lang == Languages.TR ? 'İletişim' : 'Contact'}</a>
                </div>
                <div className="social ">

                    <a href="https://www.instagram.com/agissturkey" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <g fill="none">
                            <path stroke="white" strokeWidth="2"
                                d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z" />
                            <circle cx="16.5" cy="7.5" r="1.5" fill="white" />
                            <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
                        </g>
                    </svg></a>
                    <a href="https://facebook.com/agissturkey" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="white"
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                    </svg></a>
                    <a href="https://x.com/agissturkey" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14">
                        <g fill="none">
                            <g clipPath="url(#primeTwitter0)">
                                <path fill="white"
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
                        <path fill="white"
                            d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                    </svg></a>
                </div>
            </div>

            <div className="mobilmenu">
                <div className="logo1">
                    <img src="/static/img/agiss-logo.svg" alt="" />
                </div>
                <div className="menubuton" onClick={() => { closeOpenMobileMenu('menuresp') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                            fill="#001B70" />
                    </svg>
                </div>
            </div>
            <div className="menuresp" id="menuresp" style={{ right: '-100%' }}>
                <div className="menubuton" onClick={() => { closeMenu('menuresp') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711Z"
                            fill="#232227" />
                    </svg>
                </div>
                <a href="/">Anasayfa</a>
                <a onClick={() => { closeOpenMenu('urunler-resp') }}>Ürünler</a>
                <div className="dropdown-resp" id="urunler-resp">
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'urunler' : 'products'}`}>{lang == Languages.TR ? 'Tüm Ürünler' : 'All Products'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/kremler-ve-spreyler' : 'category/creams-and-spreys'}`}>{lang == Languages.TR ? 'Kremler ve Spreyler' : 'Kremler ve Spreyler'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/agdalar' : 'category/agdalar'}`}>{lang == Languages.TR ? 'Ağdalar' : 'Ağdalar'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/agda-sonrasi' : 'category/agda-sonrasi'}`}>{lang == Languages.TR ? 'Ağda Sonrası' : 'Ağda Sonrası'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kategori/yardimci-urunler' : 'category/yardimci-urunler'}`}>{lang == Languages.TR ? 'Yardımcı Ürünler' : 'Yardımcı Ürünler'}</a>
                </div>
                <a href='#' onClick={() => { closeOpenMenu('koleksiyon-resp') }}>Koleksiyon</a>
                <div className="dropdown-resp" id="koleksiyon-resp">
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/normal-ciltler' : 'collection/normal-ciltler'}`}>Normal Ciltler</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/hassas-ciltler' : 'collection/hassas-ciltler'}`}>Hassas Ciltler</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/tum-ciltler' : 'collection/tum-ciltler'}`}>Tüm Ciltler</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'koleksiyon/erkekler' : 'collection/erkekler'}`}>Man</a>
                </div>
                <a onClick={() => { closeOpenMenu('ipuclari-resp') }}>İpuçları</a>
                <div className="dropdown-resp" id="ipuclari-resp">
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`}>{lang == Languages.TR ? 'AĞDA BANTLARI' : 'AĞDA BANTLARI'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`}>{lang == Languages.TR ? 'AĞDA' : 'AĞDA'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`}>{lang == Languages.TR ? 'TÜY DÖKÜCÜ KREM' : 'TÜY DÖKÜCÜ KREM'}</a>
                    <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'ipuclari' : 'tips'}`}>{lang == Languages.TR ? 'AĞDA BEZLERİ' : 'AĞDA BEZLERİ'}</a>
                </div>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'kurumsal' : 'institutional'}`}>{lang == Languages.TR ? 'Kurumsal' : 'Institutional'}</a>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'katalog' : 'catalog'}`}>{lang == Languages.TR ? 'E-katalog' : 'E-Catalog'}</a>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'medya' : 'media'}`}>{lang == Languages.TR ? 'Medya' : 'Media'}</a>
                <a href={`/${lang?.toLocaleLowerCase()}/${lang == Languages.TR ? 'iletisim' : 'contact'}`}>{lang == Languages.TR ? 'İletişim' : 'Contact'}</a>
            </div>
        </>
    );
}