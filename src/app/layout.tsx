import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "映潮 | 视频流媒体首页",
  description: "一个适配移动端的视频流媒体首页，可浏览剧集、短片与直播内容。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
