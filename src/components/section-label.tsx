type SectionLabelProps = {
  index: string;
  children: string;
};

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <p className="mb-3 font-mono text-sm text-primary" aria-hidden="true">
      <span className="text-muted-foreground">{"// "}</span>
      {index}. {children}
    </p>
  );
}
