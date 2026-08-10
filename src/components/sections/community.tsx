import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { community } from "@/data/community";

export function Community() {
  return (
    <section
      id="community"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20"
    >
      <ScrollReveal>
        <SectionLabel index="07">community</SectionLabel>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
          Community &amp; Involvement
        </h2>
      </ScrollReveal>

      <ul className="divide-y divide-border rounded-lg border border-border bg-card/40">
        {community.map((entry, i) => (
          <ScrollReveal as="li" key={entry.org} delay={i * 0.06}>
            <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{entry.org}</p>
                <p className="text-sm text-muted-foreground">{entry.role}</p>
              </div>
              <p className="font-mono text-xs text-primary">{entry.period}</p>
            </div>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
