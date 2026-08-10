export function TerminalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="terminal-texture absolute inset-0 opacity-[0.35] dark:opacity-[0.5]" />
      <div className="terminal-scanlines absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
    </div>
  );
}
