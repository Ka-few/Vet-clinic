import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  const phone = '254746099001'; // Replace with real number
  const message = encodeURIComponent('Hello! I would like to book an appointment at P&J Veterinary Clinic.');

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
      style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
    >
      {/* WhatsApp SVG */}
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.003 2.667C8.637 2.667 2.667 8.636 2.667 16c0 2.34.637 4.538 1.748 6.43L2.667 29.333l7.123-1.865A13.286 13.286 0 0 0 16.003 29.333C23.37 29.333 29.333 23.364 29.333 16S23.37 2.667 16.003 2.667zm6.558 18.39c-.274.77-1.598 1.474-2.18 1.525-.583.05-1.127.24-3.813-.796-3.23-1.237-5.29-4.535-5.452-4.748-.161-.213-1.316-1.752-1.316-3.34s.832-2.37 1.127-2.693c.296-.322.644-.403.859-.403h.617c.197 0 .466-.073.73.558.27.643.918 2.234.999 2.397.08.162.134.35.026.563-.108.213-.162.345-.322.53-.162.188-.341.418-.486.561-.161.158-.33.33-.142.647.188.32.836 1.38 1.795 2.233 1.233 1.1 2.273 1.44 2.593 1.6.32.16.508.134.696-.08.188-.214.806-.942 1.02-1.262.215-.322.43-.268.726-.161.295.108 1.872.883 2.192 1.043.321.161.535.24.614.375.08.136.08.79-.195 1.561z"/>
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(37, 211, 102, 0.35)' }} />
    </motion.a>
  );
}
