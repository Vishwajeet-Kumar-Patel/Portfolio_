'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import OpenSource from '@/components/sections/OpenSource';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import SystemMindset from '@/components/sections/SystemMindset';
import Stats from '@/components/sections/Stats';
import WhatIBuild from '@/components/sections/WhatIBuild';
import EngineeringPractices from '@/components/sections/EngineeringPractices';
import SchedulerCaseStudy from '@/components/sections/SchedulerCaseStudy';
import BuildingInPublic from '@/components/sections/BuildingInPublic';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navigation />
      <Hero />
      <Stats />
      <WhatIBuild />
      <About />
      <Skills />
      <EngineeringPractices />
      <Projects />
      <SchedulerCaseStudy />
      <Experience />
      <Education />
      <OpenSource />
      <BuildingInPublic />
      <SystemMindset />
      <Contact />
    </main>
  );
}
