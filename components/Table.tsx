import type { ReactNode } from "react";

type Column = {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
};

type Row = {
  id: string;
  [key: string]: ReactNode;
};

type DataTableProps = {
  columns: Column[];
  rows: Row[];
  caption?: string;
};

const alignment: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function DataTable({ columns, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_10px_24px_rgba(91,11,22,0.08)]">
      <table className="min-w-full text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-[color:var(--muted)] text-xs uppercase tracking-wide text-slate-500">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-3 font-semibold ${alignment[column.align ?? "left"]}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[color:var(--border)]">
          {rows.map((row) => (
            <tr key={row.id} className="text-slate-700">
              {columns.map((column) => (
                <td
                  key={`${row.id}-${column.key}`}
                  className={`px-4 py-3 ${alignment[column.align ?? "left"]}`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
