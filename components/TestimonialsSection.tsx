'use client';

import React, { useRef } from 'react';
import { companyData } from '@/data/companyData';
import { motion, useInView } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#FAFAF9] dark:bg-[#141414] border-t border-stone-100 dark:border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            What people actually say.
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="group rounded-2xl bg-white dark:bg-[#1C1C1C] border border-stone-200 dark:border-[#2A2A2A] hover:border-stone-300 dark:hover:border-[#3A3A3A] hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgb(0,0,0,0.3)] transition-all duration-300 p-6 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + i * 0.1 }}
            >
              {/* Quote mark */}
              <div
                className="font-heading text-5xl leading-none text-[#1258AB]/20 dark:text-blue-500/20 mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-stone-600 dark:text-stone-300 text-[15px] leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-stone-100 dark:border-[#2A2A2A]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover bg-stone-100 dark:bg-[#2A2A2A] shrink-0"
                  loading="lazy"
                />
                <div>
                  <div className="font-heading font-semibold text-sm text-stone-900 dark:text-stone-100">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-stone-400 dark:text-stone-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
