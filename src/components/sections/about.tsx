import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutParagraphs } from "@/data/about";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-20">
      <ScrollReveal>
        <SectionLabel index="01">about</SectionLabel>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
