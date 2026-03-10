import type { NewsSourceId } from "@/types/news";

export const NEWS_SOURCE_LIMIT = 8;

export const NEWS_SOURCE_LIST: NewsSourceId[] = [
  "weibo",
  "zhihu",
  "toutiao",
  "douyin",
  "smzdm",
  "bilibili",
];

export const NEWS_SOURCE_META: Record<
  NewsSourceId,
  {
    endpoint: string;
    name: string;
    logoUrl: string;
    officialUrl: string;
  }
> = {
  weibo: {
    endpoint: "weibo",
    name: "微博热搜",
    logoUrl: "https://www.weibo.com/favicon.ico",
    officialUrl: "https://s.weibo.com/top/summary",
  },
  zhihu: {
    endpoint: "zhihu",
    name: "知乎热搜",
    logoUrl: "https://www.zhihu.com/favicon.ico",
    officialUrl: "https://www.zhihu.com/hot",
  },
  toutiao: {
    endpoint: "toutiao",
    name: "今日头条热搜",
    logoUrl: "https://www.toutiao.com/favicon.ico",
    officialUrl: "https://www.toutiao.com/hot-event/hot-board/",
  },
  douyin: {
    endpoint: "douyin",
    name: "抖音热搜",
    logoUrl: "https://www.douyin.com/favicon.ico",
    officialUrl: "https://www.douyin.com/hot",
  },
  smzdm: {
    endpoint: "smzdm",
    name: "什么值得买热门",
    logoUrl: "https://www.smzdm.com/favicon.ico",
    officialUrl: "https://www.smzdm.com/top/",
  },
  bilibili: {
    endpoint: "bilibili",
    name: "B站排行榜",
    logoUrl: "https://www.bilibili.com/favicon.ico",
    officialUrl: "https://www.bilibili.com/v/popular/rank/all",
  },
};
