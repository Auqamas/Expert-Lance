import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Frontend Engineer',
    content: 'The structured roadmap turned my confusion into confidence. I moved from basic HTML to shipping full TypeScript apps in a few months.',
    rating: 5,
  },
  {
    name: 'Hamza Ali',
    role: 'CS Undergraduate',
    content: 'DSA classes were very practical. I finally understood graphs and dynamic programming because we solved real interview-style problems daily.',
    rating: 5,
  },
  {
    name: 'Sara R.',
    role: 'Backend Developer',
    content: 'Mentors reviewed my code line-by-line and taught production practices. That feedback helped me land my first backend internship.',
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
            <span className="text-sm font-medium text-brand-primary">Success Stories</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Learners
            <br />
            <span className="text-brand-primary">Say About ExpertLance</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Reviews from learners and developers who leveled up their CS and programming careers.
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
                  <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-100">
                <div className="font-heading font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="text-gray-500 text-sm mt-0.5">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}