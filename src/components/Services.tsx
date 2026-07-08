import { useEffect, useMemo, useState } from 'react';
import { Code, BrainCircuit, Database, Globe, TerminalSquare, Network, type LucideIcon, Shield, Cpu, Binary, CircuitBoard, CloudCog, Workflow } from 'lucide-react';

type TrackItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  color: string;
  iconBg: string;
  iconColor: string;
};

const trackPool: TrackItem[] = [
  {
    icon: Code,
    title: 'Core Programming',
    description: 'Master C++, Python, JavaScript and problem-solving patterns used in interviews and production systems.',
    tag: 'Programming Basics',
    color: 'from-sky-500 to-indigo-500',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
  },
  {
    icon: BrainCircuit,
    title: 'Data Structures & Algorithms',
    description: 'From arrays to graphs, learn to build optimal solutions with time and space complexity analysis.',
    tag: 'CS Fundamentals',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'Build modern apps with React, TypeScript, APIs, authentication, databases, and deployment workflows.',
    tag: 'Web Engineering',
    color: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    icon: Database,
    title: 'Databases & Backend',
    description: 'Learn SQL, schema design, indexing, caching and API architecture for reliable high-scale backend services.',
    tag: 'Backend Systems',
    color: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
  },
  {
    icon: Network,
    title: 'System Design',
    description: 'Design scalable architectures using queues, load balancing, microservices, observability, and resiliency.',
    tag: 'Architecture',
    color: 'from-orange-500 to-amber-500',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-700',
  },
  {
    icon: TerminalSquare,
    title: 'Dev Tools & Open Source',
    description: 'Git, Linux, testing, CI/CD and open-source contribution habits to become an industry-ready developer.',
    tag: 'Developer Workflow',
    color: 'from-rose-500 to-red-500',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Engineering',
    description: 'Secure coding, threat modeling, OWASP basics, authentication hardening, and practical security testing.',
    tag: 'Cyber Security',
    color: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-700',
  },
  {
    icon: Cpu,
    title: 'Computer Architecture',
    description: 'Understand memory, CPU pipelines, instruction flow, caching, and performance-aware development.',
    tag: 'Computer Systems',
    color: 'from-slate-500 to-zinc-600',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700',
  },
  {
    icon: Binary,
    title: 'Competitive Programming',
    description: 'Train speed and accuracy through timed algorithmic challenges and high-frequency problem practice.',
    tag: 'Problem Solving',
    color: 'from-fuchsia-500 to-violet-500',
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-700',
  },
  {
    icon: CircuitBoard,
    title: 'Circuits to Code',
    description: 'Learn digital logic, microcontroller fundamentals, and how low-level hardware concepts map to software.',
    tag: 'Electronics + CS',
    color: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-700',
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description: 'Deploy apps with CI/CD, containers, observability, and reliable production workflows.',
    tag: 'Cloud Engineering',
    color: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    icon: Workflow,
    title: 'Software Engineering Workflow',
    description: 'Master architecture patterns, code reviews, branching strategy, testing, and collaboration tools.',
    tag: 'Engineering Practice',
    color: 'from-lime-500 to-green-500',
    iconBg: 'bg-lime-100',
    iconColor: 'text-lime-700',
  },
];

export default function Services() {
  const visibleCount = 3;
  const initialTracks = useMemo(() => trackPool.slice(0, visibleCount), []);
  const [displayTracks, setDisplayTracks] = useState<TrackItem[]>(initialTracks);
  const [swapState, setSwapState] = useState<{ index: number | null; phase: 'out' | 'in' | null }>({
    index: null,
    phase: null,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextIndex = Math.floor(Math.random() * visibleCount);
      setSwapState({ index: nextIndex, phase: 'out' });

      window.setTimeout(() => {
        setDisplayTracks((prev) => {
          const next = [...prev];
          const activeTitles = new Set(next.map((item) => item.title));
          const currentTitle = next[nextIndex]?.title;
          activeTitles.delete(currentTitle);
          const alternatives = trackPool.filter((item) => !activeTitles.has(item.title));
          next[nextIndex] = alternatives[Math.floor(Math.random() * alternatives.length)];
          return next;
        });
        setSwapState({ index: nextIndex, phase: 'in' });
      }, 280);

      window.setTimeout(() => setSwapState({ index: null, phase: null }), 760);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-line bg-brand-surface mb-6">
            <span className="text-sm font-medium text-brand-primary">Learning Tracks</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-ink mb-6">
            Complete Computer Science
            <br />
            <span className="text-gradient-light">and Programming Paths</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Each track includes clear roadmaps, practical assignments, mentorship,
            and portfolio-ready projects.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {displayTracks.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] border border-brand-line hover:shadow-md relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top gradient line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div
                className={`track-content ${
                  swapState.index === index && swapState.phase === 'out'
                    ? 'track-content-out'
                    : ''
                } ${
                  swapState.index === index && swapState.phase === 'in'
                    ? 'track-content-in'
                    : ''
                }`}
              >
                {/* Tag */}
                <span className="inline-block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
                  {service.tag}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    index === 0 ? 'track-icon-float' : index === 1 ? 'track-icon-pulse' : 'track-icon-tilt'
                  }`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-muted group-hover:text-brand-primary transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}