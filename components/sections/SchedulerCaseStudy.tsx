'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowDown, Database, GitBranch, LockKeyhole, Server, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const sections = [
  {
    number: '01',
    title: 'Problem',
    body: 'Reliable background work needs more than a timer: multiple service instances must coordinate execution, detect stalled workers, and recover from failures without making the workflow opaque.',
  },
  {
    number: '02',
    title: 'Architecture',
    body: 'The project is organized around a Spring Boot REST API, PostgreSQL-backed job data, Redis coordination, and workers responsible for execution.',
  },
  {
    number: '03',
    title: 'Core Engineering',
    body: 'Scheduling, heartbeats, and distributed locking form the coordination layer. Retry and recovery behavior keeps interrupted work from disappearing silently.',
  },
  {
    number: '04',
    title: 'Reliability',
    body: 'The design explicitly considers duplicate execution, worker liveness, retries, and failure recovery. The implementation details remain intentionally high-level here rather than assuming behavior not documented in the project source.',
  },
  {
    number: '05',
    title: 'Testing',
    body: 'JUnit and Mockito support focused unit tests, while Testcontainers provides an environment for testing behavior against real service dependencies.',
  },
  {
    number: '06',
    title: 'Deployment',
    body: 'The project is designed around Docker, Kubernetes, and AWS deployment workflows so the API, coordination layer, and workers can be operated as services.',
  },
  {
    number: '07',
    title: 'Trade-offs',
    body: 'Redis is used for coordination while PostgreSQL remains the durable store. This keeps responsibilities distinct, but it also means correctness depends on carefully defining lock, heartbeat, and recovery boundaries.',
  },
];

function ArchitectureDiagram() {
  const nodes = [
    { label: 'Client', icon: Server },
    { label: 'Spring Boot API', icon: GitBranch },
    { label: 'PostgreSQL', icon: Database },
    { label: 'Redis coordination', icon: LockKeyhole },
    { label: 'Workers', icon: ShieldCheck },
  ];

  return (
    <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4 sm:p-6" aria-label="Distributed job scheduler architecture">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-3">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-1 sm:flex-row">
            <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-slate-200">
              <node.icon className="h-4 w-4 text-cyan-300" />
              <span>{node.label}</span>
            </div>
            {index < nodes.length - 1 && <ArrowDown className="h-4 w-4 shrink-0 text-cyan-400 sm:rotate-[-90deg]" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SchedulerCaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="scheduler-case-study" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Featured Case Study</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Distributed Job Scheduler</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            A closer look at the concurrency, coordination, reliability, testing, and deployment concerns behind the primary backend project.
          </p>
          <Link href="/projects/distributed-job-scheduler" className="mt-4 inline-flex text-sm font-medium text-cyan-300 hover:text-cyan-200">
            Read the full case study
          </Link>
        </motion.div>

        <ArchitectureDiagram />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.article
              key={section.number}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.05 + index * 0.04 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <p className="font-mono text-xs text-cyan-300">{section.number}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-100">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{section.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
