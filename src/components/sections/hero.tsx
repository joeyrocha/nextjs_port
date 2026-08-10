import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroMedia } from "@/components/hero-media";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-16 sm:pt-24 md:flex-row md:gap-16 md:pb-28"
    >
      <ScrollReveal className="flex-1 text-center md:text-left">
        <p className="mb-4 font-mono text-sm text-primary">
          <span className="text-muted-foreground">visitor@jrochaperez</span>
          <span className="text-muted-foreground">:~$</span> whoami
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-3 font-mono text-lg text-primary sm:text-xl">
          {site.role}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
          {site.positioning}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">
              Contact
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full max-w-sm flex-1" delay={0.15}>
        <HeroMedia />
      </ScrollReveal>
    </section>
  );
}
