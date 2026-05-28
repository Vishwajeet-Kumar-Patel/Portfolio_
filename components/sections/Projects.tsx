'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Monetized Link Shortener SaaS',
    description:
      'A read-heavy SaaS backend designed for high-throughput redirects, monetization hooks, cache-aware routing, and API-driven campaign management. The architecture emphasizes low-latency redirects, safe write paths, and clean separation between business logic, persistence, and delivery.',
    highlights: [
      'Redis-first redirect path with TTL strategy and fallback database reads',
      'Rate limiting and abuse protection at API and redirect edges',
      'PostgreSQL indexing strategy for high-cardinality link lookups',
    ],
    techStack: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/URL_Shortener',
  },
  {
    title: 'Autonomous Codebase Engineer (AI Agent)',
    description:
      'An agentic backend workflow that analyzes repositories, plans modifications, and executes scoped engineering tasks with guardrails for reliability and traceability. The system is designed around bounded actions, explicit state transitions, and observability so automated changes remain reviewable and safe.',
    highlights: [
      'Multi-step orchestration for analysis, planning, and execution stages',
      'Task state tracking, retry behavior, and deterministic action boundaries',
      'Designed for production-safe automation instead of one-shot prompting',
    ],
    techStack: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'PostgreSQL'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel',
  },
  {
    title: 'AI-Powered Code Review System',
    description:
      'A backend platform for repository-aware pull request analysis using retrieval and LLM reasoning to deliver contextual quality feedback. It combines embeddings, indexed context retrieval, and analysis workflows that help turn code review into a more scalable engineering process.',
    highlights: [
      'RAG pipeline with embeddings and vector search for code-aware context',
      'Async job execution for scalable repository and PR analysis',
      'API architecture designed to integrate with developer workflows',
    ],
    techStack: ['FastAPI', 'LangChain', 'RAG', 'Vector Embeddings', 'Qdrant'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/AI_Code_PR_Reviewer',
  },
  {
    title: 'Real-Time Multiplayer Backend System',
    description:
      'A distributed realtime backend supporting concurrent sessions, synchronized state updates, and fault-tolerant session lifecycle management. It focuses on room-scoped communication, race-condition avoidance, and stateless deployment patterns that can scale horizontally.',
    highlights: [
      'Redis-based ephemeral state for low-latency room updates',
      'WebSocket event routing with room-scoped communication',
      'Stateless service deployment model for horizontal scaling',
    ],
    techStack: ['Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Ludo',
  },
  {
    title: 'EduIntel AI Career Platform',
    description:
      'An AI-backed career intelligence platform with backend pipelines for resume parsing, ranking, and recommendation services. The platform is built around modular APIs, scored workflows, and retrieval-backed insights that can support future product expansion.',
    highlights: [
      'Structured ingestion and scoring pipeline for resume data',
      'Retrieval-powered recommendation workflows with embedding search',
      'Modular APIs for integration with frontend and partner tooling',
    ],
    techStack: ['Node.js', 'FastAPI', 'MongoDB', 'LLMs', 'Vector Embeddings'],
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Resume_Scorer',
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
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
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
