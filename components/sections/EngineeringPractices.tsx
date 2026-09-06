'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const practiceGroups = [
  { title: 'Testing', items: ['JUnit', 'Mockito', 'Jest', 'Testcontainers'] },
  { title: 'API Engineering', items: ['REST', 'Authentication', 'JWT', 'Validation', 'API Documentation'] },
  { title: 'Reliability', items: ['Retries', 'Failure Recovery', 'Distributed Locking', 'Concurrency'] },
  { title: 'Performance', items: ['Indexing', 'Query Optimization', 'Caching', 'Async Processing'] },
  { title: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD'] },
];

export default function EngineeringPractices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="practices" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Engineering Practices</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">How I make backend work dependable</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practiceGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-base font-semibold text-slate-100">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
