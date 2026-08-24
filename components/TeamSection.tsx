'use client';

import React, { useRef } from 'react';
import { companyData } from '@/data/companyData';
import { Linkedin, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const TeamSection: React.FC = () => {
  const { team } = companyData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="team"
      className="py-24 bg-white dark:bg-[#00030E] border-t border-stone-100 dark:border-[#101524]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-[#1258AB] dark:text-blue-400"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            The Team
          </motion.span>
          <motion.h2
            className="font-heading mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            The people behind the products.
          </motion.h2>
          <motion.p
            className="mt-4 text-stone-500 dark:text-stone-400 text-lg max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A small, focused team with deep experience in the problems we're solving.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              className="group rounded-2xl border border-stone-200 dark:border-[#101524] bg-[#FAFAF9] dark:bg-[#070B16] overflow-hidden hover:border-stone-300 dark:hover:border-[#3A3A3A] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + i * 0.08 }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-[#00030E]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />

                {/* Social links — appear on hover */}
                <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                    className="p-1.5 rounded-lg bg-white/90 dark:bg-[#070B16]/90 backdrop-blur-sm text-stone-600 dark:text-stone-400 hover:text-[#1258AB] border border-white/50 dark:border-[#101524] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="p-1.5 rounded-lg bg-white/90 dark:bg-[#070B16]/90 backdrop-blur-sm text-stone-600 dark:text-stone-400 hover:text-[#1258AB] border border-white/50 dark:border-[#101524] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-[16px] text-stone-900 dark:text-stone-100 group-hover:text-[#1258AB] dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#1258AB] dark:text-blue-400 uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mt-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
