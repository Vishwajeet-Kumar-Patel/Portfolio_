'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Distributed Job Scheduler',
    description:
      'A distributed scheduling backend for reliable job execution across multiple service instances.',
    highlights: [
      'Distributed locking and heartbeats coordinate workers and reduce duplicate execution',
      'Retry mechanisms and failure recovery handle interrupted jobs',
      'REST APIs with JUnit, Mockito, and Testcontainers coverage',
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel',
  },
  {
    title: 'Real-Time Multiplayer Backend',
    description:
      'A realtime backend for multiplayer sessions that coordinates concurrent connections and shared game state.',
    highlights: [
      'WebSocket communication for low-latency room-scoped updates',
      'Redis-backed state and PostgreSQL persistence for session workflows',
      'AWS-oriented backend architecture for realtime workloads',
    ],
    techStack: ['Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Ludo',
  },
  {
    title: 'Autonomous Codebase Engineer',
    description:
      'An agentic backend workflow that analyzes repositories, plans modifications, and executes scoped engineering tasks with explicit state and reviewable actions.',
    highlights: [
      'LangGraph orchestration for analysis, planning, and execution stages',
      'FastAPI service boundaries for controlled engineering workflows',
      'PostgreSQL-backed task state for traceable progress',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'PostgreSQL'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel',
  },
  {
    title: 'AI-Powered Code Review System',
    description:
      'A backend platform for repository-aware pull request analysis using retrieval and LLM reasoning to deliver contextual quality feedback.',
    highlights: [
      'RAG pipeline with embeddings and Qdrant vector search for code-aware context',
      'FastAPI service designed for asynchronous repository and PR analysis',
      'Analysis workflow focused on contextual, reviewable feedback',
    ],
    techStack: ['FastAPI', 'LangChain', 'RAG', 'Embeddings', 'Qdrant'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/AI_Code_PR_Reviewer',
  },
  {
    title: 'EduIntel AI Career Intelligence Platform',
    description:
      'An AI-backed career intelligence platform with modular APIs and retrieval-backed workflows for career insights.',
    highlights: [
      'LangChain and LangGraph workflows for structured career intelligence',
      'RAG and embeddings for retrieval-backed recommendations',
      'MongoDB and Redis for application data and fast access patterns',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'MongoDB', 'Redis'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Resume_Scorer',
  },
  {
    title: 'Monetized Link Shortener',
    description: 'A backend for link creation, redirect handling, and monetization-oriented campaign workflows.',
    highlights: [
      'Redis caching for read-heavy redirect paths',
      'PostgreSQL persistence and indexing for link lookups',
      'API-driven separation between redirect delivery and management workflows',
    ],
    techStack: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/URL_Shortener',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Production-oriented systems and AI workflows</h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={`rounded-xl border bg-slate-900/60 p-6 ${index === 0 ? 'border-cyan-400/35 shadow-[0_0_40px_rgba(34,211,238,0.08)] lg:col-span-2' : 'border-slate-800'}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-slate-500"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source
                </a>
              </div>

              {index === 0 && (
                <a href="#scheduler-case-study" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-300 hover:text-cyan-200">
                  Read the case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}

              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

              <div className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <p key={highlight} className="flex items-start gap-2 text-sm text-slate-400">
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cyan-300" />
                    {highlight}
                  </p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
