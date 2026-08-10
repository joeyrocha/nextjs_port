import Image from "next/image";

type HeroMediaProps = {
  /** Primary headshot / avatar. Falls back to a labeled placeholder if omitted. */
  avatarSrc?: string;
  avatarAlt?: string;
  /** Decorative supporting graphic behind the avatar frame. Optional. */
  accentSrc?: string;
  accentAlt?: string;
};

export function HeroMedia({
  avatarSrc = "/images/profile.jpg",
  avatarAlt = "Portrait of Joey Rocha-Perez",
  accentSrc = "/images/hero-image.png",
  accentAlt = "",
}: HeroMediaProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem]">
      {accentSrc ? (
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-6 h-[85%] w-[85%] rotate-6 overflow-hidden rounded-2xl border border-border/60 opacity-40 grayscale mix-blend-luminosity sm:opacity-50"
        >
          <Image
            src={accentSrc}
            alt={accentAlt}
            fill
            sizes="(min-width: 640px) 20rem, 60vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-6 flex h-[85%] w-[85%] rotate-6 items-center justify-center rounded-2xl border border-dashed border-border/60 font-mono text-[10px] text-muted-foreground"
        >
          [[ supporting image ]]
        </div>
      )}

      <div className="terminal-texture absolute -bottom-6 -left-6 h-[85%] w-[85%] rounded-2xl border border-primary/40 bg-background/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[80%] w-[80%] overflow-hidden rounded-2xl border-2 border-primary/70 bg-card shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)]">
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              priority
              sizes="(min-width: 640px) 18rem, 70vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted-foreground">
              [[ headshot / avatar ]]
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
