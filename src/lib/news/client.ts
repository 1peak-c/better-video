import type { NewsBoard } from "@/types/news";

type NewsApiResponse = {
  boards: NewsBoard[];
};

export async function fetchNewsBoards(signal?: AbortSignal) {
  const response = await fetch("/api/news", {
    signal,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("新闻数据加载失败，请稍后再试。");
  }

  const payload = (await response.json()) as NewsApiResponse;
  return payload.boards;
}
