import {
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  NotebookText,
  Users,
  User,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { DataTable } from "@/components/Table";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/faculty" },
  { label: "Scholars", icon: Users, href: "/faculty" },
  { label: "Submissions", icon: FileText, href: "/faculty" },
  { label: "Approvals", icon: ClipboardCheck, href: "/faculty" },
  { label: "Reports", icon: NotebookText, href: "/faculty" },
  { label: "Profile", icon: User, href: "/faculty" },
];

const metrics = [
  { label: "Total scholars", value: "12", icon: Users },
  { label: "Pending reviews", value: "7", icon: ClipboardCheck },
  { label: "Recent submissions", value: "18", icon: FileText },
  { label: "Approval requests", value: "4", icon: NotebookText },
];

const submissionColumns = [
  { key: "title", label: "Title" },
  { key: "scholar", label: "Scholar" },
  { key: "department", label: "Department" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status", align: "right" as const },
];

const submissionRows = [
  {
    id: "1",
    title: "AI in Healthcare",
    scholar: "John Smith",
    department: "Computer Science",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "2",
    title: "Blockchain for Security",
    scholar: "Michael Brown",
    department: "Information Tech",
    submitted: "14 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    scholar: "Sarah Wilson",
    department: "Electronics",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
  },
];

const approvalColumns = [
  { key: "title", label: "Title" },
  { key: "scholar", label: "Scholar" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status", align: "right" as const },
];

const approvalRows = [
  {
    id: "1",
    title: "AI in Healthcare",
    scholar: "John Smith",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "2",
    title: "Cloud Computing Benefits",
    scholar: "James Carter",
    submitted: "08 May 2024",
    status: <StatusBadge status="In Review" />,
  },
  {
    id: "3",
    title: "Data Mining Techniques",
    scholar: "David Lee",
    submitted: "07 May 2024",
    status: <StatusBadge status="Approved" />,
  },
];

export default function FacultyDashboard() {
  return (
    <PageLayout
      title="Faculty Dashboard"
      userName="Dr. Emily Davis"
      roleLabel="Faculty Member"
      navItems={navItems}
      activeItem="Dashboard"
    >
      <DashboardCards items={metrics} />
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
          <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border)] pb-4">
            <div>
              <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
                Recent submissions
              </h2>
              <p className="text-sm text-slate-500">
                Latest scholar submissions awaiting review.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <DataTable columns={submissionColumns} rows={submissionRows} />
          </div>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
          <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border)] pb-4">
            <div>
              <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
                Approval requests
              </h2>
              <p className="text-sm text-slate-500">
                Submissions that need a decision this week.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <DataTable columns={approvalColumns} rows={approvalRows} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
