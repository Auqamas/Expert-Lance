import { Cloud, Shield, Code, Cpu, Settings, BarChart3, Megaphone, Palette, Database } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure on AWS, Azure, and GCP. Migration, optimization, and 24/7 management.',
    tag: 'Infrastructure',
    color: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, SOC-as-a-service, and compliance frameworks.',
    tag: 'Security',
    color: 'from-red-500 to-orange-400',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Full-stack web & mobile applications built with modern frameworks, microservices, and CI/CD pipelines.',
    tag: 'Development',
    color: 'from-yellow-500 to-amber-400',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation, predictive analytics, NLP solutions, and custom ML model training & deployment.',
    tag: 'Intelligence',
    color: 'from-purple-500 to-pink-400',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
  },
  {
    icon: Settings,
    title: 'DevOps & Automation',
    description: 'Infrastructure as code, container orchestration, CI/CD automation, and monitoring dashboards.',
    tag: 'Operations',
    color: 'from-green-500 to-emerald-400',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
  {
    icon: BarChart3,
    title: 'IT Consulting',
    description: 'Strategic technology roadmaps, digital transformation guidance, and IT governance frameworks.',
    tag: 'Strategy',
    color: 'from-brand-yellow to-yellow-300',
    iconBg: 'bg-brand-yellow/15',
    iconColor: 'text-brand-yellow',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Result-driven marketing strategies including SEO, social media management, PPC campaigns, and brand growth.',
    tag: 'Marketing',
    color: 'from-green-400 to-emerald-600',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered interface and experience design focused on usability, aesthetics, and engagement.',
    tag: 'Design',
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-500/15',
    iconColor: 'text-pink-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data pipelines, warehousing solutions, and real-time data processing for analytics and insights.',
    tag: 'Data',
    color: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-500',
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-6">
            <span className="text-sm font-medium text-brand-yellow">Our Services</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Comprehensive IT Solutions
            <br />
            <span className="text-gradient">Tailored For You</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From cloud migration to AI-powered innovation, we provide end-to-end
            IT services that drive measurable business outcomes.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/5 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top gradient line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Tag */}
              <span className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {service.tag}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-brand-yellow transition-colors duration-300">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}