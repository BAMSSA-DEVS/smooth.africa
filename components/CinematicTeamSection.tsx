'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const IMAGE_URL = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000';
const OBJECT_POSITION = 'center center';

export const CinematicTeamSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.65, 0.85, 1],
    [0.78, 0.86, 0.96, 1.0, 1.12, 1.12]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.65],
    ['24px', '24px', '12px', '0px']
  );

  const initialTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 1, 0]
  );

  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.45],
    [1, 1, 0.15, 0]
  );

  const headlineY = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [0, -20]
  );

  const weListenOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.5, 0.53],
    [0, 1, 1, 0]
  );

  const weUnderstandOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.63],
    [0, 1, 1, 0]
  );

  const weBuildOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.7, 0.73],
    [0, 1, 1, 0]
  );

  const translateY = useTransform(scrollYProgress, [0.65, 0.85], ['0%', '-2%']);
  const translateX = useTransform(scrollYProgress, [0.65, 0.85], ['0%', '1%']);
  const brightness = useTransform(scrollYProgress, [0.65, 0.85], [1, 0.88]);

  const imageOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

  const bridgeTextOpacity = useTransform(
    scrollYProgress,
    [0.85, 0.95, 1],
    [0, 1, 1]
  );
  
  const bridgeTextY = useTransform(
    scrollYProgress,
    [0.85, 0.95],
    [20, 0]
  );

  const motionScale = prefersReducedMotion ? 1 : scale;
  const motionBorderRadius = prefersReducedMotion ? '0px' : borderRadius;
  const motionTranslateY = prefersReducedMotion ? '0%' : translateY;
  const motionTranslateX = prefersReducedMotion ? '0%' : translateX;

  if (prefersReducedMotion) {
    return (
      <section className="py-24 bg-[#FAFAF9] dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
            THE PEOPLE BEHIND THE PRODUCTS
          </span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Every product starts with a conversation.
          </h2>
          <p className="mt-6 text-stone-500 dark:text-stone-400 text-lg mx-auto max-w-2xl">
            Before there's a roadmap, there's a problem. Before there's a solution, there's someone trying to solve it.
          </p>
        </div>
        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <img
            src={IMAGE_URL}
            alt="Smooth Africa team discussing a product"
            className="w-full h-full object-cover"
            style={{ objectPosition: OBJECT_POSITION }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            From conversations to products.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] lg:h-[300vh] bg-[#FAFAF9] dark:bg-[#00030E]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden z-10"
          style={{ opacity: imageOpacity }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{
              scale: motionScale,
              borderRadius: motionBorderRadius,
              x: motionTranslateX,
              y: motionTranslateY,
              filter: useTransform(brightness, b => `brightness(${b})`),
            }}
          >
            <img
              src={IMAGE_URL}
              alt="Smooth Africa team discussing a product"
              className="w-full h-full object-cover"
              style={{ objectPosition: OBJECT_POSITION }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-[8%] sm:top-[12%] left-0 right-0 flex flex-col items-center justify-center text-center px-4 z-20 pointer-events-none"
          style={{ opacity: initialTextOpacity }}
        >
          <motion.div className="mb-4">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400 bg-white/70 dark:bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              THE PEOPLE BEHIND THE PRODUCTS
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-stone-100 max-w-4xl tracking-tight drop-shadow-xl"
            style={{ opacity: headlineOpacity, y: headlineY }}
          >
            Every product starts with a conversation.
          </motion.h2>

          <motion.p 
            className="mt-6 text-stone-700 dark:text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl font-medium drop-shadow-md"
            style={{ opacity: initialTextOpacity }}
          >
            Before there's a roadmap, there's a problem. Before there's a solution, there's someone trying to solve it.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-12 lg:bottom-24 lg:left-24 z-20 pointer-events-none">
          <motion.div
            style={{ opacity: weListenOpacity, display: useTransform(weListenOpacity, v => v > 0 ? 'block' : 'none') }}
            className="absolute bottom-0 left-0 whitespace-nowrap"
          >
            <h3 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              We listen.
            </h3>
          </motion.div>
          <motion.div
            style={{ opacity: weUnderstandOpacity, display: useTransform(weUnderstandOpacity, v => v > 0 ? 'block' : 'none') }}
            className="absolute bottom-0 left-0 whitespace-nowrap"
          >
            <h3 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              We understand.
            </h3>
          </motion.div>
          <motion.div
            style={{ opacity: weBuildOpacity, display: useTransform(weBuildOpacity, v => v > 0 ? 'block' : 'none') }}
            className="absolute bottom-0 left-0 whitespace-nowrap"
          >
            <h3 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              We build.
            </h3>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          style={{ opacity: bridgeTextOpacity, y: bridgeTextY, display: useTransform(bridgeTextOpacity, v => v > 0 ? 'flex' : 'none') }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-center px-4">
            From conversations to products.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
