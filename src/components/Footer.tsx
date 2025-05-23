import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../../logo.jpg";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 py-16 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <Link
              to="/"
              className="text-lg hover:text-gray-600 transition-colors underline"
            >
              {t("header.home")}
            </Link>
            <Link
              to="/about"
              className="text-lg hover:text-gray-600 transition-colors underline"
            >
              {t("header.about")}
            </Link>
            <Link
              to="/services"
              className="text-lg hover:text-gray-600 transition-colors underline"
            >
              {t("header.services")}
            </Link>
            <Link
              to="/portfolio"
              className="text-lg hover:text-gray-600 transition-colors underline"
            >
              {t("header.portfolio")}
            </Link>
          </div>

          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-16 rounded-lg object-cover"
              loading="lazy"
            />
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Link
              to="/contact"
              className="bg-[#66b2b2] text-white px-6 py-2 rounded-md hover:bg-[#539393] transition-colors order-2 lg:order-1"
            >
              {t("header.schedule")}
            </Link>
            <div className="flex gap-6 order-1 lg:order-2">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
