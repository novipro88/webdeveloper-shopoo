import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function Farmers() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Farmers"
        href="/dashboard/farmers/new"
        title="Add Farmer"
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
