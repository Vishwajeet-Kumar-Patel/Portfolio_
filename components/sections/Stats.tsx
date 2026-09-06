'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitPullRequest, SearchCode, Trophy, Workflow } from 'lucide-react';

const proofItems = [
  { value: '500+', label: 'DSA Problems', href: 'https://leetcode.com/u/vishwajeet_kumar_patel/', icon: Trophy },
  { value: '2', label: 'Software Engineering Internships', href: '#experience', icon: Workflow },
  { value: '47', label: 'LangChain CI Checks Passed', href: '#opensource', icon: GitPullRequest },
  { value: '2', label: 'Open Source Contributions', href: '#opensource', icon: SearchCode },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section ref={ref} className="relative px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Engineering proof</p>
              <h2 className="mt-1 text-lg font-semibold text-white">Signals that support the work</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-xl border border-transparent bg-slate-900/65 p-4 shadow-[0_0_0_1px_rgba(34,211,238,0.05)] transition hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-3">
                <div className="rounded-lg border border-cyan-400/15 bg-cyan-500/10 p-2 text-cyan-300 transition group-hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none text-white">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                </div>
              </a>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
