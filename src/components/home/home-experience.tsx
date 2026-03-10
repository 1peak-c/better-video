"use client";

import { useState } from "react";
import { PlaceholderPage } from "@/components/common/placeholder-page";
import { TopNav } from "@/components/navigation/top-nav";
import { NewsPage } from "@/components/news/news-page";
import { VideoPage } from "@/components/video/video-page";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const navItems = ["新闻", "影视", "音乐", "我的"] as const;

export type AppTab = (typeof navItems)[number];

export function HomeExperience() {
  const [activeTab, setActiveTab] = useState<AppTab>("新闻");

  return (
    <main className="relative min-h-screen overflow-hidden pb-16 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(76,201,240,0.24),transparent_42%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-32 h-72 w-72 rounded-full bg-orange-500/12 blur-3xl" />

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as AppTab)}
        className="gap-0"
      >
        <TopNav items={navItems} />
        <TabsContent value="新闻">
          <NewsPage />
        </TabsContent>
        <TabsContent value="影视">
          <VideoPage />
        </TabsContent>
        <TabsContent value="音乐">
          <PlaceholderPage
            eyebrow="音乐专区"
            title="音乐内容页正在准备中"
            description="这里会放音乐热榜、MV 推荐、现场演出和歌单入口。当前先保留为独立专区占位，后续可以继续接入真实音乐内容结构。"
          />
        </TabsContent>
        <TabsContent value="我的">
          <PlaceholderPage
            eyebrow="个人中心"
            title="我的页面正在准备中"
            description="这里后续可以接入账号信息、观看历史、收藏片单、订阅更新和个性化推荐。当前先保留为独立入口，方便继续扩展。"
          />
        </TabsContent>
      </Tabs>
    </main>
  );
}
