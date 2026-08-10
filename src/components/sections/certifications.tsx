import { BadgeCheck } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20"
    >
      <ScrollReveal>
        <SectionLabel index="06">certifications</SectionLabel>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
          Certifications
        </h2>
      </ScrollReveal>

      <ul className="flex flex-wrap gap-3">
        {certifications.map((cert, i) => (
          <ScrollReveal as="li" key={cert.name} delay={i * 0.06}>
            <div className="flex items-center gap-3 rounded-full border border-border bg-card/60 py-2 pl-3 pr-4">
              <BadgeCheck
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div className="leading-tight">
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {cert.issuer} · {cert.year}
                  {cert.credentialId ? ` · #${cert.credentialId}` : ""}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
