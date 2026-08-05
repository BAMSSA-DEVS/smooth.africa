'use client';

import React, { useRef } from 'react';
import { companyData } from '@/data/companyData';
import { motion, useInView } from 'framer-motion';

export const PartnersSection: React.FC = () => {
  const { partners } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      id="partners"
      className="py-16 bg-white dark:bg-[#1C1C1C] border-t border-stone-100 dark:border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
            Partners &amp; Supporters
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              className="text-stone-300 dark:text-stone-600 hover:text-stone-500 dark:hover:text-stone-400 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
            >
              <div className="font-heading font-bold text-base sm:text-lg tracking-tight select-none">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
