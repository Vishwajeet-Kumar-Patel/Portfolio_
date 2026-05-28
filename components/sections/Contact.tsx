'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vishwajeetkumarpatelmgs@gmail.com',
      href: 'mailto:vishwajeetkumarpatelmgs@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Vishwajeet-Kumar-Patel',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vishwajeet-kumar-00b817239',
    },
  ];

  return (
    <section
      id="contact"
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
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let us build something reliable</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Open to backend engineering, distributed systems, and applied AI engineering opportunities.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Direct Contact</h3>
            <div className="mt-4 space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-300 transition hover:border-slate-500"
                >
                  <info.icon className="h-4 w-4 text-cyan-300" />
                  {info.value}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Profiles & Resume</h3>
            <div className="mt-4 space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-300 transition hover:border-slate-500"
                >
                  <social.icon className="h-4 w-4 text-cyan-300" />
                  {social.label}
                </a>
              ))}

              <a
                href="/Vishwajeet's_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-cyan-500/40 bg-cyan-500/10 px-3 py-2.5 text-sm text-cyan-200 transition hover:border-cyan-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="mt-10 border-t border-slate-900 pt-6 text-center"
        >
          <p className="px-4 text-xs text-slate-500 sm:text-sm">
            Built with Next.js, TypeScript, Tailwind CSS, and a backend-first product mindset.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
