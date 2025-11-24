'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/50 to-cyan-900/20" />

      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
          >
            <span className="text-blue-400 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              VISHWAJEET
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              KUMAR
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light max-w-4xl mx-auto"
          >
            Final-Year CSE (AI Specialization) | Generative AI & Full-Stack
            Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto"
          >
            Building secure, scalable applications that integrate LLMs, Prompt
            Engineering, and modern web frameworks
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Get In Touch
            </motion.a>

            <motion.a
              href="/Vishwajeet's_Resume.pdf"
              download
              className="px-8 py-4 rounded-lg  backdrop-blur-sm border border-slate-700 text-white font-semibold shadow-lg shadow-slate-800/50 hover:border-blue-500 hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <motion.a
              href="https://github.com/Vishwajeet-Kumar-Patel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vishwajeet-kumar-00b817239"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/vishwajeet_kumar_patel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-pink-500 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
