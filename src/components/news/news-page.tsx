"use client";

import { useEffect, useState, startTransition } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { NewsBoard } from "@/components/news/news-board";
import { fetchNewsBoards } from "@/lib/news/client";
import type { NewsBoard as NewsBoardData } from "@/types/news";

type NewsState =
  | { status: "loading"; boards: NewsBoardData[]; error: null }
  | { status: "success"; boards: NewsBoardData[]; error: null }
  | { status: "error"; boards: NewsBoardData[]; error: string };

export function NewsPage() {
  const [state, setState] = useState<NewsState>({
    status: "loading",
    boards: [],
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadBoards() {
      try {
        const boards = await fetchNewsBoards(controller.signal);

        startTransition(() => {
          setState({
            status: "success",
            boards,
            error: null,
          });
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        const message =
          error instanceof Error ? error.message : "热榜加载失败，请稍后重试。";

        startTransition(() => {
          setState({
            status: "error",
            boards: [],
            error: message,
          });
        });
      }
    }

    void loadBoards();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <section className="space-y-3">
        <SectionHeader eyebrow="新闻聚合" title="全网热搜" />
        <p className="max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
          直接查看微博、知乎、今日头条、抖音、什么值得买和 B 站的实时热榜。
          每个平台默认展示 8 条，点击即可跳转原站。
        </p>
      </section>

      {state.status === "loading" ? (
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="glass-panel rounded-[26px] px-4 py-4 sm:px-5"
            >
              <div className="h-11 animate-pulse rounded-2xl bg-white/6" />
              <div className="mt-4 space-y-3">
                {Array.from({ length: 8 }).map((__, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="h-6 animate-pulse rounded-full bg-white/6"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {state.status === "error" ? (
        <div className="glass-panel rounded-[26px] px-5 py-6 text-sm leading-7 text-white/70">
          {state.error}
        </div>
      ) : null}

      {state.status === "success" ? (
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {state.boards.map((board) => (
            <NewsBoard key={board.id} board={board} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
