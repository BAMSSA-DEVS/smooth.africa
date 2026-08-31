'use client';

import React, { useRef } from 'react';
import { companyData } from '@/data/companyData';
import {
  Target,
  Minimize2,
  ShieldCheck,
  Rocket,
  Clock,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ICONS: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Minimize2: <Minimize2 className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
};

export const ValuesSection: React.FC = () => {
  const { values } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="values"
      className="py-24 bg-[#FAFAF9] dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]"
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
            How We Work
          </motion.span>
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Principles that shape every decision.
          </motion.h2>
          <motion.p
            className="mt-4 text-stone-500 dark:text-stone-400 text-lg max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Not values written on a wall. Rules we actually follow when things get hard.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="flex overflow-x-auto gap-5 pb-8 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {values.map((val, i) => (
            <motion.div
              key={val.id}
              className="group min-w-[85vw] sm:min-w-0 shrink-0 snap-center p-6 rounded-2xl bg-white dark:bg-[#070B16] border border-stone-200 dark:border-[#101524] hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgb(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 space-y-4"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + i * 0.08 }}
            >
              {/* Icon */}
              <div className="p-2.5 w-fit rounded-xl bg-stone-50 dark:bg-[#00030E] border border-stone-100 dark:border-[#101524] text-stone-600 dark:text-stone-400 group-hover:text-[#1258AB] dark:group-hover:text-blue-400 group-hover:border-[#1258AB]/20 dark:group-hover:border-blue-500/20 group-hover:-translate-y-0.5 transition-all">
                {ICONS[val.iconName] ?? <Target className="w-5 h-5" />}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-[16px] text-stone-900 dark:text-stone-100 group-hover:text-[#1258AB] dark:group-hover:text-blue-400 transition-colors">
                {val.title}
              </h3>

              {/* Statement */}
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                {val.statement}
              </p>

              {/* Subtle number indicator */}
              <div className="pt-2 text-[11px] font-semibold text-stone-200 dark:text-[#2A2A2A] font-heading">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
