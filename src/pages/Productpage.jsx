import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const productScrollContainerRef = useRef(null);
  const [productScrollProgress, setProductScrollProgress] = useState(0);
  const [products, setProducts] = useState([]);
  const [highlightProducts, setHighlightProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      
      const highlightsRes = await fetch('http://localhost:3000/highlightProducts');
      if (!highlightsRes.ok) throw new Error('Failed to fetch highlights');
      const highlightsData = await highlightsRes.json();
      setHighlightProducts(highlightsData);

      
      let endpoint;
      switch(currentCategory) {
        case 'mobile':
          endpoint = 'https://samsung-clone-be.onrender.com/allmobiles';
          break;
        case 'tv':
          endpoint = 'https://samsung-clone-be.onrender.com/tv';
          break;
        case 'appliances':
          endpoint = 'https://samsung-clone-be.onrender.com/appliances';
          break;
        case 'computing':
          endpoint = 'https://samsung-clone-be.onrender.com/display';
          break;
        case 'accessories':
          endpoint = 'https://samsung-clone-be.onrender.com/accessories';
          break;
        case 'wearables':
          endpoint = 'https://samsung-clone-be.onrender.com/accessories';
          break;
        case 'all':
        default:
          endpoint = 'https://samsung-clone-be.onrender.com/allmobiles';
      }

      const productsRes = await fetch(endpoint);
      if (!productsRes.ok) throw new Error(`Failed to fetch ${currentCategory} products`);
      const productsData = await productsRes.json();
      setProducts(productsData);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, [currentCategory]);

  const filteredProducts = products.filter(product => {
  if (currentCategory === "mobile") {
    const price = parseFloat(product?.price?.replace(/[^0-9.]/g, '') || '0');
    return price >= priceRange[0] && price <= priceRange[1];
  }
  return true;
});

  const updateProductScrollProgress = () => {
    if (productScrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = productScrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProductScrollProgress(progress);
    }
  };

  const scrollProductsLeft = () => {
    if (productScrollContainerRef.current) {
      productScrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollProductsRight = () => {
    if (productScrollContainerRef.current) {
      productScrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const updateHighlightScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const priceFilters = [
    { label: "Under ₹10,000", range: [0, 10000] },
    { label: "₹10,000 - ₹20,000", range: [10000, 20000] },
    { label: "₹20,000 - ₹30,000", range: [20000, 30000] },
    { label: "₹30,000 - ₹50,000", range: [30000, 50000] },
    { label: "Over ₹50,000", range: [50000, 200000] }
  ];

  const categories = [
    {
      id: 0,
      name: "New & Featured",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      value: "all"
    },
    {
      id: 1,
      name: "Mobile",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
      value: "mobile"
    },
    {
      id: 2,
      name: "TV & AV",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
        </svg>
      ),
      value: "tv"
    },
    {
      id: 3,
      name: "Appliances",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z" />
        </svg>
      ),
      value: "appliances"
    },
    {
      id: 4,
      name: "Computing & Displays",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
      ),
      value: "computing"
    },
    {
      id: 5,
      name: "Wearables",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
      value: "wearables"
    },
    {
      id: 6,
      name: "Accessories",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      ),
      value: "accessories"
    },
  ];

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="product-page">
      <div className="content-container">
        <header className="page-header">
          <h1>Essentials for the way you live</h1>
        </header>

        <div className="category-tabs">
          <div className="tabs-container">
            <ul className="tabs-list" role="tablist">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={`tab-item ${currentCategory === category.value ? "active" : ""}`}
                  role="presentation"
                >
                  <button 
                    className="tab-button" 
                    role="tab"
                    onClick={() => {
                      setCurrentCategory(category.value);
                      setPriceRange([0, 200000]);
                    }}
                  >
                    <span className="tab-icon">{category.icon}</span>
                    <span className="tab-text">{category.name}</span>
                    <span className="tab-indicator"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {currentCategory === "mobile" && (
        <div className="mobile-category-header">
          <div className="price-filter-container">
            <button 
              onClick={() => setShowPriceFilter(!showPriceFilter)}
              className="price-filter-button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
              </svg>
              Price
            </button>
            
            {showPriceFilter && (
              <div className="price-filter-dropdown">
                <h4>Price Range</h4>
                <ul>
                  {priceFilters.map((filter, index) => (
                    <li key={index}>
                      <button onClick={() => {
                        setPriceRange(filter.range);
                        setShowPriceFilter(false);
                      }}>
                        {filter.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <Link to="/mobile" className="view-all-link">
            View All
            <svg width="12" height="12" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </Link>
        </div>
      )}

      <section className="product-carousel-section">
  <div className="content-container">
    <div className="product-carousel-container">
      <div className="product-carousel">
        <div 
          className="carousel-wrapper" 
          ref={productScrollContainerRef}
          onScroll={updateProductScrollProgress}
        >
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id || product.name}>
              <Link
                to={`/product/${product.id || product.name}`}
                state={{ product }}
                className="product-link"
              >
                <div className="product-image-container">
                  <img
                    src={
                      product.images 
                        ? product.images[0]  
                        : product.img || product.image 
                    }
                    alt={product.name || product.title}
                    className="product-image"
                    loading="lazy"
                  />
                </div>
                <div className="product-title-overlay">
                  <h3>{product.title}</h3>
                </div>
              </Link>
              <div className="product-price">
                <div className="current-price">
                  {typeof product.price === 'number' 
                    ? `₹${product.price.toLocaleString('en-IN')}`
                    : product.price}
                </div>
                {product.mrp && (
                  <div className="original-price">
                    <del>₹{product.mrp.toLocaleString('en-IN')}</del>
                  </div>
                )}
                {product.originalPrice && (
                  <div className="original-price">
                    <del>₹{product.originalPrice.toLocaleString('en-IN')}</del>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
              <div className="carousel-controls">
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${productScrollProgress}%` }}
              ></div>
            </div>
            <div className="navigation-buttons">
              <button
                className="carousel-prev"
                aria-label="Previous products"
                onClick={scrollProductsLeft}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
              </button>
              <button
                className="carousel-next"
                aria-label="Next products"
                onClick={scrollProductsRight}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="reasons-to-shop">
        <div className="container">
          <h2 className="section-heading">More reasons to shop. Here at Samsung</h2>

          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="40" height="40">
                  <path
                    d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"
                    fill="#1428A0"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Samsung Care+</h3>
              <p className="reason-desc">
                Add SC+ for added peace of mind from accidental damage
              </p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="40" height="40">
                  <path
                    d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4V5.5zm6 11.5H8v-2h8v2zm0-4H8v-2h8v2z"
                    fill="#1428A0"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Free Delivery</h3>
              <p className="reason-desc">Enjoy safe and hassle-free delivery</p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="40" height="40">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"
                    fill="#1428A0"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Samsung Rewards</h3>
              <p className="reason-desc">Get loyalty points on your purchase</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <svg viewBox="0 0 24 24" width="40" height="40">
                  <path
                    d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"
                    fill="#1428A0"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Special Colours</h3>
              <p className="reason-desc">
                Find special colours for selected Galaxy devices on Samsung.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <div className="highlight-container">
          <h2 className="highlight-title">Latest Highlights</h2>
          <div
            ref={scrollContainerRef}
            className="highlight-grid-container"
            onScroll={updateHighlightScrollProgress}
          >
            <div className="highlight-grid">
              {highlightProducts.map((product) => (
                <div key={product.id} className="highlight-item">
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="product-link"
                  >
                    <div className="highlight-card">
                      <div className="highlight-image-container">
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`highlight-image ${
                            hoveredHighlight === product.id
                              ? "highlight-image-hover"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="product-details">
                    <h3 className="highlight-name">{product.name}</h3>
                    <div className="highlight-price">
                      <strong className="current-price">{product.price}</strong>
                      {product.save && (
                        <p className="save-price">
                          <em>{product.save}</em>
                        </p>
                      )}
                      {product.mrp && (
                        <p className="original-price">{product.mrp}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-controls-bottom">
            <div className="custom-scrollbar-track">
              <div
                className="custom-scrollbar-thumb"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <div className="scroll-buttons-container">
              <button
                onClick={scrollLeft}
                className="scroll-button"
                aria-label="Scroll left"
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="scroll-button"
                aria-label="Scroll right"
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="cm-g-text-block aem-GridColumn aem-GridColumn--default--12">
        <div className="textblock margin-top--16 margin-bottom--16 bg-white text-left text-mo-left container-width-medium">
          <div className="textblock__body padding-top--0 padding-bottom--0">
            <h2 className="textblock__title">Help Me Choose</h2>
          </div>
        </div>
      </div>

      <div className="of-g-feature-benefit-card aem-GridColumn aem-GridColumn--default--12">
        <div className="feature-benefit-card bg-white feature-benefit-card--desktop-layout-4 desktop-text-align--center mobile-text-align--center feature-benefit-card--use-mouseover-interaction">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={4}
            navigation={false}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `
                  <button class="${className}" role="tab">
                    <span class="indicator__dot-wrap">
                      <span class="indicator__dot">
                        <span class="indicator__dot-inner"></span>
                      </span>
                    </span>
                  </button>
                `;
              },
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              480: {
                slidesPerView: 1,
              },
            }}
            className="feature-benefit-card__swiper"
          >
            <SwiperSlide className="feature-benefit-card__card">
              <div className="feature-benefit-card__card-inner">
                <div className="feature-benefit-card__image-overlay">
                  <div className="feature-benefit-card__figure">
                    <img
                      src="//images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest-offer-test/Main_03_help_me_choose_PC_02_330x440.jpg"
                      alt="Smartphone"
                      className="image__main"
                    />
                  </div>
                  <div className="feature-benefit-card__content-overlay">
                    <h3 className="feature-benefit-card__title">
                      Best smartphone for you
                    </h3>
                    <div className="feature-benefit-card__cta">
                      <a
                        href="/in/mobile/"
                        className="cta cta--contained"
                        aria-label="Learn more Mobile Phone Buying Guide"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="feature-benefit-card__card">
              <div className="feature-benefit-card__card-inner">
                <div className="feature-benefit-card__image-overlay">
                  <div className="feature-benefit-card__figure">
                    <img
                      src="//images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest-offer-test/Main_03_help_me_choose_PC_03_330x440.jpg"
                      alt="Tablets"
                      className="image__main"
                    />
                  </div>
                  <div className="feature-benefit-card__content-overlay">
                    <h3 className="feature-benefit-card__title">
                      Compare up to 3 tablets
                    </h3>
                    <div className="feature-benefit-card__cta">
                      <a
                        href="/in/tablets/compare/"
                        className="cta cta--contained"
                        aria-label="Learn more"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="feature-benefit-card__card">
              <div className="feature-benefit-card__card-inner">
                <div className="feature-benefit-card__image-overlay">
                  <div className="feature-benefit-card__figure">
                    <img
                      src="//images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest-offer-test/Main_03_help_me_choose_PC_06_330x440.jpg"
                      alt="Refrigerator"
                      className="image__main"
                    />
                  </div>
                  <div className="feature-benefit-card__content-overlay">
                    <h3 className="feature-benefit-card__title">
                      Pick the fridge that's best for you
                    </h3>
                    <div className="feature-benefit-card__cta">
                      <a
                        href="/in/refrigerators/all-refrigerators/"
                        className="cta cta--contained"
                        aria-label="Learn more"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="feature-benefit-card__card">
              <div className="feature-benefit-card__card-inner">
                <div className="feature-benefit-card__image-overlay">
                  <div className="feature-benefit-card__figure">
                    <img
                      src="//images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest-offer-test/Main_03_help_me_choose_PC_05_330x440.jpg"
                      alt="TV"
                      className="image__main"
                    />
                  </div>
                  <div className="feature-benefit-card__content-overlay">
                    <h3 className="feature-benefit-card__title">
                      Pick the TV that's best for you
                    </h3>
                    <div className="feature-benefit-card__cta">
                      <a
                        href="/in/tvs/"
                        className="cta cta--contained"
                        aria-label="Learn more"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="feature-benefit-card__card">
              <div className="feature-benefit-card__card-inner">
                <div className="feature-benefit-card__image-overlay">
                  <div className="feature-benefit-card__figure">
                    <img
                      src="//images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest-offer-test/Main_03_help_me_choose_PC_04_330x440.jpg"
                      alt="Home Appliances"
                      className="image__main"
                    />
                  </div>
                  <div className="feature-benefit-card__content-overlay">
                    <h3 className="feature-benefit-card__title">
                      Home Appliances buying guide
                    </h3>
                    <div className="feature-benefit-card__cta">
                      <a
                        href="/in/washers-and-dryers/all-washers-and-dryers/"
                        className="cta cta--contained"
                        aria-label="Learn more"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="feature-benefit-card__card">
              <div className="feature-benefit-card__card-inner">
                <div className="feature-benefit-card__image-overlay">
                  <div className="feature-benefit-card__figure">
                    <img
                      src="//images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest-offer-test/Main_03_help_me_choose_PC_01_330x440.jpg"
                      alt="Live Demos"
                      className="image__main"
                    />
                  </div>
                  <div className="feature-benefit-card__content-overlay">
                    <h3 className="feature-benefit-card__title">
                      Live product demos & advice
                    </h3>
                    <div className="feature-benefit-card__cta">
                      <a
                        href="/in/live-offers/"
                        className="cta cta--contained"
                        aria-label="Learn more"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="indicator-wrap">
            <div className="indicator__list-wrap">
              <div className="indicator__list swiper-pagination" role="tablist">
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="special-savings-section">
        <div className="savings-container">
          <h2 className="section-heading">Special Savings</h2>

          <div className="savings-cards-container">
            <div className="savings-card">
              <a href="/in/microsite/student-advantage/" className="card-link">
                <div className="card-image-container">
                  <img
                    src="//images.samsung.com/is/image/samsung/assets/in/ux3/offer/Shop_3Column-feature-card_06_560x400.jpg?$250_N_JPG$"
                    alt="Student Offers"
                    className="card-image"
                  />
                </div>
              </a>
              <div className="card-text-container">
                <h3 className="card-title">Student Offers</h3>
                <div className="card-cta">
                  <a
                    href="/in/microsite/student-advantage/"
                    className="cta-link"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="savings-card">
              <a
                href="/in/multistore/corporate/prelogin/"
                className="card-link"
              >
                <div className="card-image-container">
                  <img
                    src="//images.samsung.com/is/image/samsung/assets/in/ux3/offer/Shop_3Column-feature-card_07_560x400.jpg?$250_N_JPG$"
                    alt="Corporate Employee Offers"
                    className="card-image"
                  />
                </div>
              </a>
              <div className="card-text-container">
                <h3 className="card-title">Corporate Employee Offers</h3>
                <div className="card-cta">
                  <a
                    href="/in/multistore/corporate/prelogin/"
                    className="cta-link"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;