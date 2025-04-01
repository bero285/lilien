import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-gray-50 py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80"
              alt="Let's Toast"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-6"
          >
            {/* <h2 className="text-5xl font-serif">Let's Toast</h2> */}
            <p className="text-2xl sm:text-3xl font-serif">
              {t("home.contactSubtitle")}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#66b2b2] text-white text-lg font-medium rounded-md transition-colors hover:bg-[#539393]"
            >
              {t("home.contcatButton")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
