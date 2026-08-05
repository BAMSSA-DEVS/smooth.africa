'use client';

import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = ['SmoothBallot', 'SmoothTicket', 'Not sure yet'];

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [product, setProduct] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Book a Demo"
        >
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />

          <motion.div
            className="relative z-10 w-full max-w-md rounded-2xl bg-white dark:bg-[#1C1C1C] border border-stone-200 dark:border-[#2A2A2A] shadow-2xl"
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-stone-100 dark:border-[#2A2A2A]">
              <div>
                <h2 className="font-heading font-bold text-[17px] text-stone-900 dark:text-stone-100">
                  Book a Demo
                </h2>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-0.5">
                  We'll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#2A2A2A] transition-all"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            {submitted ? (
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-500/10">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
                    Request received!
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm mt-2">
                    We'll reach out to {email} within 24 hours to schedule your demo.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-semibold transition-all hover:bg-stone-700 dark:hover:bg-stone-200"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-stone-700 dark:text-stone-300" htmlFor="demo-name">
                    Your name
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Adeola Okafor"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-[#FAFAF9] dark:bg-[#141414] text-stone-900 dark:text-stone-100 text-sm placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#1258AB]/30 focus:border-[#1258AB]/60 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-stone-700 dark:text-stone-300" htmlFor="demo-email">
                    Work email
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-[#FAFAF9] dark:bg-[#141414] text-stone-900 dark:text-stone-100 text-sm placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#1258AB]/30 focus:border-[#1258AB]/60 transition-all"
                  />
                </div>

                {/* Organization */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-stone-700 dark:text-stone-300" htmlFor="demo-org">
                    Organization
                  </label>
                  <input
                    id="demo-org"
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Company or institution"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-[#2A2A2A] bg-[#FAFAF9] dark:bg-[#141414] text-stone-900 dark:text-stone-100 text-sm placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#1258AB]/30 focus:border-[#1258AB]/60 transition-all"
                  />
                </div>

                {/* Product interest */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-stone-700 dark:text-stone-300">
                    Interested in
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setProduct(p)}
                        className={`px-3 py-2 rounded-xl border text-sm font-medium transition-all text-left ${
                          product === p
                            ? 'bg-[#1258AB]/10 border-[#1258AB]/40 text-[#1258AB] dark:text-blue-400'
                            : 'border-stone-200 dark:border-[#2A2A2A] text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-[#3A3A3A]'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
