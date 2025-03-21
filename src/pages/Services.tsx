import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "Event Planning",
    description: "Comprehensive event planning services from concept to execution",
    features: [
      "Budget Management",
      "Vendor Coordination",
      "Timeline Creation",
      "On-site Management",
      "Guest List Management",
      "Venue Selection"
    ]
  },
  {
    title: "Design Services",
    description: "Creative design solutions to bring your vision to life",
    features: [
      "Theme Development",
      "Decor Planning",
      "Lighting Design",
      "Floor Plan Creation",
      "Color Palette Selection",
      "Brand Integration"
    ]
  },
  {
    title: "Production Management",
    description: "Technical production and coordination for flawless execution",
    features: [
      "Stage Management",
      "Audio/Visual Coordination",
      "Entertainment Booking",
      "Technical Direction",
      "Equipment Rental",
      "Safety Compliance"
    ]
  },
  {
    title: "Sponsor Fulfillment",
    description: "Comprehensive sponsor management and activation services",
    features: [
      "Sponsor Integration",
      "Activation Planning",
      "ROI Tracking",
      "Brand Compliance",
      "Reporting & Analytics",
      "VIP Experience Management"
    ]
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive event planning and management services tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-serif mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#66b2b2]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
            Get Started
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}