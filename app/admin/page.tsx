import {
  CheckCircle,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  NotebookText,
  Settings,
  Users,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { DataTable } from "@/components/Table";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Users", icon: Users, href: "/admin" },
  { label: "Submissions", icon: FileText, href: "/admin" },
  { label: "Approvals", icon: ClipboardCheck, href: "/admin" },
  { label: "Reports", icon: NotebookText, href: "/admin" },
  { label: "Settings", icon: Settings, href: "/admin" },
];

const metrics = [
  { label: "Total users", value: "87", icon: Users },
  { label: "Total submissions", value: "128", icon: FileText },
  { label: "Pending approvals", value: "32", icon: ClipboardCheck },
  { label: "Approved papers", value: "96", icon: CheckCircle },
];

const submissionColumns = [
  { key: "title", label: "Title" },
  { key: "author", label: "Author" },
  { key: "department", label: "Department" },
  { key: "status", label: "Status", align: "right" as const },
];

const submissionRows = [
  {
    id: "1",
    title: "AI in Healthcare",
    author: "John Smith",
    department: "Computer Science",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "2",
    title: "Blockchain for Security",
    author: "Emily Davis",
    department: "Information Tech",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    author: "Michael Brown",
    department: "Electronics",
    status: <StatusBadge status="Approved" />,
  },
  {
    id: "4",
    title: "Cloud Computing Benefits",
    author: "David Lee",
    department: "Computer Science",
    status: <StatusBadge status="Rejected" />,
  },
];

export default function AdminDashboard() {
  return (
    <PageLayout
      title="Admin Dashboard"
      userName="Admin"
      roleLabel="Administrator"
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
              System-wide submissions requiring oversight.
            </p>
          </div>
          <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]">
            This month
          </span>
        </div>
        <div className="mt-4">
          <DataTable columns={submissionColumns} rows={submissionRows} />
        </div>
      </section>
    </PageLayout>
  );
}
