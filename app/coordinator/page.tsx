import {
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  NotebookText,
  User,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { DataTable } from "@/components/Table";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/coordinator" },
  { label: "Submissions", icon: FileText, href: "/coordinator" },
  { label: "Approvals", icon: ClipboardCheck, href: "/coordinator" },
  { label: "Reports", icon: NotebookText, href: "/coordinator" },
  { label: "Profile", icon: User, href: "/coordinator" },
];

const metrics = [
  { label: "MCA submissions", value: "56", icon: FileText },
  { label: "Pending approvals", value: "14", icon: ClipboardCheck },
  { label: "Approved papers", value: "32", icon: LayoutDashboard },
  { label: "Department overview", value: "MCA Dept", icon: NotebookText },
];

const submissionColumns = [
  { key: "title", label: "Title" },
  { key: "scholar", label: "Scholar" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status", align: "right" as const },
];

const submissionRows = [
  {
    id: "1",
    title: "AI in Healthcare",
    scholar: "Riya Sharma",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "2",
    title: "Blockchain for Security",
    scholar: "Aman Verma",
    submitted: "14 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    scholar: "Neha Gupta",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
  },
  {
    id: "4",
    title: "Cloud Computing Benefits",
    scholar: "Pooja Singh",
    submitted: "08 May 2024",
    status: <StatusBadge status="Rejected" />,
  },
];

export default function CoordinatorDashboard() {
  return (
    <PageLayout
      title="Research Centre Coordinator"
      userName="Dr. Priya Sharma"
      roleLabel="Coordinator"
      navItems={navItems}
      activeItem="Dashboard"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--maroon-700)]">
          Department
        </p>
        <h2 className="mt-2 font-display text-2xl text-[color:var(--maroon-900)]">
          MCA - Master of Computer Applications
        </h2>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
          <span>Coordinator: Dr. Priya Sharma</span>
          <span>Academic Year: 2024-2025</span>
          <span>Total Scholars: 28</span>
        </div>
      </section>
      <DashboardCards items={metrics} />
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              MCA submissions
            </h2>
            <p className="text-sm text-slate-500">
              Recent submissions across the MCA department.
            </p>
          </div>
          <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]">
            Updated this week
          </span>
        </div>
        <div className="mt-4">
          <DataTable columns={submissionColumns} rows={submissionRows} />
        </div>
      </section>
    </PageLayout>
  );
}
