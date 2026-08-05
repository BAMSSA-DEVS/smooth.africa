'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MapPin, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenDemoModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemoModal }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#FAFAF9] dark:bg-[#141414] border-t border-stone-100 dark:border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — CTA */}
          <div className="lg:col-span-7 space-y-6">
            <motion.span
              className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.span>

            <motion.h2
              className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-stone-900 dark:text-stone-100 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              Let's build the future together.
            </motion.h2>

            <motion.p
              className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Whether you need a product demo, want to discuss a partnership, or just have
              a problem you haven't found software for — we'd like to hear from you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-[15px] shadow-sm hover:shadow-md transition-all group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="mailto:hello@smooth.africa"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] hover:border-stone-300 dark:hover:border-[#3A3A3A] text-stone-800 dark:text-stone-200 font-semibold text-[15px] transition-all"
              >
                <Mail className="w-4 h-4 text-[#1258AB] dark:text-blue-400" />
                Contact Us
              </a>
            </motion.div>

            {/* Info rows */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-[#2A2A2A] text-stone-400 dark:text-stone-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 dark:text-stone-500 font-medium">Email</div>
                  <a
                    href="mailto:hello@smooth.africa"
                    className="text-sm font-semibold text-stone-700 dark:text-stone-300 hover:text-[#1258AB] dark:hover:text-blue-400 transition-colors"
                  >
                    hello@smooth.africa
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-[#2A2A2A] text-stone-400 dark:text-stone-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 dark:text-stone-500 font-medium">Headquarters</div>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    Lagos, Nigeria
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-[#2A2A2A] text-stone-400 dark:text-stone-500 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 dark:text-stone-500 font-medium">Response time</div>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    Within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Newsletter */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-stone-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] p-7 space-y-5">
              <div>
                <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
                  Stay in the loop
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
                  Product updates, company news, and things we find interesting. No more than once a month.
                </p>
              </div>

              {submitted ? (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                    ✓ You're subscribed. Thank you.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-[#FAFAF9] dark:bg-[#141414] text-stone-900 dark:text-stone-100 text-sm placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#1258AB]/30 focus:border-[#1258AB]/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-stone-700 dark:hover:bg-stone-200 text-white dark:text-stone-900 text-sm font-semibold transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-[11px] text-stone-400 dark:text-stone-500">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
