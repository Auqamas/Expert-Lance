import { Link } from 'react-router-dom';
import { ArrowRight, Code, GitBranch, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface" />
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-yellow-200/60 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-line bg-white">
              <Code className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">Practical Programming Education</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-brand-ink">
              Learn
              <br />
              <span className="text-gradient-light">Computer Science</span>
              <br />
              by Building Real Code
            </h1>

            <p className="text-lg text-brand-muted max-w-lg leading-relaxed">
              ExpertLance is now a programming-first learning platform focused on
              algorithms, web development, system design, AI engineering, and project-based learning.
            </p>

            <div className="max-w-md space-y-2">
              <div className="loading-bar" />
              <div className="loading-bar" style={{ animationDelay: '250ms' }} />
              <div className="loading-bar" style={{ animationDelay: '500ms', width: '78%' }} />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-dark hover:scale-105 transition-all duration-300"
              >
                Join Learning Program
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-line text-brand-ink font-heading font-medium rounded-full hover:border-brand-primary/50 bg-white transition-all duration-300"
              >
                <GitBranch className="w-4 h-4" />
                Explore Our Projects
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-4">
              {[
                { value: '40+', label: 'Programming Modules' },
                { value: '120+', label: 'Hands-on Labs' },
                { value: '15+', label: 'Career Tracks' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl font-bold text-brand-primary">{stat.value}</div>
                  <div className="text-xs text-brand-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Central Hexagonal Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-yellow-100 to-blue-100 border border-brand-line rotate-12 animate-orbit-float" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent border border-brand-line -rotate-12 animate-orbit-float" style={{ animationDelay: '400ms' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 rounded-2xl bg-white border border-brand-line flex items-center justify-center shadow-xl shadow-blue-100 animate-orbit-float" style={{ animationDelay: '700ms' }}>
                  <img
                    src="/logo.png"
                    alt="ExpertLance Graphic"
                    className="w-36 h-28 object-contain"
                  />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 border border-brand-line animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                    <Code className="w-4 h-4 text-sky-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">Daily Coding</div>
                    <div className="text-xs text-sky-700">Problem Solving</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 left-0 bg-white rounded-2xl p-4 border border-brand-line animate-float" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <div className="text-indigo-700 font-bold text-sm">AI</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">AI Track</div>
                    <div className="text-xs text-indigo-700">ML Fundamentals</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 bg-white rounded-2xl p-4 border border-brand-line animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">Systems Design</div>
                    <div className="text-xs text-emerald-700">Scalable Thinking</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 left-4 bg-white rounded-2xl p-4 border border-brand-line animate-float" style={{ animationDelay: '1.6s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-yellow-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">Cyber Security</div>
                    <div className="text-xs text-yellow-700">Secure Coding</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-10 bg-white rounded-2xl p-4 border border-brand-line animate-float" style={{ animationDelay: '2.4s' }}>
                <div className="text-xs text-brand-muted mb-2">Build Status</div>
                <div className="loading-bar" style={{ width: '140px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-surface to-transparent" />
    </section>
  );
}