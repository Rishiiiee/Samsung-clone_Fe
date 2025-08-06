import { useState, useEffect, useRef } from 'react';
import homepageftvideo from '../assets/homepageftvideo.mp4';
import secndsectionimg from '../assets/secndsectionimg.webp';
import frthvideosec from '../assets/frthvideosec.webm';
import sxsthsecimage from '../assets/sxsthsecimage.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTVCard, setHoveredTVCard] = useState(null);
  const [hoveredApplianceCard, setHoveredApplianceCard] = useState(null);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const scrollContainerRef = useRef(null);
  const exploreStoriesRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [exploreScrollProgress, setExploreScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileProducts = [
    {
      id: 1,
      name: "Galaxy S25 Ultra",
      image: "https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDMX_Feature_Card1_560X560.jpg",
      link: "/in/smartphones/galaxy-s25-ultra/"
    },
    {
      id: 2,
      name: "Galaxy Z Fold 5",
      image: "https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDMX_Feature_Card2_560X560.jpg",
      link: "/in/smartphones/galaxy-z-fold5/"
    },
    {
      id: 3,
      name: "Galaxy Watch 6",
      image: "https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDMX_Feature_Card3_560X560.jpg",
      link: "/in/wearables/galaxy-watch6/"
    },
    {
      id: 4,
      name: "Galaxy Buds 2 Pro",
      image: "https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDMX_Feature_Card4_560X560.jpg",
      link: "/in/audio/galaxy-buds2-pro/"
    }
  ];

  const tvProducts = [
    {
      id: 1,
      name: "Neo QLED 8K",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card1_560X560.jpg?$560_560_JPG$",
      link: "/in/tvs/8k-tv/"
    },
    {
      id: 2,
      name: "The Frame",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card2_560X560.jpg?$560_560_JPG$",
      link: "/in/lifestyle-tvs/the-frame/"
    },
    {
      id: 3,
      name: "Q-Series Soundbar",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card3_560X560.jpg?$560_560_JPG$",
      link: "/in/audio-devices/all-audio-devices/"
    },
    {
      id: 4,
      name: "Odyssey OLED G8",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card4_560X560.jpg?$560_560_JPG$",
      link: "/in/monitors/all-monitors/"
    }
  ];

  const applianceProducts = [
    {
      id: 1,
      name: "Bespoke AI Refrigerator",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card1_560X560.jpg?$560_560_JPG$",
      link: "/in/refrigerators/french-door/rf9000-t-style-french-door-32inch-family-hub-810l-stainless-steel-rf71db9950qdtl/"
    },
    {
      id: 2,
      name: "Bespoke AI Laundry",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card2_560X560.jpg?$560_560_JPG$",
      link: "/in/washers-and-dryers/washer-dryer-combo/wd8400d-combo-smartthings-ai-energy-mode-ai-ecobubble-q-combo-12kg-black-wd12db8b85gbtl/"
    },
    {
      id: 3,
      name: "Bespoke AI WindFree",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card3_560X560.jpg?$560_560_JPG$",
      link: "/in/air-conditioners/split-ac/ar9500t-ar50f12c1uhnsa-non-windfree-inverter-split-ac--6-3-kw--2-0--3-star-ar50f24d1xhnna/"
    },
    {
      id: 4,
      name: "Microwave Ovens",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card4_560X560.jpg?$560_560_JPG$",
      link: "/in/microwave-ovens/convection/mw7300b-mc32b7382qc-tl/"
    }
  ];

  const highlightProducts = [
    {
      id: 1,
      name: "Galaxy M06 5G (4 GB Memory)",
      image: "//images.samsung.com/is/image/samsung/p6pim/in/sm-m066bzkgins/gallery/in-galaxy-m06-5g-4-gb-memory-sm-m066bzkgins-thumb-545216700?$216_216_PNG$",
      link: "/in/smartphones/galaxy-m/galaxy-m06-5g-black-128gb-sm-m066bzkgins/",
      price: "₹ 11499.00",
      save: "Save ₹1000.00",
      mrp: "MRP (Inclusive of all taxes) ₹ 12499.00"
    },
    {
      id: 2,
      name: "Galaxy A36 5G (8 GB Memory)",
      image: "//images.samsung.com/is/image/samsung/p6pim/in/sm-a366ezajins/gallery/in-galaxy-a36-5g-sm-a366-539188-sm-a366ezajins-thumb-545215084?$216_216_PNG$",
      link: "/in/smartphones/galaxy-a/galaxy-a36-5g-awesome-white-128gb-sm-a366ezajins/",
      price: "₹ 30999.00",
      save: "Save ₹5000.00",
      mrp: "MRP (Inclusive of all taxes) ₹ 35999.00"
    },
    {
      id: 3,
      name: "Soundbar 360W 3.1.2Ch Q Symphony with Upfiring Acoustic beam Speakers & wireless subwoofer HW-Q600C",
      image: "//images.samsung.com/is/image/samsung/p6pim/in/hw-q600c-xl/gallery/in-q-series-soundbar-hw-q600c-hw-q600c-xl-thumb-537677127?$216_216_PNG$",
      link: "/in/audio-devices/soundbar/q600c-black-hw-q600c-xl/",
      price: "₹ 27990.00",
      save: "Save ₹13910.00",
      mrp: "MRP (Inclusive of all taxes) ₹ 41900.00"
    },
    {
      id: 4,
      name: "Q-series Soundbar 360W 5.1.2 Ch. Q-Symphony with Wireless Dolby Atmos Q800D",
      image: "//images.samsung.com/is/image/samsung/p6pim/in/hw-q800d-xl/gallery/in-q-series-soundbar-hw-q800d-hw-q800d-xl-thumb-541818223?$216_216_PNG$",
      link: "/in/audio-devices/soundbar/q800d-black-hw-q800d-xl/",
      price: "₹ 46990.00",
      save: "Save ₹19910.00",
      mrp: "MRP (Inclusive of all taxes) ₹ 66900.00"
    },
    {
      id: 5,
      name: "Galaxy S25 Edge",
      image: "//images.samsung.com/is/image/samsung/p6pim/in/ps_2504/gallery/in-galaxy-s25-s937-sm-s937bzscins-thumb-546082704?$216_216_PNG$",
      link: "/in/smartphones/galaxy-s25-edge/",
      price: "₹ 121999.00",
      save: null,
      mrp: null
    }
  ];

  const exploreStories = [
    {
      id: 1,
      title: "Explore how our AI empowers you",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/Explore_Card1_PC_312x312.jpg?$312_312_JPG$",
      link: "/in/ai-products/"
    },
    {
      id: 2,
      title: "See what's possible with the new One UI",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/Explore_Card2_PC_312x312.jpg?$312_312_JPG$",
      link: "/in/one-ui/"
    },
    {
      id: 3,
      title: "Discover how SmartThings got smarter",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/Explore_Card3_PC_312x312.jpg?$312_312_JPG$",
      link: "/in/smartthings/"
    },
    {
      id: 4,
      title: "Steps towards to a better future",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/Explore_Card4_PC_312x312.jpg?$312_312_JPG$",
      link: "/in/sustainability/environment/"
    },
    {
      id: 5,
      title: "Let our product ease your day",
      image: "//images.samsung.com/is/image/samsung/assets/in/ux3/home/Explore_Card5_PC_312x312.jpg?$312_312_JPG$",
      link: "/in/explore/brand/let-our-products-ease-your-day/"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const exploreScrollLeft = () => {
    if (exploreStoriesRef.current) {
      exploreStoriesRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const exploreScrollRight = () => {
    if (exploreStoriesRef.current) {
      exploreStoriesRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const updateScrollProgress = () => {
    if (exploreStoriesRef.current) {
      const container = exploreStoriesRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrollPosition = container.scrollLeft;
      const progress = (scrollPosition / scrollWidth) * 100;
      setExploreScrollProgress(progress);
    }
  };

  const updateHighlightScrollProgress = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrollPosition = container.scrollLeft;
      const progress = (scrollPosition / scrollWidth) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <div className="main-container" style={styles.mainContainer}>
      <div className="container-fluid" style={styles.containerFluid}>
        {/* First video section */}
        <section style={styles.section}>
          <figure style={{
            ...styles.figure, 
            width: scrolled ? '80%' : '100%',
            margin: scrolled ? '0 auto' : '0'
          }}>
            <video 
              src={homepageftvideo} 
              autoPlay 
              muted 
              loop 
              style={styles.video}
            />
          </figure>
        </section>

        {/* Second image section */}
        <section style={styles.section2}>
          <div style={styles.imageContainer}>
            <img src={secndsectionimg} alt="" height={700} style={styles.imagessecondsec} />
          </div>
        </section>

        {/* First Product Section (Mobile) */}
        <section style={styles.productSection}>
          <div className="container" style={styles.thrdcontainer}>
            <div className="row g-4">
              {mobileProducts.map((product) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                  <div 
                    style={styles.productCard}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <a href={product.link} style={styles.productLink}>
                      <div style={styles.productImageContainer}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          style={{
                            ...styles.productImage,
                            transform: hoveredCard === product.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div style={styles.productNameOverlay}>{product.name}</div>
                        <div style={{
                          ...styles.learnMoreOverlay,
                          bottom: hoveredCard === product.id ? '20px' : '-50px',
                          opacity: hoveredCard === product.id ? 1 : 0
                        }}>
                          <span style={styles.learnMore}>Learn more</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section style={styles.frthvideosection}>
          <div style={styles.frthcontainer}>
            <div style={styles.videoContainer}>
              <video src={frthvideosec} autoPlay muted loop style={styles.frthcontvideofinal}></video>
              <div style={styles.videoTextContent}>
                <p style={styles.videoTitle}>2025 AI TVs</p>
                <p style={styles.videoSubtitle}>Explore New AI TVs</p>
                <div style={styles.videoButtons}>
                  <a href="" style={styles.videoButton}>Learn More</a>
                  <a href="" style={styles.videoButton}>Buy</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Product Section (TV) */}
        <section style={styles.productSection}>
          <div className="container" style={styles.thrdcontainer}>
            <div className="row g-4">
              {tvProducts.map((product) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                  <div 
                    style={styles.productCard}
                    onMouseEnter={() => setHoveredTVCard(product.id)}
                    onMouseLeave={() => setHoveredTVCard(null)}
                  >
                    <a href={product.link} style={styles.productLink}>
                      <div style={styles.productImageContainer}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          style={{
                            ...styles.productImage,
                            transform: hoveredTVCard === product.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div style={styles.productNameOverlay}>{product.name}</div>
                        <div style={{
                          ...styles.learnMoreOverlay,
                          bottom: hoveredTVCard === product.id ? '20px' : '-50px',
                          opacity: hoveredTVCard === product.id ? 1 : 0
                        }}>
                          <span style={styles.learnMore}>Buy</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sixth Section */}
        <section style={styles.sxthsection}>
          <div style={styles.sxthcontainer}>
            <div style={styles.photoContainer}>
              <img 
                src={sxsthsecimage} 
                alt="Bespoke AI" 
                style={styles.sxthcontphotofinal} 
              />
              <div style={styles.phototextContent}>
                <p style={styles.phototitle}></p>
                <p style={styles.photosubtitle}>Home living made simple</p>
                <div style={styles.photoButtons}>
                  <a href="" style={styles.photoButton}>Learn More</a>
                  <a href="" style={styles.photoButton}>Buy</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appliance Products Section */}
        <section style={styles.productSection}>
          <div className="container" style={styles.thrdcontainer}>
            <div className="row g-4">
              {applianceProducts.map((product) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                  <div 
                    style={styles.productCard}
                    onMouseEnter={() => setHoveredApplianceCard(product.id)}
                    onMouseLeave={() => setHoveredApplianceCard(null)}
                  >
                    <a href={product.link} style={styles.productLink}>
                      <div style={styles.productImageContainer}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          style={{
                            ...styles.productImage,
                            transform: hoveredApplianceCard === product.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div style={styles.productNameOverlay}>{product.name}</div>
                        <div style={{
                          ...styles.learnMoreOverlay,
                          bottom: hoveredApplianceCard === product.id ? '20px' : '-50px',
                          opacity: hoveredApplianceCard === product.id ? 1 : 0
                        }}>
                          <span style={styles.learnMore}>Buy</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section style={styles.highlightSection}>
          <div style={styles.highlightContainer}>
            <h2 style={styles.highlightTitle}>Latest Highlights</h2>
            <div 
              ref={scrollContainerRef}
              style={styles.highlightGridContainer}
              onScroll={updateHighlightScrollProgress}
            >
              <div style={styles.highlightGrid}>
                {highlightProducts.map((product) => (
                  <div key={product.id} style={styles.highlightItem}>
                    <div 
                      style={styles.highlightCard}
                      onMouseEnter={() => setHoveredHighlight(product.id)}
                      onMouseLeave={() => setHoveredHighlight(null)}
                    >
                      <a href={product.link} style={styles.highlightLink}>
                        <div style={styles.highlightImageContainer}>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{
                              ...styles.highlightImage,
                              transform: hoveredHighlight === product.id ? 'scale(1.05)' : 'scale(1)'
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div style={styles.productDetails}>
                      <h3 style={styles.highlightName}>{product.name}</h3>
                      <div style={styles.highlightPrice}>
                        <strong style={styles.currentPrice}>{product.price}</strong>
                        {product.save && (
                          <p style={styles.savePrice}>
                            <em>{product.save}</em>
                          </p>
                        )}
                        {product.mrp && (
                          <p style={styles.originalPrice}>{product.mrp}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.scrollControlsBottom}>
              <div style={styles.customScrollbarTrack}>
                <div 
                  style={{
                    ...styles.customScrollbarThumb,
                    width: `${scrollProgress}%`
                  }}
                />
              </div>
              <div style={styles.scrollButtonsContainer}>
                <button 
                  onClick={scrollLeft} 
                  style={styles.scrollButton}
                  aria-label="Scroll left"
                >
                  &lt;
                </button>
                <button 
                  onClick={scrollRight} 
                  style={styles.scrollButton}
                  aria-label="Scroll right"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Stories Section */}
        <section style={styles.exploreSection}>
          <div style={styles.exploreContainer}>
            <h2 style={styles.exploreTitle}>Explore the Stories</h2>
            <div 
              ref={exploreStoriesRef}
              style={styles.exploreList}
              onScroll={updateScrollProgress}
            >
              <div style={styles.exploreListInner}>
                {exploreStories.map((story) => (
                  <div key={story.id} style={styles.exploreItem}>
                    <a href={story.link} style={styles.exploreLink}>
                      <div style={styles.exploreImageContainer}>
                        <img 
                          src={story.image} 
                          alt="" 
                          style={styles.exploreImage}
                        />
                      </div>
                      <div style={styles.exploreNameWrap}>
                        <p style={styles.exploreName}>{story.title}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.scrollControlsBottom}>
              <div style={styles.customScrollbarTrack}>
                <div 
                  style={{
                    ...styles.customScrollbarThumb,
                    width: `${exploreScrollProgress}%`
                  }}
                />
              </div>
              <div style={styles.scrollButtonsContainer}>
                <button 
                  onClick={exploreScrollLeft} 
                  style={styles.scrollButton}
                  aria-label="Scroll left"
                >
                  &lt;
                </button>
                <button 
                  onClick={exploreScrollRight} 
                  style={styles.scrollButton}
                  aria-label="Scroll right"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;

const styles = {
  mainContainer: {
    width: '100%',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },
  containerFluid: {
    padding: 0,
    margin: 0
  },
  section: {
    padding: 0,
    margin: 0
  },
  figure: {
    padding: 0,
    margin: 0,
    transition: 'all 0.3s ease',
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover'
  },
  section2: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    margin: 0
  },
  imageContainer: {
    width: '80%',
    display: 'flex',
    paddingTop: '18px',
    justifyContent: 'center'
  },
  imagessecondsec: {
    width: '100%',
  },
  productSection: {
    padding: '18px 0'
  },
  thrdcontainer: {
    maxWidth: '80%',
    margin: '0 auto',
    padding: '0 15px'
  },
  productCard: {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
    cursor: 'pointer'
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%'
  },
  productImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  productNameOverlay: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'black',
    fontSize: '14px',
    fontWeight: '600',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    zIndex: 2,
    width: '100%',
    textAlign: 'center'
  },
  learnMoreOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    transition: 'all 0.3s ease',
    zIndex: 2
  },
  learnMore: {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  frthvideosection: {
    width: '100%',
    height: '600px',
    position: 'relative',
  },
  frthcontainer: {
    maxWidth: '80%',
    margin: 'auto',
    height: '100%',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  frthcontvideofinal: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  videoTextContent: {
    position: 'absolute',
    top: '50%',
    left: '05%',
    transform: 'translateY(-50%)',
    color: 'black',
    zIndex: 2,
  },
  videoTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  videoSubtitle: {
    fontSize: '18px',
    marginBottom: '16px',
  },
  videoButtons: {
    display: 'flex',
    gap: '05px',
  },
  videoButton: {
    padding: '5px 10px',
    backgroundColor: 'transparent',
    color: 'black',
    border: '1px solid black',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'white',
      color: 'black',
    }
  },
  sxthsection: {
    width: '100%',
    height: '450px',
    position: 'relative',
    margin: '0px 0'
  },
  sxthcontainer: {
    maxWidth: '80%',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  photoContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '8px'
  },
  sxthcontphotofinal: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  phototextContent: {
    position: 'absolute',
    top: '55%',
    left: '4%',
    transform: 'translateY(-50%)',
    color: 'white',
    zIndex: 2,
    maxWidth: '500px'
  },
  phototitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '12px',
    textShadow: '0 1px 2px rgba(255,255,255,0.8)'
  },
  photosubtitle: {
    fontSize: '18px',
    marginBottom: '24px',
    textShadow: '0 1px 2px rgba(255,255,255,0.8)'
  },
  photoButtons: {
    display: 'flex',
    gap: '8px',
  },
  photoButton: {
    padding: '3px 8px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '8px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'black',
      color: 'white',
    }
  },
  highlightSection: {
    padding: '40px 0',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: ''
  },
  highlightContainer: {
    maxWidth: '80%',
    margin: '0 auto',
    padding: '0 15px',
    position: 'relative'
  },
  highlightTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'left'
  },
  highlightGridContainer: {
    overflowX: 'hidden',
    width: '100%',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::webkitscrollbar': {
      display: 'none'
    }
  },
  highlightGrid: {
    display: 'flex',
    gap: '15px',
    paddingBottom: '20px',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::webkitscrollbar': {
      display: 'none'
    }
  },
  highlightItem: {
    scrollSnapAlign: 'start',
    minWidth: '300px',
    width: '300px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  highlightCard: {
    width: '100%',
    height: '300px',  
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#fff',
    marginBottom: '10px'
  },
  highlightLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%'
  },
  highlightImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    boxSizing: 'border-box'
  },
  highlightImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  productDetails: {
    padding: '0 5px',
    width: '100%',
    minHeight: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  highlightName: {
    fontSize: '18px',
    fontWeight: '500',
    margin: '0 0 5px 0',
    lineHeight: '1.3',
    color: '#333',
    height: '30px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  highlightPrice: {
    marginTop: 'auto'
  },
  currentPrice: {
    fontSize: '14px',
    color: '#333',
    display: 'block',
    fontWeight: '600'
  },
  savePrice: {
    fontSize: '12px',
    color: '#e53232',
    margin: '2px 0',
    fontWeight: '500'
  },
  originalPrice: {
    fontSize: '10px',
    color: '#777',
    margin: '2px 0 0',
    textDecoration: 'line-through'
  },
  customScrollbarTrack: {
    height: '3px',
    width: '60%',
    background: '#f0f0f0',
    borderRadius: '2px',
    position: 'relative',
    overflow: 'hidden'
  },
  customScrollbarThumb: {
    height: '100%',
    background: '#666',
    borderRadius: '2px',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'width 0.2s'
  },
  scrollControlsBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '15px'
  },
  scrollButtonsContainer: {
    display: 'flex',
    gap: '10px'
  },
  scrollButton: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    transition: 'all 0.2s',
    flexShrink: 0,
    ':hover': {
      background: '#f5f5f5',
      borderColor: '#999'
    }
  },
  exploreSection: {
    backgroundColor: '',
    padding: '60px 0',
    width: '100%',
    overflow: 'hidden'
  },
  exploreContainer: {
    maxWidth: '80%',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative'
  },
  exploreTitle: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'left'
  },
  exploreList: {
    overflowX: 'hidden',
    width: '100%',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::webkitscrollbar': {
      display: 'none'
    }
  },
  exploreListInner: {
    display: 'flex',
    gap: '20px',
    paddingBottom: '20px',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::webkitscrollbar': {
      display: 'none'
    }
  },
  exploreItem: {
    minWidth: '280px',
    width: '280px',
    flexShrink: 0
  },
  exploreLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block'
  },
  exploreImageContainer: {
    width: '100%',
    height: '240px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '15px'
  },
  exploreImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  exploreNameWrap: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  exploreName: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    margin: 0
  }
};