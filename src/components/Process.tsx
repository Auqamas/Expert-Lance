import { MessageSquare, Search, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business goals, current challenges, and technical landscape through in-depth stakeholder interviews.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Strategy & Architecture',
    description: 'Our architects design a tailored solution blueprint with clear milestones, technology stack, and risk mitigation strategies.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Build & Iterate',
    description: 'Agile development with bi-weekly sprints, continuous integration, and transparent progress tracking through our client portal.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Scale',
    description: 'Seamless deployment with zero-downtime strategies, followed by ongoing monitoring, optimization, and 24/7 support.',
  },
];

export default function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-black-light" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-6">
            <span className="text-sm font-medium text-brand-yellow">Our Process</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            How We Deliver
            <br />
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A proven methodology refined over 12 years and 2,000+ projects.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-yellow-500/30 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-yellow-500/30">
                {/* Step Number */}
                <div className="text-5xl font-heading font-bold text-yellow-500/10 mb-4">{step.step}</div>

                {/* Icon */}
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-brand-yellow" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}