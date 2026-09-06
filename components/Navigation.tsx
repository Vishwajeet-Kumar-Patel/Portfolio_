'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Open Source', href: '#opensource' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Vishwajeet-Kumar-Patel', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishwajeet-kumar-00b817239', icon: Linkedin },
  { label: 'LeetCode', href: 'https://leetcode.com/u/vishwajeet_kumar_patel/', icon: Code2 },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.12, 0.3, 0.55] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-cyan-500/10 bg-slate-950/75 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'bg-slate-950/45 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-sm font-semibold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition hover:scale-105 hover:border-cyan-300/40"
        >
          VK
        </a>

        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          ))}

          <a
            href="/Vishwajeet's_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition hover:-translate-y-0.5 hover:border-cyan-300"
          >
            Resume
          </a>
        </div>

        <button
          className="rounded-xl border border-slate-800 bg-slate-900/70 p-2 text-slate-100 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-3 pb-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-base text-slate-300 hover:bg-slate-900 hover:text-cyan-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-3 flex gap-2 px-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
            <a
              href="/Vishwajeet's_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3 py-2 text-base text-cyan-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
