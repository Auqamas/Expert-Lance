import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsGrid from '../components/ProjectsGrid';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-grid-light" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-line bg-brand-surface mb-6">
              <span className="text-sm font-medium text-brand-primary">ExpertLance Projects</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brand-ink mb-6">
              Products Built
              <br />
              <span className="text-gradient-light">By Our Engineering Teams</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed">
              Explore real systems, platforms, and tools developed by ExpertLance across CS, software engineering, cybersecurity, and data.
            </p>
          </div>

          <ProjectsGrid items={projects} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
