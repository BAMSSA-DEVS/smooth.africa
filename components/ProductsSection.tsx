'use client';

import React, { useRef } from 'react';
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
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
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
    href: 'https://smoothballot.com/',
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
    href: '#',
    isExternal: false,
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
const SmoothBallotVisual: React.FC = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-2xl relative overflow-hidden">
    {/* Top Header */}
    <div className="flex items-center justify-between pb-4 border-b border-stone-800">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-[#1258AB] text-white">
          <Vote className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold text-white">Faculty Electoral Commission 2026</h4>
          <p className="text-[11px] text-stone-400">Live Election Dashboard • Audit Active</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Voting Open
      </span>
    </div>

    {/* Metrics Bar */}
    <div className="grid grid-cols-3 gap-3 my-4">
      <div className="p-3 rounded-xl bg-stone-800/60 border border-stone-700/50">
        <p className="text-[11px] text-stone-400">Total Votes Cast</p>
        <p className="font-heading text-lg font-bold text-white mt-0.5">14,892</p>
      </div>
      <div className="p-3 rounded-xl bg-stone-800/60 border border-stone-700/50">
        <p className="text-[11px] text-stone-400">Turnout Rate</p>
        <p className="font-heading text-lg font-bold text-blue-400 mt-0.5">88.4%</p>
      </div>
      <div className="p-3 rounded-xl bg-stone-800/60 border border-stone-700/50">
        <p className="text-[11px] text-stone-400">Integrity Score</p>
        <p className="font-heading text-lg font-bold text-emerald-400 mt-0.5">100% Verified</p>
      </div>
    </div>

    {/* Live Candidate Tally */}
    <div className="space-y-3 flex-1 justify-center flex flex-col">
      <div className="p-3.5 rounded-xl bg-stone-800/40 border border-stone-700/40 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="font-semibold text-stone-200 flex items-center gap-1.5">
            Candidate A — Presidential
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 inline" />
          </span>
          <span className="font-bold text-stone-300">8,420 votes (56.5%)</span>
        </div>
        <div className="w-full bg-stone-700/50 h-2 rounded-full overflow-hidden">
          <div className="bg-[#1258AB] h-full rounded-full w-[56.5%]" />
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-stone-800/40 border border-stone-700/40 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="font-semibold text-stone-200">Candidate B — Presidential</span>
          <span className="font-bold text-stone-300">6,472 votes (43.5%)</span>
        </div>
        <div className="w-full bg-stone-700/50 h-2 rounded-full overflow-hidden">
          <div className="bg-stone-500 h-full rounded-full w-[43.5%]" />
        </div>
      </div>
    </div>

    {/* Bottom Status Ticker */}
    <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
      <span className="flex items-center gap-1.5">
        <Lock className="w-3.5 h-3.5 text-blue-400" />
        Cryptographically Encrypted Ballots
      </span>
      <span>Last sync: 2 sec ago</span>
    </div>

    {/* Floating Toast Accent */}
    <div className="absolute bottom-16 right-6 px-3 py-2 rounded-lg bg-[#1258AB] text-white text-xs font-semibold shadow-lg flex items-center gap-2 border border-blue-400/30">
      <ShieldCheck className="w-4 h-4 text-emerald-300" />
      <span>Audit Trail Synchronized</span>
    </div>
  </div>
);

const SmoothContestVisual: React.FC = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-2xl relative overflow-hidden">
    {/* Top Header */}
    <div className="flex items-center justify-between pb-4 border-b border-stone-800">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-amber-500 text-stone-950">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold text-white">Miss Campus West Africa 2026</h4>
          <p className="text-[11px] text-stone-400">Live Voting Portal & Leaderboard</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
        <Sparkles className="w-3 h-3 text-amber-400" />
        Final Round
      </span>
    </div>

    {/* Leaderboard Cards */}
    <div className="space-y-3 my-auto">
      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-extrabold text-amber-400 w-5">#1</span>
          <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300 text-xs">
            AO
          </div>
          <div>
            <p className="font-heading text-xs font-bold text-white">Amina Okafor</p>
            <p className="text-[10px] text-amber-300/80">Contestant #04</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-heading text-sm font-bold text-amber-400">45,210</p>
          <p className="text-[10px] text-stone-400">Verified Votes</p>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-bold text-stone-400 w-5">#2</span>
          <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center font-bold text-stone-300 text-xs">
            CK
          </div>
          <div>
            <p className="font-heading text-xs font-bold text-stone-200">Chiege Kalu</p>
            <p className="text-[10px] text-stone-400">Contestant #09</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-heading text-sm font-bold text-stone-200">38,150</p>
          <p className="text-[10px] text-stone-400">Verified Votes</p>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-bold text-stone-400 w-5">#3</span>
          <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center font-bold text-stone-300 text-xs">
            FA
          </div>
          <div>
            <p className="font-heading text-xs font-bold text-stone-200">Farida Ababio</p>
            <p className="text-[10px] text-stone-400">Contestant #12</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-heading text-sm font-bold text-stone-200">29,940</p>
          <p className="text-[10px] text-stone-400">Verified Votes</p>
        </div>
      </div>
    </div>

    {/* Live Vote Activity Feed */}
    <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
      <span className="flex items-center gap-1.5 text-amber-400">
        <Activity className="w-3.5 h-3.5" />
        Live Vote Stream Active
      </span>
      <span>Instant Settlement</span>
    </div>

    {/* Floating Badge */}
    <div className="absolute top-16 right-6 px-3 py-2 rounded-lg bg-amber-500 text-stone-950 text-xs font-bold shadow-lg flex items-center gap-1.5">
      <Sparkles className="w-3.5 h-3.5" />
      <span>+50 Votes Received</span>
    </div>
  </div>
);

const SmoothTicketVisual: React.FC = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-2xl relative overflow-hidden">
    {/* Top Header */}
    <div className="flex items-center justify-between pb-4 border-b border-stone-800">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500 text-stone-950">
          <Ticket className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold text-white">Tech & You Fest 2026</h4>
          <p className="text-[11px] text-stone-400">Gate Access & QR Scanner System</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Check className="w-3 h-3" />
        Scanner Live
      </span>
    </div>

    {/* Main Ticket Graphic */}
    <div className="my-auto p-4 rounded-xl bg-stone-800/80 border border-stone-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="space-y-1 text-center sm:text-left">
        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          VIP ACCESS PASS
        </span>
        <h5 className="font-heading text-base font-bold text-white mt-1">Electorate Delegate Pass</h5>
        <p className="text-xs text-stone-400">Holder: Prince Ogbonna</p>
        <p className="text-[11px] text-stone-500">Pass #TK-889421 • Gate 3</p>
      </div>

      <div className="p-3 bg-white rounded-lg flex flex-col items-center justify-center shrink-0">
        <QrCode className="w-16 h-16 text-stone-900" />
        <span className="text-[9px] font-mono font-bold text-stone-600 mt-1">VERIFIED PASS</span>
      </div>
    </div>

    {/* Check-in Progress Bar */}
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-stone-400">Gate Check-in Progress</span>
        <span className="font-bold text-emerald-400">1,240 / 1,500 Admitted (82%)</span>
      </div>
      <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
        <div className="bg-emerald-500 h-full rounded-full w-[82%]" />
      </div>
    </div>

    {/* Bottom Status Ticker */}
    <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
      <span className="flex items-center gap-1.5">
        <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
        Real-time Capacity Tracking
      </span>
      <span>Fast QR Verification</span>
    </div>
  </div>
);

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

  // Calculate scroll ranges for 3 products
  // Product 0: 0.00 -> 0.28
  // Product 1: 0.33 -> 0.61
  // Product 2: 0.66 -> 0.95

  // Product 1 Transforms
  const p1Opacity = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0.22, 0.30], [1, 0]);
  const p1Scale = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0.22, 0.30], [1, 0.94]);
  const p1Y = prefersReducedMotion
    ? 0
    : useTransform(scrollYProgress, [0.22, 0.30], [0, -40]);

  // Product 2 Transforms
  const p2Opacity = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0.28, 0.36, 0.58, 0.66], [0, 1, 1, 0]);
  const p2Scale = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0.28, 0.36, 0.58, 0.66], [0.94, 1, 1, 0.94]);
  const p2Y = prefersReducedMotion
    ? 0
    : useTransform(scrollYProgress, [0.28, 0.36, 0.58, 0.66], [60, 0, 0, -40]);

  // Product 3 Transforms
  const p3Opacity = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0.63, 0.71, 0.90, 0.96], [0, 1, 1, 0]);
  const p3Scale = prefersReducedMotion
    ? 1
    : useTransform(scrollYProgress, [0.63, 0.71, 0.90, 0.96], [0.94, 1, 1, 0.94]);
  const p3Y = prefersReducedMotion
    ? 0
    : useTransform(scrollYProgress, [0.63, 0.71, 0.90, 0.96], [60, 0, 0, -40]);

  // Active Index calculation for indicator
  const activeProductIndex = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.31) return 0;
    if (pos < 0.64) return 1;
    return 2;
  });

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = activeProductIndex.on('change', (latest) => {
      setActiveIndex(latest);
    });
    return () => unsubscribe();
  }, [activeProductIndex]);

  const getProductMotionStyles = (index: number) => {
    if (index === 0) return { opacity: p1Opacity, scale: p1Scale, y: p1Y };
    if (index === 1) return { opacity: p2Opacity, scale: p2Scale, y: p2Y };
    return { opacity: p3Opacity, scale: p3Scale, y: p3Y };
  };

  return (
    <section id="products" className="bg-[#FAFAF9] dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]">
      {/* ─── SECTION INTRO (Concise) ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
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
            Software that does one thing, extremely well.
          </h2>
          <p className="mt-4 text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-2xl">
            We build focused products that solve specific operational problems without forcing people into an ecosystem they didn't ask for.
          </p>
        </motion.div>
      </div>

      {/* ─── DESKTOP SCROLL-DRIVEN SHOWCASE (sticky pinned container) ─── */}
      <div ref={containerRef} className="hidden lg:block relative h-[320vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative">
            
            {/* Background Stage Wrapper */}
            <div className="relative min-h-[580px] h-[78vh] max-h-[720px] w-full flex items-center">
              
              {SHOWCASE_PRODUCTS.map((prod, i) => {
                const motionStyle = getProductMotionStyles(i);

                return (
                  <motion.div
                    key={prod.id}
                    className="absolute inset-0 w-full h-full grid grid-cols-12 gap-12 items-center"
                    style={{
                      opacity: motionStyle.opacity,
                      scale: motionStyle.scale,
                      y: motionStyle.y,
                      pointerEvents: activeIndex === i ? 'auto' : 'none',
                    }}
                  >
                    {/* LEFT COLUMN: Product Text & Details (40-45% width -> 5 cols) */}
                    <div className="col-span-5 flex flex-col justify-center space-y-6">
                      
                      {/* Product Number & Badge */}
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-2xl font-extrabold text-[#1258AB] dark:text-blue-400">
                          {prod.number}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border bg-blue-50 dark:bg-blue-500/10 text-[#1258AB] dark:text-blue-400 border-blue-200 dark:border-blue-500/20">
                          {prod.badge}
                        </span>
                      </div>

                      {/* Product Name & Positioning */}
                      <div>
                        <h3 className="font-heading text-3xl xl:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                          {prod.name}
                        </h3>
                        <p className="font-heading text-base font-semibold text-[#1258AB] dark:text-blue-400 mt-1">
                          {prod.positioning}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed">
                        {prod.description}
                      </p>

                      {/* Key Capabilities */}
                      <ul className="space-y-2.5 pt-1">
                        {prod.capabilities.map((cap, ci) => (
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
                        {prod.isExternal ? (
                          <a
                            href={prod.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all group"
                          >
                            <span>{prod.ctaText}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all group"
                          >
                            <span>{prod.ctaText}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Product Interface Visual (55-60% width -> 7 cols) */}
                    <div className="col-span-7 h-full min-h-[440px] max-h-[600px] w-full p-2">
                      <div className="w-full h-full rounded-2xl p-2 bg-gradient-to-b from-stone-200/50 to-stone-300/30 dark:from-stone-800/40 dark:to-stone-900/60 border border-stone-200 dark:border-stone-800/80 shadow-xl">
                        {RENDER_VISUAL(prod.visualType)}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* Bottom Progress Navigation Indicator */}
            <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-between text-xs font-semibold text-stone-400 dark:text-stone-500 pt-4 border-t border-stone-200 dark:border-stone-800/60">
              <div className="flex items-center gap-4">
                {SHOWCASE_PRODUCTS.map((p, idx) => (
                  <div
                    key={p.id}
                    className={`flex items-center gap-1.5 transition-colors duration-300 ${
                      activeIndex === idx
                        ? 'text-[#1258AB] dark:text-blue-400 font-bold'
                        : 'text-stone-400 dark:text-stone-600'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === idx ? 'bg-[#1258AB] dark:bg-blue-400 scale-125' : 'bg-stone-300 dark:bg-stone-700'
                    }`} />
                    <span>{p.number}</span>
                  </div>
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
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 space-y-16 pb-16">
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
      <div className="border-t border-stone-200/60 dark:border-stone-800/60 py-16 bg-[#FAFAF9] dark:bg-[#00030E]">
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
              We're constantly exploring new operational challenges across Africa. Some ideas become standalone products — others teach us what to build next.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
