import type { ReactNode } from "react";
import type { NavItem } from "./Sidebar";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type PageLayoutProps = {
  title: string;
  userName: string;
  roleLabel: string;
  navItems: NavItem[];
  activeItem: string;
  children: ReactNode;
};

export function PageLayout({
  title,
  userName,
  roleLabel,
  navItems,
  activeItem,
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar navItems={navItems} activeItem={activeItem} />
        <div className="flex flex-1 flex-col">
          <Topbar title={title} userName={userName} roleLabel={roleLabel} />
          <main className="flex-1 px-6 pb-12 pt-6 lg:px-10">
            <div className="mx-auto w-full max-w-6xl space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
