import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { handleSectionNavigation } from '../utils/navigation';

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const sectionLinks = [
  { label: 'Tracks', section: 'services' },
  { label: 'Roadmap', section: 'process' },
  { label: 'Reviews', section: 'testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-brand-line shadow-sm'
          : 'bg-white/70 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group" onClick={closeMobile}>
            <img
              src="/logo.png"
              alt="ExpertLance Logo"
              className="w-30 h-18 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {pageLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.to ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-primary'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            {sectionLinks.map((link) => (
              <a
                key={link.label}
                href={`/#${link.section}`}
                onClick={(e) => {
                  handleSectionNavigation(e, link.section, location.pathname, navigate);
                  closeMobile();
                }}
                className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-brand-yellow text-brand-black font-heading font-semibold text-sm rounded-full hover:bg-brand-yellow-dark hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button className="lg:hidden text-brand-ink" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-brand-line px-6 py-6 space-y-4">
          {pageLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={closeMobile}
              className="block text-brand-muted hover:text-brand-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={`/#${link.section}`}
              onClick={(e) => {
                handleSectionNavigation(e, link.section, location.pathname, navigate);
                closeMobile();
              }}
              className="block text-brand-muted hover:text-brand-primary font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/contact"
            onClick={closeMobile}
            className="inline-block mt-2 px-6 py-2.5 bg-brand-yellow text-brand-black font-heading font-semibold text-sm rounded-full hover:bg-brand-yellow-dark transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
