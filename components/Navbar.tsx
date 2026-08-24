'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#story' },
  { name: 'Team', href: '#team' },
  { name: 'Life at Smooth', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 dark:bg-[#141414]/92 backdrop-blur-xl border-b border-stone-200/80 dark:border-[#2A2A2A] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Smooth Africa Home"
          >
            {/* Light Mode Logo */}
            <img 
              src="/logo-light.png" 
              alt="Smooth Africa Logo" 
              className="dark:hidden w-[125px] sm:w-[135px] lg:w-[150px] h-auto object-contain transition-transform group-hover:opacity-90"
            />
            {/* Dark Mode Logo */}
            <img 
              src="/logo-dark.png" 
              alt="Smooth Africa Logo" 
              className="hidden dark:block w-[125px] sm:w-[135px] lg:w-[150px] h-auto object-contain transition-transform group-hover:opacity-90"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-[13.5px] font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-[#1C1C1C] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-[#1C1C1C] transition-all"
            >
              {mounted ? (
                theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            {/* CTA — hidden on mobile */}
            <button
              onClick={onOpenDemoModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-[13.5px] shadow-sm transition-all hover:shadow-md"
            >
              Book a Demo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-[#1C1C1C] transition-all"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden pb-4 pt-2 border-t border-stone-200 dark:border-[#2A2A2A]"
            >
              <nav className="space-y-0.5" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-[#1C1C1C] transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="pt-3 mt-3 border-t border-stone-200 dark:border-[#2A2A2A]">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#1258AB] hover:bg-[#0e4489] text-white font-semibold text-sm transition-all"
                >
                  Book a Demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
