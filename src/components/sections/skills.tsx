import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <ScrollReveal>
        <SectionLabel index="03">skills</SectionLabel>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
          Skills
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <ScrollReveal
            key={group.label}
            delay={i * 0.1}
            className="rounded-lg border border-border bg-card/60 p-6"
          >
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-primary">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Badge variant="secondary" className="font-mono">
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
