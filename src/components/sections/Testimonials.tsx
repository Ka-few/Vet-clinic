import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Wanjiku',
    role: 'Dog Owner, Nakuru',
    avatar: 'SW',
    rating: 5,
    text: 'P&J Veterinary Clinic always takes great care of our dogs. The staff are incredibly warm and professional. Our golden retriever Max has never been healthier!',
    color: 'from-primary-500 to-teal-500',
  },
  {
    name: 'James Mwangi',
    role: 'Pet Owner, Nakuru',
    avatar: 'JM',
    rating: 5,
    text: 'Professional and friendly staff who truly care about animals. Quick service, accurate diagnosis, and very affordable. I highly recommend P&J Vet to every pet owner.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Grace Akinyi',
    role: 'Dairy Farmer, Nakuru',
    avatar: 'GA',
    rating: 5,
    text: 'They helped treat our dairy cows quickly and efficiently. The vet gave us excellent advice on herd management. Our milk production improved significantly after their intervention.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Peter Kariuki',
    role: 'Cat Owner, Nakuru',
    avatar: 'PK',
    rating: 5,
    text: 'I used the boarding service while travelling for work. My cat was well cared for — fed, exercised, and checked daily. I came back to a happy, healthy pet. Highly recommend!',
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Esther Njeri',
    role: 'Pet Owner, Nakuru',
    avatar: 'EN',
    rating: 5,
    text: 'The team at P&J Vet is exceptional. They explained my dog\'s condition clearly, gave treatment options, and followed up after the visit. That level of care is rare.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'David Ochieng',
    role: 'Livestock Farmer, Nakuru',
    avatar: 'DO',
    rating: 5,
    text: 'Reliable, professional, and genuinely passionate about animal health. I trust P&J Vet with all my livestock. They respond quickly even during emergencies.',
    color: 'from-emerald-500 to-teal-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            What Our Clients <span className="gradient-text">Say About Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Don't just take our word for it — hear from the pet owners and farmers who trust us with their animals every day.
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
          {testimonials.map(({ name, role, avatar, rating, text, color }) => (
            <motion.div key={name} variants={item} className="card-premium p-6 relative flex flex-col">
              {/* Quote icon */}
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                <Quote size={14} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 italic">
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-bold text-white">{avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-white dark:bg-dark-700 shadow-card border border-slate-100 dark:border-slate-700"
        >
          <div className="text-center">
            <div className="text-5xl font-extrabold text-slate-900 dark:text-white">4.9</div>
            <div className="flex justify-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Average Rating</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-slate-200 dark:bg-slate-600" />
          <div className="text-center">
            <div className="text-5xl font-extrabold text-slate-900 dark:text-white">500+</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Happy Clients</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-slate-200 dark:bg-slate-600" />
          <div className="text-center">
            <div className="text-5xl font-extrabold text-slate-900 dark:text-white">10+</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Years of Service</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
