import React from "react";
import { X } from "lucide-react";

export default function FormHeader({ title }) {
  return (
    <div className="flex items-center justify-between py-6 px-12 bg-white dark:bg-slate-700 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button>
        <X />
      </button>
    </div>
  );
}
