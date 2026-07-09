import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 700 000 000',
    link: 'tel:+254700000000',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+254 700 000 000',
    link: 'https://wa.me/254700000000',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@pjvetclinic.co.ke',
    link: 'mailto:info@pjvetclinic.co.ke',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Maragoli Avenue, Nakuru, Kenya',
    link: 'https://maps.google.com/?q=Maragoli+Avenue+Nakuru+Kenya',
    color: 'from-rose-500 to-pink-500',
  },
];

const hours = [
  { day: 'Monday', time: '8:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '8:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '8:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '8:00 AM – 6:00 PM' },
  { day: 'Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed (Emergency only)' },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Contact <span className="gradient-text">P&amp;J Vet Clinic</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Reach us by phone, WhatsApp, or visit us at our clinic on Maragoli Avenue, Nakuru.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact info + hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map(({ icon: Icon, label, value, link, color }) => (
                <a
                  key={label}
                  href={link}
                  target={link.startsWith('http') ? '_blank' : undefined}
                  rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-premium p-4 flex items-center gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {value}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0 ml-auto" />
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-primary-500" />
                <h3 className="font-semibold text-slate-900 dark:text-white">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {hours.map(({ day, time }) => {
                  const today = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
                  const isToday = day === today;
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${
                        isToday
                          ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800'
                          : 'border-b border-slate-100 dark:border-slate-700 last:border-0'
                      }`}
                    >
                      <span className={`font-medium ${isToday ? 'text-primary-700 dark:text-primary-300' : 'text-slate-700 dark:text-slate-300'}`}>
                        {day} {isToday && <span className="text-xs ml-1 text-primary-500">(Today)</span>}
                      </span>
                      <span className={`${time.includes('Closed') ? 'text-red-500' : 'text-slate-600 dark:text-slate-400'}`}>
                        {time}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-red-600 dark:text-red-400">Emergency Care Available 24/7 — Call us anytime</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="card-premium overflow-hidden h-80 lg:h-[420px]">
              {/* Google Maps embed */}
              <iframe
                title="P&J Veterinary Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63834.10516960066!2d36.04826255!3d-0.30310095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182990501a2cf3ab%3A0xe7f0e2ab2b5fd68f!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com/?q=Maragoli+Avenue+Nakuru+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ripple flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 shadow-green hover:shadow-green-hover transition-all duration-300"
            >
              <MapPin size={16} />
              Get Directions on Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
