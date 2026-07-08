import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { useHomeSectionScroll } from '../hooks/useHomeSectionScroll';

export default function HomePage() {
  useHomeSectionScroll();

  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}
