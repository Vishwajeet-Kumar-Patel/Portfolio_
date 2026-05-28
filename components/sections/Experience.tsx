'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Backend Engineering Intern',
      company: 'PurpleMerit',
      duration: 'March 2026 – Present',
      location: 'India',
      icon: Briefcase,
      achievements: [
        'Built and maintained backend modules powering analytics and workflow automation features.',
        'Designed API endpoints and service logic with attention to performance and maintainability.',
        'Integrated AWS-backed infrastructure and deployment processes for stable service delivery.',
        'Improved request handling and data access patterns to reduce latency in key endpoints.',
        'Collaborated in iterative releases with product and engineering stakeholders.',
      ],
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'Software Developer Intern',
      company: 'StuFit Approach Pvt. Ltd.',
      duration: 'July 2025 – September 2025',
      location: 'Lucknow, India',
      icon: Briefcase,
      achievements: [
        'Designed and shipped backend services using NestJS and PostgreSQL for user-facing product modules.',
        'Owned modules end-to-end from API design to deployment and production support.',
        'Optimized query paths and endpoint execution, reducing latency in frequently used APIs.',
        'Implemented JWT-based authentication and RBAC patterns for secure service access.',
        'Worked on production debugging, release quality, and reliability improvements.',
      ],
      technologies: ['NestJS', 'PostgreSQL', 'JWT', 'RBAC', 'AWS', 'Agile'],
    },
  ];

  return (
    <section
      id="experience"
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
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Product engineering in real environments</h2>
        </motion.div>

        <div className="space-y-6">

          {experiences.map((experience, expIndex) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: expIndex * 0.12 }}
            >
              <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
                      <experience.icon className="h-3.5 w-3.5 text-cyan-300" />
                      {experience.title}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">{experience.company}</h3>
                  </div>

                  <div className="space-y-1 text-sm text-slate-400">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {experience.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                      <p className="ml-3 text-sm leading-relaxed text-slate-300">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
