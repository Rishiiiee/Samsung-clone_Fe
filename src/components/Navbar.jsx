import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleAccountClick = () => {
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={styles.navbar}
      >
        <div className="container-fluid" style={styles.container}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <Link to="/" className="navbar-brand">
                <svg
                  width="120"
                  height="40"
                  viewBox="0 0 120 40"
                  style={styles.logo}
                >
                  <path
                    d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2a2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168a2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168a2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.94,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z"
                    transform="translate(0 12)"
                  ></path>
                </svg>
              </Link>
            </div>


            <div className="d-none d-lg-flex">
              <ul className="navbar-nav d-flex flex-wrap">
                <li className="nav-item">
                  <Link to="/shop" style={styles.navBtn}>Shop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/mobile" style={styles.navBtn}>Mobile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/tv" style={styles.navBtn}>TV&AV</Link>
                </li>
                <li className="nav-item">
                  <Link to="/appliances" style={styles.navBtn}>Appliances</Link>
                </li>
                <li className="nav-item">
                  <Link to="/display" style={styles.navBtn}>Computing</Link>
                </li>
                <li className="nav-item">
                  <Link to="/accessories" style={styles.navBtn}>Accessories</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center gap-2 gap-md-3">
              <div className="position-relative d-none d-md-block">
                <input
                  type="text"
                  placeholder="Search"
                  style={styles.searchInput}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={styles.searchIcon}
                >
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>

              <button style={styles.iconBtn} onClick={() => navigate("/cart")}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>

              <button style={styles.iconBtn} onClick={handleAccountClick}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 96 96"
                  style={styles.icon}
                >
                  <path
                    d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z"
                    transform="translate(-0.5 0.5)"
                  />
                </svg>
              </button>
              
              <button
                className="d-lg-none btn p-0"
                style={styles.hamburgerBtn}
                onClick={toggleOffcanvas}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        style={styles.offcanvas}
      >
        <div className="offcanvas-header" style={styles.offcanvasHeader}>
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleOffcanvas}
            style={styles.closeBtn}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li style={styles.offcanvasItem}>
              <Link to="/shop" style={styles.offcanvasBtn} onClick={toggleOffcanvas}>Shop</Link>
            </li>
            <li style={styles.offcanvasItem}>
              <Link to="/shop" style={styles.offcanvasBtn} onClick={toggleOffcanvas}>Mobile</Link>
            </li>
            <li style={styles.offcanvasItem}>
              <Link to="/shop" style={styles.offcanvasBtn} onClick={toggleOffcanvas}>TV&AV</Link>
            </li>
            <li style={styles.offcanvasItem}>
              <Link to="/shop" style={styles.offcanvasBtn} onClick={toggleOffcanvas}>Appliances</Link>
            </li>
            <li style={styles.offcanvasItem}>
              <Link to="/shop" style={styles.offcanvasBtn} onClick={toggleOffcanvas}>Computing</Link>
            </li>
            <li style={styles.offcanvasItem}>
              <Link to="/shop" style={styles.offcanvasBtn} onClick={toggleOffcanvas}>Accessories</Link>
            </li>
          </ul>

          <div className="mt-4 pt-3 border-top">
            <button style={styles.authBtn}>Login</button>
            <button style={{ ...styles.authBtn, ...styles.signUpBtn }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop when offcanvas is open */}
      {showOffcanvas && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={toggleOffcanvas}
          style={styles.backdrop}
        ></div>
      )}
    </>
  );
}

export default Navbar;

const styles = {
  navbar: {
    width: "100%",
    height: "80px",
    maxHeight: "80px",
    padding: "0",
    margin: "0",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  container: {
    maxWidth: "1400px", 
    width: "95%", 
    margin: "0 auto",
    padding: "0 15px",
    height: "100%",
  },
  logo: {
    height: "30px",
    fill: "#000",
  },
  navitem:{
    textDecoration:"none",
    style:"none",
    
  },
  navBtn: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px",
    fontWeight: "500",
    color: "#000",
    textDecoration:"none",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "14px",
    whiteSpace: "nowrap",
    ":hover": {
      color: "#007bff", 
      backgroundColor: "rgba(0, 123, 255, 0.1)",
      borderRadius: "4px",
      textDecoration:"none"
    } ,
  },
  searchInput: {
    width: "160px",
    padding: "8px 30px 8px 12px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
    transition: "all 0.3s",
    ":focus": {
      width: "200px",
      borderColor: "#007bff",
    },
  },
  searchIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fill: "#666",
    pointerEvents: "none",
  },
  iconBtn: {
    backgroundColor: "transparent",
    border: "none",
    padding: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },
  hamburgerBtn: {
    backgroundColor: "transparent",
    border: "none",
    padding: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fill: "#333",
    width: "24px",
    height: "24px",
  },
  offcanvas: {
    width: "300px",
    backgroundColor: "#fff",
    boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
    transform: (show) => (show ? "translateX(0)" : "translateX(100%)"),
    transition: "transform 0.3s ease-in-out",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    zIndex: "1050",
    visibility: (show) => (show ? "visible" : "hidden"),
  },
  offcanvasHeader: {
    padding: "20px",
    borderBottom: "1px solid #eee",
  },
  closeBtn: {
    fontSize: "1.5rem",
    padding: "0.5rem",
    margin: "-0.5rem -0.5rem -0.5rem auto",
  },
  offcanvasItem: {
    padding: "0.5rem 1rem",
  },
  offcanvasBtn: {
    width: "100%",
    textAlign: "left",
    padding: "0.75rem 1rem",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "1rem",
    color: "#333",
    ":hover": {
      backgroundColor: "#f8f9fa",
    },
  },
  authBtn: {
    width: "100%",
    padding: "0.75rem 1rem",
    marginBottom: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "transparent",
    fontSize: "1rem",
    fontWeight: "500",
  },
  signUpBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
  },
  backdrop: {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1040",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
    opacity: "0.5",
  },
};