import Image from "next/image";
import { NEWS_SOURCE_META } from "@/lib/news/sources";
import type { NewsBoard as NewsBoardData } from "@/types/news";

type NewsBoardProps = {
  board: NewsBoardData;
};

export function NewsBoard({ board }: NewsBoardProps) {
  const source = NEWS_SOURCE_META[board.id];

  return (
    <article className="glass-panel rounded-[26px] px-4 py-4 sm:px-5">
      <header className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/6">
            <Image
              src={source.logoUrl}
              alt={`${source.name} logo`}
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
              unoptimized
            />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-white">
              {source.name}
            </h3>
            <p className="text-xs text-white/42">
              {board.updatedAt ?? "实时更新"}
            </p>
          </div>
        </div>
        <a
          href={source.officialUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-xs text-white/42 transition hover:text-white"
        >
          源站
        </a>
      </header>

      {board.error ? (
        <div className="py-6 text-sm leading-6 text-white/60">{board.error}</div>
      ) : (
        <ol className="mt-3">
          {board.items.slice(0, 8).map((item, index) => (
            <li key={`${board.id}-${index}`} className="border-b border-white/8 last:border-b-0">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 py-2.5"
              >
                <span className="w-6 shrink-0 pt-0.5 text-center font-display text-lg text-orange-300">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-6 text-white/78 transition group-hover:text-white">
                    {item.title}
                  </p>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-white/38">
                    {item.hot ? <span>{item.hot}</span> : null}
                    {item.hot && item.timestamp ? <span>•</span> : null}
                    {item.timestamp ? <span>{item.timestamp}</span> : null}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}
