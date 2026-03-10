import { Button } from "@/components/ui/button";

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
        <Button
          variant="outline"
          size="sm"
          className="hidden rounded-full border-white/12 bg-white/6 text-white/80 hover:bg-white/10 hover:text-white sm:inline-flex dark:bg-white/6 dark:hover:bg-white/10"
        >
          {action}
        </Button>
      ) : null}
    </div>
  );
}
