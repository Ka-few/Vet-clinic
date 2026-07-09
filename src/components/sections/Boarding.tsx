import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Droplets, Dumbbell, Stethoscope, Pill, Sparkles, Heart, Lock, Calendar, MessageCircle } from 'lucide-react';

const features = [
  { icon: Home, title: 'Spacious Accommodation', desc: 'Clean, comfortable kennels and spaces for every size of dog or cat.' },
  { icon: Droplets, title: 'Daily Feeding & Fresh Water', desc: 'Nutritious meals and fresh water provided daily according to your pet\'s diet.' },
  { icon: Dumbbell, title: 'Exercise & Playtime', desc: 'Regular supervised exercise and interactive playtime to keep pets active.' },
  { icon: Stethoscope, title: 'Veterinary Supervision', desc: 'On-site veterinary professionals monitor your pet\'s health throughout their stay.' },
  { icon: Pill, title: 'Medication Administration', desc: 'We administer prescribed medications exactly as instructed by you or your vet.' },
  { icon: Sparkles, title: 'Clean & Hygienic Environment', desc: 'Regularly cleaned and sanitized spaces to prevent illness and maintain comfort.' },
  { icon: Heart, title: 'Individual Attention & Care', desc: 'Your pet gets personal love and attention from our caring, trained staff.' },
  { icon: Lock, title: 'Secure Facility', desc: 'Fully enclosed, secure premises so your pet stays safe throughout their stay.' },
];

export function Boarding() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const whatsappUrl = `https://wa.me/254746099001?text=${encodeURIComponent('Hello! I would like to enquire about pet boarding at P&J Veterinary Clinic.')}`;

  return (
    <section id="boarding" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4"
          >
            Pet Boarding
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Safe &amp; Comfortable Pet Boarding{' '}
            <span className="gradient-text">While You're Away</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            Whether you're travelling for work, going on holiday, attending family events, or simply need temporary care, your pets will stay in a safe, clean, and caring environment under professional supervision.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                <img
                  src="/images/vet with pet.png"
                  alt="Veterinarian caring for boarded pet"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&q=80&auto=format&fit=crop"
                    alt="Cat resting comfortably"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80&auto=format&fit=crop"
                    alt="Dog playing during boarding"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-800 rounded-2xl p-4 shadow-card-hover border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
                  <Heart size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">100% Safe</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Vet supervised 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/10 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">{title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ripple flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 shadow-green hover:shadow-green-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                Reserve Boarding
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
