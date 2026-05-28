'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Boxes, CloudCog, Database, Server, TerminalSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Frontend',
    icon: Boxes,
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Responsive UI', 'HTML', 'CSS'],
  },
  {
    title: 'AI / GenAI',
    icon: Bot,
    skills: ['LangChain', 'LangGraph', 'RAG', 'Vector Embeddings', 'Prompt Engineering', 'Qdrant'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudCog,
    skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Languages',
    icon: TerminalSquare,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative border-t border-slate-900 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Technology stack I use to ship systems</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: categoryIndex * 0.06 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-base font-semibold text-slate-100">{category.title}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-400">
          <p className="flex items-center gap-2 text-slate-300">
            <Boxes className="h-4 w-4 text-cyan-300" />
            Current preference: pragmatic architecture, explicit interfaces, and operational simplicity.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">LeetCode</p>
              <h3 className="mt-2 text-lg font-semibold text-white">DSA practice and problem-solving discipline</h3>
              <p className="mt-1 text-sm text-slate-400">400+ problems solved with a focus on backend reasoning and interview readiness.</p>
            </div>

            <a
              href="https://leetcode.com/u/vishwajeet_kumar_patel/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-300"
            >
              View LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
