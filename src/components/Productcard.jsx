import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/allmobiles');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`, {
      state: { product }
    });
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles.productsContainer}>
      {products.map((product) => (
        <div 
          key={product.name} 
          style={styles.productItem}
          onClick={() => handleProductClick(product)}
        >
          <ProductCard productData={product} />
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ productData }) => {
  const product = {
    name: productData.name || 'Product Name',
    rating: productData.rating || null,
    color: productData.color || null,
    storageOptions: productData.storageOptions || [],
    images: productData.images || [],
    price: productData.price || '$999',
    originalPrice: productData.originalPrice || null,
    discount: productData.discount || null,
    emi: productData.emi || 'EMI from $50/month'
  };

  return (
    <div className="pd19-product-card__wrapper" style={styles.wrapper}>
      <span className="badge-icon" style={styles.newBadge}></span>
      
      <div className="pd19-product-card__img-wrap" style={styles.imgWrap}>
        <div className="pd19-product-card__pagination" style={styles.pagination}>
          <span className="pd19-product-card__current-num">01</span>
          /<span className="pd19-product-card__total-num">{product.images.length.toString().padStart(2, '0')}</span>
        </div>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.arrow-indicator--next',
            prevEl: '.arrow-indicator--prev'
          }}
          style={styles.swiper}
        >
          {product.images.map((img, index) => (
            <SwiperSlide key={index} style={styles.swiperSlide}>
              <div className="pd19-product-card__img" style={styles.imgLink}>
                <div className="image" style={styles.image}>
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`} 
                    style={styles.img}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="arrow-indicator-wrap" style={styles.arrowIndicatorWrap}>
        </div>
      </div>
      
      <button className="cta cta--underline-v2" style={styles.quickLookBtn}>
        Quick Look
      </button>
      
      <div className="pd19-product-card__content-wrap" style={styles.contentWrap}>
        <div className="pd19-product-card__name-wrap" style={styles.nameWrap}>
          <div className="pd19-product-card__name" style={styles.productName}>
            {product.name}
          </div>
        </div>
        
        {product.rating && (
          <div className="pd19-product-card__rating-wrap" style={styles.ratingWrap}>
            <div style={styles.ratingLink}>
              <div className="rating-v2" style={styles.rating}>
                <svg width="16" height="16" viewBox="0 0 24 24" style={styles.starIcon}>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <strong style={styles.ratingText}>
                  {product.rating}
                </strong>
              </div>
            </div>
          </div>
        )}
        
        <div className="pd19-product-card__option-selector-wrap" style={styles.optionSelectorWrap}>
          <div className="option-selector-v3" style={styles.optionSelector}>
            {product.color && (
              <div className="option-selector-v3__color-name" style={styles.colorName}>
                Colour: <span>{product.color}</span>
              </div>
            )}
            
            {product.storageOptions && product.storageOptions.length > 0 && (
              <div className="option-selector-v3__wrap" style={styles.storageOptions}>
                <ul className="option-selector-v3__list" style={styles.storageList}>
                  {product.storageOptions.map((size, index) => (
                    <li 
                      key={index} 
                      className={`option-selector-v3__item ${index === 0 ? 'is-checked' : ''}`} 
                      style={styles.storageItem}
                    >
                      <button type="button" className="option-selector-v3__size" style={styles.storageBtn}>
                        <span className="option-selector-v3__size-text" style={styles.storageText}>
                          {size}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="pd19-product-card__price-wrap" style={styles.priceWrap}>
          {product.price && (
            <div className="pd19-product-card__price" style={styles.price}>
              <strong style={styles.currentPrice}>{product.price}</strong>
            </div>
          )}
          
          {product.originalPrice && (
            <div style={{ textDecoration: 'line-through', color: '#666', fontSize: '14px' }}>
              {product.originalPrice}
            </div>
          )}
          
          {product.discount && (
            <div style={{ color: '#0066cc', fontSize: '14px', marginTop: '4px' }}>
              {product.discount}
            </div>
          )}
          
          {product.emi && (
            <div className="pd19-product-card__calculator" style={styles.emiCalculator}>
              <button className="cta cta--underline-v2" style={styles.emiBtn}>
                {product.emi}
              </button>
            </div>
          )}
        </div>
        
        <div className="pd19-product-card__cta-wrap" style={styles.ctaWrap}>
          <button className="cta cta--contained cta--black" style={styles.buyNowBtn}>
            Buy now
          </button>
          <button className="cta cta--outlined cta--black" style={styles.learnMoreBtn}>
            Learn more
          </button>
        </div>
        
        <div className="pd19-product-card__checkbox-wrap" style={styles.checkboxWrap}>
          <div className="checkbox-v3" style={styles.checkbox}>
            <input type="checkbox" id={`compare-checkbox-${product.name}`} style={styles.checkboxInput}/>
            <label htmlFor={`compare-checkbox-${product.name}`} style={styles.checkboxLabel}>
              <span style={styles.checkboxBox}>
                <svg width="16" height="16" viewBox="0 0 24 24" style={styles.checkIcon}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </span>
              <span style={styles.checkboxText}>Compare</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  productsContainer: {
    width:"100%",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '16px',
    padding: '0 16px',
    margin: '0 auto'
  },
  productItem: {
    width:"30%",
    boxSizing: 'border-box',
    cursor: 'pointer'
  },
  wrapper: {
    width: '100%',
    height: '775px',
    position: 'relative',
    borderRadius: '8px',
    marginBottom: '32px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },  imgWrap: {
    position: 'relative',
    width: '100%',
    height: '312px',
    overflow: 'hidden'
  },
  pagination: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '12px',
    zIndex: 2
  },
  swiper: {
    width: '100%',
    height: '100%'
  },
  swiperSlide: {
    width: '100%',
    height: '312px'
  },
  imgLink: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  arrowIndicatorWrap: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 8px',
    transform: 'translateY(-50%)',
    zIndex: 2
  },
  quickLookBtn: {
    position: 'absolute',
    top: '312px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#333',
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 16px',
    cursor: 'pointer',
    zIndex: 2,
    textDecoration: 'underline'
  },
  contentWrap: {
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column'
  },
  nameWrap: {
    marginBottom: '8px'
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    textDecoration: 'none'
  },
  ratingWrap: {
    marginBottom: '16px'
  },
  ratingLink: {
    textDecoration: 'none'
  },
  rating: {
    display: 'flex',
    alignItems: 'center'
  },
  starIcon: {
    fill: '#ffc107',
    marginRight: '4px'
  },
  ratingText: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500'
  },
  optionSelectorWrap: {
    marginBottom: '16px'
  },
  optionSelector: {
    display: 'flex',
    flexDirection: 'column'
  },
  colorName: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px'
  },
  storageOptions: {
    marginBottom: '12px'
  },
  storageList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '8px'
  },
  storageItem: {
    position: 'relative'
  },
  storageBtn: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '16px',
    padding: '6px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    '&.is-checked': {
      backgroundColor: '#333',
      color: '#fff',
      borderColor: '#333'
    }
  },
  storageText: {
    fontWeight: '500'
  },
  priceWrap: {
    marginBottom: '16px'
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px'
  },
  currentPrice: {
    fontSize: 'inherit'
  },
  emiCalculator: {
    marginBottom: '8px'
  },
  emiBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#333',
    fontSize: '14px',
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  ctaWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px'
  },
  buyNowBtn: {
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '40px',
    padding: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%'
  },
  learnMoreBtn: {
    backgroundColor: 'transparent',
    color: '#333',
    border: '1px solid #333',
    borderRadius: '40px',
    padding: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    width: '100%'
  },
  checkboxWrap: {
    marginBottom: '8px'
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center'
  },
  checkboxInput: {
    display: 'none',
    '&:checked + label span:first-child': {
      backgroundColor: '#333',
      borderColor: '#333'
    }
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px'
  },
  checkboxBox: {
    width: '18px',
    height: '18px',
    border: '1px solid #ddd',
    borderRadius: '2px',
    marginRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkIcon: {
    width: '14px',
    height: '14px',
    fill: '#fff',
    display: 'none',
    'input:checked + label &': {
      display: 'block'
    }
  },
  checkboxText: {
    color: '#333'
  }
};

export default ProductCards;