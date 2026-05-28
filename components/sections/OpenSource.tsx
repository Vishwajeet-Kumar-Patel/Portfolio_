'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, ExternalLink, GitPullRequest } from 'lucide-react';

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contributions = [
    {
      title: 'LangChain',
      subtitle: 'Core Framework Contribution',
      role: 'Open Source Contributor',
      repository: 'langchain-ai/langchain',
      prLink: 'https://github.com/langchain-ai/langchain/pull/34226',
      description:
        'Contributed to LangChain internals by improving reliability around model initialization and developer-facing behavior in production-centric code paths.',
      keyContributions: [
        'Improved validation logic for safer model setup and clearer failure handling',
        'Enhanced inference-related workflow behavior in initialization paths',
        'Added targeted test coverage to prevent regressions in edge scenarios',
        'Worked through maintainer review cycles with iterative PR refinements',
      ],
      techStack: ['Python', 'LangChain Core', 'Pytest', 'CI/CD', 'GitHub Actions'],
    },
    {
      title: 'Next.js',
      subtitle: 'Documentation Contribution',
      role: 'Open Source Contributor',
      repository: 'vercel/next.js',
      prLink: 'https://github.com/vercel/next.js/pull/87654',
      description:
        'Improved the App Router internationalization documentation with clearer guidance for setup, SEO, and locale handling.',
      keyContributions: [
        'Added setup and installation guidance for internationalization workflows',
        'Documented SEO best practices including locale-aware metadata and hreflang usage',
        'Improved examples for middleware and locale persistence patterns',
        'Refined content through review cycles to align with maintainers’ documentation standards',
      ],
      techStack: ['Next.js', 'TypeScript', 'MDX', 'Documentation', 'i18n'],
    },
  ];

  return (
    <section
      id="opensource"
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
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Open Source</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Contributions to production tooling</h2>
        </motion.div>

        <div className="space-y-6">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.08 + index * 0.1 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
                    <GitPullRequest className="h-3.5 w-3.5 text-cyan-300" />
                    {contribution.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-100">{contribution.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{contribution.role} · {contribution.repository}</p>
                </div>

                <a
                  href={contribution.prLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300 transition hover:border-slate-500"
                >
                  PR
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">{contribution.description}</p>

              <div className="mt-4 space-y-2">
                {contribution.keyContributions.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.16 + itemIndex * 0.06 }}
                    className="flex items-start text-sm text-slate-400"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                    <span className="ml-2.5">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                {contribution.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">
                    {tech}
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
