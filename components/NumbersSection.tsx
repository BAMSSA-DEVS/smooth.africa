'use client';

import React, { useEffect, useRef, useState } from 'react';
import { companyData } from '@/data/companyData';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';

function AnimatedCounter({
  to,
  prefix = '',
  suffix = '',
  duration = 2,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  const formatted =
    to >= 1000
      ? display.toLocaleString()
      : display.toString();

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export const NumbersSection: React.FC = () => {
  const { metrics } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="numbers"
      className="py-24 bg-white dark:bg-[#1C1C1C] border-t border-stone-100 dark:border-[#2A2A2A]"
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
            By the Numbers
          </motion.span>
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Progress we can point to.
          </motion.h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-100 dark:bg-[#2A2A2A] rounded-2xl overflow-hidden border border-stone-100 dark:border-[#2A2A2A]">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.id}
              className="bg-white dark:bg-[#1C1C1C] px-6 py-8 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + i * 0.07 }}
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 tabular-nums">
                <AnimatedCounter
                  to={metric.value}
                  prefix={metric.prefix ?? ''}
                  suffix={metric.suffix ?? ''}
                  duration={1.8 + i * 0.1}
                />
              </div>
              <div className="text-sm font-medium text-stone-500 dark:text-stone-400 leading-snug">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
