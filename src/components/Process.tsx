import { MessageSquare, Search, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Pick Your Track',
    description: 'Start with an assessment to choose foundations, web dev, data engineering, AI, or interview preparation.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Learn Core Concepts',
    description: 'Study theory with structured notes and visual explainers for algorithms, architecture, and system fundamentals.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Build Real Projects',
    description: 'Apply each concept through coding labs, code reviews, and capstone projects that mirror real software teams.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Get Career Ready',
    description: 'Practice interviews, improve GitHub portfolio quality, and receive guidance for internship and job applications.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface" />
      <div className="absolute inset-0 bg-grid-light" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-line bg-white mb-6">
            <span className="text-sm font-medium text-brand-primary">Learning Roadmap</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-ink mb-6">
            How Students Become
            <br />
            <span className="text-gradient-light">Confident Developers</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            A practical and repeatable workflow built for consistent growth in CS and software engineering.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-primary/30 to-transparent" />
              )}

              <div className="bg-white rounded-2xl p-8 h-full transition-all duration-500 border border-brand-line hover:shadow-md">
                {/* Step Number */}
                <div className="text-5xl font-heading font-bold text-brand-primary/20 mb-4">{step.step}</div>

                {/* Icon */}
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-brand-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold text-brand-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
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