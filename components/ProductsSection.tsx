'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Vote,
  Trophy,
  Ticket,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  QrCode,
  Users,
  Sparkles,
  Lock,
  Activity,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Product } from '@/data/companyData';

interface ProductsSectionProps {
  onSelectProduct?: (product: Product) => void;
}

export interface ShowcaseProductData {
  id: string;
  number: string;
  name: string;
  positioning: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  href: string;
  isExternal: boolean;
  color: 'blue' | 'amber' | 'emerald';
  badge: string;
  visualType: 'smoothballot' | 'smoothcontest' | 'smoothticket';
}

const SHOWCASE_PRODUCTS: ShowcaseProductData[] = [
  {
    id: 'smoothballot',
    number: '01',
    name: 'SmoothBallot',
    positioning: 'Elections, made simpler.',
    description:
      'A digital election management platform designed to make voting, administration, and results easier to manage and trust.',
    capabilities: [
      'Voter & candidate registration',
      'Secure digital voting',
      'Real-time results',
    ],
    ctaText: 'Explore SmoothBallot',
    href: 'https://www.smoothballot.com/elections',
    isExternal: true,
    color: 'blue',
    badge: 'Live System',
    visualType: 'smoothballot',
  },
  {
    id: 'smoothcontest',
    number: '02',
    name: 'SmoothContest',
    positioning: 'Competition, without the complexity.',
    description:
      'A digital platform for managing contests, pageants, registrations, voting, and real-time results in one place.',
    capabilities: [
      'Contestant registration',
      'Digital voting',
      'Live leaderboards',
    ],
    ctaText: 'Explore SmoothContest',
    href: 'https://www.smoothballot.com/contests',
    isExternal: true,
    color: 'amber',
    badge: 'Live System',
    visualType: 'smoothcontest',
  },
  {
    id: 'smoothticket',
    number: '03',
    name: 'SmoothTicket',
    positioning: 'From ticket purchase to the gate.',
    description:
      'A digital ticketing and access management platform that makes events easier to sell, manage, and attend.',
    capabilities: [
      'Digital ticket generation',
      'QR verification',
      'Real-time access management',
    ],
    ctaText: 'Explore SmoothTicket',
    href: 'https://tickets.smooth.africa/',
    isExternal: true,
    color: 'emerald',
    badge: 'Live System',
    visualType: 'smoothticket',
  },
];

// Product Interface Mockup Visuals
const SmoothBallotVisual: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden group perspective-[1000px]">
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : parallaxY }}
        className="w-full flex items-center justify-center relative z-10"
      >
        <motion.div
          className="relative w-full max-w-3xl transition-transform duration-700 ease-out lg:group-hover:scale-[1.015]"
          animate={prefersReducedMotion ? {} : {
            y: [0, -6, 0],
            rotate: [-0.3, 0.3, -0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/products/smooth-elections.webp"
            alt="SmoothBallot digital election management platform"
            width={1600}
            height={1200}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={100}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const SmoothContestVisual: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden group perspective-[1000px]">
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : parallaxY }}
        className="w-full flex items-center justify-center relative z-10"
      >
        <motion.div
          className="relative w-full max-w-3xl transition-transform duration-700 ease-out lg:group-hover:scale-[1.015]"
          animate={prefersReducedMotion ? {} : {
            y: [0, -6, 0],
            rotate: [-0.3, 0.3, -0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/products/contest-hero.webp"
            alt="SmoothContest digital contest management platform"
            width={1600}
            height={1200}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={100}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const SmoothTicketVisual: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden group perspective-[1000px]">
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : parallaxY }}
        className="w-full flex items-center justify-center relative z-10"
      >
        <motion.div
          className="relative w-full max-w-3xl transition-transform duration-700 ease-out lg:group-hover:scale-[1.015]"
          animate={prefersReducedMotion ? {} : {
            y: [0, -6, 0],
            rotate: [-0.3, 0.3, -0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/products/ticket.png"
            alt="SmoothTicket digital ticketing and event management platform"
            width={1600}
            height={1200}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={100}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const RENDER_VISUAL = (type: ShowcaseProductData['visualType']) => {
  switch (type) {
    case 'smoothballot':
      return <SmoothBallotVisual />;
    case 'smoothcontest':
      return <SmoothContestVisual />;
    case 'smoothticket':
      return <SmoothTicketVisual />;
    default:
      return <SmoothBallotVisual />;
  }
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const activeProductIndex = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.33) return 0;
    if (pos < 0.66) return 1;
    return 2;
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = activeProductIndex.on('change', (latest) => {
      setActiveIndex(latest);
    });
    return () => unsubscribe();
  }, [activeProductIndex]);

  const activeProduct = SHOWCASE_PRODUCTS[activeIndex];

  return (
    <section id="products" className="bg-[#FAFAF9] dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]">
      {/* ─── SECTION INTRO (Concise) ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
            OUR PRODUCTS
          </span>
          <h2 className="font-heading mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Different products. One belief.
          </h2>
          <p className="mt-4 text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-2xl">
            We build focused digital products around the moments where participation matters, making experiences more transparent, secure, seamless, and reliable.
          </p>
        </motion.div>
      </div>

      {/* ─── DESKTOP SCROLL-DRIVEN SHOWCASE (sticky pinned container) ─── */}
      <div ref={containerRef} className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-start pt-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative">
            
            {/* Stage Container */}
            <div className="relative min-h-[500px] h-[72vh] max-h-[680px] w-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full grid grid-cols-12 gap-12 items-center bg-[#FAFAF9] dark:bg-[#00030E] z-10"
                >
                  {/* LEFT COLUMN: Product Text & Details (40-45% width -> 5 cols) */}
                  <div className="col-span-5 flex flex-col justify-center space-y-6">
                    
                    {/* Product Number & Badge */}
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-2xl font-extrabold text-[#1258AB] dark:text-blue-400">
                        {activeProduct.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border bg-blue-50 dark:bg-blue-500/10 text-[#1258AB] dark:text-blue-400 border-blue-200 dark:border-blue-500/20">
                        {activeProduct.badge}
                      </span>
                    </div>

                    {/* Product Name & Positioning */}
                    <div>
                      <h3 className="font-heading text-3xl xl:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                        {activeProduct.name}
                      </h3>
                      <p className="font-heading text-base font-semibold text-[#1258AB] dark:text-blue-400 mt-1">
                        {activeProduct.positioning}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed">
                      {activeProduct.description}
                    </p>

                    {/* Key Capabilities */}
                    <ul className="space-y-2.5 pt-1">
                      {activeProduct.capabilities.map((cap, ci) => (
                        <li key={ci} className="flex items-center gap-2.5 text-sm text-stone-700 dark:text-stone-300 font-medium">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Link / Button */}
                    <div className="pt-2">
                      {activeProduct.isExternal ? (
                        <a
                          href={activeProduct.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all group"
                        >
                          <span>{activeProduct.ctaText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onSelectProduct && onSelectProduct({
                            id: activeProduct.id,
                            name: activeProduct.name,
                            tagline: activeProduct.positioning,
                            description: activeProduct.description,
                            status: 'live',
                            iconName: 'Sparkles',
                            color: activeProduct.color,
                            features: activeProduct.capabilities,
                            linkText: activeProduct.ctaText,
                          })}
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all group"
                        >
                          <span>{activeProduct.ctaText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Product Interface Visual (55-60% width -> 7 cols) */}
                  <div className="col-span-7 h-full min-h-[440px] max-h-[600px] w-full p-2">
                    <div className="w-full h-full">
                      {RENDER_VISUAL(activeProduct.visualType)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Progress Navigation Indicator */}
            <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-between text-xs font-semibold text-stone-400 dark:text-stone-500 pt-4 border-t border-stone-200 dark:border-stone-800/60">
              <div className="flex items-center gap-4">
                {SHOWCASE_PRODUCTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-1.5 transition-colors duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? 'text-[#1258AB] dark:text-blue-400 font-bold'
                        : 'text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === idx ? 'bg-[#1258AB] dark:bg-blue-400 scale-125' : 'bg-stone-300 dark:bg-stone-700'
                    }`} />
                    <span>{p.number}</span>
                  </button>
                ))}
              </div>

              <div className="font-mono">
                0{activeIndex + 1} / 0{SHOWCASE_PRODUCTS.length}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── MOBILE & TABLET STACKED PRODUCT SHOWCASE ─── */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-12">
        {SHOWCASE_PRODUCTS.map((prod) => (
          <motion.div
            key={`mobile-${prod.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-stone-200 dark:border-[#101524] bg-white dark:bg-[#070B16] p-6 space-y-6 shadow-sm"
          >
            {/* Header / Number */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl font-extrabold text-[#1258AB] dark:text-blue-400">
                  {prod.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                <h3 className="font-heading text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                  {prod.name}
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border bg-blue-50 dark:bg-blue-500/10 text-[#1258AB] dark:text-blue-400 border-blue-200 dark:border-blue-500/20">
                {prod.badge}
              </span>
            </div>

            <p className="font-heading text-sm font-semibold text-[#1258AB] dark:text-blue-400 -mt-2">
              {prod.positioning}
            </p>

            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              {prod.description}
            </p>

            {/* Visual */}
            <div className="w-full h-80 rounded-xl overflow-hidden my-4 border border-stone-200 dark:border-stone-800">
              {RENDER_VISUAL(prod.visualType)}
            </div>

            {/* Capabilities */}
            <ul className="space-y-2">
              {prod.capabilities.map((cap, ci) => (
                <li key={ci} className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              {prod.isExternal ? (
                <a
                  href={prod.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1258AB] text-white text-xs font-semibold"
                >
                  <span>{prod.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => onSelectProduct && onSelectProduct({
                    id: prod.id,
                    name: prod.name,
                    tagline: prod.positioning,
                    description: prod.description,
                    status: 'live',
                    iconName: 'Sparkles',
                    color: prod.color,
                    features: prod.capabilities,
                    linkText: prod.ctaText,
                  })}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1258AB] text-white text-xs font-semibold"
                >
                  <span>{prod.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── ENDING TRANSITION STATEMENT ─── */}
      <div className="border-t border-stone-200/60 dark:border-stone-800/60 py-8 bg-[#FAFAF9] dark:bg-[#00030E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-left space-y-2"
          >
            <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              Three products today. A lot more to build tomorrow.
            </h4>
            <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed">
              We're constantly exploring new operational challenges across Africa. Some ideas become standalone products, others teach us what to build next.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
