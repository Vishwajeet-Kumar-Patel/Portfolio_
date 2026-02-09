'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Trophy } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Engineering',
    skills: ['Node.js', 'NestJS', 'Spring Boot', 'REST APIs', 'Microservices', 'WebSockets'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript'],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    title: 'Databases & Caching',
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Distributed Systems',
    skills: ['Stateless Services', 'Concurrency Handling', 'Rate Limiting', 'Horizontal Scaling'],
    gradient: 'from-emerald-500 to-blue-500',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, RDS)', 'Docker', 'CI/CD', 'GitHub Actions', 'Git'],
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Security & Auth',
    skills: ['JWT', 'RBAC'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Computer Science',
    skills: ['Data Structures & Algorithms', 'OOPs', 'System Design', 'Low-Level & High-Level Design'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'AI & ML',
    skills: [
      'Generative AI',
      'LLMs (OpenAI, Gemini)',
      'LangChain',
      'Prompt Engineering',
      'RAG',
      'Vector Embeddings',
    ],
    gradient: 'from-rose-500 to-orange-500',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Expertise in cutting-edge technologies for building intelligent,
            scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
              />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white light:to-slate-50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-slate-600 transition-all h-full">
                <div
                  className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} mb-6`}
                >
                  <h3 className="text-white font-bold text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Data Structures & Algorithms
                    </h3>
                    <p className="text-orange-400 font-semibold text-lg">
                      400+ Problems Solved on LeetCode
                    </p>
                  </div>
                </div>
                <motion.a
                  href="https://leetcode.com/u/vishwajeet_kumar_patel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
