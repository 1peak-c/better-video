export type NewsSourceId =
  | "weibo"
  | "zhihu"
  | "toutiao"
  | "douyin"
  | "smzdm"
  | "bilibili";

export type NewsItem = {
  title: string;
  url: string;
  hot: string | null;
  timestamp: string | null;
};

export type NewsBoard = {
  id: NewsSourceId;
  items: NewsItem[];
  updatedAt: string | null;
  error: string | null;
};
