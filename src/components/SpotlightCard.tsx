import { motion } from "framer-motion";

interface SpotlightCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function SpotlightCard({
  image,
  title,
  description,
  link,
}: SpotlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-medium mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <a
            href={link}
            className="inline-block px-6 py-2 bg-white text-black rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
          >
            View Gallery
          </a>
        </div>
      </div>
    </motion.div>
  );
}
