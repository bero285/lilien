import Logo from "../assets/logo.jpg";
import "../style/header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="header">
      <img src={Logo} className="header-logo header-mobile-logo" alt="Logo" />

      <div className={`nav-links`}>
        <div className="header-edge">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
        </div>

        <img
          src={Logo}
          className="header-logo header-desktop-logo"
          alt="Logo"
        />

        <div className="header-edge social-links">
          <div className="social-media-row">
            <a href="/about">
              <FaFacebookF />
            </a>
            <a href="/about">
              <FaInstagram />
            </a>
            <a href="/about">
              <FaLinkedinIn />
            </a>
          </div>
          <a href="/contact" className="header-contact">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
