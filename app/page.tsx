import Link from "next/link";
import {
  BookOpen,
  Building2,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

const roles = [
  {
    title: "Scholar",
    description: "Track submissions, approvals, and research status.",
    href: "/scholar",
    icon: GraduationCap,
  },
  {
    title: "Faculty Member / Research Guide",
    description: "Review scholars, submissions, and approvals.",
    href: "/faculty",
    icon: Users,
  },
  {
    title: "Admin",
    description: "Oversee users, submissions, and reporting.",
    href: "/admin",
    icon: ShieldCheck,
  },
  {
    title: "Research Centre Coordinator",
    description: "Monitor MCA department activity and outcomes.",
    href: "/coordinator",
    icon: Building2,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <div className="grid min-h-screen lg:grid-cols-[360px_1fr]">
        <aside className="flex flex-col justify-between bg-gradient-to-b from-[color:var(--maroon-900)] to-[color:var(--maroon-700)] px-8 py-10 text-white">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="mt-6 font-display text-3xl">Research System</h1>
            <p className="mt-3 text-sm text-white/80">
              Manage academic research workflows with clarity and structure.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-xs text-white/75">
            Prototype role selection for the Research Management System.
          </div>
        </aside>
        <main className="flex items-center px-6 py-12 lg:px-14">
          <div className="mx-auto w-full max-w-5xl">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--maroon-700)]">
                Select Role
              </span>
              <h2 className="font-display text-3xl text-[color:var(--maroon-900)]">
                Research Management System
              </h2>
              <p className="text-sm text-slate-500">
                Choose a role to preview the academic dashboard experience.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {roles.map((role) => {
                const Icon = role.icon;

                return (
                  <Link
                    key={role.title}
                    href={role.href}
                    className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)] transition hover:-translate-y-0.5 hover:border-[color:var(--maroon-700)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--muted)] text-[color:var(--maroon-800)] transition group-hover:bg-[color:var(--maroon-800)] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {role.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
