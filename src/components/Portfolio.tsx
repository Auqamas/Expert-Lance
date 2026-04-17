import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinSecure Banking Platform',
    category: 'Fintech · Cloud · Security',
    description: 'Migrated legacy banking infrastructure to AWS with zero downtime, implementing SOC 2 compliance and real-time fraud detection.',
    metrics: ['99.99% Uptime', '40% Cost Reduction', 'SOC 2 Certified'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'MedAI Diagnostics Suite',
    category: 'Healthcare · AI · ML',
    description: 'Built an AI-powered medical imaging platform that reduces diagnostic time by 60% with HIPAA-compliant cloud architecture.',
    metrics: ['60% Faster Diagnosis', 'HIPAA Compliant', '10M+ Scans'],
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    title: 'RetailEdge E-Commerce Engine',
    category: 'Retail · DevOps · Scalability',
    description: 'Designed a microservices architecture handling 100K+ concurrent users with auto-scaling Kubernetes clusters and CI/CD pipelines.',
    metrics: ['100K+ Concurrent', '3x Performance', 'Zero Downtime Deploys'],
    gradient: 'from-brand-yellow-dark to-orange-500',
  },
  {
    title: 'LogiTrack Fleet Management',
    category: 'Logistics · IoT · Analytics',
    description: 'Developed an IoT-integrated fleet management system with real-time GPS tracking, predictive maintenance, and route optimization.',
    metrics: ['30% Fuel Savings', '5K+ Vehicles', 'Real-time Tracking'],
    gradient: 'from-green-600 to-emerald-500',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-6">
            <span className="text-sm font-medium text-brand-yellow">Case Studies</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Projects That
            <br />
            <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Real solutions delivering real impact. Explore how we've helped
            enterprises transform their IT landscape.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-yellow-500/5"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                {/* Category */}
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-white mt-3 mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-brand-yellow group-hover:gap-3 transition-all duration-300">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}