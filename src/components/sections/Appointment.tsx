import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, PawPrint, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  ownerName: string;
  phone: string;
  email: string;
  animalType: string;
  petName: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const services = [
  'General Consultation',
  'Pet Vaccination',
  'Pet Deworming',
  'Diagnostics & Laboratory',
  'Minor Surgery',
  'Major Surgery',
  'Emergency Care',
  'Livestock Health Services',
  'Pet Health Certificate',
  'Animal Nutrition Advice',
  'Pet Boarding',
];

const animalTypes = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Cattle', 'Goat', 'Sheep', 'Pig', 'Other'];

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Appointment form submitted:', data);
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/254746099001?text=${encodeURIComponent('Hello! I would like to book an appointment at P&J Veterinary Clinic. Please assist me with available times.')}`;

  return (
    <section id="appointment" className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 mb-4"
          >
            Book an Appointment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Schedule Your <span className="gradient-text">Visit Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Fill in the form below to request an appointment, or reach us directly on WhatsApp for faster bookings.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="card-premium p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-4">
                    <CheckCircle2 size={40} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Appointment Request Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    Thank you! We've received your appointment request and will contact you shortly to confirm your visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-full text-sm font-semibold text-primary-600 border border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Owner Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5"><User size={14} /> Owner Name *</span>
                      </label>
                      <input
                        {...register('ownerName', { required: 'Name is required' })}
                        placeholder="e.g. John Kamau"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${errors.ownerName ? 'border-red-400' : 'border-slate-200 dark:border-slate-600'}`}
                      />
                      {errors.ownerName && <p className="text-xs text-red-500 mt-1">{errors.ownerName.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5"><Phone size={14} /> Phone Number *</span>
                      </label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        placeholder="e.g. +254 7XX XXX XXX"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${errors.phone ? 'border-red-400' : 'border-slate-200 dark:border-slate-600'}`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5"><Mail size={14} /> Email</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                      />
                    </div>

                    {/* Animal Type */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5"><PawPrint size={14} /> Animal Type *</span>
                      </label>
                      <select
                        {...register('animalType', { required: 'Please select an animal type' })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${errors.animalType ? 'border-red-400' : 'border-slate-200 dark:border-slate-600'}`}
                      >
                        <option value="">Select animal type</option>
                        {animalTypes.map(a => <option key={a}>{a}</option>)}
                      </select>
                      {errors.animalType && <p className="text-xs text-red-500 mt-1">{errors.animalType.message}</p>}
                    </div>

                    {/* Pet Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Pet / Livestock Name
                      </label>
                      <input
                        {...register('petName')}
                        placeholder="e.g. Buddy, Bella"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${errors.service ? 'border-red-400' : 'border-slate-200 dark:border-slate-600'}`}
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> Preferred Date *</span>
                      </label>
                      <input
                        {...register('date', { required: 'Please select a date' })}
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${errors.date ? 'border-red-400' : 'border-slate-200 dark:border-slate-600'}`}
                      />
                      {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        <span className="flex items-center gap-1.5"><Clock size={14} /> Preferred Time</span>
                      </label>
                      <select
                        {...register('time')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                      >
                        <option value="">Select time</option>
                        {['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'].map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      {...register('notes')}
                      rows={3}
                      placeholder="Describe the condition, symptoms, or any other relevant information..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-sm bg-white dark:bg-dark-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-ripple w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 shadow-green hover:shadow-green-hover transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                    Submit Appointment Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}>
              <div className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle size={26} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Quick Booking via WhatsApp</h3>
                <p className="text-green-100 text-sm leading-relaxed mb-5">
                  Prefer a faster way to book? Chat with our team directly on WhatsApp and get instant confirmation for your appointment.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ripple w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-green-700 bg-white hover:bg-green-50 transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="card-premium p-5">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Clinic Hours</h4>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                  { day: 'Saturday', hours: '8:00 AM – 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed (Emergency only)' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-700 last:border-0">
                    <span className="text-slate-600 dark:text-slate-400">{day}</span>
                    <span className="font-medium text-slate-900 dark:text-white">{hours}</span>
                  </div>
                ))}
                <div className="mt-3 pt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs text-red-500 font-medium">Emergency Care: 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
