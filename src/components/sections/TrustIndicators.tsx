import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Heart, Stethoscope, Shield } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const indicators = [
  {
    icon: Users,
    title: 'Experienced Veterinary Team',
    description: 'Licensed and certified veterinary professionals dedicated to animal health.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Heart,
    title: 'Compassionate Animal Care',
    description: 'Every animal receives gentle, compassionate attention and personalized treatment.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Stethoscope,
    title: 'Modern Equipment',
    description: 'State-of-the-art diagnostic and treatment equipment for accurate results.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Shield,
    title: 'Trusted by Owners & Farmers',
    description: 'Hundreds of satisfied pet owners and livestock farmers across Nakuru.',
    color: 'from-violet-500 to-purple-600',
  },
];

const stats = [
  { target: 10, suffix: '+', label: 'Years of Experience' },
  { target: 5000, suffix: '+', label: 'Animals Treated' },
  { target: 98, suffix: '%', label: 'Satisfied Clients' },
  { target: 24, suffix: '/7', label: 'Emergency Care' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {indicators.map(({ icon: Icon, title, description, color }) => (
            <motion.div key={title} variants={item} className="card-premium p-6 text-center group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={26} className="text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl bg-white dark:bg-dark-800 shadow-card border border-slate-100 dark:border-slate-700">
          {stats.map(stat => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
