import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MobilePage.css';
import ProductCard from '../components/Productcard';

function MobilePage() {
    const swiperRef = useRef(null);

    const quickFilterItems = [
         {
            id: 1,
            name: "Galaxy S",
            image: "//images.samsung.com/is/image/samsung/assets/in/2501/pcd/Visual-LNB_Galaxy-S_144x144.png?$ORIGIN_PNG$",
            link: "/in/smartphones/galaxy-s/"
        },
        {
            id: 2,
            name: "Galaxy Z",
            image: "//images.samsung.com/is/image/samsung/assets/in/ux2/pcd-visual-lnb/Visual_LNB_Galaxy-Z_144x144.png?$ORIGIN_PNG$",
            link: "/in/smartphones/galaxy-z/"
        },
        {
            id: 3,
            name: "Galaxy A",
            image: "//images.samsung.com/is/image/samsung/assets/in/ux2/pcd-visual-lnb/Visual_LNB_Galaxy-A_144x144.png?$ORIGIN_PNG$",
            link: "/in/smartphones/galaxy-a/"
        },
        {
            id: 4,
            name: "Galaxy M",
            image: "//images.samsung.com/is/image/samsung/assets/in/ux2/pcd-visual-lnb/SM-M556_Galaxy-M55-5G_Back_Light-Green.png?$ORIGIN_PNG$",
            link: "/in/smartphones/galaxy-m/"
        },
        {
            id: 5,
            name: "Galaxy F",
            image: "//images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-f-lnb-144x144.png?$ORIGIN_PNG$",
            link: "/in/smartphones/galaxy-f/"
        },
        {
            id: 6,
            name: "Compare",
            image: "//images.samsung.com/is/image/samsung/assets/in/2501/pcd/Visual_LNB_Compare_144x144.png?$ORIGIN_PNG$",
            link: "/in/smartphones/compare/"
        },
        {
            id: 7,
            name: "Galaxy Smartphone Accessories",
            image: "//images.samsung.com/is/image/samsung/assets/in/2501/pcd/Visual_LNB_Smartphone-Accessories_144x144.png?$ORIGIN_PNG$",
            link: "/in/mobile-accessories/all-mobile-accessories/?smartphones"
        },
        {
            id: 8,
            name: "All Galaxy Smartphones",
            image: "//images.samsung.com/is/image/samsung/assets/in/2501/pcd/Visual_LNB_All-Smartphones__144x144.png?$ORIGIN_PNG$",
            link: "/in/smartphones/all-smartphones/"
        }
    ];

    return (
        <main>
            <section className="mobilepage-quick-nav" style={Mobilestyles.mobnavsection}>
                <div className="inner-container-mobnav" style={Mobilestyles.innercontainermobnav}>
                    <div>
                        <ul style={Mobilestyles.mobilesnavli}>
                            <li style={Mobilestyles.mobilesnavli}>
                                <a href="" style={Mobilestyles.mobilesnavli}>Mobiles /</a>
                            </li>
                            <li style={Mobilestyles.mobilesnavli}>
                                <a href="" style={Mobilestyles.mobilesnavli}>GalaxySmartPhones / </a>
                            </li>
                            <li style={Mobilestyles.mobilesnavli}>
                                <a href="" style={Mobilestyles.mobilesnavli}>Galaxy S</a>
                            </li>
                        </ul>
                    </div>
                    <div className="heaader-mobnav">
                        <h1 style={Mobilestyles.headerofmobnav}>Galaxy S</h1>
                    </div>
                </div>
            </section>

            <section className="nv18-quick-filter container-fluid py-4">
                <div className="nv18-quick-filter__content" style={{ width: '80%', margin: '0 auto' }}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={16}
                        slidesPerView="auto"
                        centeredSlides={false}
                        freeMode={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            type: 'progressbar',
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3.5,
                                centeredSlides: false
                            },
                            992: {
                                slidesPerView: 4.5,
                                centeredSlides: false
                            }
                        }}
                        className="basic-swiper"
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {quickFilterItems.map((item) => (
                            <SwiperSlide key={item.id} className="nv18-quick-filter__item">
                                <div className="product-card d-flex flex-column" style={{ width: '256px', height: '136px' }}>
                                    <div className="product-image-container d-flex justify-content-center align-items-center" style={{ height: '72px', backgroundColor: '#f5f5f5' }}>
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="product-image-mobileslide"

                                            
                                        />
                                        <div className="product-info p-2 flex-grow-1 d-flex flex-column">
                                        <h3 className="product-name mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                                            {item.name}
                                        </h3>
                                    </div>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    
                    <div className="progressbar-indicator progressbar-indicator--show mt-3">
                        <div className="progressbar-indicator__inner d-flex align-items-center justify-content-center">
                            <div className="progressbar-indicator__bar swiper-pagination" style={{ width: '60%' }}></div>
                            <div className="progressbar-indicator__arrow-wrap d-flex ms-3">
                                <button 
                                    className="progressbar-indicator__arrow swiper-button-prev border-0 bg-transparent"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <span className="visually-hidden">Previous</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                                    </svg>
                                </button>
                                <button 
                                    className="progressbar-indicator__arrow swiper-button-next border-0 bg-transparent ms-2"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <span className="visually-hidden">Next</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='filtering-product-mainsec'>
                <div className='filtering-product-innersec'>
                    <div className='amainabovedivoftwoside'>
                        <div className='filtering-side'>
                            <div>
                                <div className='filetering-side-header'>
                                    <div className='filtering-side-header-button'>
                                        <button className='filter-top-button'><span className='topgalaxybutton'>Galaxy S</span></button>
                                    </div>
                                    <div>
                                        <button className='clearallbutton'>Clear all</button>
                                    </div>
                                </div>
                                <ul className='filtering-sidemain-ul'>
                                    <li className='productrangeli'><p><button className='productranfbutton'>Product Range</button></p>
                                    <div>
                                        <ul className='productrange-childul'>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Galaxy Z</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Galaxy S</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Galaxy A</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Galaxy M</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Galaxy F</label>
                                            </div></li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li className='productrangeli'><p><button className='productranfbutton'>Storage</button></p>
                                    <div>
                                        <ul className='productrange-childul'>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>64 GB</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>128 GB </label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>256 GB </label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>512 GB</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>1 TB</label>
                                            </div></li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li className='productrangeli'><p><button className='productranfbutton'> Price </button></p>
                                    <div>
                                        <ul className='productrange-childul'>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Up to ₹ 10000</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 10001~₹ 15000</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 15001~₹ 20000</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 20001~₹ 25000</label>
                                            </div></li><li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 25001~₹ 30000</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 30001~₹ 35000</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 35001~₹ 40000</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>₹ 40001~₹ 50000</label>
                                            </div></li>
                                            <li className='productrange-childlilist'><div className='productcheckboxandlabel'>
                                            <input type="checkbox" className='inputforcheck' />
                                            <label htmlFor="" className='labletextofproduct'>Above ₹ 50000</label>
                                            </div></li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className='product-side'>
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MobilePage;

const Mobilestyles = {
    mobnavsection: {
        padding: "20px 0",
        width: "100%",
    },
    innercontainermobnav: {
        width: "80%",
        margin: "auto",
    },
    mobilesnavli: {
        fontSize: "14px",
        textDecoration: "none",
        listStyle: "none",
        color: "black",
        display: "flex",
        padding: "2px 0px 0px 10px",
    },
    headerofmobnav: {
        fontSize: "40px",
        fontWeight: "bold",
        color: "#333",
        marginTop: "25px",
        paddingLeft: "15px",
        textAlign: "left",
    }
};