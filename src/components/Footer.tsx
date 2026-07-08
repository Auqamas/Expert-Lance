import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { handleSectionNavigation } from '../utils/navigation';

type FooterLink = {
  label: string;
  to?: string;
  section?: string;
};

const footerLinks: Record<string, FooterLink[]> = {
  Tracks: [
    { label: 'Core Programming', section: 'services' },
    { label: 'Data Structures', section: 'services' },
    { label: 'Full-Stack Development', section: 'services' },
    { label: 'Backend Engineering', section: 'services' },
    { label: 'System Design', section: 'services' },
    { label: 'Interview Prep', section: 'services' },
  ],
  Company: [
    { label: 'About ExpertLance', to: '/about' },
    { label: 'Mentor Team', to: '/about' },
    { label: 'Success Stories', section: 'testimonials' },
    { label: 'Curriculum', to: '/about' },
    { label: 'Admissions', to: '/contact' },
    { label: 'Community', to: '/contact' },
  ],
  Resources: [
    { label: 'All Projects', to: '/projects' },
    { label: 'Learning Blog', to: '/about' },
    { label: 'Practice Sheets', section: 'services' },
    { label: 'Career Guides', to: '/about' },
    { label: 'FAQ', to: '/contact' },
    { label: 'Support', to: '/contact' },
  ],
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  },
  {
    name: 'Twitter',
    href: '#',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    name: 'GitHub',
    href: '#',
    path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (link.to) {
    return (
      <Link to={link.to} className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-300">
        {link.label}
      </Link>
    );
  }

  if (link.section) {
    return (
      <a
        href={`/#${link.section}`}
        onClick={(e) => handleSectionNavigation(e, link.section!, location.pathname, navigate)}
        className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-300"
      >
        {link.label}
      </a>
    );
  }

  return <span className="text-sm text-brand-muted">{link.label}</span>;
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-brand-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
        <div className="liquid-cta rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-100/80 border border-white/60">
          <div className="liquid-cta-blob liquid-cta-blob-1" />
          <div className="liquid-cta-blob liquid-cta-blob-2" />
          <div className="liquid-cta-blob liquid-cta-blob-3" />
          <div className="liquid-cta-blob liquid-cta-blob-4" />
          <div className="liquid-cta-content">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-ink mb-3">
              Ready to Start Coding Seriously?
            </h3>
            <p className="text-brand-muted text-lg">
              Book a free guidance session and choose your learning track.
            </p>
          </div>
          <Link
            to="/contact"
            className="liquid-cta-content flex-shrink-0 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-200/70"
          >
            Book a Call →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="ExpertLance Logo"
                className="w-50 h-30 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </Link>

            <p className="text-brand-muted text-sm leading-relaxed max-w-sm mb-6 mt-4">
              ExpertLance is a computer science and programming platform focused on real projects,
              clean coding, and career growth.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={`${social.name} (URL needed)`}
                  className="w-10 h-10 bg-brand-surface border border-brand-line rounded-xl flex items-center justify-center text-brand-muted hover:text-brand-primary hover:border-brand-primary/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-brand-ink mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-muted">
            © {new Date().getFullYear()} ExpertLance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Privacy</Link>
            <Link to="/about" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Terms</Link>
            <Link to="/about" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Cookies</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-brand-surface border border-brand-line rounded-xl flex items-center justify-center text-brand-muted hover:text-brand-primary hover:border-brand-primary/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
