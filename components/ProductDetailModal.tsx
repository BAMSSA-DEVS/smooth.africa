'use client';

import React from 'react';
import { X, ArrowRight, Vote, Users, Ticket, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/companyData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenDemo: () => void;
}

const ICONS: Record<string, React.ReactNode> = {
  Vote: <Vote className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Ticket: <Ticket className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

const STATUS_LABEL: Record<string, string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
};

const STATUS_CLASS: Record<string, string> = {
  live: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/25',
  beta: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/25',
  'coming-soon': 'bg-stone-100 dark:bg-[#101524] text-stone-500 dark:text-stone-400 border-stone-200 dark:border-[#1A2235]',
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenDemo,
}) => {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Product details: ${product.name}`}
        >
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />

          <motion.div
            className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-[#070B16] border border-stone-200 dark:border-[#101524] shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-stone-100 dark:border-[#101524]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#00030E] border border-stone-100 dark:border-[#101524] text-stone-600 dark:text-stone-400">
                  {ICONS[product.iconName] ?? <Sparkles className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
                    {product.name}
                  </h2>
                  <span className={`mt-1 inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold border ${STATUS_CLASS[product.status]}`}>
                    {STATUS_LABEL[product.status]}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#2A2A2A] transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <p className="text-stone-600 dark:text-stone-300 text-[15px] leading-relaxed">
                {product.description}
              </p>

              {product.features.length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-sm text-stone-900 dark:text-stone-100 mb-3">
                    Key capabilities
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-300">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1258AB] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-stone-100 dark:border-[#101524] flex gap-3">
              <button
                onClick={() => { onClose(); onOpenDemo(); }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white text-sm font-semibold transition-all"
              >
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-stone-200 dark:border-[#101524] text-stone-600 dark:text-stone-400 text-sm font-medium hover:border-stone-300 dark:hover:border-[#3A3A3A] transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
