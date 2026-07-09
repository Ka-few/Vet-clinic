import { motion } from 'framer-motion';
import {
  Stethoscope, Syringe, Bug, FlaskConical, Scissors,
  AlertCircle, Tractor, FileText, Apple, Home
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Consultation',
    description: 'Comprehensive health assessment for your pet or livestock by experienced veterinarians.',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
  },
  {
    icon: Syringe,
    title: 'Pet Vaccination',
    description: 'Full vaccination programs for dogs, cats, and other pets to prevent common diseases.',
    color: 'from-primary-500 to-teal-600',
    bg: 'bg-primary-50 dark:bg-primary-900/10',
  },
  {
    icon: Bug,
    title: 'Pet Deworming',
    description: 'Regular deworming schedules to keep your animals free from internal parasites.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-900/10',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostics & Laboratory',
    description: 'Advanced diagnostic testing including blood work, urinalysis, and imaging services.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-900/10',
  },
  {
    icon: Scissors,
    title: 'Minor & Major Surgery',
    description: 'Safe surgical procedures performed in our fully equipped operating theatre.',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50 dark:bg-rose-900/10',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: '24/7 emergency veterinary care for critical and life-threatening animal conditions.',
    color: 'from-red-500 to-rose-600',
    bg: 'bg-red-50 dark:bg-red-900/10',
  },
  {
    icon: Tractor,
    title: 'Livestock Health Services',
    description: 'Specialized veterinary care for cattle, goats, sheep, and other farm animals.',
    color: 'from-lime-500 to-green-600',
    bg: 'bg-lime-50 dark:bg-lime-900/10',
  },
  {
    icon: FileText,
    title: 'Pet Health Certificates',
    description: 'Official health certifications for travel, import/export, and breeding requirements.',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50 dark:bg-sky-900/10',
  },
  {
    icon: Apple,
    title: 'Animal Nutrition Advice',
    description: 'Expert dietary guidance to ensure optimal nutrition and long-term animal health.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
  },
  {
    icon: Home,
    title: 'Pet Boarding',
    description: 'Safe, comfortable boarding for dogs and cats with professional veterinary supervision while you travel.',
    color: 'from-primary-600 to-teal-600',
    bg: 'bg-primary-50 dark:bg-primary-900/10',
    featured: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Comprehensive <span className="gradient-text">Veterinary Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            From routine check-ups to specialized treatments, we offer a complete range of veterinary care for your beloved animals.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map(({ icon: Icon, title, description, color, featured }) => (
            <motion.div
              key={title}
              variants={item}
              className={`card-premium p-6 group relative ${featured ? 'ring-2 ring-primary-500/40' : ''}`}
            >
              {featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-teal-600">
                    New Service
                  </span>
                </div>
              )}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{description}</p>
              <button
                onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1 group/btn transition-colors"
              >
                Learn More
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
