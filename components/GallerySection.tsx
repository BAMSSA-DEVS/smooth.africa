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
      className="py-24 bg-[#FAFAF9] dark:bg-[#141414] border-t border-stone-100 dark:border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-10">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.span>
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Inside Smooth Africa.
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
                  : 'bg-white dark:bg-[#1C1C1C] border border-stone-200 dark:border-[#2A2A2A] text-stone-500 dark:text-stone-400 hover:border-stone-300 dark:hover:border-[#3A3A3A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          layout
        >
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-[#2A2A2A] cursor-pointer text-left"
              onClick={() => onSelectImage(item)}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              layout
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info — shown on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-300">
                  {item.categoryLabel}
                </span>
                <p className="font-heading font-bold text-white text-sm mt-0.5 line-clamp-1">
                  {item.title}
                </p>
              </div>

              {/* Category pill — always visible */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-sm text-[11px] font-semibold text-stone-700 dark:text-stone-300 border border-white/50 dark:border-[#2A2A2A]">
                  {item.categoryLabel}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
