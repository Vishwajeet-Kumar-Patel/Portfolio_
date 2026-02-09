'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Brain, FileSearch, Activity, Sprout, Gamepad2, Link2, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Multiplayer Backend System',
    subtitle: 'Distributed Backend System',
    description:
      'Built a low-latency, distributed backend to support concurrent users in real time. Designed Redis-based in-memory state management to handle concurrency and prevent race conditions. Implemented room-scoped WebSocket communication for efficient real-time synchronization. Deployed stateless services to enable horizontal scaling and fault tolerance.',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Socket.io'],
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Ludo',
  },
  {
    title: 'Distributed URL Shortening Service',
    subtitle: 'Scalable URL Shortening Service',
    description:
      'Designed a high-availability backend service optimized for read-heavy workloads. Implemented Redis caching, rate limiting, and indexed database queries to ensure low-latency redirects. Evaluated CAP trade-offs and system behavior under failure scenarios.',
    techStack: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
    icon: Link2,
    gradient: 'from-indigo-500 to-purple-500',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/URL_Shortener',
  },
  {
    title: 'AI-Powered Code Review & PR Analysis System',
    subtitle: 'Intelligent Code Quality Assessment',
    description:
      'Built an AI system to analyze pull requests for code quality, complexity, and potential risks. Implemented RAG-based pipelines using vector embeddings for contextual and actionable insights. Designed modular APIs to support scalable analysis across repositories.',
    techStack: ['FastAPI', 'OpenAI', 'RAG', 'Vector Embeddings'],
    icon: Code2,
    gradient: 'from-rose-500 to-red-500',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/AI_Code_PR_Reviewer',
  },
  {
    title: 'Agri-Advisor AI',
    subtitle: 'AI-Based Crop Recommendation & Advisory Platform',
    description:
      'Built a responsive, farmer-facing platform combining an AI chatbot and dashboard to deliver crop-, soil-, and weather-based recommendations. Integrated real-time data (weather, soil) and image-based disease detection to provide step-by-step remedial guidance and crop suggestions. Designed for scalability and accessibility with planned multilingual support and offline-first/SMS–IVR fallbacks to reach rural users.',
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Gemini Pro', 'CNN', 'gTTS', 'IMD Weather API'],
    icon: Sprout,
    gradient: 'from-amber-500 to-orange-500',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Agri-Advisor',
  },
  {
    title: 'MindWare',
    subtitle: 'Mental Health Assessment Web Application',
    description:
      'Designed and developed with secure authentication and progress tracking. Built analytics dashboards using Chart.js to visualize user insights, improving accuracy by 40%. Integrated an AI chatbot via OpenRouter API for personalized support, demonstrating innovation in enterprise AI-driven wellness solutions.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'OpenRouter API', 'JWT', 'Chart.js'],
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
    liveLink: 'https://mindware.example.com',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/MindWare',
  },
  {
    title: 'TrackWell',
    subtitle: 'Fitness Tracker Web Application',
    description:
      'Developed a responsive fitness tracking platform with user authentication, goal tracking, and real-time analytics using Chart.js. Integrated Gemini API to build an AI-powered chatbot for personalized fitness guidance. Ensured secure backend with JWT, optimized MongoDB, and a seamless mobile experience.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'JWT', 'Chart.js'],
    icon: Activity,
    gradient: 'from-green-500 to-emerald-500',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/TrackWell',
  },
  {
    title: 'Resume Analyzer',
    subtitle: 'AI Career Platform',
    description:
      'Developed an AI-driven resume ranking and career recommendation system with 90%+ accuracy. Integrated LLM-based scoring and vector embeddings for contextual analysis. Designed modular API architecture achieving sub-2s response time.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'FastAPI', 'LLMs', 'Vector Embeddings'],
    icon: FileSearch,
    gradient: 'from-cyan-500 to-teal-500',
    githubLink: 'https://github.com/Vishwajeet-Kumar-Patel/Resume_Scorer',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Building intelligent, scalable solutions with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
              />
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white light:to-slate-50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-slate-600 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex space-x-2">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-blue-500/50 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-blue-400" />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-blue-500/50 transition-colors"
                      >
                        <Github className="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-blue-400" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold mb-4">
                  {project.subtitle}
                </p>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + techIndex * 0.05,
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
