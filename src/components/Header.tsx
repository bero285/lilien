import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../logo.jpg";
import { useTranslation } from "react-i18next";
const languages = [
  { code: "en", name: "EN" },
  { code: "ge", name: "KA" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find((lang: any) => lang.code === i18n.language) || languages[0]
  );
  const location = useLocation();
  const getLinkClassName = (path: string) => {
    return `text-lg font-light transition-colors hover:text-gray-600 ${
      location.pathname === path ? "underline" : ""
    }`;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };
  const changeLanguage = async (language: any) => {
    i18n.changeLanguage(language.code);
    setCurrentLanguage(language);
    localStorage.setItem("language", language.code);
  };
  return (
    <header className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="flex flex-row justify-between w-full lg:hidden">
            <Link to="/" className="flex-shrink-0">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-12 rounded-lg object-cover"
              />
            </Link>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full gap-4">
            <div className="flex gap-8 w-[420px]">
              <Link to="/" className={getLinkClassName("/")}>
                {t("header.home")}
              </Link>
              <Link to="/about" className={getLinkClassName("/about")}>
                {t("header.about")}
              </Link>
              <Link to="/services" className={getLinkClassName("/services")}>
                {t("header.services")}
              </Link>
              <Link to="/portfolio" className={getLinkClassName("/portfolio")}>
                {t("header.portfolio")}
              </Link>
            </div>

            {/* Logo in center */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-12 rounded-lg object-cover"
              />
            </Link>

            <div className="flex items-center gap-8 w-[420px] justify-end">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>{currentLanguage.name}</span>
                </button>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              changeLanguage(lang);
                              setIsLanguageOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <Link
                to="/contact"
                className="bg-[#66b2b2] text-white px-6 py-2 rounded-md hover:bg-[#539393] transition-colors"
              >
                {t("header.contact")}
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-white z-50 lg:hidden"
              >
                <div className="flex flex-col h-full p-8">
                  <div className="flex justify-between items-center">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <button
                      className="p-2 rounded-md hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-8 mt-12">
                    <Link
                      to="/"
                      className="text-2xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("header.home")}
                    </Link>
                    <Link
                      to="/about"
                      className="text-2xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("header.about")}
                    </Link>
                    <Link
                      to="/services"
                      className="text-2xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("header.services")}
                    </Link>
                    <Link
                      to="/portfolio"
                      className="text-2xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("header.portfolio")}
                    </Link>
                    {/* Mobile Language Switcher */}
                    <div className="relative">
                      <button
                        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        className="flex items-center gap-2 text-2xl"
                      >
                        <Globe className="w-6 h-6" />
                        <span>{currentLanguage.name}</span>
                      </button>
                      <AnimatePresence>
                        {isLanguageOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          >
                            <div className="py-1">
                              {languages.map((lang) => (
                                <button
                                  key={lang.code}
                                  onClick={() => {
                                    changeLanguage(lang);
                                    setIsLanguageOpen(false);
                                  }}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {lang.name}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="flex justify-center gap-8 mb-8">
                      <a
                        href="#"
                        className="hover:text-gray-600 transition-colors"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="hover:text-gray-600 transition-colors"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="hover:text-gray-600 transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      className="block w-full bg-[#66b2b2] text-white text-center px-6 py-3 rounded-md hover:bg-[#539393] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("header.contact")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
