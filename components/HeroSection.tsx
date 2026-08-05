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
            {/* Main card */}
            <div className="relative rounded-2xl border border-stone-200/80 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] shadow-[0_20px_60px_-12px_rgb(0,0,0,0.08)] dark:shadow-[0_20px_60px_-12px_rgb(0,0,0,0.5)] overflow-hidden">

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 h-10 border-b border-stone-100 dark:border-[#2A2A2A] bg-stone-50 dark:bg-[#141414]">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-200 dark:bg-[#333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-stone-200 dark:bg-[#333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-stone-200 dark:bg-[#333]" />
                <div className="ml-3 flex-1 h-5 rounded-md bg-stone-100 dark:bg-[#2A2A2A] max-w-[180px]" />
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 space-y-5">

                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-4 w-36 rounded bg-stone-900 dark:bg-stone-100 opacity-90" />
                    <div className="h-3 w-24 rounded bg-stone-200 dark:bg-[#2A2A2A] mt-2" />
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#1258AB]/10 border border-[#1258AB]/20">
                    <div className="h-3 w-16 rounded bg-[#1258AB]/60" />
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active Users', val: '1,284', up: true },
                    { label: 'Tasks Done', val: '98.4%', up: true },
                    { label: 'Pending', val: '12', up: false },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-stone-100 dark:border-[#2A2A2A] bg-stone-50 dark:bg-[#141414] p-3"
                    >
                      <div className="text-[10px] text-stone-400 dark:text-stone-500 font-medium mb-1">{stat.label}</div>
                      <div className="font-heading font-bold text-base text-stone-900 dark:text-stone-100">{stat.val}</div>
                      <div className={`text-[10px] font-semibold mt-0.5 ${stat.up ? 'text-emerald-500' : 'text-stone-400'}`}>
                        {stat.up ? '↑ +12% this week' : '→ No change'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table rows */}
                <div className="space-y-2">
                  <div className="h-3 w-24 rounded bg-stone-200 dark:bg-[#2A2A2A]" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-stone-50 dark:border-[#2A2A2A]">
                      <div className="w-7 h-7 rounded-full bg-stone-100 dark:bg-[#2A2A2A] shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 rounded bg-stone-100 dark:bg-[#2A2A2A]" style={{ width: `${60 + i * 8}%` }} />
                        <div className="h-2 rounded bg-stone-50 dark:bg-[#232323]" style={{ width: `${40 + i * 5}%` }} />
                      </div>
                      <div className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
                        <div className="h-2 w-8 rounded bg-emerald-300 dark:bg-emerald-500/40" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between pt-1">
                  <div className="h-3 w-28 rounded bg-stone-100 dark:bg-[#2A2A2A]" />
                  <div className="h-7 w-20 rounded-lg bg-[#1258AB]/10 border border-[#1258AB]/20" />
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              className="absolute -left-5 top-16 hidden lg:flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#1C1C1C] border border-stone-200 dark:border-[#2A2A2A] shadow-[0_4px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.4)]"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm">✓</span>
              </div>
              <div>
                <div className="text-xs font-semibold font-heading text-stone-900 dark:text-stone-100">Payroll processed</div>
                <div className="text-[11px] text-stone-400 dark:text-stone-500">247 staff · Just now</div>
              </div>
            </motion.div>

            {/* Floating badge — results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.5, ease: 'easeOut' }}
              className="absolute -right-5 bottom-20 hidden lg:flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#1C1C1C] border border-stone-200 dark:border-[#2A2A2A] shadow-[0_4px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.4)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1258AB]/10 flex items-center justify-center shrink-0">
                <span className="text-[#1258AB] dark:text-blue-400 text-sm font-bold">%</span>
              </div>
              <div>
                <div className="text-xs font-semibold font-heading text-stone-900 dark:text-stone-100">Results certified</div>
                <div className="text-[11px] text-stone-400 dark:text-stone-500">SmoothBallot · 3 regions</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF9] dark:from-[#141414] to-transparent pointer-events-none" />
    </section>
  );
};
