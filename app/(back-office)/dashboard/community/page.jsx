import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Community Trainings"
        href="/dashboard/community/new"
        title="Add Training"
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
