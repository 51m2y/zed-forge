export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ff-cyan">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold text-ff-text sm:text-4xl">{title}</h2>
      {sub ? <p className="mt-4 text-base leading-7 text-ff-muted">{sub}</p> : null}
    </div>
  );
}
