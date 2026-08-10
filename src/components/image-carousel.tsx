"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { VolunteerPhoto } from "@/data/volunteering";

export function ImageCarousel({ photos }: { photos: VolunteerPhoto[] }) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  const scrollToIndex = React.useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = (index + photos.length) % photos.length;
      track.scrollTo({
        left: clamped * track.clientWidth,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    },
    [photos.length, shouldReduceMotion]
  );

  const handleScroll = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(index);
  }, []);

  if (photos.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        role="region"
        aria-roledescription="carousel"
        aria-label="Volunteering photos"
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl border border-border [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <div
            key={photo.caption ?? photo.alt ?? i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${photos.length}`}
            className="relative aspect-[16/9] w-full shrink-0 snap-center bg-card"
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="terminal-texture flex h-full w-full items-center justify-center px-4">
                <span className="max-w-full break-words rounded border border-dashed border-border/70 bg-background/70 px-3 py-1.5 text-center font-mono text-xs text-muted-foreground">
                  [[ image: {photo.caption ?? photo.alt} ]]
                </span>
              </div>
            )}
            {photo.caption && (
              <p className="absolute inset-x-0 bottom-0 bg-background/80 px-4 py-2 font-mono text-xs text-foreground backdrop-blur">
                {photo.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {photos.map((photo, i) => (
              <button
                key={photo.caption ?? photo.alt ?? i}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  i === activeIndex ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
