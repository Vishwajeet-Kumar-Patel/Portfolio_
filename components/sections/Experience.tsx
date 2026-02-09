'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Shield } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'StuFit Approach Pvt. Ltd., Lucknow',
      duration: 'July 2025 – September 2025',
      location: 'Lucknow, India',
      icon: Briefcase,
      achievements: [
        'Designed and shipped scalable backend services using NestJS and PostgreSQL, supporting 2,000+ active users',
        'Owned backend modules end-to-end including API design, implementation, testing, deployment, and production support',
        'Optimized database queries and execution paths, achieving ~30% reduction in API latency',
        'Implemented secure authentication and role-based access control (JWT + RBAC)',
        'Debugged and resolved production incidents, improving system reliability and user experience',
        'Collaborated with senior engineers through code reviews, Agile sprints, and structured feedback',
      ],
      technologies: ['NestJS', 'PostgreSQL', 'JWT', 'RBAC', 'AWS', 'Agile'],
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section
      id="experience"
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
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 hidden md:block" />

          {experiences.map((experience, expIndex) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + expIndex * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative md:ml-16 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className="absolute -left-12 top-8 hidden md:block">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${experience.gradient} flex items-center justify-center shadow-lg shadow-blue-500/50`}>
                    <experience.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-4">
                      {experience.company}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + expIndex * 0.2 + index * 0.1 }}
                      className="flex items-start group"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-slate-300 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + expIndex * 0.2 }}
                  className="mt-6 pt-6 border-t border-slate-700/50"
                >
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.9 + expIndex * 0.2 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
