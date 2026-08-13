'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const WhatsNextSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-white dark:bg-[#1C1C1C]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.span
          className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400 block mb-3"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What's Next
        </motion.span>
        
        <motion.h2
          className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          We're just getting started.
        </motion.h2>

        <motion.p
          className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          There are still thousands of problems worth solving. We're looking for the ones where thoughtful technology can make the biggest difference.
        </motion.p>
      </div>
    </section>
  );
};
