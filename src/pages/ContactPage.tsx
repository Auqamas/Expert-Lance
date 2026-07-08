import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink overflow-x-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
