import Logo from "../assets/logo.jpg";
import "../style/header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const getLinkClassName = (path: any) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div className="header">
      <img src={Logo} className="header-logo header-mobile-logo" alt="Logo" />

      <button className="burger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        {isMobileMenuOpen && (
          <div className="mobile-header">
            <img
              src={Logo}
              className="header-logo header-mobile-logo"
              alt="Logo"
            />
          </div>
        )}

        <div className="header-edge">
          <a href="/" className={`${getLinkClassName("/")}`}>
            Home
          </a>
          <a href="/about" className={`${getLinkClassName("/about")}`}>
            About
          </a>
          <a href="/services" className={`${getLinkClassName("/services")}`}>
            Services
          </a>
          <a href="/portfolio" className={`${getLinkClassName("/portfolio")}`}>
            Portfolio
          </a>
        </div>

        <img
          src={Logo}
          className="header-logo header-desktop-logo"
          alt="Logo"
        />

        <div className="header-edge social-links">
          <div className="social-media-row">
            <a href="/about">
              <FaFacebookF size={20} />
            </a>
            <a href="/about">
              <FaInstagram size={20} />
            </a>
            <a href="/about">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <a href="/contact" className="header-contact global-contact">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
