import { ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Development',
    'AI & Machine Learning',
    'DevOps & Automation',
    'IT Consulting',
  ],
  Company: [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Press Kit',
    'Partners',
  ],
  Resources: [
    'Documentation',
    'Case Studies',
    'Whitepapers',
    'Webinars',
    'Status Page',
    'Support',
  ],
};

const socialLinks = [
  { name: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' },
  { name: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  { name: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-black border-t border-white/5">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-yellow-500/20">
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-3">
              Ready to Transform Your IT?
            </h3>
            <p className="text-brand-black/70 text-lg">
              Get a free consultation and discover how ExpertLance can help.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-4 bg-brand-black text-white font-heading font-semibold rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300"
          >
            Book a Call →
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
          <a href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="ExpertLance Logo"
            className="w-50 h-30 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"/>
          </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering businesses with cutting-edge IT solutions since 2012.
              Your technology partner for digital transformation.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-brand-yellow transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ExpertLance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-brand-yellow transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-brand-yellow transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-brand-yellow transition-colors">Cookies</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-yellow-500/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}