type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  action?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-xs tracking-[0.28em] text-white/45">{eyebrow}</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {action ? (
        <button className="hidden rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 sm:block">
          {action}
        </button>
      ) : null}
    </div>
  );
}
