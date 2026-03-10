import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";

const trendingNow = [
  {
    title: "霓虹街区",
    meta: "科幻悬疑",
    detail: "共 8 集",
    gradient: "from-cyan-400 via-sky-500 to-indigo-700",
  },
  {
    title: "奔跑社",
    meta: "纪实片",
    detail: "最新一集",
    gradient: "from-orange-300 via-rose-400 to-red-700",
  },
  {
    title: "夜场之后",
    meta: "现场特别场",
    detail: "18 分钟后开播",
    gradient: "from-fuchsia-400 via-purple-500 to-slate-900",
  },
  {
    title: "逐浪而行",
    meta: "旅行电影",
    detail: "精选 4K",
    gradient: "from-emerald-300 via-teal-500 to-cyan-800",
  },
];

const continueWatching = [
  {
    title: "零号信号",
    episode: "第 5 集",
    progress: "68%",
    width: "68%",
    tone: "bg-cyan-400",
  },
  {
    title: "回声片场",
    episode: "第 2 季 第 2 集",
    progress: "42%",
    width: "42%",
    tone: "bg-orange-400",
  },
  {
    title: "公路尽头",
    episode: "第 9 集",
    progress: "83%",
    width: "83%",
    tone: "bg-emerald-400",
  },
];

const moods = [
  "高能剪辑",
  "安静夜晚",
  "周末连看",
  "20 分钟以内",
  "真实故事",
  "正在直播",
];

const liveDrops = [
  { title: "创作者擂台", viewers: "1.24 万人观看", status: "直播中" },
  { title: "放映聊天室", viewers: "4800 人预约", status: "即将开始" },
  { title: "午夜现场", viewers: "9100 人观看", status: "直播中" },
];

export function VideoPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8">
      <section className="glass-panel relative overflow-hidden rounded-[32px] px-5 py-6 sm:px-8 sm:py-8">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_64%)] md:block" />
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs tracking-[0.26em] text-cyan-100/80">
              今晚主推
            </div>
            <div className="space-y-4">
              <h1 className="max-w-xl font-display text-4xl leading-none tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
                一个适合剧集、短片和直播内容的沉浸式首页。
              </h1>
              <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                在同一个响应式视频平台中发现原创内容、继续观看你的片单，
                也能随时进入创作者直播间。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-400">
                播放主推内容
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white dark:bg-white/6 dark:hover:bg-white/10"
              >
                浏览片库
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs tracking-[0.2em] text-white/45">片库数量</p>
                <p className="mt-2 font-display text-2xl text-white">1200+</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs tracking-[0.2em] text-white/45">正在直播</p>
                <p className="mt-2 font-display text-2xl text-white">37</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs tracking-[0.2em] text-white/45">移动端体验</p>
                <p className="mt-2 font-display text-2xl text-white">A+</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="float-card rounded-[28px] border border-white/12 bg-slate-950/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="poster-sheen aspect-[4/5] rounded-[24px] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-900 p-5">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs tracking-[0.24em] text-slate-950/70">
                    <span>映潮原创</span>
                    <span>4K</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/75">今晚首播</p>
                    <h3 className="mt-2 max-w-xs font-display text-3xl leading-tight text-white">
                      城市回声
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">第 1 集将于 20:00 上线</p>
                  <p className="text-xs text-white/45">剧情 • 52 分钟 • 杜比全景声</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-white/12 text-xs tracking-[0.2em] text-white/75 hover:bg-white/10 hover:text-white"
                >
                  加入片单
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader eyebrow="热门趋势" title="现在大家都在看" action="查看全部" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trendingNow.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/7"
            >
              <div
                className={`poster-sheen aspect-[16/10] bg-gradient-to-br ${item.gradient} p-5`}
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-slate-950/20 px-3 py-1 text-xs tracking-[0.2em] text-white/80">
                    {item.meta}
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.24em] text-white/65">
                      {item.detail}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-sm text-white/72">观看预告</p>
                <span className="text-sm text-white/35 transition group-hover:text-white/75">
                  02:14
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_22rem]">
        <div className="glass-panel rounded-[30px] p-5 sm:p-6">
          <SectionHeader eyebrow="分类浏览" title="按观看心情挑选" />
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {moods.map((mood, index) => (
              <button
                key={mood}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-left transition hover:border-white/20 hover:bg-white/10"
              >
                <p className="text-xs tracking-[0.2em] text-white/35">0{index + 1}</p>
                <p className="mt-3 text-sm font-semibold text-white sm:text-base">{mood}</p>
              </button>
            ))}
          </div>
        </div>

        <aside className="glass-panel rounded-[30px] p-5 sm:p-6">
          <SectionHeader eyebrow="直播专区" title="现在就加入" />
          <div className="mt-5 space-y-3">
            {liveDrops.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/55">{item.viewers}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs tracking-[0.2em] ${
                      item.status === "直播中"
                        ? "bg-orange-500/18 text-orange-100"
                        : "bg-cyan-400/18 text-cyan-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="继续观看"
          title="继续回到你的观看进度"
          action="查看片单"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {continueWatching.map((item, index) => (
            <article
              key={item.title}
              className="glass-panel overflow-hidden rounded-[28px] p-4 transition hover:-translate-y-1"
            >
              <div
                className={`aspect-[16/9] rounded-[22px] bg-gradient-to-br ${
                  index === 0
                    ? "from-sky-400 via-cyan-500 to-blue-900"
                    : index === 1
                      ? "from-orange-300 via-rose-400 to-red-800"
                      : "from-emerald-300 via-teal-500 to-cyan-900"
                }`}
              />
              <div className="mt-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <p className="text-sm text-white/55">{item.episode}</p>
                  </div>
                  <p className="text-sm text-white/45">{item.progress}</p>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/8">
                  <div
                    className={`h-full rounded-full ${item.tone}`}
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
