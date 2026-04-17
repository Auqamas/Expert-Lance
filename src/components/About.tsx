import { CheckCircle2, Users, Award, Zap } from 'lucide-react';

const highlights = [
  'ISO 27001 Certified Infrastructure',
  'AWS & Azure Advanced Partner',
  '24/7 Global Support Coverage',
  'Agile & DevOps Methodologies',
  'SOC 2 Type II Compliant',
  'Scalable Team Augmentation',
];

const stats = [
  { icon: Users, value: '500+', label: 'Enterprise Clients', color: 'text-blue-400' },
  { icon: Award, value: '12+', label: 'Years of Excellence', color: 'text-brand-yellow' },
  { icon: Zap, value: '2,000+', label: 'Projects Delivered', color: 'text-green-400' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* White background section */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 p-10 flex flex-col justify-between relative">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  
                  <div className="relative">
                    <div className="text-brand-yellow font-heading font-bold text-6xl">12+</div>
                    <div className="text-white/60 text-sm mt-1">Years of Innovation</div>
                  </div>
                  
                  <div className="relative grid grid-cols-3 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                        <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                        <div className="text-white font-heading font-bold text-lg">{stat.value}</div>
                        <div className="text-white/40 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow rounded-2xl p-6 shadow-xl shadow-yellow-500/20">
                <div className="font-heading font-bold text-3xl text-brand-black">150+</div>
                <div className="text-brand-black/70 text-sm font-medium">IT Experts</div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-brand-yellow/20 rounded-3xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-50 mb-6">
                <span className="text-sm font-medium text-brand-yellow-dark">About ExpertLance</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner in
                <br />
                <span className="text-brand-yellow-dark">Digital Transformation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since 2012, ExpertLance has been at the forefront of IT innovation. We combine deep technical
                expertise with strategic thinking to deliver solutions that don't just solve problems — they
                create competitive advantages.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-black text-white font-heading font-semibold rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Discover Our Story
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}