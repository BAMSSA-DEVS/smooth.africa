'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onOpenDemoModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemoModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('hello@smooth.africa');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-[#00030E] text-stone-100 border-t border-[#101524] overflow-hidden relative"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="flex flex-col justify-between min-h-[420px] lg:min-h-[500px]">
          
          {/* Top Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#101524]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                INITIATE A CONVERSATION
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-stone-400 text-sm max-w-sm"
            >
              Have a problem worth solving? Tell us what you're trying to build or improve across Africa.
            </motion.p>
          </div>

          {/* Main Giant Typography ("Get in / Touch") matching the exact design */}
          <div className="my-10 lg:my-16 select-none cursor-pointer" onClick={onOpenDemoModal}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading font-extrabold text-[4.2rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[11.5rem] leading-[0.88] tracking-tight group"
            >
              {/* Line 1: Get in */}
              <span className="block bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
                Get in
              </span>
              {/* Line 2: Touch */}
              <span className="block bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#A3E635] bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
                Touch
              </span>
            </motion.h2>
          </div>

          {/* Bottom Interactive Bar */}
          <div className="pt-8 border-t border-[#101524] flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Meta Details */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Headquarters: Lagos, Nigeria</span>
              </div>
              <div className="hidden sm:block w-px h-3.5 bg-[#101524]" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Response time: &lt; 24 hrs</span>
              </div>
            </div>

            {/* Email Pill Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 self-start md:self-auto"
            >
              <a
                href="mailto:hello@smooth.africa"
                className="group inline-flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-[#070B16] hover:bg-[#0E1527] border border-[#1A2235] text-stone-100 font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl"
              >
                <span>hello@smooth.africa</span>
                <div className="w-8 h-8 rounded-full bg-white text-stone-950 flex items-center justify-center group-hover:bg-[#1258AB] group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </div>
              </a>

              {/* Copy Email Helper */}
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="p-3.5 rounded-full bg-[#070B16] hover:bg-[#0E1527] border border-[#1A2235] text-stone-400 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
