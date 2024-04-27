import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Markets"
        href="/dashboard/markets/new"
        title="Add Market"
      />
      {/* Table Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
