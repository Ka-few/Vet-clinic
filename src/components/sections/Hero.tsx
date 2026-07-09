import { motion } from 'framer-motion';
import { Star, MapPin, MessageCircle, Calendar, ChevronDown } from 'lucide-react';

export function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent('Hello! I would like to book an appointment at P&J Veterinary Clinic.')}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background.png"
          alt="Veterinarian caring for animals"
          loading="eager"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-400/30"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-primary-300 text-sm font-medium">Nakuru's Trusted Veterinary Clinic</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            Compassionate Veterinary Care{' '}
            <span className="bg-gradient-to-r from-primary-400 to-teal-300 bg-clip-text text-transparent">
              You Can Trust
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
          >
            Professional veterinary services for pets and livestock in Nakuru. From preventive care to treatment and consultations, we're committed to keeping your animals healthy.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <button
              onClick={() => handleNav('#appointment')}
              className="btn-ripple flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-500 hover:to-teal-500 shadow-green hover:shadow-green-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar size={18} />
              Book Appointment
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ripple flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/30 hover:border-white/60 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-300 font-medium">Rated by local clients</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-white/20" />

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin size={15} className="text-primary-400" />
              <span>Maragoli Avenue, Nakuru</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => handleNav('#announcement')}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}
