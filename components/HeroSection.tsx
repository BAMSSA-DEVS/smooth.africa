'use client';

import React, { useRef } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface HeroSectionProps {
  onOpenDemoModal: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  }),
};

const heroStats = [
  { value: '100+', label: 'organizations' },
  { value: 'Growing', label: 'Across Africa' },
  { value: '3', label: 'products' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Map scroll progress to a subtle Y translation for the parallax effect (0px to 150px)
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  // Use a fallback for reduced motion
  const motionBackgroundY = prefersReducedMotion ? 0 : backgroundY;
  const motionScale = prefersReducedMotion ? 1 : 1.05;
  
  const dot1Y = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -80]);
  const dot2Y = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-[#FAFAF9] dark:bg-[#060D1A]"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-full origin-top"
          style={{ y: motionBackgroundY, scale: motionScale }}
        >
          {/* Light mode background */}
          <img
            src="/hero-bg-light.jpg"
            alt="Africa Map Background Light"
            className="w-full h-full object-cover object-center md:object-contain md:object-right dark:hidden"
          />
          {/* Dark mode background */}
          <img
            src="/hero-bg.jpg"
            alt="Africa Map Background Dark"
            className="w-full h-full object-cover object-center md:object-contain md:object-right hidden dark:block"
          />
        </motion.div>
        {/* Gradient overlay to ensure text readability on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9] dark:from-[#060D1A] via-[#FAFAF9]/90 dark:via-[#060D1A]/80 to-transparent w-full md:w-[60%]" />
        
        {/* Decorative Floating Elements */}
        <motion.div 
          className="absolute top-[20%] left-[60%] w-64 h-64 bg-[#1258AB]/10 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
          style={{ y: dot1Y }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#1258AB]/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
          style={{ y: dot2Y }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ─── Left Column ─── */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-8 pt-10 lg:pt-20">

            {/* Headline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <h1 className="font-heading text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-stone-900 dark:text-stone-100 text-balance">
                Participation is everywhere.{' '}
                <span className="text-[#1258AB]">Trust should be too.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg"
            >
              Smooth Africa builds focused digital products that help organizations work better, make better decisions, and create better experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-[15px] shadow-sm hover:shadow-md transition-all group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-white/80 dark:bg-[#1C1C1C]/50 backdrop-blur-sm hover:border-stone-300 dark:hover:border-[#3A3A3A] hover:bg-white dark:hover:bg-[#232323] text-stone-800 dark:text-stone-200 font-semibold text-[15px] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#1258AB] dark:text-blue-400" />
                Meet Smooth Africa
              </button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="pt-2 text-sm text-stone-500 dark:text-stone-400"
            >
              {/* Mobile marquee */}
              <div className="sm:hidden -mx-4 overflow-hidden">
                <div className={`flex w-max items-center gap-6 ${prefersReducedMotion ? '' : 'animate-marquee'}`}>
                  {[...heroStats, ...heroStats, ...heroStats, ...heroStats].map((s, i) => (
                    <div key={i} className="flex items-center gap-6 shrink-0 whitespace-nowrap">
                      <span className="font-heading font-bold text-stone-900 dark:text-stone-100 text-lg">{s.value}</span>
                      <span>{s.label}</span>
                      <div className="w-px h-5 bg-stone-200 dark:bg-[#2A2A2A]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop static row */}
              <div className="hidden sm:flex items-center gap-6 whitespace-nowrap">
                {heroStats.map((s, i) => (
                  <React.Fragment key={s.value}>
                    {i > 0 && <div className="w-px h-5 bg-stone-200 dark:bg-[#2A2A2A] shrink-0" />}
                    <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
                      <span className="font-heading font-bold text-stone-900 dark:text-stone-100 text-lg">{s.value}</span>
                      <span>{s.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF9] dark:from-[#141414] to-transparent pointer-events-none" />
    </section>
  );
};
