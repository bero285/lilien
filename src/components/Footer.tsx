import Logo from "../assets/logo.jpg";
import "../style/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className={`footer-links`}>
        <div className="footer-edge footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
        </div>

        <img src={Logo} className="footer-logo" alt="Logo" />

        <div className="footer-edge">
          <a href="/contact" className="footer-contact global-contact">
            Book a Consultation
          </a>
          <div className="footer-social-media-row">
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
        </div>
      </div>
    </div>
  );
}
