import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/staff playing with pets.png',
    alt: 'Dogs enjoying supervised playtime',
    caption: 'Supervised Playtime',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/friendly kennels.png',
    alt: 'Comfortable boarding kennels',
    caption: 'Comfortable Boarding Kennels',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80&auto=format&fit=crop',
    alt: 'Cats in clean boarding spaces',
    caption: 'Cat Boarding Spaces',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80&auto=format&fit=crop',
    alt: 'Veterinarian examining a pet',
    caption: 'Professional Examination',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1629975064856-89f76b77f5f8?w=800&q=80&auto=format&fit=crop',
    alt: 'Friendly staff with animals',
    caption: 'Friendly Care Team',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80&auto=format&fit=crop',
    alt: 'Happy dogs at the clinic',
    caption: 'Happy Patients',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/girl cat owner.png',
    alt: 'Cat receiving care',
    caption: 'Cat Care',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=800&q=80&auto=format&fit=crop',
    alt: 'Pet owner and happy dog',
    caption: 'Happy Owners',
    span: 'col-span-1 row-span-1',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export function Gallery() {
  const [index, setIndex] = useState(-1);

  const slides = galleryImages.map(({ src, alt }) => ({ src, alt }));

  return (
    <section id="gallery" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 mb-4"
          >
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            A Glimpse of Our <span className="gradient-text">Caring Environment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            See how we care for your beloved animals — from boarding and playtime to expert veterinary treatment.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]"
        >
          {galleryImages.map(({ src, alt, caption }, i) => (
            <motion.div
              key={src}
              variants={item}
              onClick={() => setIndex(i)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-card-hover transition-all duration-300 ${
                i === 1 ? 'row-span-2' : i === 0 || i === 4 ? 'col-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Zoom icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn size={18} className="text-white" />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-semibold">{caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
}
