import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutImage from "../assets/about.jpg";
export default function About() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="prose prose-lg max-w-none"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-8">
              {t("about.title")}
            </h1>

            {t("about.main")}
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={AboutImage}
              alt="Event Planning"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {t("about.missionTitle")}
            </h3>
            <p className="text-gray-700">{t("about.mission")}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {t("about.goalTitle")}
            </h3>
            <p className="text-gray-700">{t("about.goal")}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {t("about.teamTitle")}
            </h3>
            <p className="text-gray-700">{t("about.team")}</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif mb-6">{t("about.bannerText")}</h2>
          <a
            href="/contact"
            className="inline-block bg-[#66b2b2] text-white px-8 py-3 rounded-md hover:bg-[#539393] transition-colors"
          >
            {t("about.button")}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
