import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { CaseStudy } from '@/lib/case-studies';

export function caseStudyMetadata(caseStudy: CaseStudy): Metadata {
  return {
    title: `${caseStudy.title} | Vishwajeet Kumar`,
    description: caseStudy.summary,
    alternates: { canonical: `https://vishwajeet.dev/projects/${caseStudy.slug}` },
    openGraph: { title: `${caseStudy.title} | Engineering Case Study`, description: caseStudy.summary, type: 'article', url: `https://vishwajeet.dev/projects/${caseStudy.slug}` },
  };
}

function Heading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <div className="mb-6">{eyebrow && <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">{eyebrow}</p>}<h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h2></div>;
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-slate-800 bg-slate-900/60 p-5 ${className}`}>{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return <ul className="space-y-2 text-sm leading-relaxed text-slate-300">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul>;
}

function ArchitectureDiagram({ source }: { source: string }) {
  const lines = source.split('\n').filter((line) => line.trim() && !line.trim().startsWith('flowchart'));
  const nodes = new Map<string, string>();
  const edges: { from: string; to: string }[] = [];

  lines.forEach((line) => {
    const match = line.trim().match(/^([\w-]+)(?:\[[^\]]*\]|\([^)]*\)|\(\([^)]*\)\))?\s*(?:-->|<-->)(?:\s*)([\w-]+)(?:\[([^\]]+)\]|\(([^)]+)\)|\(\(([^)]+)\)\))?/);
    if (!match) return;

    const [, from, to, squareLabel, roundLabel, databaseLabel] = match;
    const fromLabel = from.replace(/[-_]/g, ' ');
    const toLabel = squareLabel || roundLabel || databaseLabel || to.replace(/[-_]/g, ' ');
    nodes.set(from, nodes.get(from) || fromLabel);
    nodes.set(to, toLabel);
    edges.push({ from, to });
  });

  const nodeIds = Array.from(nodes.keys());
  const levels = new Map(nodeIds.map((id) => [id, 0]));
  for (let pass = 0; pass < nodeIds.length; pass += 1) {
    edges.forEach(({ from, to }) => {
      levels.set(to, Math.max(levels.get(to) ?? 0, (levels.get(from) ?? 0) + 1));
    });
  }

  const groupedNodes = new Map<number, string[]>();
  nodeIds.forEach((id) => {
    const level = levels.get(id) ?? 0;
    groupedNodes.set(level, [...(groupedNodes.get(level) ?? []), id]);
  });

  const levelCount = Math.max(...Array.from(groupedNodes.keys()), 0) + 1;
  const columnWidth = 1000 / levelCount;
  const nodeWidth = Math.min(260, columnWidth - 36);
  const nodeHeight = 64;
  const rowGap = 28;
  const diagramHeight = Math.max(...Array.from(groupedNodes.values()).map((group) => group.length), 1) * (nodeHeight + rowGap) + 28;
  const positions = new Map<string, { x: number; y: number }>();

  groupedNodes.forEach((group, level) => {
    const groupHeight = group.length * nodeHeight + (group.length - 1) * rowGap;
    const startY = (diagramHeight - groupHeight) / 2;
    group.forEach((id, index) => {
      positions.set(id, {
        x: level * columnWidth + (columnWidth - nodeWidth) / 2,
        y: startY + index * (nodeHeight + rowGap),
      });
    });
  });

  const wrapLabel = (label: string) => {
    const words = label.split(' ');
    const lines: string[] = [];
    let current = '';
    words.forEach((word) => {
      if ((current + ' ' + word).trim().length > 22 && current) {
        lines.push(current);
        current = word;
      } else {
        current = `${current} ${word}`.trim();
      }
    });
    if (current) lines.push(current);
    return lines.slice(0, 3);
  };

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 sm:p-6" aria-label="System architecture diagram">
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 1000 ${diagramHeight}`} className="min-w-[760px] w-full" role="img" aria-label="Architecture flowchart">
          <defs>
            <marker id="architecture-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="rgba(103,232,249,0.9)" />
            </marker>
          </defs>
          {edges.map((edge, index) => {
            const from = positions.get(edge.from);
            const to = positions.get(edge.to);
            if (!from || !to) return null;
            return <line key={`${edge.from}-${edge.to}-${index}`} x1={from.x + nodeWidth} y1={from.y + nodeHeight / 2} x2={to.x} y2={to.y + nodeHeight / 2} stroke="rgba(103,232,249,0.65)" strokeWidth="2" markerEnd="url(#architecture-arrow)" />;
          })}
          {nodeIds.map((id) => {
            const position = positions.get(id);
            if (!position) return null;
            const labelLines = wrapLabel(nodes.get(id) ?? id);
            return <g key={id}>
              <rect x={position.x} y={position.y} width={nodeWidth} height={nodeHeight} rx="10" fill="rgba(15,23,42,0.96)" stroke="rgba(103,232,249,0.45)" />
              <text x={position.x + nodeWidth / 2} y={position.y + 25 - (labelLines.length - 1) * 7} textAnchor="middle" fill="rgb(207,250,254)" fontSize="14" fontFamily="var(--font-plus-jakarta), sans-serif">
                {labelLines.map((line, lineIndex) => <tspan key={line} x={position.x + nodeWidth / 2} dy={lineIndex === 0 ? 0 : 16}>{line}</tspan>)}
              </text>
            </g>;
          })}
        </svg>
      </div>
      <div className="mt-5 border-t border-slate-800 pt-4 text-xs text-slate-500">
        {edges.length} documented connection{edges.length === 1 ? '' : 's'} from the repository architecture.
      </div>
    </div>
  );
}

export default function CaseStudyPage({ caseStudy }: { caseStudy: CaseStudy }) {
  return <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100"><div className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300"><ArrowLeft className="h-4 w-4" /> Back to projects</Link>
    <header className="mt-12 max-w-4xl"><p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">{caseStudy.eyebrow}</p><h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-6xl">{caseStudy.title}</h1><p className="mt-5 text-lg leading-relaxed text-slate-300">{caseStudy.summary}</p><p className="mt-5 border-l-2 border-cyan-400/60 pl-4 text-sm leading-relaxed text-slate-400">{caseStudy.evidence}</p><div className="mt-6 flex flex-wrap gap-3"><a href={caseStudy.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 hover:border-cyan-300"><Github className="h-4 w-4" /> View repository</a><Link href="/#contact" className="rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-200 hover:border-cyan-400/40">Discuss the project</Link></div></header>

    <section className="mt-14"><Heading eyebrow="Engineering snapshot" title="What the repository demonstrates" /><div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"><Card><div className="flex flex-wrap gap-2">{caseStudy.stack.map((tech) => <span key={tech} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">{tech}</span>)}</div></Card><Card><Bullets items={caseStudy.highlights} /></Card></div></section>
    <section className="mt-16"><Heading eyebrow="01" title="The problem" /><Card><p className="text-base leading-relaxed text-slate-300">{caseStudy.problem}</p></Card></section>
    <section className="mt-16"><Heading eyebrow="02" title="Engineering requirements" /><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="mb-4 text-lg font-semibold text-white">Functional</h3><Bullets items={caseStudy.functional} /></Card><Card><h3 className="mb-4 text-lg font-semibold text-white">Non-functional</h3><Bullets items={caseStudy.nonFunctional} /></Card></div></section>
    <section className="mt-16"><Heading eyebrow="03" title="System architecture" /><Card><p className="mb-6 text-sm leading-relaxed text-slate-300">{caseStudy.architecture}</p><ArchitectureDiagram source={caseStudy.architectureDiagram} /></Card></section>
    <section className="mt-16"><Heading eyebrow="04" title="Request and data flow" /><Card><ol className="space-y-4 text-sm leading-relaxed text-slate-300">{caseStudy.flow.map((step, index) => <li key={step} className="flex gap-4"><span className="font-mono text-cyan-300">{String(index + 1).padStart(2, '0')}</span><span>{step}</span></li>)}</ol></Card></section>
    <section className="mt-16"><Heading eyebrow="05" title="Key engineering decisions" /><div className="grid gap-4 md:grid-cols-2">{caseStudy.decisions.map((decision) => <Card key={decision.title}><h3 className="text-lg font-semibold text-white">{decision.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300"><strong className="text-cyan-200">Why:</strong> {decision.why}</p><p className="mt-2 text-sm leading-relaxed text-slate-400"><strong className="text-slate-200">Trade-off:</strong> {decision.tradeoff}</p></Card>)}</div></section>
    <section className="mt-16"><Heading eyebrow="06" title="Deep technical challenge" /><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="text-base font-semibold text-white">Problem</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{caseStudy.hardest.problem}</p><h3 className="mt-5 text-base font-semibold text-white">Why the naive approach fails</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{caseStudy.hardest.naive}</p></Card><Card><h3 className="text-base font-semibold text-white">Implemented solution</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{caseStudy.hardest.solution}</p><h3 className="mt-5 text-base font-semibold text-white">Edge cases</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{caseStudy.hardest.edgeCases}</p></Card></div></section>
    <section className="mt-16"><Heading eyebrow="07" title="Database and API design" /><Card><p className="mb-5 text-sm leading-relaxed text-slate-300">{caseStudy.database}</p><div className="mb-6 flex flex-wrap gap-2">{caseStudy.entities.map((entity) => <span key={entity} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300">{entity}</span>)}</div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="border-b border-slate-700 text-xs uppercase tracking-[0.12em] text-slate-500"><tr><th className="px-3 py-3">Method</th><th className="px-3 py-3">Endpoint</th><th className="px-3 py-3">Purpose</th><th className="px-3 py-3">Auth</th></tr></thead><tbody>{caseStudy.apis.map((api) => <tr key={`${api.method}-${api.endpoint}`} className="border-b border-slate-800"><td className="px-3 py-3 font-mono text-cyan-300">{api.method}</td><td className="px-3 py-3 font-mono text-slate-200">{api.endpoint}</td><td className="px-3 py-3 text-slate-400">{api.purpose}</td><td className="px-3 py-3 text-slate-400">{api.auth}</td></tr>)}</tbody></table></div></Card></section>
    <section className="mt-16 grid gap-4 md:grid-cols-2"><div><Heading eyebrow="08" title="Security" /><Card><h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">Implemented</h3><Bullets items={caseStudy.security.implemented} /><h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Potential improvements</h3><Bullets items={caseStudy.security.improvements} /></Card></div><div><Heading eyebrow="09" title="Failure handling" /><Card><h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">Evidence</h3><Bullets items={caseStudy.failure.implemented} /><h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Remaining scenarios</h3><Bullets items={caseStudy.failure.remaining} /></Card></div></section>
    <section className="mt-16"><Heading eyebrow="10" title="Performance, scalability, and observability" /><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="mb-4 text-lg font-semibold text-white">Performance and scalability</h3><Bullets items={caseStudy.performance} /></Card><Card><h3 className="mb-4 text-lg font-semibold text-white">Observability</h3><Bullets items={caseStudy.observability} /></Card></div></section>
    <section className="mt-16 grid gap-4 md:grid-cols-2"><div><Heading eyebrow="11" title="Testing and code quality" /><Card><Bullets items={caseStudy.testing} /></Card></div><div><Heading eyebrow="12" title="DevOps and deployment" /><Card><Bullets items={caseStudy.deployment} /></Card></div></section>
    <section className="mt-16"><Heading eyebrow="13" title="Engineering trade-offs" /><div className="grid gap-3 md:grid-cols-2">{caseStudy.tradeoffs.map((tradeoff) => <Card key={tradeoff}><p className="text-sm leading-relaxed text-slate-300">{tradeoff}</p></Card>)}</div></section>
    <section className="mt-16"><Heading eyebrow="14" title="What I would improve next" /><div className="grid gap-4 md:grid-cols-3"><Card><h3 className="mb-4 text-lg font-semibold text-white">Short term</h3><Bullets items={caseStudy.roadmap.short} /></Card><Card><h3 className="mb-4 text-lg font-semibold text-white">Medium term</h3><Bullets items={caseStudy.roadmap.medium} /></Card><Card><h3 className="mb-4 text-lg font-semibold text-white">Production scale</h3><Bullets items={caseStudy.roadmap.scale} /></Card></div></section>
    <section className="mt-16 grid gap-4 md:grid-cols-2"><div><Heading eyebrow="15" title="Key learnings" /><Card><Bullets items={caseStudy.learnings} /></Card></div><div><Heading eyebrow="16" title="Interview questions" /><Card><ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">{caseStudy.questions.map((question) => <li key={question}>{question}</li>)}</ol></Card></div></section>
    <section className="mt-16"><Heading eyebrow="Why this project matters" title="Recruiter-facing summary" /><Card className="border-cyan-400/20"><p className="text-base leading-relaxed text-slate-300">{caseStudy.matters}</p><div className="mt-6 flex flex-wrap gap-3"><a href={caseStudy.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 hover:border-cyan-300"><Github className="h-4 w-4" /> View GitHub</a><Link href="/#projects" className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-200 hover:border-cyan-400/40"><ExternalLink className="h-4 w-4" /> All projects</Link></div></Card></section>
  </div></main>;
}
