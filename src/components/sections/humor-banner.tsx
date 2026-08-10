import { humorLines } from "@/data/humor";

const line = humorLines[0];

export function HumorBanner() {
  return (
    <section
      aria-label="A word from the terminal"
      className="terminal-texture border-y border-primary/30 bg-card/60 py-10"
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:text-left">
        <p className="font-mono text-sm text-muted-foreground sm:text-base">
          <span className="text-primary">visitor@jrochaperez</span>
          <span>:~$</span> whoami
        </p>
        <p className="mt-2 font-mono text-base text-foreground sm:text-lg">
          <span className="text-primary">{"> "}</span>
          {line}
        </p>
      </div>
    </section>
  );
}
