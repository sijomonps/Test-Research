import {
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  LayoutDashboard,
  User,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { DataTable } from "@/components/Table";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/scholar" },
  { label: "My Submissions", icon: FileText, href: "/scholar" },
  { label: "My Approvals", icon: ClipboardCheck, href: "/scholar" },
  { label: "Profile", icon: User, href: "/scholar" },
];

const metrics = [
  { label: "Total submissions", value: "8", icon: FileText },
  { label: "Pending approvals", value: "3", icon: Clock },
  { label: "Approved papers", value: "5", icon: CheckCircle },
];

const submissionColumns = [
  { key: "title", label: "Title" },
  { key: "department", label: "Department" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status", align: "right" as const },
];

const submissionRows = [
  {
    id: "1",
    title: "AI in Healthcare",
    department: "Computer Science",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "2",
    title: "Blockchain for Security",
    department: "Information Tech",
    submitted: "14 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    department: "Electronics",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
  },
  {
    id: "4",
    title: "Data Mining Techniques",
    department: "Computer Science",
    submitted: "08 May 2024",
    status: <StatusBadge status="Approved" />,
  },
];

export default function ScholarDashboard() {
  return (
    <PageLayout
      title="Scholar Dashboard"
      userName="Scholar User"
      roleLabel="Scholar"
      navItems={navItems}
      activeItem="Dashboard"
    >
      <DashboardCards items={metrics} />
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              Recent submissions
            </h2>
            <p className="text-sm text-slate-500">
              Latest updates across your submitted papers.
            </p>
          </div>
          <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]">
            Last 30 days
          </span>
        </div>
        <div className="mt-4">
          <DataTable columns={submissionColumns} rows={submissionRows} />
        </div>
      </section>
    </PageLayout>
  );
}
