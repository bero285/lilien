import { motion } from "framer-motion";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "../components/FancyBox";
import { useParams } from "react-router-dom";
import portfolioItems from "../data";

export default function Gallery() {
  const params: any = useParams();
  let currentItem = portfolioItems[params?.id - 1];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
          {currentItem.title}
        </h1>

        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {currentItem.images.map((image) => (
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="rounded-lg overflow-hidden   aspect-[16/9]">
                  <a data-fancybox="gallery" href={image}>
                    <img
                      src={image}
                      className="inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Fancybox>
      </motion.div>
    </div>
  );
}
