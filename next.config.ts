import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.weibo.com" },
      { protocol: "https", hostname: "www.zhihu.com" },
      { protocol: "https", hostname: "www.toutiao.com" },
      { protocol: "https", hostname: "www.douyin.com" },
      { protocol: "https", hostname: "www.smzdm.com" },
      { protocol: "https", hostname: "www.bilibili.com" },
    ],
  },
};

export default nextConfig;
