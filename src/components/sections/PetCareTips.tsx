import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

const tips = [
  {
    category: 'Dogs',
    title: 'How Often Should Dogs Be Vaccinated?',
    excerpt: 'Vaccination schedules vary by age and lifestyle. Learn which core and non-core vaccines your dog needs and when.',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&auto=format&fit=crop',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  },
  {
    category: 'Cats',
    title: 'Signs Your Cat Needs Medical Attention',
    excerpt: 'Cats hide pain well. Discover the subtle behavioral and physical signs that indicate your cat needs a vet visit.',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80&auto=format&fit=crop',
    categoryColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  },
  {
    category: 'Livestock',
    title: 'Keeping Dairy Cattle Healthy Year-Round',
    excerpt: 'Practical tips on nutrition, disease prevention, and regular health monitoring to maximize dairy productivity.',
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80&auto=format&fit=crop',
    categoryColor: 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
  },
  {
    category: 'All Pets',
    title: 'Routine Deworming Schedule for Pets',
    excerpt: 'Internal parasites are common but preventable. Find out the recommended deworming schedule for dogs, cats, and livestock.',
    img: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80&auto=format&fit=crop',
    categoryColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  },
  {
    category: 'Nutrition',
    title: 'Healthy Nutrition Guide for Pets',
    excerpt: 'What you feed your pet shapes their overall health. Explore balanced diet recommendations from our veterinary team.',
    img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&q=80&auto=format&fit=crop',
    categoryColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  },
  {
    category: 'Boarding',
    title: 'Preparing Your Pet for a Boarding Stay',
    excerpt: 'A few simple steps before boarding can make your pet\'s stay stress-free and comfortable. Here\'s what to do.',
    img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80&auto=format&fit=crop',
    categoryColor: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PetCareTips() {
  return (
    <section id="tips" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 mb-4"
          >
            Pet Care Tips
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Expert Tips for <span className="gradient-text">Healthy Animals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Practical advice from our veterinary team to help you give your animals the best possible care at home.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tips.map(({ category, title, excerpt, img, categoryColor }) => (
            <motion.article key={title} variants={item} className="card-premium group overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                  <Tag size={10} />
                  {category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                  {excerpt}
                </p>
                <button className="mt-4 text-xs font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:gap-2 transition-all group/btn">
                  Read More
                  <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
