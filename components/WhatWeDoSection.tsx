'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const WhatWeDoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Background layer (slowest, approx 0.1x - 0.2x speed)
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  
  // Midground layer (approx 0.25x - 0.35x speed)
  const midY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  // Foreground layer (fastest, approx 0.4x - 0.5x speed)
  const fgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const mBgY = prefersReducedMotion ? '0%' : bgY;
  const mMidY = prefersReducedMotion ? '0%' : midY;
  const mFgY = prefersReducedMotion ? '0%' : fgY;

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20 lg:mb-24"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
            WHAT WE DO
          </span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            We turn real problems into useful technology.
          </h2>
          <p className="mt-6 text-stone-500 dark:text-stone-400 text-lg md:text-xl leading-relaxed">
            Smooth Africa designs, builds, and scales digital products that make complex experiences simpler — for businesses, institutions, and communities across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Capabilities List */}
          <div className="lg:col-span-5 space-y-12 relative z-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group border-l-2 border-stone-200 dark:border-[#2A2A2A] pl-6 hover:border-[#1258AB] dark:hover:border-blue-500 transition-colors duration-300"
            >
              <span className="font-heading text-sm font-bold text-[#1258AB] dark:text-blue-400 mb-2 block tracking-wide">01 — DISCOVER</span>
              <p className="text-stone-800 dark:text-stone-200 text-lg md:text-xl leading-relaxed">
                We start with the problem, the people experiencing it, and the context around it.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group border-l-2 border-stone-200 dark:border-[#2A2A2A] pl-6 hover:border-[#1258AB] dark:hover:border-blue-500 transition-colors duration-300"
            >
              <span className="font-heading text-sm font-bold text-[#1258AB] dark:text-blue-400 mb-2 block tracking-wide">02 — BUILD</span>
              <p className="text-stone-800 dark:text-stone-200 text-lg md:text-xl leading-relaxed">
                We turn those insights into thoughtful digital products designed for real-world use.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group border-l-2 border-stone-200 dark:border-[#2A2A2A] pl-6 hover:border-[#1258AB] dark:hover:border-blue-500 transition-colors duration-300"
            >
              <span className="font-heading text-sm font-bold text-[#1258AB] dark:text-blue-400 mb-2 block tracking-wide">03 — SCALE</span>
              <p className="text-stone-800 dark:text-stone-200 text-lg md:text-xl leading-relaxed">
                We improve what works, learn from the people using it, and build for what comes next.
              </p>
            </motion.div>

          </div>

          {/* Parallax Composition */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden bg-stone-100 dark:bg-[#0B1120] border border-stone-200 dark:border-[#1A2235]">
            
            {/* BG Layer: Grid texture */}
            <motion.div 
              className="absolute inset-0 z-0 opacity-50 dark:opacity-20"
              style={{ y: mBgY }}
            >
              <div className="w-full h-[150%] -mt-[25%] bg-grid" />
            </motion.div>

            {/* Midground Layer: Abstract Africa / Network visualization */}
            <motion.div 
              className="absolute inset-4 sm:inset-12 z-10 flex items-center justify-center"
              style={{ y: mMidY }}
            >
              <div className="relative w-full aspect-square max-w-sm lg:max-w-md rounded-full bg-gradient-to-tr from-[#1258AB]/10 to-[#1258AB]/5 dark:from-blue-500/10 dark:to-transparent border border-[#1258AB]/10 dark:border-blue-500/10 flex items-center justify-center backdrop-blur-2xl">
                 <div className="w-3/4 h-3/4 rounded-full border border-dashed border-[#1258AB]/30 dark:border-blue-500/30 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 rounded-full bg-[#1258AB]/10 dark:bg-blue-500/10 backdrop-blur-xl border border-[#1258AB]/20 dark:border-blue-500/20 shadow-[0_0_40px_rgba(18,88,171,0.2)]" />
                 </div>
              </div>
            </motion.div>

            {/* Foreground Layer: Product UI Fragments */}
            <motion.div 
              className="absolute top-12 left-6 sm:top-24 sm:left-12 lg:left-8 z-20 w-48 sm:w-64 shadow-2xl rounded-xl overflow-hidden bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md border border-white/20 dark:border-[#2A2A2A]"
              style={{ y: mFgY }}
            >
               <div className="p-3 border-b border-stone-100 dark:border-[#2A2A2A] flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-[#1258AB] dark:bg-blue-500 flex items-center justify-center">
                   <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <div>
                   <div className="h-2 w-16 bg-stone-200 dark:bg-stone-700 rounded mb-1" />
                   <div className="h-1.5 w-10 bg-stone-100 dark:bg-stone-800 rounded" />
                 </div>
               </div>
               <div className="p-3 space-y-2">
                 <div className="h-1.5 w-full bg-stone-100 dark:bg-stone-800 rounded" />
                 <div className="h-1.5 w-5/6 bg-stone-100 dark:bg-stone-800 rounded" />
                 <div className="h-1.5 w-4/6 bg-stone-100 dark:bg-stone-800 rounded" />
               </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-12 right-6 sm:bottom-20 sm:right-12 z-20 w-56 sm:w-72 shadow-2xl rounded-xl overflow-hidden bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md border border-white/20 dark:border-[#2A2A2A]"
              style={{ y: mFgY }}
            >
               <div className="p-4 flex items-center justify-between border-b border-stone-100 dark:border-[#2A2A2A]">
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-stone-200 dark:bg-stone-700" />
                   <div className="w-2 h-2 rounded-full bg-stone-200 dark:bg-stone-700" />
                   <div className="w-2 h-2 rounded-full bg-stone-200 dark:bg-stone-700" />
                 </div>
                 <div className="h-2 w-12 bg-stone-200 dark:bg-stone-700 rounded" />
               </div>
               <div className="p-4 grid grid-cols-2 gap-3">
                 <div className="h-16 bg-stone-50 dark:bg-[#141414] rounded-lg border border-stone-100 dark:border-[#2A2A2A]" />
                 <div className="h-16 bg-stone-50 dark:bg-[#141414] rounded-lg border border-stone-100 dark:border-[#2A2A2A]" />
               </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
