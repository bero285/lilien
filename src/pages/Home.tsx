import Banner from "../assets/banner.png";
import AboutImage from "../assets/about.jpg";
import OfferImage from "../assets/weoffer.jpg";
import "../style/home.css";
import DropDown from "../components/DropDown";
import { useState } from "react";
import SpotlightCard from "../components/SpotlightCard";
import ContactUs from "../components/ContactUs";
export default function Home() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };
  return (
    <div className="home">
      <div className="home-main">
        <img src={Banner} className="home-banner" />
        <div className="home-banner-text">
          <h2>Planning with Heart</h2>
          <h3>
            Woman-owned Event Planning Company Serving Kansas City and Beyond
          </h3>
        </div>
      </div>
      <div className="home-experience">
        <div className="home-experience-left">
          <h2>Curated Event Experiences</h2>
          <h4>
            Celebrating over a decade of service, Chappelow Events is a boutique
            event planning and design company that specializes in nonprofit
            fundraising, conferences, and annual celebrations.
            <br /> We are inspired by our clients’ mission, values, and goals to
            create memorable experiences and cultivate lasting impressions and
            impact. From spreadsheets to illustrated activations, let us help
            share your vision and build your dream event.
          </h4>
          <a href="/about" className="nav-button">
            About Us
          </a>
        </div>
        <img src={AboutImage} />
      </div>

      <div className="offer">
        <div className="offer-container">
          <img src={OfferImage} />
          <div className="we-offer">
            <h2>What we bring to the table...</h2>
            <DropDown
              title="Planning"
              text="With over a decade of experience, leave the spreadsheets, budget management, vendor outreach, mobile bidding software, and onsite event management to us."
              isOpen={openDropdown === 0}
              onToggle={() => handleToggle(0)}
            />
            <DropDown
              title="Design"
              text="From event storyboarding to marketing, our team will design your dream event from the ground up."
              isOpen={openDropdown === 1}
              onToggle={() => handleToggle(1)}
            />
            <DropDown
              title="Production"
              text="Stage management is our forte. Working with our preferred production partners, we will ensure that every light, sound, and moment is perfectly on cue!"
              isOpen={openDropdown === 2}
              onToggle={() => handleToggle(2)}
            />
            <DropDown
              title="Fullfilment"
              text="You bring the sponsors and we'll handle the rest! If you want to ensure full engagement of sponsors at your event and you want them to keep coming back year after year, lean on our fulfillment services to keep those VIPs happy!"
              isOpen={openDropdown === 3}
              onToggle={() => handleToggle(3)}
            />
            <a href="services" className="nav-button">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="spotlight">
        <h2>In the Spotlight</h2>
        <div className="spotlight-container">
          <SpotlightCard image={OfferImage} link="#" />
          <SpotlightCard image={OfferImage} link="#" />
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
