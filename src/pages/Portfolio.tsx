import { motion } from "framer-motion";
import portfolioItems from "../data";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
          {t("portfolio.title")}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <NavLink to={`/gallery/${item.id}`}>
                <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-medium">
                      {item.title}
                    </span>
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
