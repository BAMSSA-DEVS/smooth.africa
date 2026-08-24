'use client';

import React, { useState, useRef } from 'react';
import { companyData, GalleryItem } from '@/data/companyData';
import { motion, useInView } from 'framer-motion';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'team', label: 'Team' },
  { id: 'events', label: 'Events' },
  { id: 'community', label: 'Community' },
  { id: 'milestones', label: 'Milestones' },
];

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const { gallery } = companyData;
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const filtered =
    activeCategory === 'all'
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-24 bg-[#FAFAF9] dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-10">
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Life at Smooth
          </motion.h2>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex gap-2 flex-wrap mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                  : 'bg-white dark:bg-[#070B16] border border-stone-200 dark:border-[#101524] text-stone-500 dark:text-stone-400 hover:border-stone-300 dark:hover:border-[#3A3A3A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Horizontal Marquee Wrapper */}
        <div className="relative w-full overflow-hidden mt-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 25,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...filtered, ...filtered].map((item, i) => (
              <motion.button
                key={`${item.id}-${i}`}
                className="group relative rounded-2xl overflow-hidden w-64 sm:w-72 md:w-80 shrink-0 aspect-[3/4] bg-stone-100 dark:bg-[#101524] cursor-pointer text-left"
                onClick={() => onSelectImage(item)}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Permanent subtle gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent pointer-events-none" />

                {/* Info — always visible at bottom left */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    <p className="font-heading font-bold text-white text-base md:text-lg tracking-tight line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-stone-300 ml-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </span>
                </div>

                {/* Category pill — hidden to match the clean aesthetic of the mockup, or can be kept top right */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-white border border-white/30">
                    {item.categoryLabel}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
