import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  // const services = [
  //   {
  //     title: "ზოგადი მომსახურება",
  //     features: [
  //       "პერსონალური ღონისძიებებისა და წვეულების ორგანიზება",
  //       "დაბადების დღე",
  //       "სქესის გაგების ცერემონია",
  //       "ბავშვის გამოყვანის ცერემონია",
  //       "ნათლობა",
  //       "ხელის თხოვნის ცერემონია",
  //       "გამოსაშვები საღამო",
  //     ],
  //   },
  //   {
  //     title: "ქორწილის ორგანიზება",
  //     description: "ქორწილის სრულყოფილი დაგეგმვა და განხორციელება",
  //     features: [
  //       "ნიშნობა",
  //       "წინასაქორწილო წვეულება",
  //       "ცერემონიის დღე",
  //       "ხელის მოწერის ცერემონია",
  //       "ქორწილის შემდგომი ორგანიზება",
  //     ],
  //   },
  //   {
  //     title: "კორპორატიული ღონისძიებები",
  //     features: ["გახსნის ცერემონია"],
  //   },
  //   {
  //     title: "ფურშეტით მომსახურება",
  //     description:
  //       "პროფესიონალური ფურშეტით მომსახურება სხვადასხვა ღონისძიებებისთვის",
  //     features: [],
  //   },
  // ];
  let translation: any = t("services.list", { returnObjects: true });
  if (!Array.isArray(translation)) {
    translation = [];
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            {t("services.title")}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {translation?.map((service: any, index: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-serif mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {service.features.length > 0 && (
                <ul className="space-y-3">
                  {service.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#66b2b2]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block bg-[#66b2b2] text-white px-8 py-3 rounded-md hover:bg-[#539393] transition-colors"
          >
            {/* Get Started */}
            {t("services.contact")}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
