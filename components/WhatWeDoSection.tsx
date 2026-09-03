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

  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  
  // Midground layer (approx 0.25x - 0.35x speed)
  const midY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  
  const mMidY = prefersReducedMotion ? '0%' : midY;

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
            We build infrastructure for participation.
          </h2>
          <p className="mt-6 text-stone-500 dark:text-stone-400 text-lg md:text-xl leading-relaxed">
            Smooth Africa creates digital products that make participation more transparent, secure, and reliable, helping people and organizations engage with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Capabilities List */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 relative z-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group border-l-2 border-stone-200 dark:border-[#2A2A2A] pl-6 hover:border-[#1258AB] dark:hover:border-blue-500 transition-colors duration-300"
            >
              <span className="font-heading text-xs font-bold text-[#1258AB] dark:text-blue-400 uppercase tracking-widest mb-2 block">01 — MAKE IT TRUSTED</span>
              <h3 className="font-heading text-lg lg:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug tracking-tight mb-2">
                We design systems people can understand, verify, and trust.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
                Every important action should be clear and transparent, giving people the information they need to participate with confidence. We build trust into the experience, not as an afterthought.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group border-l-2 border-stone-200 dark:border-[#2A2A2A] pl-6 hover:border-[#1258AB] dark:hover:border-blue-500 transition-colors duration-300"
            >
              <span className="font-heading text-xs font-bold text-[#1258AB] dark:text-blue-400 uppercase tracking-widest mb-2 block">02 — MAKE IT SIMPLE</span>
              <h3 className="font-heading text-lg lg:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug tracking-tight mb-2">
                We remove friction so participation feels natural and effortless.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
                Complexity belongs in the infrastructure, not the experience. We make every step clear, intuitive, and easy to navigate without compromising what the system needs.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group border-l-2 border-stone-200 dark:border-[#2A2A2A] pl-6 hover:border-[#1258AB] dark:hover:border-blue-500 transition-colors duration-300"
            >
              <span className="font-heading text-xs font-bold text-[#1258AB] dark:text-blue-400 uppercase tracking-widest mb-2 block">03 — MAKE IT RELIABLE</span>
              <h3 className="font-heading text-lg lg:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug tracking-tight mb-2">
                We build products people can depend on when participation matters.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
                Our systems are designed to work consistently, protect what matters, and remain dependable as they grow. We build for today while preparing for what comes next.
              </p>
            </motion.div>

          </div>

          {/* Parallax Composition */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden bg-stone-100 dark:bg-[#0B1120] border border-stone-200 dark:border-[#1A2235]">
            <motion.div 
              className="absolute inset-0 z-0 w-full h-full origin-center scale-[1.15]"
              style={{ y: mMidY }}
            >
              {/* Light mode image */}
              <img 
                src="/what-we-do-light.jpg" 
                alt="Smooth Africa team and technology visual" 
                className="w-full h-full object-cover dark:hidden transition-opacity duration-200"
                loading="lazy"
              />
              {/* Dark mode image */}
              <img 
                src="/what-we-do-dark.jpg" 
                alt="Smooth Africa team and technology visual" 
                className="w-full h-full object-cover hidden dark:block transition-opacity duration-200"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
