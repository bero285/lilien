import { useState } from "react";
import { motion } from "framer-motion";
import DropDown from "../components/DropDown";
import SpotlightCard from "../components/SpotlightCard";
import ContactUs from "../components/ContactUs";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80")',
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-serif mb-6">
            {/* Planning with Heart */}
            Lilien Events and Decor
          </h1>
          <p className="text-xl md:text-2xl font-light font-serif">
            {/* Woman-owned Event Planning Company Serving Kansas City and Beyond */}
            {t("home.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            className="space-y-6 order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("home.aboutOne")}
              <br />
              <br />
              {t("home.aboutTwo")}
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-3 border-2 border-black text-lg font-medium transition-colors hover:bg-black hover:text-white rounded-md"
            >
              {t("home.aboutUsButton")}
            </a>
          </motion.div>
          <motion.div
            {...fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden order-1 md:order-2"
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
              {...fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="animate"
              className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
                alt="What we offer"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="space-y-8">
              <motion.h2
                {...fadeInUp}
                viewport={{ once: true, amount: 0.3 }}
                whileInView="animate"
                className="text-4xl font-serif"
              >
                {t("home.serviceTitle")}
              </motion.h2>
              <div className="space-y-4">
                <DropDown
                  title={t("home.weddingTitle")}
                  text={t("home.weddingSubtitle")}
                  isOpen={openDropdown === 0}
                  onToggle={() => handleToggle(0)}
                />
                <DropDown
                  title={t("home.birthdayTitle")}
                  text={t("home.birthdaySubtitle")}
                  isOpen={openDropdown === 1}
                  onToggle={() => handleToggle(1)}
                />
                <DropDown
                  title={t("home.corporateTitle")}
                  text={t("home.corporateSubtitle")}
                  isOpen={openDropdown === 2}
                  onToggle={() => handleToggle(2)}
                />
                <DropDown
                  title={t("home.purhsetTitle")}
                  text={t("home.purshetSubtitle")}
                  isOpen={openDropdown === 3}
                  onToggle={() => handleToggle(3)}
                />
              </div>
              <a
                href="/services"
                className="inline-block px-8 py-3 border-2 border-black text-lg font-medium transition-colors hover:bg-black hover:text-white rounded-md"
              >
                {t("home.serviceButton")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            className="text-4xl font-serif mb-12"
          >
            {t("home.portfolio")}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SpotlightCard
              image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
              title="Summer Gala 2023"
              description="An enchanting evening under the stars"
              link="/gallery/1"
            />
            <SpotlightCard
              image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80"
              title="Tech Conference 2023"
              description="Bringing innovation to life"
              link="/gallery/2"
            />
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}

export default Home;
