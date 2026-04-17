import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mahdi Ashkanani',
    role: 'CTO, FinSecure Inc.',
    content: 'ExpertLance transformed our entire cloud infrastructure in just 6 months. Their team\'s expertise in AWS and security compliance exceeded all expectations. We saw a 40% reduction in operational costs.',
    rating: 5,
  },
  {
    name: 'Abdullah Alshumais',
    role: 'Director of Engineering, MedAI',
    content: 'The AI diagnostics platform they built is nothing short of revolutionary. Their deep understanding of both healthcare compliance and machine learning made them the perfect partner.',
    rating: 5,
  },
  {
    name: 'Fadek Ashkanani',
    role: 'VP of Technology, RetailEdge',
    content: 'Our e-commerce platform now handles 10x the traffic during peak sales. ExpertLance\'s DevOps team set up auto-scaling infrastructure that just works. Zero downtime, every time.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-50 mb-6">
            <span className="text-sm font-medium text-brand-yellow-dark">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <br />
            <span className="text-brand-yellow-dark">Say About Us</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Don't just take our word for it. Hear from the businesses
            we've helped transform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-brand-yellow/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-yellow to-yellow-300 flex items-center justify-center">
                  <span className="font-heading font-bold text-brand-black text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-gray-900 text-md">{testimonial.name}</div>
                  {/* <div className="text-gray-500 text-xs">{testimonial.role}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}