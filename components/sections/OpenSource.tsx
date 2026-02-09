'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitPullRequest, ExternalLink, Github, CheckCircle } from 'lucide-react';

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
      githubLink: 'https://github.com/langchain-ai/langchain',
      description:
        'Contributed a core feature to LangChain by enhancing init_chat_model, a central API used for initializing chat models across providers. The contribution improved robustness, developer experience, and production readiness of the framework.',
      keyContributions: [
        'Improved input validation and model inference logic in init_chat_model',
        'Added comprehensive unit tests to ensure correctness and prevent regressions',
        'Fixed linting issues and resolved CI pipeline failures',
        'Collaborated with maintainers through multiple review cycles to refine the implementation',
        'Gained hands-on experience working with a large, production-grade open-source codebase',
      ],
      techStack: ['Python', 'LangChain Core', 'Pytest', 'CI/CD', 'GitHub Actions'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Next.js',
      subtitle: 'Documentation Enhancement',
      role: 'Open Source Contributor',
      repository: 'vercel/next.js',
      prLink: 'https://github.com/vercel/next.js/pull/87654',
      githubLink: 'https://github.com/vercel/nextjs',
      description:
        'Enhanced the App Router internationalization documentation with practical improvements for better developer experience. Added installation instructions, best practices for SEO optimization, locale persistence patterns, and TypeScript examples. PR has been approved and is awaiting merge from maintainers with write access.',
      keyContributions: [
        'Added installation commands and dependency setup for internationalization packages',
        'Created comprehensive Best Practices section covering SEO optimization with hreflang tags and locale persistence using cookies',
        'Improved middleware examples and restructured proxy patterns for better clarity',
        'Collaborated with Next.js maintainers through multiple review cycles to align with documentation standards',
        'PR approved after addressing feedback on Metadata API patterns, type definitions, and redirect logic',
      ],
      techStack: ['Next.js', 'TypeScript', 'MDX', 'Documentation', 'i18n'],
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section
      id="opensource"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Open Source Contributions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Contributing to the open-source community and building production-grade features
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contribution.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
              />
              <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${contribution.gradient} shadow-lg`}
                      >
                        <GitPullRequest className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {contribution.title}
                        </h3>
                        <p className="text-lg text-green-400 font-semibold">
                          {contribution.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 mb-2">
                      <span className="font-semibold">Role:</span> {contribution.role}
                    </p>
                    <p className="text-slate-400 mb-4">
                      <span className="font-semibold">Repository:</span> {contribution.repository}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4 md:mt-0">
                    {contribution.prLink && (
                      <motion.a
                        href={contribution.prLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-colors"
                        title="View Pull Request"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 hover:text-green-400" />
                      </motion.a>
                    )}
                    {contribution.githubLink && (
                      <motion.a
                        href={contribution.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-colors"
                        title="View Repository"
                      >
                        <Github className="w-5 h-5 text-slate-400 hover:text-green-400" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {contribution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    Key Contributions:
                  </h4>
                  <ul className="space-y-3">
                    {contribution.keyContributions.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + itemIndex * 0.1,
                        }}
                        className="flex items-start text-slate-300"
                      >
                        <div className="min-w-[6px] w-1.5 h-1.5 rounded-full bg-green-400 mt-2 mr-3" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {contribution.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
