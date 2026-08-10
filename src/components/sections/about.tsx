import Image from "next/image";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutParagraphs } from "@/data/about";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <ScrollReveal>
        <SectionLabel index="01">about</SectionLabel>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
      </ScrollReveal>

      <div className="grid gap-10 md:grid-cols-[minmax(0,20rem)_1fr] md:items-center">
        <ScrollReveal>
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border-2 border-primary/70 bg-card shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] md:max-w-none">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Joey Rocha-Perez"
              fill
              sizes="(min-width: 768px) 20rem, 80vw"
              className="object-cover"
            />
            <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
            <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-primary" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-primary" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
