'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';

const systemCards = [
  { label: 'API', x: '12%', y: '12%', rotate: -12 },
  { label: 'DB', x: '0%', y: '48%', rotate: 8 },
  { label: 'Cloud', x: '72%', y: '12%', rotate: 8 },
  { label: 'AI', x: '78%', y: '56%', rotate: -10 },
];

const featureLines = [
  { x1: '24%', y1: '30%', x2: '48%', y2: '30%' },
  { x1: '28%', y1: '58%', x2: '50%', y2: '54%' },
  { x1: '60%', y1: '22%', x2: '78%', y2: '18%' },
  { x1: '58%', y1: '60%', x2: '76%', y2: '56%' },
];

function SystemIllustration() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[520px] overflow-hidden rounded-[1.75rem] border border-cyan-400/15 bg-slate-950/70 p-4 shadow-[0_0_80px_rgba(34,211,238,0.08)] sm:h-[440px] sm:max-w-[560px] sm:p-5 lg:h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),_transparent_45%)]" />
      <div className="absolute inset-0 opacity-40 section-grid [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border border-cyan-400/35 bg-slate-900/90 shadow-[0_0_50px_rgba(34,211,238,0.25)] sm:h-36 sm:w-36 lg:h-44 lg:w-44 lg:rounded-[2rem]"
        animate={{ rotateY: [0, 12, 0], rotateX: [0, -8, 0], y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-2 rounded-[1rem] border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(10,14,28,0.9),rgba(0,0,0,0.5))] sm:inset-3 sm:rounded-[1.3rem]" />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-cyan-300 sm:text-4xl lg:text-5xl">
          {'</>'}
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[18%] h-14 w-14 -translate-x-1/2 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur sm:h-16 sm:w-16 lg:h-20 lg:w-20"
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[8%] top-[58%] h-16 w-16 rounded-2xl border border-blue-400/20 bg-slate-900/90 shadow-[0_0_30px_rgba(59,130,246,0.18)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
        animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[8%] top-[24%] h-16 w-16 rounded-2xl border border-fuchsia-400/20 bg-slate-900/90 shadow-[0_0_30px_rgba(168,85,247,0.15)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[9%] bottom-[18%] h-16 w-16 rounded-2xl border border-cyan-400/25 bg-slate-900/90 shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
        animate={{ y: [0, 7, 0], x: [0, -6, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {featureLines.map((line, index) => (
        <motion.svg
          key={index}
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 3.8 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(34,211,238,0.55)"
            strokeWidth="0.4"
            strokeDasharray="1.2 1.6"
          />
        </motion.svg>
      ))}

      {systemCards.map((card, index) => (
        <motion.div
          key={card.label}
          className="absolute rounded-2xl border border-cyan-400/20 bg-slate-950/75 px-3 py-2 text-[11px] font-medium text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.12)] backdrop-blur sm:px-4 sm:py-3 sm:text-sm"
          style={{ left: card.x, top: card.y, transform: `rotate(${card.rotate}deg)` }}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-400">Module</span>
          <span>{card.label}</span>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-4 top-4 rounded-2xl border border-cyan-400/15 bg-slate-900/80 px-3 py-2 text-[10px] text-slate-300 shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-3 sm:text-xs"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        Distributed APIs
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 rounded-2xl border border-blue-400/15 bg-slate-900/80 px-3 py-2 text-[10px] text-slate-300 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:py-3 sm:text-xs"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        AI Workflows
      </motion.div>
      <motion.div
        className="absolute right-4 bottom-4 rounded-2xl border border-fuchsia-400/15 bg-slate-900/80 px-3 py-2 text-[10px] text-slate-300 shadow-lg backdrop-blur sm:right-5 sm:bottom-5 sm:px-4 sm:py-3 sm:text-xs"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Cloud Ready
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [glow, setGlow] = useState({ x: 50, y: 35 });

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setGlow({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseLeave={() => setGlow({ x: 50, y: 35 })}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_rgba(2,6,23,0)_40%),linear-gradient(180deg,#020617_0%,#020617_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 section-grid [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(34,211,238,0.12), transparent 28%)`,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96"
        animate={{ y: [0, 12, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96"
        animate={{ y: [0, -10, 0], x: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:items-start lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
              Software Engineer x Backend x Distributed Systems
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Vishwajeet Kumar
              </h1>
              <p className="max-w-3xl text-xl font-medium leading-tight text-cyan-200 sm:text-2xl lg:text-3xl">
                Software Engineer | Backend &amp; Distributed Systems
              </p>
            </div>

            <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Building reliable backend systems with Java, Python, Spring Boot, FastAPI, PostgreSQL, Redis, AWS and Kubernetes.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/Vishwajeet_Kumar_Resume_SWE.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
              <a href="https://github.com/Vishwajeet-Kumar-Patel" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vishwajeet-kumar-00b817239" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/vishwajeet_kumar_patel/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current text-cyan-300"><path d="M13.5 3.5l-6 6a2 2 0 000 2.828l6 6 1.414-1.414-6-6 6-6z" /></svg>
                LeetCode
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>

            <p className="text-sm font-medium text-cyan-200">
              500+ DSA Problems <span className="px-1 text-slate-600">•</span> 2 Software Engineering Internships <span className="px-1 text-slate-600">•</span> LangChain Open Source Contributor
            </p>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300">Currently open to</p>
              <p className="mt-2 font-medium text-slate-100">Software Engineer • SDE-1 • Backend Engineer • Full Stack Engineer • AI/Backend Engineer</p>
              <p className="mt-1 text-slate-400">Open to opportunities across India and remote roles.</p>
            </div>

            <div className="grid gap-4 pt-2 text-sm text-slate-400 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-4 backdrop-blur-sm">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300">Focus</p>
                <p className="mt-2 text-slate-300">Scalable APIs, event-driven services, and AI-assisted product workflows</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-4 backdrop-blur-sm">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300">Approach</p>
                <p className="mt-2 text-slate-300">Design for reliability first, then optimize latency and operability</p>
              </div>
              <a href="#projects" className="group rounded-2xl border border-slate-800 bg-slate-900/55 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300">Recent Work</p>
                <p className="mt-2 flex items-center gap-2 text-slate-300">
                  Explore production-oriented projects
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative lg:pt-16"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-cyan-500/5 blur-3xl" />
            <SystemIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
