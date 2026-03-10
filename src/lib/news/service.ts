import { NEWS_SOURCE_LIST, NEWS_SOURCE_META, NEWS_SOURCE_LIMIT } from "@/lib/news/sources";
import type { NewsBoard, NewsItem, NewsSourceId } from "@/types/news";

const HOT_API_BASE_URL = "https://api-hot.imsyy.top";

type DailyHotRecord = {
  title?: string;
  desc?: string;
  hot?: string | number;
  url?: string;
  mobilUrl?: string;
  mobileUrl?: string;
  timestamp?: string;
};

type DailyHotResponse = {
  data?: DailyHotRecord[];
  updateTime?: string;
};

function normalizeTimestamp(raw?: string) {
  if (!raw) {
    return null;
  }

  const normalized = raw.replace("T", " ").replace(/\.\d{3}Z$/, "");
  return normalized;
}

function normalizeHot(raw?: string | number) {
  if (raw === undefined || raw === null || raw === "") {
    return null;
  }

  return String(raw);
}

function mapNewsItem(record: DailyHotRecord, fallbackUrl: string): NewsItem | null {
  if (!record.title) {
    return null;
  }

  return {
    title: record.title,
    url: record.mobilUrl ?? record.mobileUrl ?? record.url ?? fallbackUrl,
    hot: normalizeHot(record.hot),
    timestamp: normalizeTimestamp(record.timestamp),
  };
}

async function fetchBoard(sourceId: NewsSourceId): Promise<NewsBoard> {
  const source = NEWS_SOURCE_META[sourceId];

  try {
    const response = await fetch(
      `${HOT_API_BASE_URL}/${source.endpoint}?limit=${NEWS_SOURCE_LIMIT}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: {
          revalidate: 180,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`${source.name} 请求失败`);
    }

    const payload = (await response.json()) as DailyHotResponse;
    const items =
      payload.data
        ?.map((record) => mapNewsItem(record, source.officialUrl))
        .filter((item): item is NewsItem => item !== null)
        .slice(0, NEWS_SOURCE_LIMIT) ?? [];

    return {
      id: sourceId,
      items,
      updatedAt: normalizeTimestamp(payload.updateTime),
      error: items.length === 0 ? "暂无可展示的数据，请稍后刷新。" : null,
    };
  } catch {
    return {
      id: sourceId,
      items: [],
      updatedAt: null,
      error: "该平台热榜暂时不可用，请稍后再试。",
    };
  }
}

export async function getNewsBoards() {
  return Promise.all(NEWS_SOURCE_LIST.map((sourceId) => fetchBoard(sourceId)));
}
