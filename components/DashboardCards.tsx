import type { LucideIcon } from "lucide-react";

type DashboardCard = {
  label: string;
  value: string;
  icon: LucideIcon;
  helper?: string;
};

type DashboardCardsProps = {
  items: DashboardCard[];
};

export function DashboardCards({ items }: DashboardCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 shadow-[0_12px_28px_rgba(91,11,22,0.08)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  {item.value}
                </p>
                {item.helper ? (
                  <p className="mt-1 text-xs text-slate-400">{item.helper}</p>
                ) : null}
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--muted)] text-[color:var(--maroon-800)]">
                <Icon className="h-5 w-5" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
