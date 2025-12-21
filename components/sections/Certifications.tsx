'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Cloud, Code, TrendingUp } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage',
    date: 'August 16th, 2025',
    description: 'Designed a simple, scalable, hosting architecture',
    icon: Cloud,
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Deloitte Technology Job Simulation',
    issuer: 'Forage',
    date: 'August 16th, 2025',
    description: 'Coding Development',
    icon: Code,
    gradient: 'from-green-600 to-green-400',
  },
  {
    title: 'Goldman Sachs Operations Job Simulation',
    issuer: 'Forage',
    date: 'August 16th, 2025',
    description: 'Foundations of operations, Facilitating ultra-high net worth transactions',
    icon: TrendingUp,
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'OpenAI',
    icon: Award,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Full-Stack Development',
    issuer: 'MERN Stack',
    icon: Trophy,
    gradient: 'from-cyan-500 to-teal-500',
  },
];

const achievements = [
  {
    title: 'GitHub Pro Developer',
    description: 'Advanced developer status on GitHub',
    icon: Star,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Google Cloud Innovator',
    description: 'Google Cloud Platform recognition',
    icon: Star,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Tech Equity Collective Member',
    description: 'Google Developers Community',
    icon: Star,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
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
              Certifications & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
                />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.gradient} mb-6 shadow-lg`}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-1">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-slate-400 text-sm mb-2">{cert.date}</p>
                  )}
                  {cert.description && (
                    <p className="text-slate-300 text-sm mt-3">{cert.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Recognition & Community
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
                />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all h-full flex flex-col">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${achievement.gradient} mb-4 self-start`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
