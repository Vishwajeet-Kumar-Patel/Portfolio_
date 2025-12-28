'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Code,
  Zap,
  Users,
  Target,
  Lightbulb,
} from 'lucide-react';

const strengths = [
  { icon: Brain, title: 'Analytical Thinking', color: 'from-blue-500 to-cyan-500' },
  { icon: Code, title: 'Clean Code Practices', color: 'from-cyan-500 to-teal-500' },
  { icon: Zap, title: 'Problem Solving', color: 'from-teal-500 to-green-500' },
  { icon: Users, title: 'Agile Collaboration', color: 'from-green-500 to-emerald-500' },
  { icon: Target, title: 'AI Innovation', color: 'from-emerald-500 to-blue-500' },
  { icon: Lightbulb, title: 'Creative Solutions', color: 'from-blue-500 to-purple-500' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 light:from-slate-50 light:via-white light:to-slate-100"
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white light:to-slate-50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
                  Backend-Focused Software Development Engineer
                </h3>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-lg">
                  Backend-focused Software Development Engineer with experience building scalable systems, 
                  low-latency distributed backends, and AI-powered services. Strong in Node.js, NestJS, Redis, 
                  PostgreSQL, WebSockets, AWS, and FastAPI, with hands-on open-source contributions to 
                  production-grade AI libraries. Currently pursuing B.Tech in Computer Science and Engineering 
                  (AI Specialization) from University of Lucknow (SGPA: 8.10).
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white light:to-slate-50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
                  Technical Expertise
                </h3>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-lg mb-6">
                  Specializing in building real-time distributed backend systems with expertise in microservices 
                  architecture, WebSocket communications, Redis caching, and cloud deployment on AWS. Active 
                  contributor to open-source AI projects including LangChain, with proven experience in developing 
                  high-performance, scalable applications that handle concurrent users and optimize for low-latency operations.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600">
                    Core Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'NestJS', 'FastAPI', 'Redis', 'PostgreSQL', 'WebSockets', 'AWS', 'Microservices'].map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl`} />
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-950/50 dark:from-blue-900/50 dark:to-blue-950/50 light:from-white light:to-blue-50/30 backdrop-blur-sm border border-blue-700/30 dark:border-blue-700/30 light:border-blue-300/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 light:hover:border-blue-500 transition-all h-full">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${strength.color} mb-4`}
                  >
                    <strength.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white dark:text-white light:text-blue-700 font-semibold text-sm">
                    {strength.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
