import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-20 right-20 w-2 h-2 bg-brand-yellow rounded-full animate-float" />
      <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-brand-yellow/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/4 w-2.5 h-2.5 bg-brand-yellow/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-medium text-brand-yellow">Trusted by 500+ Companies</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              We Build
              <br />
              <span className="text-gradient">Digital Future</span>
              <br />
              For Your Business
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              ExpertLance delivers cutting-edge IT solutions — from cloud infrastructure
              to AI-powered applications — transforming your vision into scalable, secure reality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-light hover:scale-105 transition-all duration-300 shadow-xl shadow-yellow-500/25"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-heading font-medium rounded-full hover:border-brand-yellow/50 hover:bg-white/5 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                View Our Work
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-4">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '150+', label: 'IT Experts' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl font-bold text-brand-yellow">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Central Hexagonal Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/20 rotate-12 animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/10 -rotate-12" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-2xl bg-brand-yellow/90 flex items-center justify-center shadow-2xl shadow-yellow-500/40">
                  <span className="font-heading text-5xl font-bold text-brand-black">EL</span>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-8 right-8 glass-card rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Systems Online</div>
                    <div className="text-xs text-green-400">99.9% Uptime</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 left-0 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <div className="text-brand-yellow font-bold text-sm">AI</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">AI Powered</div>
                    <div className="text-xs text-brand-yellow">Smart Solutions</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <div className="text-blue-400 font-bold text-xs">☁</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Cloud Ready</div>
                    <div className="text-xs text-blue-400">Scalable Infra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
    </section>
  );
}