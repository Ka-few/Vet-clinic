import { motion } from 'framer-motion';
import { PawPrint, X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleNav = () => {
    const el = document.querySelector('#boarding');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="announcement"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="relative bg-gradient-to-r from-primary-700 via-primary-600 to-teal-600 text-white py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap text-center">
        <PawPrint size={18} className="text-primary-200 flex-shrink-0" />
        <p className="text-sm font-medium">
          <strong>Going on Holiday or Travelling for Work?</strong>{' '}
          We Offer Safe Dog &amp; Cat Boarding with Professional Veterinary Care.
        </p>
        <button
          onClick={handleNav}
          className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-primary-700 hover:bg-primary-50 transition-colors duration-200"
        >
          Learn More
        </button>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </motion.section>
  );
}
