"use client";

import type { AppTab } from "@/components/home/home-experience";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

type TopNavProps = {
  items: readonly AppTab[];
};

export function TopNav({ items }: TopNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-full border border-white/12 bg-slate-950/72 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <nav aria-label="主导航">
          <TabsList
            variant="line"
            className="grid h-auto w-full grid-cols-4 rounded-full bg-transparent p-0 text-center text-sm tracking-[0.18em] text-white/62"
          >
            {items.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="h-11 rounded-full border-none px-2 py-3 text-white/62 shadow-none after:hidden data-active:bg-white/10 data-active:font-semibold data-active:text-white data-active:shadow-none hover:bg-white/6 hover:text-white dark:data-active:border-transparent dark:data-active:bg-white/10"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </nav>
      </div>
    </header>
  );
}
