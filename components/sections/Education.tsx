'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Calendar, GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech Computer Science & Engineering (Artificial Intelligence)',
    institution: 'University of Lucknow',
    duration: 'Nov 2022 – Jun 2026',
    score: 'CGPA: 8.17 / 10',
    icon: GraduationCap,
    gradient: 'from-cyan-400 to-blue-500',
    description:
      'Focused on computer science fundamentals, AI specialization, backend architecture, distributed systems, and production software engineering.',
    tags: ['Computer Science', 'AI Specialization', 'Backend Systems'],
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Manas Convent School, CBSE',
    duration: '2021 – 2022',
    score: '74.2%',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Physics, Chemistry, Mathematics, and English.',
  },
  {
    degree: 'Secondary (X)',
    institution: 'Manas Convent School, CBSE',
    duration: '2019 – 2020',
    score: '84%',
    icon: School,
    gradient: 'from-indigo-500 to-violet-500',
    description: 'Mathematics, Science, Social Studies, English, and Hindi.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} className="relative border-t border-slate-900 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Education</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Formal training that supports the engineering work</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 opacity-60 md:left-6" />

          <div className="space-y-5">
            {educationData.map((edu, index) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative pl-10 md:pl-14"
              >
                <div className={`absolute left-[10px] top-6 h-4 w-4 rounded-full bg-gradient-to-br ${edu.gradient} shadow-[0_0_18px_rgba(34,211,238,0.55)] md:left-[18px]`} />
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-sm transition hover:border-cyan-500/40">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl bg-gradient-to-br ${edu.gradient} p-3 shadow-lg shadow-cyan-500/10`}>
                        <edu.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">{edu.degree}</h3>
                        <p className="mt-1 text-sm text-cyan-300 sm:text-base">{edu.institution}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{edu.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-slate-400 sm:text-right">
                      <p className="flex items-center gap-2 sm:justify-end">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </p>
                      <p className="flex items-center gap-2 sm:justify-end">
                        <Award className="h-4 w-4 text-cyan-300" />
                        <span className="font-semibold text-slate-100">{edu.score}</span>
                      </p>
                    </div>
                  </div>

                  {edu.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
