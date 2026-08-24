'use client';

import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '#story' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Careers', href: '#' },
  ],
  Products: [
    { label: 'SmoothBallot', href: '#products' },
    { label: 'SmoothTicket', href: '#products' },
    { label: 'Coming Soon', href: '#products' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#1C1C1C] border-t border-stone-200 dark:border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="flex items-center gap-2.5 group w-fit" aria-label="Smooth Africa Home">
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

            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs">
              Building digital products that help African organizations
              operate more efficiently. Lagos, Nigeria.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { Icon: Twitter, label: 'Twitter', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Github, label: 'GitHub', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#2A2A2A] border border-transparent hover:border-stone-200 dark:hover:border-[#3A3A3A] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-heading font-semibold text-[13px] text-stone-900 dark:text-stone-100 uppercase tracking-widest">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-stone-100 dark:border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400 dark:text-stone-500">
            © {new Date().getFullYear()} Smooth Africa. All rights reserved.
          </p>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            Designed &amp; built in Lagos, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
};
