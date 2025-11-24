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
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Passionate AI & Full-Stack Developer
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Final-year B.Tech (CSE – AI Specialization) student passionate
                  about Generative AI and Full-Stack Development. Skilled in
                  building secure, scalable applications that integrate LLMs,
                  Prompt Engineering, and modern web frameworks.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Career Goal
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Seeking to contribute as a Software Engineer Trainee – Gen AI
                  by designing intelligent systems that reason, plan, and act
                  autonomously. Committed to building the future of AI-driven
                  applications.
                </p>
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
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl from-blue-500/50 to-cyan-500/50" />
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${strength.color} mb-4`}
                  >
                    <strength.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-sm">
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
