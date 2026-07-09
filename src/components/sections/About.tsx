import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Preventive healthcare for pets and livestock',
  'Compassionate treatment by certified vets',
  'Reliable veterinary advice you can count on',
  'Keeping your pets happy and healthy',
  'Supporting livestock farmers across Nakuru',
  'Trusted by the local community for years',
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Caring for Animals with{' '}
            <span className="gradient-text">Professional Excellence</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <img
                src="/images/pet owner.png"
                alt="Pet owner at the clinic"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 shadow-card border border-white/30 bg-white dark:bg-dark-800 dark:border-dark-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Fully Licensed</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Certified Veterinarians</p>
                </div>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -top-5 -left-5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-primary-600 to-teal-600 shadow-green">
              <p className="text-white font-bold text-sm">10+ Years</p>
              <p className="text-primary-100 text-xs">of Experience</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              At <strong className="text-slate-900 dark:text-white">P&amp;J Veterinary Clinic</strong>, we believe every animal deserves expert, compassionate healthcare. Located on Maragoli Avenue, Nakuru, we serve both pet owners and farmers with a full range of veterinary services.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              From routine check-ups and vaccinations to complex surgeries and emergency care, our experienced team is equipped with modern diagnostic tools and a genuine love for animals. We've built lasting trust with the Nakuru community through consistent, high-quality care.
            </p>

            <ul className="space-y-3">
              {highlights.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">{point}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ripple mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 shadow-green hover:shadow-green-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
