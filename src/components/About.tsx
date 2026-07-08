import { Link } from 'react-router-dom';
import { CheckCircle2, Users, BookOpen, Rocket, Shield, Cpu, CircuitBoard, Database, Globe, Binary } from 'lucide-react';

const highlights = [
  'Structured Computer Science curriculum from basics to advanced',
  'Live coding classes with mentor-led doubt sessions',
  'Project-first pedagogy for portfolio and real-world experience',
  'Interview training for DSA, system design, and behavior rounds',
  'Career support for internships, jobs, and freelancing',
  'Weekly progress tracking with personalized feedback',
];

const stats = [
  { icon: Users, value: '2,500+', label: 'Learners Guided', color: 'text-blue-600' },
  { icon: BookOpen, value: '40+', label: 'CS Modules', color: 'text-brand-primary' },
  { icon: Rocket, value: '300+', label: 'Projects Built', color: 'text-green-600' },
];

const csDomains = [
  { icon: CircuitBoard, title: 'Digital Electronics & Circuits', text: 'Boolean logic, gates, combinational/sequential circuits, and architecture basics.' },
  { icon: Cpu, title: 'Computer Architecture', text: 'Processors, memory hierarchy, instruction pipelines, and low-level optimization thinking.' },
  { icon: Binary, title: 'Algorithms & Computation', text: 'Complexity analysis, recursion, graph algorithms, dynamic programming, and proofs.' },
  { icon: Database, title: 'Databases & Data Systems', text: 'SQL/NoSQL, indexing, transactions, modeling, and distributed data fundamentals.' },
  { icon: Shield, title: 'Cybersecurity', text: 'Network security, secure coding, cryptography basics, and vulnerability awareness.' },
  { icon: Globe, title: 'Networks & Cloud', text: 'Protocols, backend communication, deployment pipelines, and cloud-native services.' },
];

export default function About() {
  return (
    <div id="about" className="relative pt-32 bg-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-50 mb-6">
              <span className="text-sm font-medium text-brand-primary">About ExpertLance</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-ink leading-tight">
              Complete Computer Science Learning
              <br />
              <span className="text-gradient-light">From Circuits to Code to Cyber</span>
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed">
              We are a practical CS and programming academy designed for learners who want industry-level fundamentals, real project experience, and strong career outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-brand-surface border border-brand-line rounded-2xl p-6">
                <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <div className="text-3xl font-heading font-bold text-brand-ink">{stat.value}</div>
                <div className="text-brand-muted text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-surface border-y border-brand-line/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-ink mb-8">What Makes Our Training Effective</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item) => (
              <div key={item} className="bg-white border border-brand-line rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-brand-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-ink mb-8">6 Core Sections of Computer Science</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {csDomains.map((domain) => (
              <div key={domain.title} className="bg-white border border-brand-line rounded-xl p-5 hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <domain.icon className="w-4 h-4 text-brand-primary" />
                  <h4 className="font-semibold text-brand-ink text-sm">{domain.title}</h4>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">{domain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-surface border-y border-brand-line/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-ink mb-8">From Theory to Real Engineering</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-brand-muted">
              <p>Every module combines conceptual understanding with practical implementation. Students write code daily, review peer solutions, and debug real scenarios.</p>
              <p>We include architecture thinking, software lifecycle skills, version control discipline, and secure coding practices so learners can perform like professional developers.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-brand-line bg-gradient-to-br from-slate-900 to-slate-700 p-8">
              <div className="text-brand-yellow text-sm mb-3">Learning Pipeline</div>
              <div className="space-y-3 text-white text-sm">
                <div className="bg-white/10 rounded-lg px-3 py-2">Foundations: Logic, Math, Data Representation</div>
                <div className="bg-white/10 rounded-lg px-3 py-2">Build: DSA, Web, Backend, Databases</div>
                <div className="bg-white/10 rounded-lg px-3 py-2">Advance: System Design, Cyber, Cloud, AI</div>
                <div className="bg-white/10 rounded-lg px-3 py-2">Career: Interviews, Resume, Portfolio, Communication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-brand-ink mb-4">Start Your CS Journey with Us</h2>
          <p className="text-brand-muted text-lg mb-8">Get a personalized roadmap and begin your path from beginner to software engineer.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-dark hover:scale-105 transition-all duration-300"
          >
            Contact Admissions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}