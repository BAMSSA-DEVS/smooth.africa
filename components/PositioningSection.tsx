'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PositioningSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-white dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.p
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 dark:text-stone-100 leading-tight tracking-tight text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Technology should remove friction, not create more of it.
        </motion.p>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Smooth Africa builds focused digital products that help organizations work better, make better decisions, and create better experiences.
        </motion.p>
      </div>
    </section>
  );
};
