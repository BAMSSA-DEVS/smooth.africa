'use client';

import React, { useRef } from 'react';
import { companyData } from '@/data/companyData';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const StorySection: React.FC = () => {
  const { story } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = prefersReducedMotion ? '0%' : useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section
      id="story"
      className="py-24 bg-white dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — label + headline */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
              Our Story
            </span>
            <h2 className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 leading-tight tracking-tight">
              Why Smooth Africa exists.
            </h2>
            <div className="mt-6 w-8 h-[3px] rounded-full bg-[#1258AB]" />

            {/* Editorial pull quote */}
            <blockquote className="mt-8 pl-4 border-l-2 border-stone-200 dark:border-[#101524]">
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed italic">
                "We didn't start with a business plan. We started with a question."
              </p>
            </blockquote>
          </motion.div>

          {/* Right — story paragraphs */}
          <div className="lg:col-span-8 space-y-8">
            {story.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-stone-600 dark:text-stone-300 text-lg leading-[1.75] tracking-[-0.01em]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1 + i * 0.12,
                }}
              >
                {i === 0 && (
                  <span className="float-left font-heading font-extrabold text-[3.5rem] leading-[0.85] text-stone-900 dark:text-stone-100 mr-3 mt-1">
                    {para[0]}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </motion.p>
            ))}

            {/* Parallax Image Block */}
            <motion.div 
              className="relative w-full h-[300px] sm:h-[400px] mt-12 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-800"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
               <motion.img 
                 src="/story-team.jpg"
                 alt="Smooth Africa team"
                 className="w-full h-full object-cover object-center origin-top scale-125"
                 style={{ y: imageY }}
               />
            </motion.div>

            {/* Visual supplement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-stone-200 dark:border-stone-800 my-16"
            >
              {[
                { num: '2023', label: 'Founded' },
                { num: 'Lagos', label: 'Headquarters' },
                { num: '3+', label: 'Years building' },
                { num: '2', label: 'Core products' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-heading font-bold text-xl text-stone-900 dark:text-stone-100">
                    {item.num}
                  </div>
                  <div className="text-sm text-stone-400 dark:text-stone-500">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
