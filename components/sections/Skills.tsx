'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: [
      'Generative AI',
      'LLMs (OpenAI, Gemini)',
      'LangChain',
      'Prompt Engineering',
      'NLP',
      'Vector DBs (Pinecone)',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'HTML5/CSS3'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'FastAPI', 'REST APIs'],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript (ES6+)', 'Java', 'C#'],
    gradient: 'from-emerald-500 to-blue-500',
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Postman', 'Agile Scrum', 'JWT Security', 'CI/CD Basics'],
    gradient: 'from-purple-500 to-pink-500',
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
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all h-full">
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
                      className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
