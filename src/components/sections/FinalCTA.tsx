import { motion } from 'framer-motion';
import { Calendar, Home, PawPrint } from 'lucide-react';

export function FinalCTA() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80&auto=format&fit=crop"
          alt="Veterinary care background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-dark-900/90 to-teal-900/95" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Paw print icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-teal-500 shadow-green mx-auto mb-6 animate-float"
        >
          <PawPrint size={30} className="text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
        >
          Need Veterinary Care or a Safe Place{' '}
          <span className="bg-gradient-to-r from-primary-400 to-teal-300 bg-clip-text text-transparent">
            for Your Pet While You're Away?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          From routine veterinary care to trusted boarding services, P&amp;J Veterinary Clinic is here to give your pets the attention they deserve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNav('#appointment')}
            className="btn-ripple flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 hover:from-primary-400 hover:to-teal-400 shadow-green hover:shadow-green-hover transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Calendar size={18} />
            Book an Appointment
          </button>
          <button
            onClick={() => handleNav('#boarding')}
            className="btn-ripple flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Reserve Pet Boarding
          </button>
        </motion.div>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {['✓ Licensed Veterinarians', '✓ Modern Equipment', '✓ 24/7 Emergency Care', '✓ Trusted in Nakuru'].map(chip => (
            <span
              key={chip}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-primary-200 bg-white/10 border border-white/15 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
