'use client';

import React, { useRef } from 'react';
import { companyData, Product } from '@/data/companyData';
import {
  Vote,
  Users,
  Ticket,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
}

const STATUS_CONFIG = {
  live: {
    label: 'Live',
    className: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/25',
  },
  beta: {
    label: 'Beta',
    className: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/25',
  },
  'coming-soon': {
    label: 'Coming Soon',
    className: 'bg-stone-100 dark:bg-[#2A2A2A] text-stone-500 dark:text-stone-400 border-stone-200 dark:border-[#3A3A3A]',
  },
};

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  Vote: <Vote className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Ticket: <Ticket className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const COLOR_CONFIG: Record<string, { icon: string; accent: string }> = {
  blue: {
    icon: 'bg-[#1258AB]/10 text-[#1258AB] dark:text-blue-400',
    accent: 'group-hover:border-[#1258AB]/30 dark:group-hover:border-[#1258AB]/40',
  },
  emerald: {
    icon: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    accent: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-500/40',
  },
  amber: {
    icon: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
    accent: 'group-hover:border-amber-300 dark:group-hover:border-amber-500/40',
  },
  slate: {
    icon: 'bg-stone-100 dark:bg-[#2A2A2A] text-stone-500 dark:text-stone-400',
    accent: 'group-hover:border-stone-300 dark:group-hover:border-stone-600',
  },
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const { products } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="products" className="py-24 bg-[#FAFAF9] dark:bg-[#141414] border-t border-stone-100 dark:border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.span>
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Software that does one thing, extremely well.
          </motion.h2>
          <motion.p
            className="mt-4 text-stone-500 dark:text-stone-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We build focused products, not platforms. Each one solves a specific operational
            problem without forcing you into an ecosystem you didn't ask for.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => {
            const colorCfg = COLOR_CONFIG[product.color] ?? COLOR_CONFIG.slate;
            const statusCfg = STATUS_CONFIG[product.status];
            const isSoon = product.status === 'coming-soon';

            return (
              <motion.div
                key={product.id}
                className={`group relative rounded-2xl border border-stone-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1C1C1C] p-6 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] ${colorCfg.accent} ${isSoon ? 'opacity-75 hover:opacity-90' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + i * 0.1 }}
              >
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-2.5 rounded-xl ${colorCfg.icon} group-hover:scale-105 transition-transform`}>
                    {PRODUCT_ICONS[product.iconName] ?? <Sparkles className="w-5 h-5" />}
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusCfg.className}`}>
                    {statusCfg.label}
                  </span>
                </div>

                {/* Name & Tagline */}
                <div className="flex-1 space-y-2 mb-5">
                  <h3 className="font-heading font-bold text-[17px] text-stone-900 dark:text-stone-100 group-hover:text-[#1258AB] dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Features — hide for coming soon */}
                {!isSoon && product.features.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {product.features.slice(0, 3).map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-[13px] text-stone-500 dark:text-stone-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                {product.externalLink ? (
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-stone-100 dark:border-[#2A2A2A] group-hover:border-stone-200 dark:group-hover:border-[#3A3A3A] text-[13px] font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all"
                  >
                    <span>{product.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="mt-auto w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-stone-100 dark:border-[#2A2A2A] group-hover:border-stone-200 dark:group-hover:border-[#3A3A3A] text-[13px] font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all"
                  >
                    <span>{product.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
