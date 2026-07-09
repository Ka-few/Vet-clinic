import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What animals do you treat at P&J Veterinary Clinic?',
    answer: 'We treat a wide range of animals including dogs, cats, rabbits, birds, cattle, goats, sheep, pigs, and other domestic pets and farm animals. Both small pets and large livestock are welcome at our clinic.',
  },
  {
    question: 'Do I need an appointment before visiting?',
    answer: 'We highly recommend booking an appointment to minimize waiting time and ensure your animal receives timely attention. You can book online through our website, call us directly, or message us on WhatsApp. Walk-ins are also accepted based on availability.',
  },
  {
    question: 'Do you offer emergency veterinary services?',
    answer: 'Yes. We provide emergency veterinary care 24 hours a day, 7 days a week. If your animal is in distress outside our regular hours, please call our emergency line immediately and we will assist you.',
  },
  {
    question: 'Where are you located?',
    answer: 'P&J Veterinary Clinic is located on Maragoli Avenue, Nakuru, Kenya. We are easily accessible from the town centre and nearby neighborhoods. Look for our signage along the avenue.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash payments, M-Pesa (Lipa na M-Pesa), and bank transfers. Please ask our reception staff about the applicable payment options when you visit.',
  },
  {
    question: 'Can you board my dog while I\'m on holiday?',
    answer: 'Yes! We provide safe, supervised boarding for dogs and cats. Your pet will receive daily feeding, fresh water, exercise, playtime, and veterinary supervision throughout their stay. Book your boarding in advance to secure a space.',
  },
  {
    question: 'Can my pet receive medication during the boarding stay?',
    answer: 'Absolutely. If your pet requires medication during their boarding stay, our veterinary team can administer it exactly according to your instructions or the prescribing vet\'s recommendations. Just bring the medication clearly labelled.',
  },
  {
    question: 'What should I bring when boarding my pet?',
    answer: 'When dropping off your pet for boarding, please bring: their regular food (if preferred), any prescribed medication, up-to-date vaccination records, and any comfort items such as a favourite blanket, toy, or bedding to help them feel at home.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-dark-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
      <button
        onClick={() => setIsOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <HelpCircle size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className={`transition-colors ${isOpen ? 'text-primary-600' : 'text-slate-400'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-5 pb-5 pl-10">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-slate-50 dark:bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 mb-4"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Can't find what you're looking for? Contact us on WhatsApp or call us directly.
          </motion.p>
        </div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map(faq => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center p-6 rounded-2xl bg-gradient-to-r from-primary-600 to-teal-600 text-white"
        >
          <p className="font-semibold mb-1">Still have questions?</p>
          <p className="text-sm text-primary-100 mb-4">Our team is happy to help you with any enquiries.</p>
          <a
            href="https://wa.me/254746099001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-primary-700 bg-white hover:bg-primary-50 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
