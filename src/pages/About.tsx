import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="prose prose-lg max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-8">
          About Lilien Decor
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded with a passion for creating unforgettable moments, Lilien
              Decor has been at the forefront of event planning excellence for
              over a decade. Our boutique agency specializes in crafting bespoke
              experiences that leave lasting impressions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We take pride in our attention to detail, creative vision, and
              commitment to bringing our clients' dreams to life. From intimate
              gatherings to grand celebrations, we approach each event with the
              same level of dedication and enthusiasm.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
              alt="Event Planning"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To create extraordinary experiences that exceed expectations and
              create lasting memories for our clients and their guests.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and innovative event planning company,
              known for our creativity, reliability, and exceptional service.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-700">
              Integrity, creativity, attention to detail, and unwavering
              commitment to client satisfaction guide everything we do.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif mb-6">
            Ready to Create Something Amazing?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-[#66b2b2] text-white px-8 py-3 rounded-md hover:bg-[#539393] transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </motion.div>
    </div>
  );
}
