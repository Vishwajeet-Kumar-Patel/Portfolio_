'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BadgeCheck, Database, Gauge, Layers, ShieldCheck, Zap } from 'lucide-react';

const principles = [
  {
    icon: Zap,
    title: 'Caching Strategy',
    detail: 'Use cache-aside patterns and TTL design intentionally, with clear invalidation boundaries for correctness.',
  },
  {
    icon: Layers,
    title: 'Concurrency Handling',
    detail: 'Prefer explicit state transitions, idempotent endpoints, and queue-aware execution for race-prone paths.',
  },
  {
    icon: ShieldCheck,
    title: 'API Reliability',
    detail: 'Build around retries, timeouts, and graceful fallbacks so services degrade predictably under load or dependency failures.',
  },
  {
    icon: Database,
    title: 'Database Optimization',
    detail: 'Focus on query plans, indexes, and read/write path design before scaling infrastructure blindly.',
  },
  {
    icon: Gauge,
    title: 'Distributed Systems',
    detail: 'Design with service boundaries, observability, and failure modes in mind from the first iteration.',
  },
  {
    icon: BadgeCheck,
    title: 'AI Workflow Integration',
    detail: 'Treat AI flows like production systems: retrieval quality, guardrails, latency budgets, and measurable outcomes.',
  },
];

export default function SystemMindset() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="mindset" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Engineering Mindset</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">How I think about system design</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I optimize for systems that keep working under real load, are easier to reason about, and can be improved without
            constant rewrites. The focus is reliable backend architecture with practical AI integration.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <principle.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-base font-semibold text-slate-100">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{principle.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
