type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8">
      <section className="glass-panel rounded-[32px] px-5 py-10 sm:px-8 sm:py-12">
        <p className="text-xs tracking-[0.28em] text-white/45">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          {description}
        </p>
      </section>
    </div>
  );
}
