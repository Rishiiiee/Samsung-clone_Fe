import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Productdetail.css";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();

  const defaultProduct = {
    id: "",
    title: "Product",
    name: "Product",
    imageUrl: "https://via.placeholder.com/300x300?text=Product+Image",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    price: "₹0.00",
    images: [
      "https://via.placeholder.com/300x300?text=Product+Image",
      "https://images.samsung.com/is/image/samsung/assets/in/Color_3000x2000.png",
      "https://via.placeholder.com/300x300?text=Product+Angle+View",
      "https://via.placeholder.com/300x300?text=Product+Closeup",
    ],
  };

  const [product, setProduct] = useState(defaultProduct);
  const [selectedStorage, setSelectedStorage] = useState("256 GB | 12 GB");
  const [selectedPrice, setSelectedPrice] = useState("₹109999.00");
  const [monthlyPrice, setMonthlyPrice] = useState("₹16470.53/mo");
  const [pinCode, setPinCode] = useState("");
  const [exchangeOption, setExchangeOption] = useState("yes");
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = product.images;

  useEffect(() => {
    if (location.state?.product) {
      setProduct((prev) => ({
        ...defaultProduct,
        ...location.state.product,
        images: location.state.product.images || defaultProduct.images,
      }));
      setSelectedPrice(location.state.product.price );
    }
  }, [location.state]);

  const handleStorageChange = (storage, price, monthly) => {
    setSelectedStorage(storage);
    setSelectedPrice(price);
    setMonthlyPrice(monthly);
  };

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleExchangeChange = (option) => {
    setExchangeOption(option);
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const addToCart = async () => {
    try {
      const cartItem = {
        ...product,
        id: product.id || Date.now().toString(), 
        title: product.title || product.name, 
        imageUrl: product.imageUrl || product.image,
        price: selectedPrice, 
        quantity: 1,
        selectedStorage,
        monthlyPrice,
      };

      await axios.post("https://samsung-clone-be.onrender.com/cart", cartItem);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart");
    }
  };
  return (
    <div className="productdetail">
      <section className="product-navigation">
        <div className="navigation-container">
          <div className="product-tabs">
            <ul className="tab-list">
              <li className="tab-item active">
                <a href="#">
                  <span>{product.title || product.name}</span>
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>Compare</span>
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>FAQs</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="review-stars">
            <div className="rating-summary">
              <button className="rating-button" aria-haspopup="menu">
                <span className="sr-only">
                  4.9 out of 5 stars, average rating value. Read 282 Reviews.
                  Same page link.
                </span>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="star-icon"
                      width="10"
                      height="10"
                      viewBox="0 0 25 25"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <polygon points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" />
                    </svg>
                  ))}
                </div>
                <div className="rating-value">4.9</div>
                <div className="review-count">(282)</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="sub-navigation">
        <div className="sub-navigation-inner">
          <div className="sub-navigation-links">
            <ul className="nav-list">
              <li className="nav-item active">
                <a
                  href="/in/smartphones/galaxy-s25-edge/"
                  className="nav-link"
                  aria-label="Features"
                >
                  <span className="link-text">Features</span>
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link compare-btn" aria-label="Compare">
                  <span className="link-text">Compare</span>
                </button>
              </li>
              <li className="nav-item">
                <a href="#downBoxHtml" className="nav-link" aria-label="FAQs">
                  <span className="link-text">FAQs</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="product-main-section">
        <div className="product-container">
          <div className="product-image-section">
            <div className="image-slider-container">
              <div className="main-image-container">
                <button className="slider-nav-btn prev-btn" onClick={prevImage}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  </svg>
                </button>
                <div className="image-container">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={`${product.title || product.name} - View ${
                      currentImageIndex + 1
                    }`}
                  />
                </div>
                <button className="slider-nav-btn next-btn" onClick={nextImage}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </button>
              </div>
              <div className="image-counter">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </div>
          </div>
          <div className="product-details-section">
            <div className="product-header">
              <h1>{product.title || product.name}</h1>
              <p className="display-price">
                From ₹16470.53/mo. or 16.91 cm display
              </p>
            </div>

            <div className="features-section">
              <div className="feature-item">
                <img
                  src="//images.samsung.com/in/smartphones/galaxy-s25-edge/buy/top_feature_slimmest.png"
                  alt="Slimmest Galaxy S"
                />
                <span className="fearure-sec-text">Slimmest Galaxy S</span>
              </div>
              <div className="feature-item">
                <img
                  src="//images.samsung.com/in/smartphones/galaxy-s25-edge/buy/top_feature_camera.png"
                  alt="200 MP Wide Camera"
                />
                <span className="fearure-sec-text">200 MP Wide Camera</span>
              </div>
              <div className="feature-item">
                <img
                  src="//images.samsung.com/in/smartphones/galaxy-s25-edge/buy/top_feature_galaxyAI.png"
                  alt="Galaxy AI"
                />
                <span className="fearure-sec-text">Galaxy AI</span>
              </div>
            </div>

            <div className="storage-options">
              <h2>Storage</h2>
              <div
                className={`storage-option ${
                  selectedStorage === "256 GB | 12 GB" ? "selected" : ""
                }`}
                onClick={() =>
                  handleStorageChange(
                    "256 GB | 12 GB",
                    "₹109999.00",
                    "₹16470.53/mo"
                  )
                }
              >
                <div className="storage-details">
                  <span className="storage-size">256 GB | 12 GB</span>
                  <span className="storage-price">
                    ₹16470.53/mo. or ₹109999.00
                  </span>
                </div>
                {selectedStorage === "256 GB | 12 GB" && (
                  <div className="selected-indicator">✓</div>
                )}
              </div>

              <div
                className={`storage-option ${
                  selectedStorage === "512 GB | 12 GB" ? "selected" : ""
                }`}
                onClick={() =>
                  handleStorageChange(
                    "512 GB | 12 GB",
                    "₹121999.00",
                    "₹17174.41/mo"
                  )
                }
              >
                <div className="storage-details">
                  <span className="storage-size">512 GB | 12 GB</span>
                  <span className="storage-price">
                    ₹17174.41/mo. or ₹121999.00
                  </span>
                </div>
                {selectedStorage === "512 GB | 12 GB" && (
                  <div className="selected-indicator">✓</div>
                )}
              </div>
            </div>

            <div className="storage-guide">
              <p>What's the right storage format?</p>
              <p>Payment your storage needs with just a few results.</p>
            </div>

            <div className="final-price-section">
              <p className="price">Price: {selectedPrice}</p>
              <p className="monthly">
                From {monthlyPrice}, or {selectedPrice}
              </p>
            </div>

            <div className="action-buttons">
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="delivery-details-section">
        <div className="delivery-container">
          <h2 className="section-title">Delivery Details</h2>

          <div className="pin-code-section">
            <div className="pin-code-input-wrapper">
              <div className="pin-code-input">
                <input
                  type="text"
                  id="deliveryPinCode"
                  placeholder="Enter PIN Code"
                  maxLength="6"
                  value={pinCode}
                  onChange={handlePinCodeChange}
                />
                <div className="underline"></div>
                {pinCode && (
                  <button className="clear-btn" onClick={() => setPinCode("")}>
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                )}
                <button className="search-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="delivery-info-wrapper">
              <p className="delivery-info">
                Order by 11 PM and get Next day delivery.*
              </p>
              <button className="info-btn" onClick={toggleTooltip}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </button>
            </div>
            {showTooltip && (
              <div className="tooltip">
                <p>
                  Delivery date may vary based on address, stock availability,
                  exchange & payment mode. Delivery date shown on checkout page
                  is final.
                </p>
                <button className="tooltip-close" onClick={toggleTooltip}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="exchange-section">
        <div className="exchange-container">
          <div
            className="hubble-product__offers product__tradein_offers"
            id="trade-in"
          >
            <div className="hubble-product__options s-option-trade product__tradein_option">
              <div className="hubble-product__options-head">
                <h3 className="s-option-title">Exchange</h3>
              </div>

              <div
                className="hubble-product__options-content"
                id="product__tradein_data"
              >
                <div className="hubble-product__options-content-inner">
                  <div className="option-buttons-container">
                    <div className="option-button">
                      <button className="exchange-option active">
                        <div className="s-cta-text">Yes, please</div>
                      </button>
                    </div>
                    <div className="option-button">
                      <button className="exchange-option">
                        <div className="s-cta-text">No, thanks</div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hubble-product__options-list-guide-wrap">
                  <div className="hubble-product__options-list-guide">
                    <div className="exchange-info">
                      <div className="info-text">
                        <div className="info-title">
                          Switching to Samsung Galaxy is easy, even from iOS.
                        </div>
                        <div className="info-desc">
                          Keep what's important on your new device with Smart
                          Switch.
                          <br />
                          *Terms and Conditions apply. Please visit the{" "}
                          <a
                            href="https://www.samsung.com/in/apps/smart-switch/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Smart Switch
                          </a>{" "}
                          page for more information.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="protection-container">
          <div className="protection-section">
            <h3 className="protection-heading">Samsung Care+</h3>
            <p className="protection-description">
              Protect your device from accidental damage or technical failure
            </p>

            <div className="row g-2">
              <div className="col-3">
                <div className="protection-card">
                  <h5 className="protection-card-title">
                    Comprehensive Protection (2 Years)
                  </h5>
                  <div className="protection-price-group">
                    <span className="protection-price">₹15999.00</span>
                    <span className="protection-price">₹19999.00</span>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="protection-card">
                  <h5 className="protection-card-title">
                    Extended Warranty (1 Year)
                  </h5>
                  <span className="protection-price">₹6999.00</span>
                </div>
              </div>

              <div className="col-3">
                <div className="protection-card">
                  <h5 className="protection-card-title">
                    Accidental & Liquid Damage Protection (1 Year)
                  </h5>
                  <span className="protection-price">₹6999.00</span>
                </div>
              </div>

              <div className="col-3">
                <div className="protection-card">
                  <h5 className="protection-card-title">
                    Screen Protection (1 Year)
                  </h5>
                  <span className="protection-price">₹6999.00</span>
                </div>
              </div>

              <div className="col-3">
                <button className="protection-no-thanks-btn">No, thanks</button>
              </div>
            </div>
          </div>

          <div className="protection-section">
            <h3 className="protection-heading">Samsung Assured Buyback</h3>
            <p className="protection-description">
              Get up to 70% resale value with Assured Buyback.
            </p>

            <div className="row">
              <div className="col-3">
                <div className="protection-card">
                  <h5 className="protection-card-title">
                    Samsung Assured Buyback - 12 Months
                  </h5>
                  <span className="protection-price">₹1499.00</span>
                </div>
              </div>

              <div className="col-3">
                <button className="protection-no-thanks-btn">No, thanks</button>
              </div>
            </div>
          </div>

          <div className="offers-section">
            <h3 className="offers-heading">Offers & Benefits</h3>
            <h4 className="offers-subheading">Factory S25 Edge</h4>

            <div className="row g-2">
              <div className="col-6">
                <div className="offer-card">
                  <span className="offer-badge">Financing</span>
                  <p className="offer-text">
                    No Cost EMI starts from ₹4583.29/month. Standard EMI starts
                    from ₹5385.36/month.
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="offer-card">
                  <span className="offer-badge">Bank Offer</span>
                  <p className="offer-text">
                    ₹8000 Instant discount on Full Payment with HDFC Bank Credit
                    Cards
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="offer-card">
                  <span className="offer-badge">Video Demo</span>
                  <p className="offer-text">
                    Video Demonstration available from 07 AM - 11:59 PM all days
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="offer-card">
                  <span className="offer-badge">Co-branded Card</span>
                  <p className="offer-text">
                    Samsung Axis Bank Credit Card: Extra 10% cashback on EMI and
                    full swipe
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="offer-card">
                  <span className="offer-badge">GST Invoice</span>
                  <p className="offer-text">
                    Save Up To 18% with GST Invoice on business purchases
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="advantage-section">
            <div className="advantage-header">
              <h3 className="advantage-heading">Samsung.com Advantage</h3>
            </div>

            <div className="advantage-content">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="advantage-card">
                    <div className="advantage-card-icon">
                      <img
                        src="//images.samsung.com/in/smartphones/galaxy-s25-edge/buy/advantage_instant_credit_icon.png"
                        alt="Samsung Exchange"
                        className="advantage-icon"
                      />
                    </div>
                    <div className="advantage-card-body">
                      <h4 className="advantage-card-title">Samsung Exchange</h4>
                      <p className="advantage-card-text">
                        Get best online exchange benefit on your next device
                        when you exchange
                      </p>
                      <a href="/in/offer/exchange/" className="advantage-link">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="advantage-card">
                    <div className="advantage-card-icon">
                      <img
                        src="//images.samsung.com/in/smartphones/galaxy-s25-edge/buy/advantage_care_icon.png"
                        alt="Samsung Care+"
                        className="advantage-icon"
                      />
                    </div>
                    <div className="advantage-card-body">
                      <h4 className="advantage-card-title">Samsung Care+</h4>
                      <p className="advantage-card-text">
                        Add SC+ for added peace of mind from accidental damage.
                      </p>
                      <a
                        href="/in/offer/samsung-care-plus/"
                        className="advantage-link"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="advantage-card">
                    <div className="advantage-card-icon">
                      <img
                        src="//images.samsung.com/in/smartphones/galaxy-s25-edge/buy/advantage_free_delivery_icon.png"
                        alt="Free Delivery"
                        className="advantage-icon"
                      />
                    </div>
                    <div className="advantage-card-body">
                      <h4 className="advantage-card-title">Free Delivery</h4>
                      <p className="advantage-card-text">
                        Enjoy safe and hassle-free delivery.
                      </p>
                      <a
                        href="/in/shop-faq/delivery-and-installations/"
                        className="advantage-link"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
