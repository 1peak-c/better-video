"use client";

import type { AppTab } from "@/components/home/home-experience";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TopNavProps = {
  items: readonly AppTab[];
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
};

export function TopNav({ items, activeTab, onTabChange }: TopNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-full border border-white/12 bg-slate-950/72 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <nav aria-label="主导航">
          <div className="grid h-11 w-full grid-cols-4 gap-0">
            {items.map((item) => (
              <Button
                key={item}
                type="button"
                variant="ghost"
                onClick={() => onTabChange(item)}
                className={cn(
                  "h-11 rounded-full border-none bg-transparent px-2 py-3 text-sm tracking-[0.18em] text-white/62 shadow-none transition-colors hover:bg-white/6 hover:text-white focus-visible:ring-0 focus-visible:outline-none",
                  activeTab === item
                    ? "bg-white/6 font-semibold text-white"
                    : "",
                )}
              >
                {item}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
