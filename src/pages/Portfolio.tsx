import { useEffect } from "react";
import { motion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const portfolioItems = [
  {
    id: 1,
    title: "Summer Gala 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 2,
    title: "Tech Conference 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 3,
    title: "Wedding Reception",
    thumbnail:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 4,
    title: "Charity Fundraiser",
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    ],
  },
];

export default function Portfolio() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Our Portfolio
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
              <a href={item.images[0]} data-fancybox={`gallery-${item.id}`}>
                <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.images.slice(1).map((image, index) => (
                    <a
                      key={index}
                      href={image}
                      data-fancybox={`gallery-${item.id}`}
                      className="hidden"
                    />
                  ))}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-medium">
                      {item.title}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
