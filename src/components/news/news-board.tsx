import Image from "next/image";
import { NEWS_SOURCE_META } from "@/lib/news/sources";
import type { NewsBoard as NewsBoardData } from "@/types/news";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type NewsBoardProps = {
  board: NewsBoardData;
};

export function NewsBoard({ board }: NewsBoardProps) {
  const source = NEWS_SOURCE_META[board.id];

  return (
    <Card
      size="sm"
      className="glass-panel rounded-[26px] border-white/10 bg-transparent py-0 text-white shadow-none"
    >
      <CardHeader className="border-b border-white/10 px-4 py-4 sm:px-5">
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
            <CardTitle className="truncate text-base font-semibold text-white">
              {source.name}
            </CardTitle>
            <p className="text-xs text-white/42">
              {board.updatedAt ?? "实时更新"}
            </p>
          </div>
        </div>
        <CardAction>
          <Badge
            variant="outline"
            render={
              <a
                href={source.officialUrl}
                target="_blank"
                rel="noreferrer"
              />
            }
            className="border-white/10 bg-white/6 text-white/70 hover:bg-white/10 hover:text-white"
          >
            源站
          </Badge>
        </CardAction>
      </CardHeader>

      {board.error ? (
        <CardContent className="px-4 py-6 text-sm leading-6 text-white/60 sm:px-5">
          {board.error}
        </CardContent>
      ) : (
        <CardContent className="px-4 pb-1 pt-2 sm:px-5">
          <ol>
          {board.items.slice(0, 8).map((item, index) => (
            <li key={`${board.id}-${index}`}>
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
              {index < Math.min(board.items.length, 8) - 1 ? (
                <Separator className="bg-white/8" />
              ) : null}
            </li>
          ))}
          </ol>
        </CardContent>
      )}
    </Card>
  );
}
