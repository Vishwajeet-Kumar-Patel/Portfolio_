'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, School } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      specialization: 'Specialization in Artificial Intelligence',
      institution: 'University of Lucknow',
      duration: 'Nov 2022 – Present',
      score: 'SGPA: 9.08',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
      highlights: [
        { label: 'Final Year', sublabel: 'Current Status' },
        { label: 'AI Focus', sublabel: 'Specialization' },
        { label: '3+ Years', sublabel: 'Duration' },
      ],
    },
    {
      degree: 'Senior Secondary (XII)',
      specialization: 'Physics, Chemistry, Mathematics, English',
      institution: 'Manas Convent School, CBSE',
      duration: '2021 – 2022',
      score: '74.2%',
      icon: BookOpen,
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      degree: 'Secondary (X)',
      specialization: 'Mathematics, Science, Social Studies, English, Hindi',
      institution: 'Manas Convent School, CBSE',
      duration: '2019 – 2020',
      score: '84%',
      icon: School,
      gradient: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section
      id="education"
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative md:ml-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute -left-12 top-10 hidden md:block">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                    <edu.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${edu.gradient} shadow-lg md:hidden`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg md:text-xl text-blue-400 font-semibold mb-2">
                        {edu.specialization}
                      </p>
                      <p className="text-slate-300 text-lg">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:text-right space-y-2">
                    <div className="flex items-center md:justify-end text-slate-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center md:justify-end">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="relative grid md:grid-cols-3 gap-6 mt-6">
                    {edu.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={highlight.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 + hIndex * 0.1 }}
                        className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
                      >
                        <div className={`text-3xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2`}>
                          {highlight.label}
                        </div>
                        <p className="text-slate-400 text-sm">{highlight.sublabel}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
