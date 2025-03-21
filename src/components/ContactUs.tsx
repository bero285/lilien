import Logo from "../assets/contact.jpg";
import "../style/contact.css";
export default function ContactUs() {
  return (
    <div className="footer-contact">
      <div className="contact-container">
        <div className="contact-image-container">
          <img
            src={Logo}
            alt="Champagne toast celebration"
            className="contact-image"
          />
        </div>
        <div className="contact-card">
          <h2 className="contact-title">Let's Toast</h2>
          <p className="contact-text">Get in touch</p>
          <a href="#" className="contact-button global-contact">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
