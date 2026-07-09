import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Users, Heart, DollarSign, Microscope, MapPin, Clock, MessageCircle } from 'lucide-react';

const reasons = [
  { icon: Users, title: 'Experienced Veterinarians', desc: 'Our certified team brings years of hands-on veterinary experience to every case.' },
  { icon: Heart, title: 'Friendly & Compassionate Care', desc: 'We treat every animal with the same love and care as if it were our own.' },
  { icon: DollarSign, title: 'Affordable Professional Services', desc: 'High-quality veterinary care at prices that are fair and transparent.' },
  { icon: Microscope, title: 'Modern Veterinary Practices', desc: 'We use the latest equipment and evidence-based treatment protocols.' },
  { icon: MapPin, title: 'Convenient Nakuru Location', desc: 'Centrally located on Maragoli Avenue — easy to find and easily accessible.' },
  { icon: Clock, title: 'Quick Appointment Scheduling', desc: 'Book online, by phone, or WhatsApp — no unnecessary waiting.' },
  { icon: MessageCircle, title: 'Excellent Customer Support', desc: 'Our friendly team is always available to answer your questions and concerns.' },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/images/vet treating dog.png"
                alt="Vet treating dog"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
            </div>

            {/* Testimonial badge */}
            <div className="absolute -top-6 -right-4 max-w-[200px] bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <div className="flex text-amber-400 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <p className="text-xs text-white/90 leading-tight">"Best vet in Nakuru — genuine care for our animals!"</p>
              <p className="text-xs text-primary-300 mt-1 font-medium">— Local Client</p>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="badge bg-primary-500/20 text-primary-300 border border-primary-500/30 mb-5">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Why Nakuru Trusts{' '}
              <span className="bg-gradient-to-r from-primary-400 to-teal-300 bg-clip-text text-transparent">
                P&amp;J Vet Clinic
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We combine professional expertise with genuine compassion to deliver veterinary care that truly makes a difference for your animals and peace of mind for you.
            </p>

            <div className="space-y-4">
              {reasons.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                  <CheckCircle2 size={16} className="text-primary-400 flex-shrink-0 ml-auto mt-0.5" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
