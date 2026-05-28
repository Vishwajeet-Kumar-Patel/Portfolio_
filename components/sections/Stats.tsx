'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2, Rocket, SearchCode, Trophy, Workflow } from 'lucide-react';

const metrics = [
  { label: 'Projects Built', value: 5, suffix: '+', icon: Rocket },
  { label: 'Internships', value: 2, suffix: '+', icon: Workflow },
  { label: 'LeetCode Problems', value: 500, suffix: '+', icon: Trophy },
  { label: 'Open Source', value: 2, suffix: '', icon: SearchCode },
  { label: 'Production Systems', value: 6, suffix: '+', icon: Code2 },
];

function AnimatedNumber({ value, active }: { value: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let current = 0;
    const duration = 1100;
    const increment = Math.max(1, Math.ceil(value / 30));
    const start = window.setInterval(() => {
      current = Math.min(value, current + increment);
      setCount(current);
      if (current >= value) {
        window.clearInterval(start);
      }
    }, duration / 30);

    return () => window.clearInterval(start);
  }, [active, value]);

  return <>{count}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section ref={ref} className="relative px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-950/55 p-3 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-xl border border-transparent bg-slate-900/65 p-4 shadow-[0_0_0_1px_rgba(34,211,238,0.05)] transition hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-cyan-400/15 bg-cyan-500/10 p-2 text-cyan-300 transition group-hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]">
                  <metric.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    <AnimatedNumber value={metric.value} active={inView} />{metric.suffix}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
