'use client';

import React, { useRef } from 'react';
import { companyData } from '@/data/companyData';
import { motion, useInView } from 'framer-motion';

export const VisionMissionSection: React.FC = () => {
  const { visionMission } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="vision"
      className="py-24 bg-white dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
            Direction
          </span>
          <h2 className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Vision &amp; Mission
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="rounded-2xl bg-[#1258AB] p-8 lg:p-10 text-white relative overflow-hidden"
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-dots opacity-[0.06] pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-200">
                Vision
              </span>
              <p className="font-heading text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-balance">
                {visionMission.vision.statement}
              </p>
              <div className="w-8 h-[2px] rounded-full bg-blue-300/60" />
              <p className="text-blue-100 text-[15px] leading-relaxed">
                {visionMission.vision.detail}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="rounded-2xl border border-stone-200 dark:border-[#101524] bg-[#FAFAF9] dark:bg-[#070B16] p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
                Mission
              </span>
              <p className="font-heading text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-stone-900 dark:text-stone-100 text-balance">
                {visionMission.mission.statement}
              </p>
              <div className="w-8 h-[2px] rounded-full bg-[#1258AB]/40" />
              <p className="text-stone-500 dark:text-stone-400 text-[15px] leading-relaxed">
                {visionMission.mission.detail}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
