import { Link } from 'react-router-dom';
import ProjectsGrid from './ProjectsGrid';
import { featuredProjects } from '../data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/60 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-line bg-brand-surface mb-6">
            <span className="text-sm font-medium text-brand-primary">ExpertLance Project Showcase</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-ink mb-6">
            Projects That
            <br />
            <span className="text-gradient-light">Prove Real Engineering</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Featured systems built by ExpertLance teams across backend, AI, cybersecurity, and full-stack development.
          </p>
        </div>

        <ProjectsGrid items={featuredProjects} />

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-dark hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
