'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Gauge, Network, Router, Sparkles, Workflow } from 'lucide-react';

const pillars = [
  {
    icon: Router,
    title: 'Backend Systems',
    description: 'Designing service boundaries, API contracts, and operational patterns for production workloads.',
  },
  {
    icon: Network,
    title: 'Distributed Architecture',
    description: 'Building for concurrency, consistency, and graceful degradation in networked systems.',
  },
  {
    icon: Workflow,
    title: 'AI-Assisted Workflows',
    description: 'Integrating retrieval, orchestration, and inference into practical backend products.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Profiling bottlenecks, tuning hot paths, and improving API and query latency.',
  },
  {
    icon: Sparkles,
    title: 'Real-Time Engineering',
    description: 'Delivering websocket and event-driven flows with clear state handling and reliability.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Deploying and operating backend systems with AWS, containers, and CI/CD pipelines.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative border-t border-slate-900 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Engineering-first product builder</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I focus on backend systems that are reliable in production and straightforward to operate. My work combines
            scalable APIs, distributed service communication, real-time application behavior, and AI-backed features where
            they provide clear product value. I prefer measurable improvements over hype and prioritize maintainable systems.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <pillar.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-base font-semibold text-slate-100">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
