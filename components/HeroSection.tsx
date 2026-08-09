'use client';

import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

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

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-[#FAFAF9] dark:bg-[#141414]"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dots opacity-100 dark:opacity-60 pointer-events-none" />

      {/* Very subtle warm gradient wash — only in light mode */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-[#1258AB]/5 via-transparent to-transparent pointer-events-none dark:hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ─── Left Column ─── */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-8">

            {/* Label pill */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] text-xs font-semibold text-stone-500 dark:text-stone-400 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1258AB] shrink-0" />
                African Technology Company
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <h1 className="font-heading text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-stone-900 dark:text-stone-100 text-balance">
                Building Africa's Next Generation of{' '}
                <span className="text-[#1258AB]">Digital Products.</span>
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
              We design, build, and scale software that helps businesses, governments,
              and communities operate more efficiently across Africa.
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] hover:border-stone-300 dark:hover:border-[#3A3A3A] text-stone-800 dark:text-stone-200 font-semibold text-[15px] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#1258AB] dark:text-blue-400" />
                Talk to Us
              </button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="pt-2 flex items-center gap-6 text-sm text-stone-400 dark:text-stone-500"
            >
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-stone-900 dark:text-stone-100 text-lg">120+</span>
                <span>organizations</span>
              </div>
              <div className="w-px h-5 bg-stone-200 dark:bg-[#2A2A2A]" />
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-stone-900 dark:text-stone-100 text-lg">8</span>
                <span>countries</span>
              </div>
              <div className="w-px h-5 bg-stone-200 dark:bg-[#2A2A2A]" />
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-stone-900 dark:text-stone-100 text-lg">3</span>
                <span>products</span>
              </div>
            </motion.div>
          </div>

          {/* ─── Right Column — Product Dashboard Visual ─── */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
              {/* Fade out the left edge to blend with the background */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#FAFAF9] dark:from-[#141414] via-transparent to-transparent w-1/3" />
              
              <img 
                src="/hero-map.png" 
                alt="Africa Map Dashboard" 
                className="w-full h-full object-cover md:object-contain object-right opacity-90 dark:mix-blend-lighten pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF9] dark:from-[#141414] to-transparent pointer-events-none" />
    </section>
  );
};
