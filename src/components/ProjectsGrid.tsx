import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectsGridProps = {
  items: Project[];
  showBuiltBy?: boolean;
};

export default function ProjectsGrid({ items, showBuiltBy = true }: ProjectsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((project) => (
        <article
          key={project.id}
          className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01] border border-brand-line hover:shadow-md"
        >
          <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

          <div className="p-8">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full">
                {project.year}
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-brand-ink mb-2 group-hover:text-brand-primary transition-colors duration-300">
              {project.title}
            </h3>

            {showBuiltBy && (
              <p className="text-xs text-brand-muted mb-3">
                Built by <span className="font-semibold text-brand-ink">{project.builtBy}</span>
              </p>
            )}

            <p className="text-brand-muted text-sm leading-relaxed mb-4">{project.description}</p>
            <p className="text-sm text-brand-ink font-medium mb-4">{project.highlight}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="px-3 py-1.5 bg-brand-surface border border-brand-line rounded-full text-xs font-medium text-brand-muted"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs text-brand-primary font-medium">
                  #{tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-brand-primary">
              ExpertLance Original Build
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
