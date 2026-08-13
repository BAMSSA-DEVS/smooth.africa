'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MapPin, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenDemoModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemoModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="contact"
      className="py-24 bg-[#FAFAF9] dark:bg-[#141414] border-t border-stone-100 dark:border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* CTA Content */}
          <div className="space-y-6 flex flex-col items-center">
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
              Have a problem worth solving?
            </motion.h2>

            <motion.p
              className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-lg mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Tell us what you're trying to build, fix, or improve. We might already have a product for it—or we might build one.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2 justify-center w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-[15px] shadow-sm hover:shadow-md transition-all group"
              >
                Talk to Smooth Africa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] hover:border-stone-300 dark:hover:border-[#3A3A3A] text-stone-800 dark:text-stone-200 font-semibold text-[15px] transition-all"
              >
                Explore Products
              </a>
            </motion.div>

            {/* Info rows */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4 justify-center text-left"
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
        </div>
      </div>
    </section>
  );
};
