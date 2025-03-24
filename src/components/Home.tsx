import { useState } from "react";
import { motion } from "framer-motion";
import DropDown from "./DropDown";
import SpotlightCard from "./SpotlightCard";
import ContactUs from "./ContactUs";

export function Home() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80")',
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-serif mb-6">
            Planning with Heart
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Woman-owned Event Planning Company Serving Kansas City and Beyond
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif">
              Curated Event Experiences
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Celebrating over a decade of service, Chappelow Events is a
              boutique event planning and design company that specializes in
              nonprofit fundraising, conferences, and annual celebrations.
              <br />
              <br />
              We are inspired by our clients' mission, values, and goals to
              create memorable experiences and cultivate lasting impressions and
              impact. From spreadsheets to illustrated activations, let us help
              share your vision and build your dream event.
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-3 border-2 border-black text-lg font-medium transition-colors hover:bg-black hover:text-white rounded-md"
            >
              About Us
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80"
              alt="Event Experience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
                alt="What we offer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-serif"
              >
                What we bring to the table...
              </motion.h2>
              <div className="space-y-4">
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
                  title="Fulfillment"
                  text="You bring the sponsors and we'll handle the rest! If you want to ensure full engagement of sponsors at your event and you want them to keep coming back year after year, lean on our fulfillment services to keep those VIPs happy!"
                  isOpen={openDropdown === 3}
                  onToggle={() => handleToggle(3)}
                />
              </div>
              <a
                href="/services"
                className="inline-block px-8 py-3 border-2 border-black text-lg font-medium transition-colors hover:bg-black hover:text-white rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif mb-12"
          >
            In the Spotlight
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SpotlightCard
              image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
              title="Summer Gala 2023"
              description="An enchanting evening under the stars"
              link="/portfolio#gallery-1-1"
            />
            <SpotlightCard
              image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80"
              title="Tech Conference 2023"
              description="Bringing innovation to life"
              link="/portfolio#gallery-2-1"
            />
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
