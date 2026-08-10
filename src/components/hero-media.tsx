import Image from "next/image";

type HeroMediaProps = {
  /** Hero visual. Falls back to a labeled placeholder if omitted. */
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroMedia({
  imageSrc = "/images/hero-image.png",
  imageAlt = "Joey Rocha-Perez",
}: HeroMediaProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] p-6">
      <div className="terminal-texture absolute bottom-0 left-0 h-[48%] w-[48%] rounded-2xl border border-primary/40 bg-background/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[80%] w-[80%] overflow-hidden rounded-2xl border-2 border-primary/70 bg-card shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 640px) 18rem, 70vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted-foreground">
              [[ hero image ]]
            </div>
          )}

          {/* corner brackets, terminal-reticle styling */}
          <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
          <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-primary" />
          <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-primary" />
          <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
        </div>
      </div>
    </div>
  );
}
