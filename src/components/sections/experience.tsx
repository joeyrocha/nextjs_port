import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20"
    >
      <ScrollReveal>
        <SectionLabel index="04">experience</SectionLabel>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
      </ScrollReveal>

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((entry, i) => (
          <ScrollReveal key={entry.org} as="li" delay={i * 0.08} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {entry.title} <span className="text-muted-foreground">· {entry.org}</span>
              </h3>
              <span className="font-mono text-xs text-primary">{entry.period}</span>
            </div>
            {entry.highlights.length > 0 && (
              <ul className="mt-3 space-y-2">
                {entry.highlights.map((point) => (
                  <li
                    key={point.slice(0, 32)}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1 text-primary" aria-hidden="true">
                      ▸
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
}
