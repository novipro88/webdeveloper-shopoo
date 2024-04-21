import React from "react";
import Sidebar from "@/components/backoffice/Sidebar";
import Navbar from "@/components/backoffice/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      <div className="lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* Header */}
        <Navbar />
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16">
          {children}
        </main>
        {/* Main */}
      </div>
      {/* Main Body */}
    </div>
  );
}
