import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, PawPrint } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Boarding', href: '#boarding' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-solid' : 'nav-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" onClick={e => handleNav(e, '#home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-teal-600 flex items-center justify-center shadow-green group-hover:shadow-green-hover transition-all duration-300">
              <PawPrint size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                P&amp;J Vet
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-primary-600' : 'text-green-300'}`}>
                Veterinary Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-600/10 hover:text-primary-600 ${
                  scrolled
                    ? 'text-slate-700 dark:text-slate-200'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Book CTA */}
            <a
              href="#appointment"
              onClick={e => handleNav(e, '#appointment')}
              className="hidden md:inline-flex btn-ripple items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 shadow-green hover:shadow-green-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className={`lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-dark-900 border-t border-slate-100 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={e => handleNav(e, '#appointment')}
                className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 mt-2"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
