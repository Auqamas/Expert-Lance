import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink overflow-x-hidden">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
