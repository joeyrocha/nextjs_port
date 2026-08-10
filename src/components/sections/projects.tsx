import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <ScrollReveal>
        <SectionLabel index="04">projects</SectionLabel>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mb-10 max-w-2xl text-muted-foreground">
          A mix of flagship work, an M.S. capstone, and weekend builds — spanning
          BI dashboards, spatial analysis, and applied machine learning.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={(i % 3) * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
