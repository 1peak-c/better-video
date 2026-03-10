import type { AppTab } from "@/components/home/home-experience";

type TopNavProps = {
  items: readonly AppTab[];
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
};

export function TopNav({ items, activeTab, onTabChange }: TopNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-full border border-white/12 bg-slate-950/72 px-2 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <nav aria-label="主导航">
          <ul className="grid grid-cols-4 gap-1 text-center text-sm tracking-[0.18em] text-white/62">
            {items.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => onTabChange(item)}
                  className={
                    activeTab === item
                      ? "w-full rounded-full bg-white/10 px-2 py-3 font-semibold text-white"
                      : "w-full rounded-full px-2 py-3 transition hover:bg-white/8 hover:text-white"
                  }
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
