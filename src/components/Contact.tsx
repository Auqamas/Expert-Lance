import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: '1637 E VALLY PKWY STE 1050 ESCONDIDO CA 92027' },
  { icon: Phone, label: 'Call Us', value: '+44 746 6256968' },
  { icon: Mail, label: 'Email Us', value: 'hr@expertlance.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Fri: 9AM - 6PM EST\n24/7 Support' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-6">
            <span className="text-sm font-medium text-brand-yellow">Get In Touch</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ready to transform your IT infrastructure? Get in touch and let's
            discuss how ExpertLance can accelerate your digital journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:border-yellow-500/30">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{info.label}</div>
                  <div className="text-gray-400 text-sm whitespace-pre-line">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all appearance-none"
                  >
                    <option value="" className="bg-brand-black">Select a service</option>
                    <option value="cloud" className="bg-brand-black">Cloud Solutions</option>
                    <option value="security" className="bg-brand-black">Cybersecurity</option>
                    <option value="development" className="bg-brand-black">Custom Development</option>
                    <option value="ai" className="bg-brand-black">AI & Machine Learning</option>
                    <option value="devops" className="bg-brand-black">DevOps & Automation</option>
                    <option value="consulting" className="bg-brand-black">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-light hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
                {!submitted && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}