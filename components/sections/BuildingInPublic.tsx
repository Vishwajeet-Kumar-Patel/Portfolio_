'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, GitPullRequest } from 'lucide-react';
import { useRef } from 'react';

const links = [
  { label: 'GitHub profile', href: 'https://github.com/Vishwajeet-Kumar-Patel', icon: Github },
  { label: 'AI code review system', href: 'https://github.com/Vishwajeet-Kumar-Patel/AI_Code_PR_Reviewer', icon: ExternalLink },
  { label: 'Real-time multiplayer backend', href: 'https://github.com/Vishwajeet-Kumar-Patel/Ludo', icon: ExternalLink },
  { label: 'LangChain contribution', href: 'https://github.com/langchain-ai/langchain/pull/34226', icon: GitPullRequest },
];

export default function BuildingInPublic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="building-in-public" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Building in Public</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Code, systems, and contributions</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              Selected public work for a closer look at backend systems, applied AI projects, and open-source engineering.
            </p>
          </div>
          <a href="https://github.com/Vishwajeet-Kumar-Patel" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
            Visit GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
            >
              <span className="flex items-center gap-3"><link.icon className="h-4 w-4 text-cyan-300" />{link.label}</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
