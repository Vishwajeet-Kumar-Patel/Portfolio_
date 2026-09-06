'use client';

import { motion, useInView } from 'framer-motion';
import { Cloud, Cpu, Network, Server } from 'lucide-react';
import { useRef } from 'react';

const categories = [
  {
    title: 'Backend Systems',
    icon: Server,
    description: 'REST APIs, authentication, databases, caching, asynchronous processing, modular services, and microservices.',
  },
  {
    title: 'Distributed Systems',
    icon: Network,
    description: 'Scheduling, distributed locking, retries, failure recovery, concurrency, and real-time communication.',
  },
  {
    title: 'AI Applications',
    icon: Cpu,
    description: 'RAG systems, embeddings, AI agents, code intelligence, and LLM-powered developer tools.',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'AWS, Docker, Kubernetes, GitHub Actions, and CI/CD for deployable backend systems.',
  },
];

export default function WhatIBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="what-i-build" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">What I Build</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Backend work with clear engineering purpose</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <category.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{category.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
