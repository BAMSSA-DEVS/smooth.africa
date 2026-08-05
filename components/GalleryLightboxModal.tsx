'use client';

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/data/companyData';

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${item.title}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden bg-white dark:bg-[#1C1C1C] border border-stone-200 dark:border-[#2A2A2A] shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-white/90 dark:bg-[#1C1C1C]/90 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-[#2A2A2A] backdrop-blur-sm transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image */}
            <div className="aspect-video overflow-hidden bg-stone-100 dark:bg-[#2A2A2A]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400">
                {item.categoryLabel}
              </span>
              <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mt-1">
                {item.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
