import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20"
    >
      <ScrollReveal>
        <SectionLabel index="05">education</SectionLabel>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
          Education
        </h2>
      </ScrollReveal>

      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map((entry, i) => (
          <ScrollReveal
            as="li"
            key={entry.degree}
            delay={i * 0.08}
            className="rounded-lg border border-border bg-card/60 p-5"
          >
            <p className="font-semibold text-foreground">{entry.degree}</p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              {entry.school}
            </p>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
